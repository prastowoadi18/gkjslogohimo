import Link from "next/link";
import { useMemo } from "react";

import Image from "@/components/Image";

import { TENTANG_GEREJA } from "@/configs";

export default function Content() {
  const renderMain = useMemo(() => {
    return (
      <div className="grid grid-cols-1 gap-5 pb-20 pt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-5 lg:pt-16">
        {TENTANG_GEREJA.pepanthan.map((item) => (
          <div
            className="max-w-sm overflow-hidden rounded shadow-lg"
            key={item.id}
          >
            <div className="relative bg-black/20">
              <Image
                className="w-full"
                src={item.imgUrl}
                alt={`img-${item.title}`}
                width={500}
                height={500}
              />
              <div className="absolute right-2 top-2">
                <p className="rounded-md bg-gradient-to-r from-black to-black/50 px-2 py-1 text-sm font-semibold text-white">
                  {item.type}
                </p>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="text-lg font-bold">{item.title}</div>
              <p className="mt-3 line-clamp-4 text-base text-muted-foreground">
                {item.description}
              </p>
            </div>
            <div className="px-6 pb-5 pt-4">
              <Link
                href={`/tentang/gereja/${item.slug}`}
                className="mt-5 cursor-pointer text-base font-semibold text-blue-600 hover:text-blue-400"
              >
                baca lebih lanjut...
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }, []);
  return renderMain;
}
