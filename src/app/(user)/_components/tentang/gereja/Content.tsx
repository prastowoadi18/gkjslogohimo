"use client";

import Link from "next/link";

import Image from "next/image";

import { TENTANG_GEREJA } from "@/configs";
import { Button } from "@/components/ui/button";

import { useCardGaleri } from "@/hooks/use-card-galeri";

export default function Content() {
  const galeriModal = useCardGaleri();

  return (
    <div className="grid grid-cols-1 gap-5 pb-20 pt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-5 lg:pt-16">
      {TENTANG_GEREJA.pepanthan.map((item) => (
        <div className="rounded-b-md shadow-md dark:bg-zinc-900" key={item.id}>
          <div className="relative h-60 overflow-hidden rounded-t-md">
            <Image
              className="object-cover"
              src={item.imgUrl}
              alt={`img-${item.title}`}
              fill
              sizes="(min-width: 1360px) 265px, (min-width: 1040px) 20vw, (min-width: 780px) calc(50vw - 96px), calc(100vw - 20px)"
            />
            <div className="absolute right-2 top-2">
              <p className="rounded-md bg-gradient-to-r from-black to-black/50 px-2 py-1 text-sm font-semibold text-white">
                {item.type}
              </p>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="text-lg font-bold">{item.title}</div>
            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                aria-label={item.description}
              >
                <p className="mt-3 text-base text-muted-foreground hover:text-blue-400 hover:underline">
                  {item.description}
                </p>
              </Link>
            ) : (
              <p className="mt-3 text-base text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
          <div className="px-6 pb-5 pt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                galeriModal.onOpen(
                  item.galeri.map((e, idx) => {
                    return {
                      id: idx + 1,
                      title: e,
                    };
                  }),
                  1,
                )
              }
            >
              Lihat gambar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
