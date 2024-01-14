import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

const info = [
  {
    title: "Jemaat",
    description: "182",
    link: "",
  },
  {
    title: "Pepanthan",
    description: "3",
    link: "/tentang/pepanthan",
  },
  {
    title: "Geraja",
    description: "4",
    link: "/tentang/sejarah",
  },
  {
    title: "Pendeta Aktif",
    description: "1",
    link: "/tentang/pendeta",
  },
];

const materi = [
  {
    title: "Bahan khotbah",
    description: "Lorem ipsum dolor sit amet consectetur",
    link: "/materi/khotbah",
  },
  {
    title: "Kurikulum",
    description: "Lorem ipsum dolor sit amet consectetur",
    link: "/materi/kurikulum",
  },
  {
    title: "Renungan Harian",
    description: "Lorem ipsum dolor sit amet consectetur",
    link: "/materi/renungan",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center max-w-3xl py-20 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Wilujeng Rawuh Wonten
            <span className="block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-black/60">
              GKJ Slogohimo
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa
            consectetur quisquam repellat minus ipsam aut nostrum voluptas quis
            at.
          </p>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row">
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

      <section className="mb-10 lg:mb-24">
        <MaxWidthWrapper className="py-10">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {info.map((info) => (
              <div
                key={info.title}
                className="text-left md:flex md:items-start lg:flex lg:justify-center"
              >
                <Link
                  href={info.link}
                  className="hover:scale-105 transition-all duration-300"
                >
                  <div className="relative rounded-md">
                    <Image
                      src="/assets/img1.webp"
                      width={500}
                      height={500}
                      alt="empty shopping cart"
                      className="object-cover rounded-md object-top h-60 w-full lg:w-48"
                    />
                    <div className="absolute bottom-4 left-4">
                      <h1 className="text-base font-medium text-white">
                        {info.title}
                      </h1>
                      <p className="text-sm text-white">{info.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* <section className="border-t border-gray-200 bg-slate-50 mb-10 lg:mb-24">
        <MaxWidthWrapper className="py-10">
          <div className="flex flex-col items-start md:flex-row md:items-center md:justify-center md:gap-x-5">
            <div className="flex-1">
              <h1 className="font-medium">Renungan</h1>
              <h2 className="text-2xl font-semibold mt-5 tracking-wide">
                Renungan <span className="block">Sabda Winedhar</span>
              </h2>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-sm mb-5">Sabtu, 14 Oktober 2023</h1>
              <h2 className="text-2xl font-semibold mb-1">Pdt. Wuri Ajeng</h2>
              <p className="line-clamp-5 text-muted-foreground text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo magnam nihil possimus ut quibusdam corrupti adipisci
                laboriosam iure enim nisi dolore, veniam laudantium cum
                repellendus consectetur temporibus veritatis. Dicta sapiente
                aliquam dolores quae doloribus non ducimus error, fugiat
                molestiae necessitatibus consequuntur nemo iusto expedita,
                nesciunt sunt esse neque suscipit voluptate.{" "}
              </p>
              <Link
                href={`/materi/renungan/1`}
                className="mt-5 text-sm text-blue-500 cursor-pointer font-semibold hover:text-blue-400"
              >
                baca lebih lanjut...
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section> */}

      <section
        className="border-t border-gray-200 bg-slate-50 mb-10 lg:mb-24"
        id="berita_terbaru"
      >
        <MaxWidthWrapper className="py-20">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
            <div className="">
              <h1 className="text-2xl font-semibold mb-1">Berita Terbaru</h1>
              <p className="md:w-4/5 lg:w-2/3 text-base text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                sed similique. Quos optio delectus autem neque omnis velit
                eligendi nesciunt?
              </p>
            </div>
            <div className="">
              <Link
                href="/berita"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Lihat semua berita
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20">
            {Array.from({ length: 3 }).map((e: any, idx) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg"
                key={idx}
              >
                <div className="bg-black/20">
                  <Image
                    className="w-full mix-blend-multiply"
                    src="/assets/img2.webp"
                    alt="Sunset in the mountains"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="px-6 py-4">
                  <div className="font-bold text-2xl">The Coldest Sunset</div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      Sabtu, 14 Oktober 2023
                    </p>
                  </div>
                  <p className="text-muted-foreground text-base line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-5">
                  <Link
                    href="/berita/1"
                    className="mt-5 text-sm text-blue-500 cursor-pointer font-semibold hover:text-blue-400"
                  >
                    baca lebih lanjut...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mb-10 lg:mb-24">
        <MaxWidthWrapper className="py-10">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-md h-96 w-full hidden md:block"
              src="/assets/img1.webp"
              alt="Sunset in the mountains"
              width={500}
              height={500}
            />
            <div className="flex-1 md:px-5 lg:px-16">
              <h1 className="text-2xl font-semibold mb-5">Tentang Kami</h1>
              <p className="text-muted-foreground text-base line-clamp-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores ad vero magnam voluptatum voluptate est illum. Facere
                numquam rerum eaque reprehenderit consequuntur maiores
                voluptatibus quaerat vel accusantium dolore, quasi ea minus ex,
                necessitatibus a rem atque dolorem delectus ipsum neque
                perspiciatis quo beatae? Sint consequatur accusamus rem totam
                beatae doloribus deleniti, earum laborum placeat? Culpa sit
                laudantium tenetur ullam esse doloribus architecto dolores
                tempora non distinctio? Ad animi fuga, itaque asperiores,
                perspiciatis nisi omnis alias temporibus debitis enim at
                voluptatum?
              </p>
              <Link
                href="/tentang/sejarah"
                className={buttonVariants({ size: "sm", className: "mt-10" })}
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* <section className="border-t border-gray-200 bg-slate-50 mb-10 lg:mb-24">
        <MaxWidthWrapper className="py-10">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-1">Bahan Materi</h1>
            <p className="text-base text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, aperiam.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 pt-20 pb-10">
            {materi.map((e, idx) => (
              <Link
                href={e.link}
                key={idx}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="relative w-16 h-16 bg-gray-200 items-center justify-center flex rounded-full mx-auto group-hover:bg-gray-200/80">
                    <Church className="w-7 h-7 group-hover:text-blue-500" />
                  </div>
                  <div className="mt-3">
                    <h1 className="text-xl group-hover:text-blue-500">
                      {e.title}
                    </h1>
                    <p className="text-base text-muted-foreground group-hover:text-blue-400">
                      {e.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section> */}
    </>
  );
}
