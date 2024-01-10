import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { columns } from "./_components/column";
import { DataTable } from "./_components/data-table";
import Link from "next/link";

const dataMajelis = [
  {
    id: 1,
    nama: "Budi Sujiatmoko",
    bidang: "Diaken",
  },
  {
    id: 2,
    nama: "Budi Warsono",
    bidang: "Penatua",
  },
];

const ManageMajelisPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <Link href="/manage/tentang" className="hover:text-blue-500">
          Manage Tentang
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Manage Majelis</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Manage Tentang Majelis
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>

      <div className="pt-10 pb-20 w-full">
        <DataTable columns={columns} data={dataMajelis} />
      </div>
    </MaxWidthWrapper>
  );
};

export default ManageMajelisPage;
