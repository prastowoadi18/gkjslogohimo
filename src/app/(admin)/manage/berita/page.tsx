import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/column";

const dataBerita = [
  {
    id: 1,
    title: "Berita 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet quae dolore tempora accusamus blanditiis modi perspiciatis corporis quisquam! Atque labore facere enim dicta in corrupti vel, officiis odio ab quisquam laudantium placeat magnam sint, blanditiis alias error dignissimos praesentium iure laborum autem quod quidem quam iste? Quisquam inventore obcaecati voluptatibus! Ad corrupti deserunt iure labore repellat accusantium harum magni molestias facere perferendis vero praesentium quidem maiores, voluptas sapiente! Quos assumenda, autem sint repudiandae corporis reiciendis accusamus vitae aut nobis deleniti quam beatae harum quisquam temporibus impedit, ipsam numquam vero expedita saepe rerum, debitis dicta ut. Excepturi itaque iusto a optio! Possimus dolore ipsa perferendis repellat accusantium eligendi aspernatur sint laboriosam modi, nam voluptatibus voluptate magni quibusdam facere explicabo assumenda! Et quis quaerat distinctio incidunt fugiat ex tempora aliquid ducimus animi aut? Asperiores obcaecati porro distinctio nesciunt itaque ipsum eligendi nemo fugiat, molestiae vero perspiciatis necessitatibus debitis illo, aliquid quidem tenetur nulla ab saepe illum cumque temporibus veniam labore, ea natus. Ut, nihil sint. Corporis tenetur necessitatibus eveniet deserunt omnis qui deleniti exercitationem dolore sit totam consequatur dolorum, culpa mollitia animi labore ipsa fugit quo magni ipsum voluptatibus. Enim repellat repellendus ut nulla facilis, sequi soluta! Beatae eaque quibusdam officia!",
    date: "14/12/2023",
  },
  {
    id: 2,
    title: "Berita 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet quae dolore tempora accusamus blanditiis modi perspiciatis corporis quisquam! Atque labore facere enim dicta in corrupti vel, officiis odio ab quisquam laudantium placeat magnam sint, blanditiis alias error dignissimos praesentium iure laborum autem quod quidem quam iste? Quisquam inventore obcaecati voluptatibus! Ad corrupti deserunt iure labore repellat accusantium harum magni molestias facere perferendis vero praesentium quidem maiores, voluptas sapiente! Quos assumenda, autem sint repudiandae corporis reiciendis accusamus vitae aut nobis deleniti quam beatae harum quisquam temporibus impedit, ipsam numquam vero expedita saepe rerum, debitis dicta ut. Excepturi itaque iusto a optio! Possimus dolore ipsa perferendis repellat accusantium eligendi aspernatur sint laboriosam modi, nam voluptatibus voluptate magni quibusdam facere explicabo assumenda! Et quis quaerat distinctio incidunt fugiat ex tempora aliquid ducimus animi aut? Asperiores obcaecati porro distinctio nesciunt itaque ipsum eligendi nemo fugiat, molestiae vero perspiciatis necessitatibus debitis illo, aliquid quidem tenetur nulla ab saepe illum cumque temporibus veniam labore, ea natus. Ut, nihil sint. Corporis tenetur necessitatibus eveniet deserunt omnis qui deleniti exercitationem dolore sit totam consequatur dolorum, culpa mollitia animi labore ipsa fugit quo magni ipsum voluptatibus. Enim repellat repellendus ut nulla facilis, sequi soluta! Beatae eaque quibusdam officia!",
    date: "14/12/2023",
  },
];

const ManageBeritaPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Manage Berita</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Manage Berita
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="pt-10 pb-20 w-full">
        <DataTable columns={columns} data={dataBerita} />
      </div>
    </MaxWidthWrapper>
  );
};

export default ManageBeritaPage;
