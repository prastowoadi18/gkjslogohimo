import Image from "@/components/Image";

export default function Content() {
  return (
    <div className="grid grid-cols-1 gap-1 pb-20 pt-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 lg:pt-16">
      {Array.from({ length: 6 }).map((e: any, idx) => (
        <div
          className="flex max-w-sm items-center justify-center gap-5 overflow-hidden rounded p-5 shadow-lg"
          key={idx}
        >
          <div className="relative mx-auto rounded-full">
            <Image
              className="h-20 w-20 rounded-full object-cover p-1"
              src="/assets/img4.webp"
              alt="Sunset in the mountains"
              width={500}
              height={500}
              rounded="rounded-full"
            />
          </div>

          <div className="flex-1">
            <div className="text-lg font-bold">Budi Sujiatmoko</div>
            <div className="">
              <p className="text-base text-muted-foreground">
                Bidang Majelis:
                <span className="ml-3 font-semibold text-gray-800">Diaken</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
