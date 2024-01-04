import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Link from "next/link";

const RenunganPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Renungan</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Renungan GKJ Slogohimo
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-14 pt-10 lg:pt-16 pb-20">
          {Array.from({ length: 3 }).map((e: any, idx) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={idx}
            >
              <div className="bg-black/20">
                <Image
                  className="w-full mix-blend-multiply"
                  src="/assets/img2.jpg"
                  alt="Sunset in the mountains"
                  width={500}
                  height={500}
                />
              </div>

              <div className="px-6 py-4">
                <div className="font-bold text-lg">{`Renungan ${idx + 1}`}</div>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    Sabtu, 14 Oktober 2023
                  </p>
                </div>
                <p className="text-muted-foreground text-base line-clamp-4 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground italic">
                    dibuat oleh:{" "}
                    <span className="font-semibold">
                      Lorem ipsum dolor sit.
                    </span>
                  </p>
                </div>
              </div>
              <div className="px-6 pt-2 pb-5">
                <Link
                  href={`/materi/renungan/1`}
                  className="mt-5 text-sm text-blue-500 cursor-pointer font-semibold hover:text-blue-400"
                >
                  baca lebih lanjut...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default RenunganPage;
