import Link from "next/link";

import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

import { relativeDate } from "@/lib/utils";

import { Berita } from "@prisma/client";

interface BeritaTerbaruProps {
  berita: Berita[];
}

export default function BeritaTerbaru({ berita }: BeritaTerbaruProps) {
  return (
    <section
      className="mb-10 border-t border-gray-200 bg-slate-50 lg:mb-24"
      id="berita_terbaru"
      data-aos="fade-left"
    >
      <MaxWidthWrapper className="py-20">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="">
            <h2 className="mb-1 text-2xl font-semibold">Berita Terbaru</h2>
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
            <div className="rounded-b-md bg-white" key={item.id}>
              <div
                className="group relative h-64 overflow-hidden rounded-t-md bg-gray-200"
                key={item.id}
              >
                <Image
                  src={item.imageUrl!}
                  alt={`img-${item.title}`}
                  fill
                  sizes="(min-width: 1360px) 347px, (min-width: 1040px) 26.67vw, (min-width: 780px) calc(50vw - 100px), calc(100vw - 20px)"
                  className="object-cover group-hover:opacity-75"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="line-clamp-1 text-lg font-bold md:text-xl">
                  {item.title}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    dibuat {relativeDate(new Date(item.createdAt))}
                  </p>
                </div>
                <div className="line-clamp-4 text-base text-muted-foreground">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description!,
                    }}
                  />
                </div>
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
}
