import { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FormEdit from "../_components/FormEdit";
import { TitleSection } from "@/components/TitleSection";

import prisma from "@/lib/prisma";

const link = [
  {
    title: "Beranda Admin",
    href: "/admin",
  },
  {
    title: "Manage",
    href: "/admin/manage",
  },
  {
    title: "Manage Majelis",
    href: "/admin/manage/majelis",
  },
];

interface PageProps {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: "Manage Edit Majelis",
  alternates: {
    canonical: `${process.env.DOMAIN}/admin/manage/majelis/edit`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page({ params: { slug } }: PageProps) {
  const majelis = await prisma.majelis.findUnique({
    where: { slug },
  });

  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Edit"
        title="Edit Majelis"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <div className="md:2/3 w-full pb-10 pt-5">
        <FormEdit majelis={majelis!} />
      </div>
    </MaxWidthWrapper>
  );
}
