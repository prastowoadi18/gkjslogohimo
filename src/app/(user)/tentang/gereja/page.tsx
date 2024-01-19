import { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";

import { ContentGereja } from "@/app/(user)/_components";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
];

export const metadata: Metadata = {
  title: "Gereja",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
  keywords: "Slogohimo, Jatisrono, Gereja, Jatiroto, Joho, Kristen, Jemaat",
  alternates: {
    canonical: `${process.env.DOMAIN}/tentang/gereja`,
  },
};

export default function Page() {
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Gereja GKJ Slogohimo"
        title="Gereja Induk dan Pepanthan GKJ Slogohimo"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <ContentGereja />
    </MaxWidthWrapper>
  );
}
