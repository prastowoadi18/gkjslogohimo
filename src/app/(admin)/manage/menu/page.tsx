import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const ManageMenuPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Manage Menu</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Manage Menu
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="flex flex-col space-y-5 pt-10 pb-20 w-full md:w-1/2 lg:w-1/3"></div>
    </MaxWidthWrapper>
  );
};

export default ManageMenuPage;
