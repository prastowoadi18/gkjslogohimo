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
    title: "Manage Berita",
    href: "/admin/manage/berita",
  },
];

export const metadata: Metadata = {
  title: "Manage Tambah Berita",
  alternates: {
    canonical: `${process.env.DOMAIN}/admin/manage/tambah/berita`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

const ManageBeritaTambahPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <TitleSection
        current_page="Tambah"
        title="Tambah Berita"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <div className="md:2/3 w-full pb-10 pt-5">
        <FormAdd />
      </div>
    </MaxWidthWrapper>
  );
};

export default ManageBeritaTambahPage;
