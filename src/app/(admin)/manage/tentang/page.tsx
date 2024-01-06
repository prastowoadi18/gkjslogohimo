import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Settings } from "lucide-react";
import Link from "next/link";

const ManageTentangPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Manage Tentang</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Manage Tentang
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="flex flex-col space-y-5 pt-10 pb-20 w-full md:w-1/2 lg:w-1/3">
        <div className="flex items-center border-b py-3 group">
          <div className="px-3 flex-none">
            <Settings className="w-5 h-5 group-hover:scale-125 group-hover:text-blue-400 transition-all duration-300" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Sejarah Gereja</h1>
            <Link
              href="/manage/tentang/sejarah"
              className="text-base group-hover:text-blue-400 transition-all duration-300 italic"
            >
              manage
            </Link>
          </div>
        </div>
        <div className="flex items-center border-b py-3 group">
          <div className="px-3 flex-none">
            <Settings className="w-5 h-5 group-hover:scale-125 group-hover:text-blue-400 transition-all duration-300" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Majelis</h1>
            <Link
              href="/"
              className="text-base group-hover:text-blue-400 transition-all duration-300 italic"
            >
              manage
            </Link>
          </div>
        </div>
        <div className="flex items-center py-3 group">
          <div className="px-3 flex-none">
            <Settings className="w-5 h-5 group-hover:scale-125 group-hover:text-blue-400 transition-all duration-300" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Pepanthan</h1>
            <Link
              href="/"
              className="text-base group-hover:text-blue-400 transition-all duration-300 italic"
            >
              manage
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ManageTentangPage;
