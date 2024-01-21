import Link from "next/link";

import { format } from "date-fns";
import { id } from "date-fns/locale";

import prisma from "@/lib/prisma";

import Image from "@/components/Image";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ContentProps {
  page?: number;
}

export default async function Content({ page = 1 }: ContentProps) {
  const beritaPerPage = 6;
  const skip = (page - 1) * beritaPerPage;

  const beritaPromise = prisma.berita.findMany({
    orderBy: { createdAt: "desc" },
    take: beritaPerPage,
    skip,
  });

  const countPromise = prisma.berita.count();

  const [berita, totalResults] = await Promise.all([
    beritaPromise,
    countPromise,
  ]);

  return (
    <div className="flex flex-col justify-center">
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

      {berita.length === 0 && (
        <div className="flex h-[320px] items-center justify-center">
          <p className="text-lg font-semibold text-muted-foreground underline">
            Tidak ada berita tersedia.
          </p>
        </div>
      )}

      {berita.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / beritaPerPage)}
        />
      )}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      page: page.toString(),
    });

    return `/berita?${searchParams.toString()}`;
  }
  return (
    <div className="flex justify-between pb-10">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible",
        )}
      >
        <ArrowLeft size={16} />
        Previos page
      </Link>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible",
        )}
      >
        Next page
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
