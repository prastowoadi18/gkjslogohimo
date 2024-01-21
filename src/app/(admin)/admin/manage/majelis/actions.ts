"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { nanoid } from "nanoid";
import { currentUser } from "@clerk/nextjs";

import { toSlug } from "@/lib/utils";
import { createMajelisSchema, editMajelisSchema } from "@/lib/validation";
import prisma from "@/lib/prisma";

export async function createMajelis(formData: FormData) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("Not authorized");
    }

    const values = Object.fromEntries(formData.entries());
    const { nama, bidang, imageUrl } = createMajelisSchema.parse(values);

    const slug = `${toSlug(nama)}-${nanoid(10)}`;

    await prisma.majelis.create({
      data: {
        slug,
        nama: nama.trim(),
        bidang,
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
  redirect("/admin/manage/majelis/tambah");
}

export async function editMajelis(formData: FormData) {
  try {
    const user = await currentUser();

    const values = Object.fromEntries(formData.entries());
    const { id, bidang, imageUrl, nama } = editMajelisSchema.parse(values);

    if (!user) {
      throw new Error("Not authorized");
    }

    const slug = `${toSlug(nama)}-${nanoid(10)}`;

    await prisma.majelis.update({
      where: { id },
      data: {
        slug,
        nama: nama.trim(),
        bidang,
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
  redirect(`/admin/manage/majelis`);
}

export async function deleteMajelis(id: string) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("Not authorized");
    }

    await prisma.majelis.delete({
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
  redirect(`/admin/manage/majelis`);
}
