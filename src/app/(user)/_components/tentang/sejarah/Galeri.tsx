import Image from "@/components/Image";

import { TENTANG_GEREJA } from "@/configs";

export default function Galeri() {
  return (
    <div className="grid grid-cols-1 gap-5 pt-14 md:grid-cols-3">
      {TENTANG_GEREJA.galeri.map((item, idx) => (
        <div className="max-w-sm overflow-hidden rounded shadow-lg" key={idx}>
          <div className="bg-black/20">
            <Image
              className="w-full mix-blend-multiply"
              src={item}
              alt={`img-${idx + 1}`}
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
