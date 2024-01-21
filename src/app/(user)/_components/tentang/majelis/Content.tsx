import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import Image from "@/components/Image";

import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";

interface ContentProps {
  page?: number;
}

export default async function Content({ page = 1 }: ContentProps) {
  const majelisPerPage = 6;
  const skip = (page - 1) * majelisPerPage;

  const majelisPromise = prisma.majelis.findMany({
    orderBy: { createdAt: "desc" },
    take: majelisPerPage,
    skip,
  });

  const countPromise = prisma.majelis.count();

  const [majelis, totalResults] = await Promise.all([
    majelisPromise,
    countPromise,
  ]);

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-1 pb-20 pt-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 lg:pt-16">
        {majelis.map((item) => (
          <div
            className="flex max-w-sm items-center justify-center gap-5 overflow-hidden rounded p-5 shadow-lg"
            key={item.id}
          >
            <div className="relative mx-auto rounded-full">
              <Image
                className="h-20 w-20 rounded-full object-cover p-1"
                src={`/assets/${item.imageUrl}`}
                alt={`img-${item.nama}`}
                width={500}
                height={500}
                rounded="rounded-full"
              />
            </div>

            <div className="flex-1">
              <div className="text-lg font-bold">{item.nama}</div>
              <div className="">
                <p className="text-base text-muted-foreground">
                  Bidang Majelis:
                  <span className="ml-3 font-semibold text-gray-800">
                    {item.bidang}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {majelis.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / majelisPerPage)}
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

    return `/tentang/majelis?${searchParams.toString()}`;
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
