import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Link from "next/link";

const kurikulum = [
  {
    title: "Kurikulum Anak",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero veniam maxime quae fuga quidem delectus, in natus consequuntur? Inventore.",
    date: "Sabtu, 14 Oktober 2023",
    link: "/materi/kurikulum/anak",
  },
  {
    title: "Kurikulum Remaja & Pemuda",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero veniam maxime quae fuga quidem delectus, in natus consequuntur? Inventore.",
    date: "Sabtu, 14 Oktober 2023",
    link: "/materi/kurikulum/remaja_pemuda",
  },
];

const KurikulumPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Kurikulum</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Kurikulum GKJ Slogohimo
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-14 pt-10 lg:pt-16 pb-20">
          {kurikulum.map((e, idx) => (
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
                <div className="font-bold text-lg">{e.title}</div>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">{e.date}</p>
                </div>
                <p className="text-muted-foreground text-base line-clamp-4 mt-3">
                  {e.desc}
                </p>
              </div>
              <div className="px-6 pt-2 pb-5">
                <Link
                  href={e.link}
                  className="mt-5 text-sm text-blue-500 cursor-pointer font-semibold hover:text-blue-400"
                >
                  lihat selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default KurikulumPage;
