"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Img, useCardGaleri } from "@/hooks/use-card-galeri";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export const CardGaleriModal = () => {
  const [idState, setIdState] = useState<number | undefined>(0);

  const imgSelected = useCardGaleri((state) => state.imgSelected);
  const data: Img[] | undefined = useCardGaleri((state) => state.data);
  const isOpen = useCardGaleri((state) => state.isOpen);
  const onClose = useCardGaleri((state) => state.onClose);

  useEffect(() => {
    setIdState(imgSelected);
  }, [imgSelected]);

  const img = data?.find((e) => e.id === idState);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        {imgSelected && data ? (
          <div className="grid grid-cols-1 pt-5">
            <div className="relative h-64 overflow-hidden rounded-md bg-black/40 md:h-96">
              <Image
                src={img ? img.title : ""}
                alt="galeri"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
              />
            </div>
            <div
              className={cn("mt-5 grid", {
                "grid-cols-3 md:grid-cols-3": data.length === 3,
                "grid-cols-4 md:grid-cols-4": data.length === 4,
                "grid-cols-3 md:grid-cols-6": data.length === 6,
              })}
            >
              {data.map((e: Img) => (
                <div
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-md ",
                    {
                      "border-2 border-black dark:border-white":
                        idState === e.id,
                    },
                    data.length === 3 ? "h-32" : "aspect-square",
                  )}
                  key={e.id}
                  onClick={() => setIdState(e.id)}
                >
                  <Image
                    src={e.title}
                    alt="galeri"
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    className="rounded-md object-cover p-2 transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 pt-5">
            <div className="relative h-64 overflow-hidden rounded-md bg-black/20 md:h-96"></div>
            <div className="mt-5 grid grid-cols-3 gap-2 md:grid-cols-4">
              {Array(3)
                .fill(0)
                .map((e, idx) => (
                  <div
                    className="relative aspect-square overflow-hidden rounded-md bg-black/20"
                    key={idx}
                  />
                ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
