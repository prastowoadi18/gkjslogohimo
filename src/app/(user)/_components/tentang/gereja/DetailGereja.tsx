"use client";

import { useCardGaleri } from "@/hooks/use-card-galeri";
import Image from "next/image";

export interface GerejaType {
  id: number;
  title: string;
  type: string;
  slug: string;
  short_desc: string;
  description: string;
  imgUrl: string;
  galeri: string[];
}

interface DetailGerejaProps {
  gereja: GerejaType;
}

export default function DetailGereja({ gereja }: DetailGerejaProps) {
  const galeriModal = useCardGaleri();

  return (
    <div className="px-3 md:px-0">
      <div className="pb-20 pt-10 lg:pt-16">
        <p className="text-justify text-muted-foreground">
          {gereja.description}
        </p>

        <div className="grid grid-cols-2 gap-5 pb-20 pt-16 md:grid-cols-4">
          {gereja.galeri.map((e, idx) => (
            <div
              className="relative aspect-square cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:brightness-110"
              key={idx}
              onClick={() =>
                galeriModal.onOpen(
                  gereja.galeri.map((e, idx) => {
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
                src={e}
                alt={`img-${idx + 1}`}
                fill
                sizes="(min-width: 1360px) 360px, (min-width: 780px) calc(29.82vw - 40px), calc(100vw - 44px)"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
