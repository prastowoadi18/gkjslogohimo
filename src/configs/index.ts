export const NAV_MENU = [
  {
    label: "Tentang",
    value: "tentang" as const,
    featured: [
      {
        name: "Sejarah Lengkap",
        href: `/tentang/sejarah`,
        imageSrc: "/assets/img2.webp",
      },
      {
        name: "Majelis",
        href: `/tentang/majelis`,
        imageSrc: "/assets/img2.webp",
      },
      {
        name: "Gereja",
        href: `/tentang/gereja`,
        imageSrc: "/assets/img2.webp",
      },
    ],
  },
  {
    label: "Berita",
    value: "berita" as const,
    featured: [
      {
        name: "Berita 1",
        href: "/berita/1",
        imageSrc: "/assets/img2.webp",
      },
      {
        name: "Berita 2",
        href: "/berita/2",
        imageSrc: "/assets/img2.webp",
      },
      {
        name: "Berita 3",
        href: "/berita/3",
        imageSrc: "/assets/img2.webp",
      },
    ],
  },
];

export const METADATA = {
  creator: "GKJ Slogohimo",
  description:
    "Sejarah mencatat dalam kurun waktu tahun 1890-1910 perjuangan mengabarkan injil terus diupayakan oleh Zending di wilayah Surakarta. Buah pelayanan itu adalah terbentuknya klasis Surakarta Barat dan klasis Surakarta Timur pada tahun 1957. Pada 28 Januari 1983 klasis Surakarta Timur terbagi menjadi tiga klasis, yaitu Sala Timur, Lawu, dan Wonogiri. Kala itu klasis Wonogiri baru terdiri dari GKJ Wonogiri, GKJ Sukoharjo, GKJ Baki, GKJ Wuryantoro, dan GKJ Slogohimo.",
  keyword: "GKJ Slogohimo, Wonogiri, Gereja, Sinode GKJ Slogohimo, Kristen",
  authors: {
    name: "GKJ Slogohimo",
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: "GKJ Slogohimo",
    locale: "id-ID",
    img: "https://utfs.io/f/ff8d1b92-19f2-4403-b3e7-43fb7ee892bc-cfbm5x.png",
  },
  exTitle: "| GKJ Slogohimo",
  profile: "https://utfs.io/f/fc5d9226-e5b6-42f8-904e-cf93d8f07419-1xcy8.webp",
};

export const DUMMY_BERITA = [
  {
    id: 1,
    title: "Berita 1",
    slug: "berita-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
    created_date: "Thu Jan 11 2024 10:14:17 GMT+0700 (Western Indonesia Time)",
    imgUrl: "/assets/img2.webp",
  },
  {
    id: 2,
    title: "Berita 2",
    slug: "berita-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
    created_date: "Thu Jan 11 2024 10:14:17 GMT+0700 (Western Indonesia Time)",
    imgUrl: "/assets/img2.webp",
  },
  {
    id: 3,
    title: "Berita 3",
    slug: "berita-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
    created_date: "Thu Jan 11 2024 10:14:17 GMT+0700 (Western Indonesia Time)",
    imgUrl: "/assets/img2.webp",
  },
];

