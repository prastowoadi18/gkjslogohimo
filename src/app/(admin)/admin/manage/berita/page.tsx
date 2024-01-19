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
  title: "Manage Berita",
  alternates: {
    canonical: `${process.env.DOMAIN}/admin/manage/berita`,
  },
};

export default async function Page() {
  const berita = await prisma.berita.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Berita"
        title="Manage Berita"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <div className="w-full pb-20 pt-10">
        <DataTable columns={columns} data={berita} />
      </div>
    </MaxWidthWrapper>
  );
}
