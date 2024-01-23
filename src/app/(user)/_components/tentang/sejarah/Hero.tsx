import { format } from "date-fns";
import { id } from "date-fns/locale";

import Image from "next/image";

import { TENTANG_GEREJA } from "@/configs";

export default function Hero() {
  return (
    <div className="relative h-72 bg-black/20">
      <Image
        className="rounded-md object-cover md:h-60 md:object-[center_-2rem] lg:h-72 lg:object-[center_-7rem]"
        src={TENTANG_GEREJA.img_url}
        alt={`img-${TENTANG_GEREJA.title}`}
        fill
        sizes="(min-width: 1360px) 1120px, (min-width: 780px) calc(89.29vw - 76px), calc(100vw - 20px)"
      />

      <div className="absolute bottom-5 left-4 rounded-md">
        <h1 className="text-xl font-bold uppercase text-white lg:text-2xl">
          Sejarah Gereja
        </h1>
        <p className="text-sm italic text-white">
          artikel dibuat pada{" "}
          {format(new Date(TENTANG_GEREJA.created_date), "iiii, dd MMMM yyyy", {
            locale: id,
          })}
        </p>
      </div>
    </div>
  );
}
