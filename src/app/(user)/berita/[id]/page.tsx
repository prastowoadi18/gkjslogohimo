import Image from "@/components/Image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

const DetailBeritaPage = () => {
  return (
    <MaxWidthWrapper className="py-5">
      <div className="hidden lg:flex space-x-2 text-muted-foreground text-base">
        <Link href="/" className="hover:text-blue-500">
          Beranda
        </Link>
        <span className="">/</span>
        <Link href="/berita" className="hover:text-blue-500">
          Berita GKJ Slogohimo
        </Link>
        <span className="">/</span>
        <p className="font-semibold">Berita 1</p>
      </div>
      <div className="lg:py-5">
        <div className="relative w-full rounded-md">
          <Image
            className="h-52 md:h-60 lg:h-72 rounded-md object-cover md:object-[center_-2rem] lg:object-[center_-7rem]"
            src="/assets/img3.webp"
            alt="Sunset in the mountains"
            width={1200}
            height={700}
          />

          <div className="absolute top-5 left-4">
            <h1 className="text-white text-xl lg:text-2xl font-semibold uppercase">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-white text-sm">Sabtu, 20 Oktober 2023</p>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <h1 className="text-lg font-semibold">
          Para Hakim 2:16-23; Jabur 123; Wahyu 16:8-21
        </h1>
        <h2 className="text-base text-muted-foreground uppercase">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="mt-5 text-muted-foreground text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          exercitationem repellat nisi aliquam minus velit error sit voluptatem.
          Eveniet corrupti nulla iure ipsum molestiae aliquam voluptatum,
          sapiente pariatur voluptatibus, iste ex enim, quod magni distinctio
          architecto necessitatibus laboriosam excepturi ratione consequuntur
          dicta ipsa doloremque perspiciatis harum? Nulla architecto minus
          repudiandae nisi laudantium nam quos explicabo temporibus facilis
          iusto assumenda porro aperiam ducimus consequuntur inventore expedita
          facere est quia quasi ut, magni, atque impedit. Ut quod, autem ipsa
          corrupti minus consequatur. Possimus aliquam tempora aspernatur ea
          perspiciatis fugit, vel earum repellat atque fuga optio quibusdam
          suscipit, dolorem amet a nesciunt unde ut tempore blanditiis dolor.
          Sapiente vero tempora provident soluta totam officiis dolorum
          perspiciatis eos nemo ea quas rerum mollitia unde incidunt voluptatem,
          quisquam facilis deleniti repudiandae modi eligendi architecto porro
          natus! Ducimus, quae vitae tenetur neque voluptatem porro non fugiat
          perferendis eligendi dolores dignissimos quod dolorem, atque beatae
          suscipit quaerat minus ullam dolore officiis unde quis aliquid
          consectetur repellat explicabo. Mollitia pariatur dolorum quod aperiam
          inventore nesciunt nostrum nobis voluptatem necessitatibus corporis at
          vero iure dolorem molestias sunt, repudiandae dicta nihil a quidem
          aut! Dolor vitae quibusdam blanditiis, minima sed laborum nobis
          temporibus id dolores eos quo, perferendis porro! Ipsa voluptatibus
          est voluptas vel odio possimus modi nemo, ab nisi fuga vitae beatae.
          Est, quae nam, harum aut sit beatae dolore porro vel nobis dolores
          mollitia numquam asperiores blanditiis, error dolorem quas quo
          distinctio reprehenderit illum? Veniam modi amet ullam voluptatum quas
          maxime perferendis minima doloremque eius. Aperiam reiciendis
          repudiandae porro molestiae. Vero amet dolores quos dolorum veritatis
          doloremque sapiente, neque atque dignissimos provident animi est? Aut
          sed quo accusantium voluptas consequuntur voluptatibus. Repellendus
          saepe dignissimos qui quod. Temporibus sint consequatur fugiat sequi
          molestias in voluptas voluptates distinctio facilis placeat pariatur
          voluptatibus ipsa quae expedita repellendus id porro perspiciatis
          dolorum totam, iusto at ad labore recusandae omnis. Soluta error
          veniam atque totam rem eos consectetur animi veritatis ad placeat
          provident delectus eaque, praesentium nihil commodi sed nobis
          repellendus aliquid ratione labore est blanditiis at asperiores quasi?
          Sunt odio nulla facere, rem veritatis nostrum libero quos, a ipsum
          provident dolor, enim perferendis aspernatur ullam eveniet vitae harum
          repudiandae deleniti eaque. Quis quas neque, sit harum veritatis
          aliquid aperiam hic debitis magni sequi quibusdam? Optio suscipit est
          rerum similique. Sed, dolores possimus? Placeat numquam eveniet,
          ducimus quam temporibus voluptas amet minima voluptatem asperiores
          ratione earum corrupti non sed obcaecati quia magnam. Ipsum voluptas
          vel, suscipit obcaecati deleniti recusandae saepe tenetur excepturi
          unde perferendis. Quos fugit dolores ullam similique, explicabo
          maiores unde illum nam atque perferendis omnis placeat sunt veritatis
          sapiente soluta vero earum! Neque fugiat, incidunt odit quam
          aspernatur perspiciatis, quidem tempore minus architecto facere harum
          voluptate doloribus praesentium, id quibusdam eum. Ducimus, provident
          aperiam facilis voluptatibus, tenetur maxime veritatis esse fuga
          dolorum doloremque officiis. Ratione quaerat repudiandae harum,
          veritatis atque doloremque in rem, aliquam dolor esse illo iusto
          fugiat repellat adipisci aspernatur voluptate nam sit ea vero sint
          blanditiis minima molestiae soluta itaque. Exercitationem, assumenda
          quod sint perspiciatis voluptatum magnam veniam.
        </p>

        <Link
          href="/berita"
          className={buttonVariants({ size: "sm", className: "mt-10" })}
        >
          Lihat Berita Lainnya
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default DetailBeritaPage;
