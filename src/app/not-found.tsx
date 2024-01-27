import Image from "next/image";
import Link from "next/link";

import { Home } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
  keywords: "Slogohimo, Jatisrono, Gereja, Jatiroto, Joho, Kristen, Jemaat",
  alternates: {
    canonical: `${process.env.DOMAIN}`,
  },
};

export default function NotFound() {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 content-center py-10">
        <div className="relative h-[480px] overflow-hidden">
          <Image
            src="/assets/404.svg"
            fill
            sizes="100vw"
            alt="4042page"
            priority
          />
        </div>
        <div className="mx-auto mt-2 md:mt-5">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
