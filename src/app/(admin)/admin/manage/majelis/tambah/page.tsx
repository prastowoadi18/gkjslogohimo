import { Metadata } from "next";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FormAdd from "./_components/FormAdd";
import { TitleSection } from "@/components/TitleSection";

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

export const metadata: Metadata = {
  title: "Manage Tambah Majelis",
  alternates: {
    canonical: `${process.env.DOMAIN}/admin/manage/majelis/tambah`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Tambah"
        title="Tambah Majelis"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <div className="md:2/3 w-full pb-10 pt-5">
        <FormAdd />
      </div>
    </MaxWidthWrapper>
  );
}
