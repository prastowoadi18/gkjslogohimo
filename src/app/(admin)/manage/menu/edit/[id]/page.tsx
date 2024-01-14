import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { FormEdit } from "../_components/formEdit";

const ManageBeritaEditPage = ({ params }: { params: { id: string } }) => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <Link href="/manage/berita" className="hover:text-blue-500">
          Manage Berita
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Edit Berita</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Edit Berita
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>

      <div className="pt-5 pb-10 w-full md:2/3">
        <FormEdit />
      </div>
    </MaxWidthWrapper>
  );
};

export default ManageBeritaEditPage;
