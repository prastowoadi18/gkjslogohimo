"use client";

import { useMemo } from "react";

import Image from "@/components/Image";
import { Button } from "@/components/ui/button";

import { useCardModal } from "@/hooks/use-card-modal";
import { TENTANG_GEREJA } from "@/configs";

export default function Content() {
  const { onOpen } = useCardModal();

  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Image
          className="h-[27rem] w-full rounded-md"
          src={TENTANG_GEREJA.img_url_pendeta}
          alt={`img-${TENTANG_GEREJA.pendeta_aktif}`}
          width={500}
          height={500}
        />
        <div className="mt-10 flex-1 md:px-5 lg:px-16">
          <h1 className="mb-3 text-2xl font-semibold">
            {TENTANG_GEREJA.pendeta_aktif}
          </h1>
          <p className="line-clamp-7 px-2 text-justify text-base text-muted-foreground md:line-clamp-5 md:px-0">
            {TENTANG_GEREJA.profile_pendeta}
          </p>
          <Button className="mt-10" size="sm" onClick={onOpen}>
            Selengkapnya
          </Button>
        </div>
      </div>
    );
  }, [onOpen]);
  return renderMain;
}
