"use client";

import Image from "next/image";

import { TENTANG_GEREJA } from "@/configs";
import { useCardGaleri } from "@/hooks/use-card-galeri";

export default function Galeri() {
  const galeriModal = useCardGaleri();
  return (
    <div className="grid grid-cols-3 gap-4 pt-14 md:grid-cols-6 lg:gap-5">
      {TENTANG_GEREJA.galeri.map((item, idx) => (
        <div
          className="relative h-40 cursor-pointer overflow-hidden rounded shadow-lg transition-all duration-300 hover:scale-105 md:h-64"
          key={idx}
          onClick={() =>
            galeriModal.onOpen(
              TENTANG_GEREJA.galeri.map((e, idx) => {
                return {
                  id: idx + 1,
                  title: e,
                };
              }),
              idx + 1,
            )
          }
        >
          <Image
            className="object-cover"
            src={item}
            alt={`img-${idx + 1}`}
            fill
            sizes="(min-width: 1340px) 170px, (min-width: 780px) calc(14.81vw - 26px), calc(33.26vw - 17px)"
          />
        </div>
      ))}
    </div>
  );
}
