import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Content } from "./_components/Content";

const ManageSejarahPage = () => {
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
        <p className="font-semibold">Sejarah</p>
      </div>
      <h1 className="mt-2 lg:mt-10 text-2xl lg:text-xl font-semibold">
        Manage Tentang Sejarah
      </h1>
      <p className="text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?
      </p>

      <div className="pt-10 pb-20 w-full">
        <Content desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam mollitia natus iusto sit! Quaerat consectetur asperiores dicta facere atque iure earum. Asperiores quia corrupti aut quam delectus quae officia, ipsum cupiditate, vitae expedita similique quasi, beatae accusantium eum assumenda maxime incidunt possimus! Sint minus debitis praesentium aut doloribus officia quas, commodi qui consequuntur exercitationem aspernatur nam facere ullam quidem libero inventore voluptas. Error incidunt explicabo ullam. Minima, voluptatum! Aliquid iste, facere molestiae eos ratione blanditiis eius omnis ullam quia nostrum debitis asperiores, amet modi, in ex! Maiores deleniti provident aliquid cumque voluptatibus at ea optio nihil ipsam delectus? Excepturi corrupti, ullam cum quibusdam tempora, porro ea labore asperiores repudiandae quas dolore quae totam sed at delectus minus eligendi quidem officiis! Dolores, delectus libero facilis dicta nisi natus inventore accusamus eos debitis tenetur ducimus fugiat quod nulla repellat minima non doloribus voluptatem modi unde beatae est excepturi consectetur. Nemo neque accusantium voluptatibus perspiciatis est, quos ab vitae hic rem quia quae commodi doloribus ipsa ex aut necessitatibus veniam quaerat iusto molestias ipsam dolorum, cumque laudantium id. Optio quos voluptatum, aliquam iure ipsam tenetur similique maiores sapiente ad voluptatibus vero porro dicta veniam quo ullam consectetur soluta voluptatem et ducimus ipsum quae vel hic officiis? Impedit id assumenda eveniet reprehenderit, ducimus vero aspernatur cumque architecto ea culpa non hic soluta nulla eum excepturi tenetur doloribus ipsa vel delectus! Iste provident nisi dolor, consequuntur impedit et deleniti? Molestiae, dolorum nesciunt laboriosam saepe animi recusandae quidem exercitationem reiciendis quis quaerat dolore pariatur cum quo magnam, provident eaque fuga architecto illum ducimus incidunt dolores eligendi numquam, dignissimos voluptas. Explicabo odio ipsa dolor ut voluptatibus optio officiis illum beatae quod voluptates praesentium architecto asperiores similique tempora facilis repudiandae amet excepturi, earum libero porro expedita ducimus at. Quam, iure. Dolor mollitia dolorum harum atque quis assumenda nihil sunt, ut nam nisi ratione ad aut omnis. Dolorem culpa nulla fugit voluptates aperiam? Fugiat dolores eius harum necessitatibus voluptatem laboriosam ducimus modi temporibus sit unde. Veritatis a atque, debitis natus perferendis, maiores vitae laboriosam eos soluta accusantium accusamus mollitia fugiat! Dolore magni fuga recusandae illo culpa dolorem eos nihil ipsam assumenda quis quas iusto corporis quae hic praesentium dolores, cum sit nemo modi. Animi ipsam voluptas officia ea nostrum in reiciendis, excepturi voluptate debitis architecto, labore aut facere exercitationem. Nesciunt, accusantium quaerat voluptas similique labore cupiditate quisquam molestias culpa delectus doloribus architecto tempora iure dicta nisi consequatur blanditiis eum magnam voluptates porro laborum aliquam? Quis officia corporis maxime fugiat facere distinctio assumenda dolor nam cumque aliquam? Rerum ex atque, possimus omnis officiis tempore eligendi ratione nam blanditiis! Esse accusamus quasi animi dicta tempore, quod minus non aperiam, quisquam aliquid pariatur! Accusantium ducimus quibusdam saepe mollitia porro expedita, corrupti totam, dolor error facere harum nostrum? Vitae laudantium temporibus sint labore tempore a fuga culpa, iste atque provident reiciendis eligendi nihil ad optio alias dicta delectus reprehenderit quisquam cum fugit enim tempora? Distinctio impedit iste illum dolor provident consectetur qui laboriosam esse nobis ullam corrupti aspernatur aut magni earum, placeat modi?" />
      </div>
    </MaxWidthWrapper>
  );
};

export default ManageSejarahPage;
