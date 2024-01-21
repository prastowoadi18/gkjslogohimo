import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";

import { DataTable, columns } from "./_component";

import prisma from "@/lib/prisma";
import { Metadata } from "next";

const link = [
  {
    title: "Beranda",
    href: "/admin",
  },
  {
    title: "Manage",
    href: "/admin/manage",
  },
];

export const metadata: Metadata = {
  title: "Manage Majelis",
  alternates: {
    canonical: `${process.env.DOMAIN}/admin/manage/majelis`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page() {
  const majelis = await prisma.majelis.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Majelis"
        title="Manage Majelis"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <div className="w-full pb-20 pt-10">
        <DataTable columns={columns} data={majelis} />
      </div>
    </MaxWidthWrapper>
  );
}
