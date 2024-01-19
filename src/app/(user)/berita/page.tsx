import { Metadata } from "next";

import prisma from "@/lib/prisma";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";
import { ContentBerita } from "../_components";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
];

export const metadata: Metadata = {
  title: "Berita",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
  keywords: "Slogohimo, Jatisrono, Gereja, Jatiroto, Joho, Kristen, Jemaat",
  alternates: {
    canonical: `${process.env.DOMAIN}/berita`,
  },
};

export default async function Page() {
  const berita = await prisma.berita.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Berita"
        title="Berita GKJ Slogohimo"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <ContentBerita berita={berita} />
    </MaxWidthWrapper>
  );
}
