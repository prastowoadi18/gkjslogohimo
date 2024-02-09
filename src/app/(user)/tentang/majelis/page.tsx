import { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";
import { ContentMajelis } from "../../_components";
import { MajelisFilterValues } from "@/lib/validation";

const link = [
  {
    title: "Beranda",
    href: "/",
  },
];

interface PageProps {
  searchParams: {
    page?: string;
    wilayah?: string;
  };
}

function getTitle({ wilayah }: MajelisFilterValues) {
  const titleSuffix = wilayah ? `${wilayah}` : "";

  return `Majelis ${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { wilayah },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      wilayah,
    })}`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
    keywords:
      "Slogohimo, Jatisrono, Gereja, Jatiroto, Joho, Kristen, Majelis Gereja",
    alternates: {
      canonical: `${process.env.DOMAIN}/tentang/majelis`,
    },
  };
}

export default async function Page({
  searchParams: { page, wilayah },
}: PageProps) {
  const filterValues: MajelisFilterValues = {
    wilayah,
  };
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Majelis"
        title="Majelis Aktif GKJ Slogohimo"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <ContentMajelis
        filterValues={filterValues}
        page={page ? parseInt(page) : undefined}
      />
    </MaxWidthWrapper>
  );
}
