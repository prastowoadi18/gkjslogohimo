"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useCardModal } from "@/hooks/use-card-modal";
import { TENTANG_GEREJA } from "@/configs";

export default function Content() {
  const { onOpen } = useCardModal();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative aspect-square overflow-hidden rounded-md shadow-md">
        <Image
          className="object-cover"
          src={TENTANG_GEREJA.img_url_pendeta}
          alt={`img-${TENTANG_GEREJA.pendeta_aktif}`}
          fill
          sizes="(min-width: 1360px) 560px, (min-width: 780px) calc(44.64vw - 38px), calc(50vw - 10px)"
        />
      </div>
      <div className="mt-10 flex-1 self-center px-3 md:px-5 lg:col-span-2 lg:px-16">
        <h1 className="mb-3 text-2xl font-semibold">
          {TENTANG_GEREJA.pendeta_aktif}
        </h1>
        <p className="line-clamp-7 text-justify text-base text-muted-foreground md:line-clamp-5 md:px-0">
          {TENTANG_GEREJA.profile_pendeta}
        </p>
        <Button className="mt-10" size="sm" onClick={onOpen}>
          Selengkapnya
        </Button>
      </div>
    </div>
  );
}
