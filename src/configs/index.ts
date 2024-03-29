export const NAV_MENU = [
  {
    label: "Tentang",
    value: "tentang" as const,
    featured: [
      {
        name: "Sejarah",
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
    title: "Gereja Kristen Jawa Slogohimo Website",
    url: process.env.DOMAIN,
    siteName: "GKJ Slogohimo",
    locale: "id-ID",
    img: "open-graph.png",
  },
  exTitle: "| GKJ Slogohimo",
  profile: "open-graph.png",
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
    "/assets/img5.webp",
    "/assets/img2.webp",
    "/assets/img5.webp",
    "/assets/img2.webp",
    "/assets/img5.webp",
  ],
  pepanthan: [
    {
      id: 1,
      title: "Slogohimo",
      type: "Gereja Induk",
      slug: "gereja-induk-slogohimo",
      description: "Alamat: Gaton RT.01/05 Waru, Slogohimo",
      href: "https://maps.app.goo.gl/xVLUeFPwwRSDtrf87",
      imgUrl: "/assets/img2.webp",
      galeri: [
        "/assets/img2.webp",
        "/assets/img5.webp",
        "/assets/img2.webp",
        "/assets/img5.webp",
      ],
    },
    {
      id: 2,
      title: "Jatisrono",
      type: "Pepanthan",
      slug: "pepanthan-jatisrono",
      description: "Alamat: Cinderejo RT.05/02, Jatisari, Jatisrono",
      href: "https://maps.app.goo.gl/KsSLNEosh4627uf37",
      imgUrl: "/assets/img2.webp",
      galeri: [
        "/assets/img2.webp",
        "/assets/img5.webp",
        "/assets/img2.webp",
        "/assets/img5.webp",
      ],
    },
    {
      id: 3,
      title: "Jatiroto",
      type: "Pepanthan",
      slug: "pepanthan-jatiroto",
      description: "Alamat: Kopen RT.01/03 Jatiroto",
      href: "",
      imgUrl: "/assets/img2.webp",
      galeri: [
        "/assets/img2.webp",
        "/assets/img5.webp",
        "/assets/img2.webp",
        "/assets/img5.webp",
      ],
    },
    {
      id: 4,
      title: "Joho",
      type: "Pepanthan",
      slug: "pepanthan-joho",
      description: "Alamat: Joho RT.16/04 Jatisrono",
      imgUrl: "/assets/img2.webp",
      href: "",
      galeri: [
        "/assets/img2.webp",
        "/assets/img5.webp",
        "/assets/img2.webp",
        "/assets/img5.webp",
      ],
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
      total_kk: 48,
      total_jemaat: 129,
      detail_desc: {
        warga_dewasa: {
          laki: 48,
          perempuan: 54,
        },
        warga_anak: {
          laki: 17,
          perempuan: 10,
        },
      },
    },
    {
      id: 2,
      title: "Jemaat Gereja Jatisrono",
      total_kk: 45,
      total_jemaat: 140,
      detail_desc: {
        warga_dewasa: {
          laki: 53,
          perempuan: 46,
        },
        warga_anak: {
          laki: 10,
          perempuan: 11,
        },
      },
    },
    {
      id: 3,
      title: "Jemaat Gereja Jatiroto",
      total_kk: 15,
      total_jemaat: 32,
      detail_desc: {
        warga_dewasa: {
          laki: 12,
          perempuan: 16,
        },
        warga_anak: {
          laki: 2,
          perempuan: 2,
        },
      },
    },
    {
      id: 4,
      title: "Jemaat Gereja Joho",
      total_kk: 24,
      total_jemaat: 55,
      detail_desc: {
        warga_dewasa: {
          laki: 16,
          perempuan: 27,
        },
        warga_anak: {
          laki: 6,
          perempuan: 6,
        },
      },
    },
  ],
  info: [
    {
      title: "Jemaat",
      description: "336",
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

export const IMG_MAJELIS = ["img4.webp"];
export const WILAYAH = ["slogohimo", "jatisrono", "jatiroto", "joho"];
