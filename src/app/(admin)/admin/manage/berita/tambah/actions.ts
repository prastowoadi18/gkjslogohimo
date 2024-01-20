"use server";

import { toSlug } from "@/lib/utils";
import { createBeritaSchema } from "@/lib/validation";
import { nanoid } from "nanoid";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

export async function createBerita(formData: FormData) {
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

  redirect("/admin/manage/berita/tambah");
}

export async function deleteImageBerita(value: string) {
  const newUrl = value.substring(value.lastIndexOf("/") + 1);
  const utapi = new UTApi();
  try {
    const data = await utapi.deleteFiles(newUrl);
    return data;
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
