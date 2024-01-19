import { useMemo } from "react";
import Link from "next/link";

import { BookImage } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import { Berita } from "@prisma/client";

interface DetailBeritaProps {
  berita: Berita;
}

export default function DetailBerita({ berita }: DetailBeritaProps) {
  const renderMain = useMemo(() => {
    return (
      <div className="">
        <div className="pb-20 pt-10">
          <Link
            href={berita.imageUrl!}
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "mt-5",
            })}
          >
            <BookImage size={16} className="mr-2" />
            Lihat Gambar
          </Link>
          <p className="mt-5 text-justify text-base text-muted-foreground">
            {berita.description}
          </p>

          <Link
            href="/berita"
            className={buttonVariants({ size: "sm", className: "mt-10" })}
          >
            Lihat Berita Lainnya
          </Link>
        </div>
      </div>
    );
  }, [berita.description, berita.imageUrl]);
  return renderMain;
}
