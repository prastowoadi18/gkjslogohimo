import { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Content, Galeri, HeroSejarah } from "@/app/(user)/_components";

import { METADATA, TENTANG_GEREJA } from "@/configs";

export const metadata: Metadata = {
  title: "Sejarah Gereja",
  description: TENTANG_GEREJA.sejarah_gereja,
  openGraph: {
    images: `${process.env.DOMAIN}${TENTANG_GEREJA.img_url}`,
    url: `${process.env.DOMAIN}/tentang/sejarah`,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "article",
    authors: METADATA.creator,
  },
  keywords: TENTANG_GEREJA.title,
  alternates: {
    canonical: `${process.env.DOMAIN}/tentang/sejarah`,
  },
};

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className="py-5">
        <HeroSejarah />
      </div>
      <div className="pb-20 pt-10">
        <Content />
        <Galeri />
      </div>
    </MaxWidthWrapper>
  );
}
