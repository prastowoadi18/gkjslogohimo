import Link from "next/link";

import prisma from "@/lib/prisma";

import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ListContent from "./ListContent";

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
      <ListContent berita={berita} />

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
