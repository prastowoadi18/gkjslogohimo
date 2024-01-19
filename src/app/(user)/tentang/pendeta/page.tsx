import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ContentPendeta } from "@/app/(user)/_components";
import { TitleSection } from "@/components/TitleSection";
import { Metadata } from "next";
import { METADATA, TENTANG_GEREJA } from "@/configs";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
];

export const metadata: Metadata = {
  title: "Profile Pendeta",
  description: TENTANG_GEREJA.profile_pendeta,
  openGraph: {
    images: `${process.env.DOMAIN}${TENTANG_GEREJA.img_url_pendeta}`,
    url: `${process.env.DOMAIN}/tentang/pendeta`,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "article",
    authors: METADATA.creator,
  },
  keywords: TENTANG_GEREJA.title,
  alternates: {
    canonical: `${process.env.DOMAIN}/tentang/pendeta`,
  },
};

export default function Page() {
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Profile Pendeta"
        title="Profile Pendeta GKJ Slogohimo"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <div className="pb-20 pt-10">
        <ContentPendeta />
      </div>
    </MaxWidthWrapper>
  );
}