export const TENTANG_GEREJA = {
  title: "Sejarah Lengkap GKJ Slogohimo",
  created_date: "Thu Jan 11 2024 10:14:17 GMT+0700 (Western Indonesia Time)",
  img_url: "/assets/img3.webp",
  sejarah_gereja:
    "Sejarah mencatat dalam kurun waktu tahun 1890-1910 perjuangan mengabarkan injil terus diupayakan oleh Zending di wilayah Surakarta. Buah pelayanan itu adalah terbentuknya klasis Surakarta Barat dan klasis Surakarta Timur pada tahun 1957. Pada 28 Januari 1983 klasis Surakarta Timur terbagi menjadi tiga klasis, yaitu Sala Timur, Lawu, dan Wonogiri. Kala itu klasis Wonogiri baru terdiri dari GKJ Wonogiri, GKJ Sukoharjo, GKJ Baki, GKJ Wuryantoro, dan GKJ Slogohimo. GKJ Slogohimo sendiri terbentuk jauh sebelum klasis Wonogiri terbentuk. Cikal bakal GKJ Slogohimo dirintis melalui penginjilan pertama di Bulukerto dengan cara penjualan buku buku oleh Bapak Reksodikromo dan Bapak Wiryo dari Tirtomoyo tahun 1928 sebagai utusan Zending Surakarta. Dalam Prosesnya, warga masyarakat Bulukerto menerima pemberitaan Injil dan meminta pelayanan babtis. Akhirnya, warga masyarakat Bulukerto menerima sakramen babtis pada 25 November 1928 di Tirtomoyo oleh Ds. D.H. Van Ejik. Makin hari jumlah mereka terus bertambah sehingga memungkinkan untuk mengadakan kelompok ibadah sendiri. Agar pemeliharaan iman tetap terjaga, kelompok Bulukerto dilayani oleh guru injil Kartosuro yaitu bapak Darmo Efraim. Semakin hari jumlah warga yang mengenal Kristus semakin banyak. Populasi warga yang bertambah menjadikan kebutuhan pelayanan semakin banyak juga, sehingga pelayanan warga kristen bulu kerto dibantu Bapak Petrus dan Bapak Dwi Sapto Sutrisno. Pengaruh Bapak Petrus di pelayanan ini sangat besar sehingga banyak yang minta dibaptis. Tahun 1931 beberapa warga wono sari mendapat pelayanan baptis dan pada tahun 1932 di layankan baptis masal sebanyak 40 orang dari desa Waru, Slogohimo",
  galeri: [
    "/assets/img2.webp",
    "/assets/img2.webp",
    "/assets/img2.webp",
    "/assets/img2.webp",
    "/assets/img2.webp",
    "/assets/img2.webp",
  ],
  pepanthan: [
    {
      id: 1,
      title: "Slogohimo",
      type: "Gereja Induk",
      slug: "gereja-induk-slogohimo",
      short_desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae nisi laborum fugiat, deleniti quidem eum ducimus id sequi natus fugit odit, sint, reprehenderit impedit soluta excepturi ullam in sed rem similique? Sint, voluptas, dolore, dolor possimus provident sed vero ipsum cum labore et eius eveniet? Tempore nulla, repellendus recusandae distinctio id corrupti blanditiis accusantium minus aliquid doloremque cum pariatur placeat maiores? Voluptate nesciunt modi officiis, in cum perferendis labore itaque excepturi est impedit molestiae aspernatur quibusdam illum perspiciatis, sit debitis saepe, adipisci nihil dolorem delectus autem totam magnam. Sit, aspernatur vero fuga at autem magni eius molestias assumenda neque ad ab nulla numquam iusto! Repellat inventore culpa ea quaerat, dolorum in impedit sint voluptas soluta quia reprehenderit? Nesciunt enim deserunt molestiae corporis similique ad explicabo, quaerat ducimus sit magnam, distinctio mollitia exercitationem quasi accusantium necessitatibus, vitae eligendi adipisci veniam. Laboriosam minima quo dolorum laudantium sapiente iure nemo commodi consectetur quasi nihil omnis amet laborum provident, consequuntur libero, sit sequi? Repellendus sed aspernatur assumenda fugit quia quis nihil, similique totam incidunt fuga iusto voluptatibus voluptas expedita? Id odit, corrupti soluta delectus amet iure beatae eum provident unde quaerat iusto deleniti, obcaecati possimus quas deserunt! Velit ex numquam dicta ea commodi?",
      imgUrl: "/assets/img2.webp",
      galeri: ["/assets/img2.webp", "/assets/img2.webp", "/assets/img2.webp"],
    },
    {
      id: 2,
      title: "Jatisrono",
      type: "Pepanthan",
      slug: "pepanthan-jatisrono",
      short_desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae nisi laborum fugiat, deleniti quidem eum ducimus id sequi natus fugit odit, sint, reprehenderit impedit soluta excepturi ullam in sed rem similique? Sint, voluptas, dolore, dolor possimus provident sed vero ipsum cum labore et eius eveniet? Tempore nulla, repellendus recusandae distinctio id corrupti blanditiis accusantium minus aliquid doloremque cum pariatur placeat maiores? Voluptate nesciunt modi officiis, in cum perferendis labore itaque excepturi est impedit molestiae aspernatur quibusdam illum perspiciatis, sit debitis saepe, adipisci nihil dolorem delectus autem totam magnam. Sit, aspernatur vero fuga at autem magni eius molestias assumenda neque ad ab nulla numquam iusto! Repellat inventore culpa ea quaerat, dolorum in impedit sint voluptas soluta quia reprehenderit? Nesciunt enim deserunt molestiae corporis similique ad explicabo, quaerat ducimus sit magnam, distinctio mollitia exercitationem quasi accusantium necessitatibus, vitae eligendi adipisci veniam. Laboriosam minima quo dolorum laudantium sapiente iure nemo commodi consectetur quasi nihil omnis amet laborum provident, consequuntur libero, sit sequi? Repellendus sed aspernatur assumenda fugit quia quis nihil, similique totam incidunt fuga iusto voluptatibus voluptas expedita? Id odit, corrupti soluta delectus amet iure beatae eum provident unde quaerat iusto deleniti, obcaecati possimus quas deserunt! Velit ex numquam dicta ea commodi?",
      imgUrl: "/assets/img2.webp",
      galeri: ["/assets/img2.webp", "/assets/img2.webp", "/assets/img2.webp"],
    },
    {
      id: 3,
      title: "Jatiroto",
      type: "Pepanthan",
      slug: "pepanthan-jatiroto",
      short_desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae nisi laborum fugiat, deleniti quidem eum ducimus id sequi natus fugit odit, sint, reprehenderit impedit soluta excepturi ullam in sed rem similique? Sint, voluptas, dolore, dolor possimus provident sed vero ipsum cum labore et eius eveniet? Tempore nulla, repellendus recusandae distinctio id corrupti blanditiis accusantium minus aliquid doloremque cum pariatur placeat maiores? Voluptate nesciunt modi officiis, in cum perferendis labore itaque excepturi est impedit molestiae aspernatur quibusdam illum perspiciatis, sit debitis saepe, adipisci nihil dolorem delectus autem totam magnam. Sit, aspernatur vero fuga at autem magni eius molestias assumenda neque ad ab nulla numquam iusto! Repellat inventore culpa ea quaerat, dolorum in impedit sint voluptas soluta quia reprehenderit? Nesciunt enim deserunt molestiae corporis similique ad explicabo, quaerat ducimus sit magnam, distinctio mollitia exercitationem quasi accusantium necessitatibus, vitae eligendi adipisci veniam. Laboriosam minima quo dolorum laudantium sapiente iure nemo commodi consectetur quasi nihil omnis amet laborum provident, consequuntur libero, sit sequi? Repellendus sed aspernatur assumenda fugit quia quis nihil, similique totam incidunt fuga iusto voluptatibus voluptas expedita? Id odit, corrupti soluta delectus amet iure beatae eum provident unde quaerat iusto deleniti, obcaecati possimus quas deserunt! Velit ex numquam dicta ea commodi?",
      imgUrl: "/assets/img2.webp",
      galeri: ["/assets/img2.webp", "/assets/img2.webp", "/assets/img2.webp"],
    },
    {
      id: 4,
      title: "Joho",
      type: "Pepanthan",
      slug: "pepanthan-joho",
      short_desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab?",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae nisi laborum fugiat, deleniti quidem eum ducimus id sequi natus fugit odit, sint, reprehenderit impedit soluta excepturi ullam in sed rem similique? Sint, voluptas, dolore, dolor possimus provident sed vero ipsum cum labore et eius eveniet? Tempore nulla, repellendus recusandae distinctio id corrupti blanditiis accusantium minus aliquid doloremque cum pariatur placeat maiores? Voluptate nesciunt modi officiis, in cum perferendis labore itaque excepturi est impedit molestiae aspernatur quibusdam illum perspiciatis, sit debitis saepe, adipisci nihil dolorem delectus autem totam magnam. Sit, aspernatur vero fuga at autem magni eius molestias assumenda neque ad ab nulla numquam iusto! Repellat inventore culpa ea quaerat, dolorum in impedit sint voluptas soluta quia reprehenderit? Nesciunt enim deserunt molestiae corporis similique ad explicabo, quaerat ducimus sit magnam, distinctio mollitia exercitationem quasi accusantium necessitatibus, vitae eligendi adipisci veniam. Laboriosam minima quo dolorum laudantium sapiente iure nemo commodi consectetur quasi nihil omnis amet laborum provident, consequuntur libero, sit sequi? Repellendus sed aspernatur assumenda fugit quia quis nihil, similique totam incidunt fuga iusto voluptatibus voluptas expedita? Id odit, corrupti soluta delectus amet iure beatae eum provident unde quaerat iusto deleniti, obcaecati possimus quas deserunt! Velit ex numquam dicta ea commodi?",
      imgUrl: "/assets/img2.webp",
      galeri: ["/assets/img2.webp", "/assets/img2.webp", "/assets/img2.webp"],
    },
  ],
  pendeta_aktif: "Pdt. Wuri Ajeng",
  img_url_pendeta: "/assets/img4.webp",
  profile_pendeta:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae nisi laborum fugiat, deleniti quidem eum ducimus id sequi natus fugit odit, sint, reprehenderit impedit soluta excepturi ullam in sed rem similique? Sint, voluptas, dolore, dolor possimus provident sed vero ipsum cum labore et eius eveniet? Tempore nulla, repellendus recusandae distinctio id corrupti blanditiis accusantium minus aliquid doloremque cum pariatur placeat maiores? Voluptate nesciunt modi officiis, in cum perferendis labore itaque excepturi est impedit molestiae aspernatur quibusdam illum perspiciatis, sit debitis saepe, adipisci nihil dolorem delectus autem totam magnam. Sit, aspernatur vero fuga at autem magni eius molestias assumenda neque ad ab nulla numquam iusto! Repellat inventore culpa ea quaerat, dolorum in impedit sint voluptas soluta quia reprehenderit? Nesciunt enim deserunt molestiae corporis similique ad explicabo, quaerat ducimus sit magnam, distinctio mollitia exercitationem quasi accusantium necessitatibus, vitae eligendi adipisci veniam. Laboriosam minima quo dolorum laudantium sapiente iure nemo commodi consectetur quasi nihil omnis amet laborum provident, consequuntur libero, sit sequi? Repellendus sed aspernatur assumenda fugit quia quis nihil, similique totam incidunt fuga iusto voluptatibus voluptas expedita? Id odit, corrupti soluta delectus amet iure beatae eum provident unde quaerat iusto deleniti, obcaecati possimus quas deserunt! Velit ex numquam dicta ea commodi?",
  jemaat: [
    {
      id: 1,
      title: "Jemaat Gereja Slogohimo",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio fugit maiores, unde eaque qui ab sequi aut laudantium magni.",
    },
    {
      id: 2,
      title: "Jemaat Gereja Jatisrono",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio fugit maiores, unde eaque qui ab sequi aut laudantium magni.",
    },
    {
      id: 3,
      title: "Jemaat Gereja Jatiroto",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio fugit maiores, unde eaque qui ab sequi aut laudantium magni.",
    },
    {
      id: 4,
      title: "Jemaat Gereja Joho",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio fugit maiores, unde eaque qui ab sequi aut laudantium magni.",
    },
  ],
  info: [
    {
      title: "Jemaat",
      description: "182",
      link: "/tentang/jemaat",
      img_url: "/assets/img3.webp",
    },
    {
      title: "Geraja",
      description: "4",
      link: "/tentang/gereja",
      img_url: "/assets/img3.webp",
    },
    {
      title: "Pendeta Aktif",
      description: "1",
      link: "/tentang/pendeta",
      img_url: "/assets/img3.webp",
    },
  ],
};
