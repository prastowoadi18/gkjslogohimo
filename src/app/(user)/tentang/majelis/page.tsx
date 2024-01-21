import { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";
import { ContentMajelis } from "../../_components";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
];

export const metadata: Metadata = {
  title: "Majelis",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
  keywords:
    "Slogohimo, Jatisrono, Gereja, Jatiroto, Joho, Kristen, Majelis Gereja",
  alternates: {
    canonical: `${process.env.DOMAIN}/tentang/majelis`,
  },
};

const TentangMajelistPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Majelis"
        title="Majelis Aktif GKJ Slogohimo"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <ContentMajelis />
    </MaxWidthWrapper>
  );
};

export default TentangMajelistPage;