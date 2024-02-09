import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import Image from "@/components/Image";

import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { MajelisFilterValues } from "@/lib/validation";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";

interface ContentProps {
  page?: number;
  filterValues: MajelisFilterValues;
}

export default async function Content({
  page = 1,
  filterValues,
}: ContentProps) {
  const { wilayah } = filterValues;

  const majelisPerPage = 6;
  const skip = (page - 1) * majelisPerPage;

  const where: Prisma.MajelisWhereInput = {
    AND: [wilayah ? { wilayah } : {}],
  };

  const majelisPromise = prisma.majelis.findMany({
    where: where,
    orderBy: { createdAt: "desc" },
    take: majelisPerPage,
    skip,
  });

  const countPromise = prisma.majelis.count();

  const [majelis, totalResults] = await Promise.all([
    majelisPromise,
    countPromise,
  ]);

  function generateWilayahFilter(wilayah: string) {
    const searchParams = new URLSearchParams({
      ...(wilayah && { wilayah }),
      page: page.toString(),
    });

    return `/tentang/majelis?${searchParams.toString()}`;
  }

  return (
    <div className="">
      <div className="mt-5 flex flex-row items-center gap-2 overflow-y-scroll">
        <Button
          asChild
          size="sm"
          variant={wilayah === undefined ? "default" : "outline"}
        >
          <Link href={generateWilayahFilter("")}>Semua</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant={wilayah === "slogohimo" ? "default" : "outline"}
        >
          <Link href={generateWilayahFilter("slogohimo")}>Slogohimo</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant={wilayah === "jatisrono" ? "default" : "outline"}
        >
          <Link href={generateWilayahFilter("jatisrono")}>Jatisrono</Link>
        </Button>

        <Button
          asChild
          size="sm"
          variant={wilayah === "jatiroto" ? "default" : "outline"}
        >
          <Link href={generateWilayahFilter("jatiroto")}>Jatiroto</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant={wilayah === "joho" ? "default" : "outline"}
        >
          <Link href={generateWilayahFilter("joho")}>Joho</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-3 pb-20 pt-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 lg:pt-12">
        {majelis.map((item) => (
          <div
            className="flex max-w-sm items-center justify-center gap-5 overflow-hidden rounded p-5 shadow-lg dark:bg-zinc-800"
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
              <div className="mt-2">
                <p className="text-base text-muted-foreground">
                  Bidang Majelis:
                  <span className="ml-1 font-semibold text-gray-800 dark:text-white">
                    {item.bidang}
                  </span>
                </p>
                <p className="text-base text-muted-foreground">
                  Wilayah:
                  <span className="ml-1 font-semibold capitalize text-gray-800 dark:text-white">
                    {item.wilayah}
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
          filterValues={filterValues}
        />
      )}
      {majelis.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-5">
          <p className="text-lg">Data majelis tidak ditemukan.</p>
          <Button asChild>
            <Link href={`/tentang/majelis`}>Kembali</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filterValues: MajelisFilterValues;
}

function Pagination({
  currentPage,
  totalPages,
  filterValues: { wilayah },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(wilayah && { wilayah }),
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
        Sebelumnya
      </Link>
      <span className="font-semibold">
        Halaman {currentPage} dari {totalPages}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible",
        )}
      >
        Selanjutnya
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
