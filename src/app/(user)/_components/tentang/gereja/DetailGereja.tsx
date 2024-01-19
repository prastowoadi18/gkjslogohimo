import Image from "@/components/Image";
import React, { useMemo } from "react";

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
  const renderMain = useMemo(() => {
    return (
      <div className="">
        <div className="pb-20 pt-10 lg:pt-16">
          <p className="text-justify text-muted-foreground">
            {gereja.description}
          </p>

          <div className="grid grid-cols-1 gap-5 pb-20 pt-16 md:grid-cols-3">
            {gereja.galeri.map((e, idx) => (
              <div
                className="max-w-sm overflow-hidden rounded shadow-lg"
                key={idx}
              >
                <div className="bg-black/20">
                  <Image
                    className="w-full mix-blend-multiply"
                    src={e}
                    alt={`img-${idx + 1}`}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }, [gereja.description, gereja.galeri]);
  return renderMain;
}
