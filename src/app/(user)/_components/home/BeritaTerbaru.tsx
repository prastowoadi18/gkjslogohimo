import { useMemo } from "react";
import Link from "next/link";

import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

import { relativeDate } from "@/lib/utils";

import { Berita } from "@prisma/client";

interface BeritaTerbaruProps {
  berita: Berita[];
}

export default function BeritaTerbaru({ berita }: BeritaTerbaruProps) {
  const renderMain = useMemo(() => {
    return (
      <section
        className="mb-10 border-t border-gray-200 bg-slate-50 lg:mb-24"
        id="berita_terbaru"
      >
        <MaxWidthWrapper className="py-20">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
            <div className="">
              <h1 className="mb-1 text-2xl font-semibold">Berita Terbaru</h1>
              <p className="text-base text-muted-foreground md:w-4/5 lg:w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                sed similique. Quos optio delectus autem neque omnis velit
                eligendi nesciunt?
              </p>
            </div>
            <div className="">
              <Link
                href="/berita"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Lihat semua berita
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 pt-20 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="text-2xl font-bold">{item.title}</div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      dibuat {relativeDate(new Date(item.createdAt))}
                    </p>
                  </div>
                  <p className="line-clamp-4 text-base text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="px-6 pb-5 pt-4">
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
        </MaxWidthWrapper>
      </section>
    );
  }, [berita]);
  return renderMain;
}
