"use client";

import Link from "next/link";

import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

import { TENTANG_GEREJA } from "@/configs";

export default function TentangGereja() {
  return (
    <section className="mb-10 lg:mb-24">
      <MaxWidthWrapper className="py-10">
        <div className="flex items-center justify-center">
          <Image
            className="hidden h-96 w-full rounded-md md:block"
            src={TENTANG_GEREJA.img_url}
            alt={`img-${TENTANG_GEREJA.title}`}
            width={500}
            height={500}
          />
          <div className="flex-1 md:px-5 lg:px-16">
            <h1 className="mb-5 text-2xl font-semibold">
              Tentang GKJ Slogohimo
            </h1>
            <p className="line-clamp-5 text-base text-muted-foreground">
              {TENTANG_GEREJA.sejarah_gereja}
            </p>
            <Link
              href="/tentang/sejarah"
              className={buttonVariants({ size: "sm", className: "mt-10" })}
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
