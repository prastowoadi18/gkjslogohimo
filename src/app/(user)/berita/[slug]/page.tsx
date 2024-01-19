import React, { cache } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { format } from "date-fns";
import { id } from "date-fns/locale";

import prisma from "@/lib/prisma";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";
import { DetailBerita } from "../../_components";

import { METADATA } from "@/configs";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Berita",
    href: "/berita",
  },
];

interface PageProps {
  params: { slug: string };
}

const getBerita = cache(async (slug: string) => {
  const berita = await prisma.berita.findUnique({
    where: { slug },
  });

  if (!berita) notFound();

  return berita;
});

export async function generateStaticParams() {
  const berita = await prisma.berita.findMany({
    select: { slug: true },
  });
  return berita.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const berita = await getBerita(slug);
  return {
    title: berita.title,
    description: berita.description,
    openGraph: {
      images: `${process.env.DOMAIN}${berita.imageUrl}`,
      url: `${process.env.DOMAIN}/berita/${slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: berita.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/berita/${slug}`,
    },
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const berita = await getBerita(slug);

  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Detail Berita"
        title={berita.title}
        desc={`dibuat pada: ${format(new Date(berita.createdAt), "iiii, dd MMMM yyyy", { locale: id })}`}
        link={link}
      />
      <DetailBerita berita={berita} />
    </MaxWidthWrapper>
  );
}
