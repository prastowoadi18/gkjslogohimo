import { TENTANG_GEREJA } from "@/configs";

export default function Content() {
  return (
    <div className="pb-20 pt-10">
      <div className="flex flex-col gap-5">
        {TENTANG_GEREJA.jemaat.map((e) => (
          <div className="" key={e.id}>
            <h1 className="text-lg font-semibold">{`${e.id} ${e.title}`}</h1>
            <p className="w-full px-5 text-justify text-base text-muted-foreground md:px-0 lg:w-1/2">
              Total ada{" "}
              <span className="font-medium text-blue-600">
                {e.total_kk} KK{" "}
              </span>
              dengan jumlah total keseluruhan jemaat ada{" "}
              <span className="font-medium text-blue-600">
                {e.total_jemaat}
              </span>
              .
            </p>
            <div className="mt-2 text-muted-foreground">
              <p className="">
                Warga dewasa laki-laki:{" "}
                <span className="font-medium text-blue-600">
                  {e.detail_desc.warga_dewasa.laki}
                </span>
              </p>
              <p className="">
                Warga dewasa perempuan:{" "}
                <span className="font-medium text-blue-600">
                  {e.detail_desc.warga_dewasa.perempuan}
                </span>
              </p>
              <p className="">
                Warga anak laki-laki:{" "}
                <span className="font-medium text-blue-600">
                  {e.detail_desc.warga_anak.laki}
                </span>
              </p>
              <p className="">
                Warga anak laki-laki:{" "}
                <span className="font-medium text-blue-600">
                  {e.detail_desc.warga_anak.perempuan}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
