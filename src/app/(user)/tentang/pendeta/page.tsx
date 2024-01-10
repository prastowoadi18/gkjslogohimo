"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useCardModal } from "@/hooks/use-card-modal";
import Image from "next/image";
import Link from "next/link";

const PendetaPage = () => {
  const { onOpen } = useCardModal();
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Profile Pendeta</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Profile Pendeta GKJ Slogohimo
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="pt-10 pb-20">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-md h-96 w-full hidden md:block flex-1"
            src="/assets/img1.webp"
            alt="Sunset in the mountains"
            width={500}
            height={500}
          />
          <div className=" md:px-5 lg:px-16">
            <h1 className="text-2xl font-semibold mb-5">Pdt. Wuri Ajeng</h1>
            <p className="text-muted-foreground text-base line-clamp-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              ad vero magnam voluptatum voluptate est illum. Facere numquam
              rerum eaque reprehenderit consequuntur maiores voluptatibus
              quaerat vel accusantium dolore, quasi ea minus ex, necessitatibus
              a rem atque dolorem delectus ipsum neque perspiciatis quo beatae?
              Sint consequatur accusamus rem totam beatae doloribus deleniti,
              earum laborum placeat? Culpa sit laudantium tenetur ullam esse
              doloribus architecto dolores tempora non distinctio? Ad animi
              fuga, itaque asperiores, perspiciatis nisi omnis alias temporibus
              debitis enim at voluptatum?
            </p>
            <Button className="mt-10" size="sm" onClick={onOpen}>
              Selengkapnya
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PendetaPage;
