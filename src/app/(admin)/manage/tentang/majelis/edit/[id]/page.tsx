import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { FormEdit } from "../_components/formEdit";

const ManageMajelisEditPage = ({ params }: { params: { id: string } }) => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <Link href="/manage/tentang" className="hover:text-blue-500">
          Manage Tentang
        </Link>
        <span className="">/</span>
        <Link href="/manage/tentang/majelis" className="hover:text-blue-500">
          Manage Majelis
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Edit Majelis</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Edit Majelis
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>

      <div className="pt-5 pb-10 w-3/4 md:2/3 lg:w-1/3">
        <FormEdit />
      </div>
    </MaxWidthWrapper>
  );
};

export default ManageMajelisEditPage;
