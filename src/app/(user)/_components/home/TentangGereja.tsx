"use client";

import Link from "next/link";

import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

import { TENTANG_GEREJA } from "@/configs";

export default function TentangGereja() {
  return (
    <section className="mb-10 lg:mb-24">
      <MaxWidthWrapper className="py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src={TENTANG_GEREJA.img_url}
              alt={`img-${TENTANG_GEREJA.title}`}
              fill={true}
              sizes="(min-width: 1360px) 550px, (min-width: 780px) calc(44.64vw - 48px), calc(100vw - 20px)"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="self-center px-5 md:px-0">
            <h1 className="mb-5 text-2xl font-semibold">
              Tentang GKJ Slogohimo
            </h1>
            <p className="line-clamp-6 text-justify text-base text-muted-foreground md:line-clamp-4">
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
