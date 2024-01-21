import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TitleSection } from "@/components/TitleSection";
import { Settings } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const link = [
  {
    title: "Beranda",
    href: "/admin",
  },
];

export const metadata: Metadata = {
  title: "Manage",
  alternates: {
    canonical: `${process.env.DOMAIN}/admin/manage`,
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
        current_page="Manage"
        title="Manage Content"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?"
        link={link}
      />
      <div className="flex w-full flex-col space-y-5 pb-20 pt-10 md:w-1/2 lg:w-1/3">
        <Link
          aria-label="manage-bertia"
          href="/admin/manage/berita"
          className="group transition-all duration-300 hover:text-blue-400"
        >
          <div className="group flex cursor-pointer items-center border-b py-3">
            <div className="flex-none px-3">
              <Settings className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-black group-hover:text-black">
                Berita
              </h1>
              <p className="text-base italic">Manage Berita</p>
            </div>
          </div>
        </Link>
        <Link
          aria-label="manage-majelis"
          href="/admin/manage/majelis"
          className="group transition-all duration-300 hover:text-blue-400"
        >
          <div className="group flex cursor-pointer items-center border-b py-3">
            <div className="flex-none px-3">
              <Settings className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-black group-hover:text-black">
                Majelis
              </h1>
              <p className="text-base italic">Manage Majelis</p>
            </div>
          </div>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
