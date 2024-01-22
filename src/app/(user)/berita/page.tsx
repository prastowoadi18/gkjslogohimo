import { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";
import { ContentBerita } from "../_components";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
];

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "Berita",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
  keywords: "Slogohimo, Jatisrono, Gereja, Jatiroto, Joho, Kristen, Jemaat",
  alternates: {
    canonical: `${process.env.DOMAIN}/berita`,
  },
};

export default async function Page({ searchParams: { page } }: PageProps) {
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Berita"
        title="Berita GKJ Slogohimo"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <ContentBerita page={page ? parseInt(page) : undefined} />
    </MaxWidthWrapper>
  );
}
