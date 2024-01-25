"use client";

import Link from "next/link";
import Image from "next/image";

import { format } from "date-fns";
import { id } from "date-fns/locale";
import { motion } from "framer-motion";

import { Berita } from "@prisma/client";

interface ListContentProps {
  berita: Berita[];
}

export default function ListContent({ berita }: ListContentProps) {
  return (
    <div className="grid grid-cols-1 gap-5 pb-20 pt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-5 lg:pt-16">
      {berita.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="rounded-b-md shadow-md dark:bg-zinc-900"
          key={item.id}
        >
          <div className="relative h-60 overflow-hidden rounded-t-md">
            <Image
              className="object-cover"
              src={item.imageUrl!}
              alt={`img-${item.title}`}
              fill
              sizes="(min-width: 1360px) 360px, (min-width: 1040px) 26.67vw, (min-width: 780px) calc(50vw - 96px), calc(100vw - 20px)"
            />
          </div>
          <div className="">
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
        </motion.div>
      ))}
    </div>
  );
}
