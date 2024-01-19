import React, { useMemo } from "react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  const renderMain = useMemo(() => {
    return (
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Wilujeng Rawuh Wonten
            <span className="block bg-gradient-to-r from-blue-500 to-black/60 bg-clip-text pb-2 text-transparent">
              GKJ Slogohimo
            </span>
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa
            consectetur quisquam repellat minus ipsam aut nostrum voluptas quis
            at.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/tentang/sejarah" className={buttonVariants()}>
              Tentang Gereja
            </Link>
            <Link
              href="/#berita_terbaru"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Berita Terbaru &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    );
  }, []);
  return renderMain;
}
