import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function JadwalIbadah() {
  return (
    <section className="mb-10 border-t border-gray-200 lg:mb-24">
      <MaxWidthWrapper className="py-10">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          <div className="">
            <h1 className="mb-1 text-2xl font-semibold">Jadwal Ibadah</h1>
            <p className="text-base text-muted-foreground md:w-4/5 lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              sed similique. Quos optio delectus autem neque omnis velit
              eligendi nesciunt?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-10">
          <div className="">
            <h1 className="text-base font-semibold">Jadwal Ibadah Induk</h1>
            <p className="mt-2">
              <span className="font-semibold italic text-blue-600">
                GKJ SLOGOHIMO
              </span>{" "}
              <span className="font-semibold">07:00 WIB</span> BAHASA JAWA
              (MINGGU I Bahasa Indonesia)
            </p>
          </div>
          <div className="">
            <h1 className="text-base font-semibold">Jadwal Ibadah Pepanthan</h1>
            <p className="mt-2">
              <span className="font-semibold italic text-blue-600">
                PEPANTHAN JATISRONO
              </span>{" "}
              <span className="font-semibold">07:00 WIB</span> BAHASA JAWA
              (MINGGU I Bahasa Indonesia)
            </p>
            <p className="mt-1">
              <span className="font-semibold italic text-blue-600">
                PEPANTHAN JATIROTO
              </span>{" "}
              <span className="font-semibold">07:00 WIB</span> BAHASA JAWA
              (MINGGU I Bahasa Indonesia)
            </p>
            <p className="mt-1">
              <span className="font-semibold italic text-blue-600">
                PEPANTHAN JOHO
              </span>{" "}
              <span className="font-semibold">07:00 WIB</span> BAHASA JAWA
              (MINGGU I Bahasa Indonesia)
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
