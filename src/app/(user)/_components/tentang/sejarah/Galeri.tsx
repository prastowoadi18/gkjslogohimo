import Image from "next/image";

import { TENTANG_GEREJA } from "@/configs";

export default function Galeri() {
  return (
    <div className="grid grid-cols-2 gap-2 pt-14 md:grid-cols-3 lg:gap-5">
      {TENTANG_GEREJA.galeri.map((item, idx) => (
        <div
          className="relative aspect-square overflow-hidden rounded shadow-lg"
          key={idx}
        >
          <Image
            className="object-cover"
            src={item}
            alt={`img-${idx + 1}`}
            fill
            sizes="(min-width: 1360px) 360px, (min-width: 780px) calc(29.82vw - 40px), calc(100vw - 20px)"
          />
        </div>
      ))}
    </div>
  );
}
