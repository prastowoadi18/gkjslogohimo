import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Link from "next/link";

const PepanthanDetailPage = ({ params }: { params: { nama: string } }) => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <Link href="/tentang/pepanthan" className="hover:text-blue-500">
          Tentang Pepanthan
        </Link>
        <span className="">/</span>
        <p className="font-semibold capitalize">{`Detail Pepanthan ${params.nama}`}</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold capitalize">{`Pepanthan ${params.nama}`}</h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>
      <div className="pt-10 lg:pt-16 pb-20">
        <p className="text-muted-foreground text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae
          nisi laborum fugiat, deleniti quidem eum ducimus id sequi natus fugit
          odit, sint, reprehenderit impedit soluta excepturi ullam in sed rem
          similique? Sint, voluptas, dolore, dolor possimus provident sed vero
          ipsum cum labore et eius eveniet? Tempore nulla, repellendus
          recusandae distinctio id corrupti blanditiis accusantium minus aliquid
          doloremque cum pariatur placeat maiores? Voluptate nesciunt modi
          officiis, in cum perferendis labore itaque excepturi est impedit
          molestiae aspernatur quibusdam illum perspiciatis, sit debitis saepe,
          adipisci nihil dolorem delectus autem totam magnam. Sit, aspernatur
          vero fuga at autem magni eius molestias assumenda neque ad ab nulla
          numquam iusto! Repellat inventore culpa ea quaerat, dolorum in impedit
          sint voluptas soluta quia reprehenderit? Nesciunt enim deserunt
          molestiae corporis similique ad explicabo, quaerat ducimus sit magnam,
          distinctio mollitia exercitationem quasi accusantium necessitatibus,
          vitae eligendi adipisci veniam. Laboriosam minima quo dolorum
          laudantium sapiente iure nemo commodi consectetur quasi nihil omnis
          amet laborum provident, consequuntur libero, sit sequi? Repellendus
          sed aspernatur assumenda fugit quia quis nihil, similique totam
          incidunt fuga iusto voluptatibus voluptas expedita? Id odit, corrupti
          soluta delectus amet iure beatae eum provident unde quaerat iusto
          deleniti, obcaecati possimus quas deserunt! Velit ex numquam dicta ea
          commodi?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-16 pb-20">
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
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PepanthanDetailPage;
