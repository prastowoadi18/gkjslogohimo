import React, { cache } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { DetailGereja } from "@/app/(user)/_components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";

import { METADATA, TENTANG_GEREJA } from "@/configs";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Tentang Gereja",
    href: "/tentang/gereja",
  },
];

interface PageProps {
  params: { slug: string };
}

const getGereja = cache((slug: string) => {
  const gereja = TENTANG_GEREJA.pepanthan.find((e) => e.slug === slug);

  if (!gereja) notFound();

  return gereja;
});

export function generateStaticParams() {
  return TENTANG_GEREJA.pepanthan.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const gereja = getGereja(slug);
  return {
    title: gereja.title,
    description: gereja.description,
    openGraph: {
      images: `${process.env.DOMAIN}${gereja.imgUrl}`,
      url: `${process.env.DOMAIN}/gereja/${slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: gereja.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/gereja/${slug}`,
    },
  };
}

export default function Page({ params: { slug } }: PageProps) {
  const gereja = getGereja(slug);

  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page={`Gereja ${gereja.title}`}
        title={`Detail Gereja ${gereja.title}`}
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <DetailGereja gereja={gereja} />
    </MaxWidthWrapper>
  );
}
