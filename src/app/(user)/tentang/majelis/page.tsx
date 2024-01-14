import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "@/components/Image";

const TentangMajelistPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Tentang Majelis</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Majelis Aktif GKJ Slogohimo
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6 lg:gap-10 pt-10 lg:pt-16 pb-20">
        {Array.from({ length: 6 }).map((e: any, idx) => (
          <div
            className="flex max-w-sm rounded overflow-hidden shadow-lg p-5 items-center justify-center gap-5"
            key={idx}
          >
            <div className="relative mx-auto rounded-full">
              <Image
                className="rounded-full object-cover p-1 w-20 h-20"
                src="/assets/img4.webp.jpg"
                alt="Sunset in the mountains"
                width={500}
                height={500}
                rounded="rounded-full"
              />
            </div>

            <div className="flex-1">
              <div className="font-bold text-lg">Budi Sujiatmoko</div>
              <div className="">
                <p className="text-base text-muted-foreground">
                  Bidang Majelis:
                  <span className="font-semibold text-gray-800 ml-3">
                    Diaken
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default TentangMajelistPage;
