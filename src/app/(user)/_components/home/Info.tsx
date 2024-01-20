"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { TENTANG_GEREJA } from "@/configs";

export default function Info() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="mb-10 lg:mb-24"
    >
      <MaxWidthWrapper className="py-10">
        <div className="grid grid-cols-1 gap-3 gap-y-12 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {TENTANG_GEREJA.info.map((info) => (
            <div
              key={info.title}
              className="text-left md:flex md:items-start lg:flex lg:justify-center"
            >
              <Link
                href={info.link}
                className="transition-all duration-300 hover:scale-105"
              >
                <div className="relative rounded-md">
                  <Image
                    src={info.img_url}
                    width={800}
                    height={600}
                    alt={`img-${info.title}`}
                    className="w-full rounded-md object-cover"
                  />
                  <div className="absolute bottom-4 left-4 font-bold">
                    <h1 className="text-base text-white">{info.title}</h1>
                    <p className="text-sm text-white">{info.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </motion.section>
  );
}
