import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";
import { ContentJemaat } from "../../_components";
import { Metadata } from "next";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
];

export const metadata: Metadata = {
  title: "Jemaat Gereja",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
  keywords: "Slogohimo, Jatisrono, Gereja, Jatiroto, Joho, Kristen, Jemaat",
  alternates: {
    canonical: `${process.env.DOMAIN}/tentang/jemaat`,
  },
};

export default function Page() {
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Jemaat GKJ Slogohimo"
        title="Detail Jemaat GKJ Slogohimo"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <ContentJemaat />
    </MaxWidthWrapper>
  );
}
