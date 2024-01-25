"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { TENTANG_GEREJA } from "@/configs";

export default function Info() {
  return (
    <section className="mb-10 lg:mb-24">
      <MaxWidthWrapper className="py-10">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="grid grid-cols-1 gap-3 gap-y-5 sm:gap-x-6 md:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
        >
          {TENTANG_GEREJA.info.map((info) => (
            <Link
              href={info.link}
              className="relative aspect-video overflow-hidden rounded-xl bg-gray-200 shadow-md  shadow-black/80 dark:bg-background dark:shadow-white/50"
              key={info.title}
            >
              <Image
                src={info.img_url}
                alt={`img-${info.title}`}
                fill
                sizes="341px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 font-bold">
                <h1 className="text-base text-white">{info.title}</h1>
                <p className="text-sm text-white">{info.description}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
