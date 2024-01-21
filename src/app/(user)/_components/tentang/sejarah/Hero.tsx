import { format } from "date-fns";
import { id } from "date-fns/locale";

import Image from "@/components/Image";

import { TENTANG_GEREJA } from "@/configs";

export default function Hero() {
  return (
    <div className="relative bg-black/20">
      <Image
        className="h-52 w-full rounded-md object-cover md:h-60 md:object-[center_-2rem] lg:h-72 lg:object-[center_-7rem]"
        src={TENTANG_GEREJA.img_url}
        alt={`img-${TENTANG_GEREJA.title}`}
        width={800}
        height={700}
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
