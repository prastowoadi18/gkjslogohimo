import Link from "next/link";

import { format } from "date-fns";
import { id } from "date-fns/locale";

import { Berita } from "@prisma/client";

import Image from "@/components/Image";

interface ContentProps {
  berita: Berita[];
}

export default function Content({ berita }: ContentProps) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-5 pb-20 pt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-14 lg:pt-16">
        {berita.map((item) => (
          <div
            className="max-w-sm overflow-hidden rounded shadow-lg"
            key={item.id}
          >
            <Image
              className="w-full"
              src={item.imageUrl!}
              alt={`img-${item.title}`}
              width={500}
              height={500}
            />

            <div className="px-6 py-4">
              <h3 className="line-clamp-1 text-lg font-bold md:text-xl">
                {item.title}
              </h3>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {format(new Date(item.createdAt), "iiii, dd MMMM yyyy", {
                    locale: id,
                  })}
                </p>
              </div>
              <div
                className="mt-3 line-clamp-4 text-base text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: item.description! }}
              />
            </div>
            <div className="px-6 pb-5 pt-2">
              <Link
                href={`/berita/${item.slug}`}
                className="mt-5 cursor-pointer text-base font-semibold text-blue-600 hover:text-blue-400"
              >
                baca lebih lanjut...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
