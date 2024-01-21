"use server";

import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { nanoid } from "nanoid";
import { currentUser } from "@clerk/nextjs";

import { toSlug } from "@/lib/utils";
import { createBeritaSchema, editBeritaSchema } from "@/lib/validation";
import prisma from "@/lib/prisma";

export async function createBerita(formData: FormData) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("Not authorized");
    }

    const values = Object.fromEntries(formData.entries());
    const { title, description, imageUrl } = createBeritaSchema.parse(values);

    const slug = `${toSlug(title)}-${nanoid(10)}`;

    await prisma.berita.create({
      data: {
        slug,
        title: title.trim(),
        description: description!.replace(/ style="[^"]*"/g, ""),
        imageUrl,
      },
    });
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }

  revalidatePath("/", "layout");
  redirect("/admin/manage/berita/tambah");
}

export async function editBerita(formData: FormData) {
  try {
    const user = await currentUser();

    const values = Object.fromEntries(formData.entries());
    const { id, title, description, imageUrl } = editBeritaSchema.parse(values);

    if (!user) {
      throw new Error("Not authorized");
    }

    const slug = `${toSlug(title)}-${nanoid(10)}`;

    await prisma.berita.update({
      where: { id: Number(id) },
      data: {
        slug,
        title: title.trim(),
        description: description!.replace(/ style="[^"]*"/g, ""),
        imageUrl,
      },
    });
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }

  revalidatePath("/", "layout");
  redirect(`/admin/manage/berita`);
}

export async function deleteBerita(id: number) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("Not authorized");
    }

    const berita = await prisma.berita.findUnique({
      where: { id },
    });

    if (berita?.imageUrl) {
      await deleteImageBerita(berita.imageUrl);
    }

    await prisma.berita.delete({
      where: { id },
    });
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
  revalidatePath("/", "layout");
  redirect(`/admin/manage/berita`);
}

export async function deleteImageBerita(value: string) {
  try {
    const newUrl = value.substring(value.lastIndexOf("/") + 1);
    const utapi = new UTApi();
    const data = await utapi.deleteFiles(newUrl);
    return data;
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
