import { Metadata } from "next";

import {
  BeritaTerbaru,
  Hero,
  Info,
  JadwalIbadah,
  TentangGereja,
} from "@/app/(user)/_components";

import prisma from "@/lib/prisma";
import addBlurredDataUrls from "@/lib/getBase64";

export function generateMetadata(): Metadata {
  return {
    alternates: {
      canonical: process.env.DOMAIN,
    },
  };
}

export default async function Page() {
  const berita = await prisma.berita.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  const beritaWithImgBlur = await addBlurredDataUrls(berita);

  return (
    <div className="">
      <Hero />
      <Info />
      <JadwalIbadah />
      <BeritaTerbaru berita={beritaWithImgBlur} />
      <TentangGereja />
    </div>
  );
}
