export const PRODUCT_CATEGORIES = [
  {
    label: "Tentang",
    value: "tentang" as const,
    featured: [
      {
        name: "Sejarah Lengkap",
        href: `/tentang/sejarah`,
        imageSrc: "/assets/img2.jpg",
      },
      {
        name: "Majelis",
        href: `/tentang/majelis`,
        imageSrc: "/assets/img2.jpg",
      },
      {
        name: "Pepanthan",
        href: `/tentang/pepanthan`,
        imageSrc: "/assets/img2.jpg",
      },
    ],
  },
  {
    label: "Materi",
    value: "materi" as const,
    featured: [
      {
        name: "Khotbah",
        href: `/materi/khotbah`,
        imageSrc: "/assets/img2.jpg",
      },
      {
        name: "Renungan",
        href: "/materi/renungan",
        imageSrc: "/assets/img2.jpg",
      },
      {
        name: "Kurikulum",
        href: "/materi/kurikulum",
        imageSrc: "/assets/img2.jpg",
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
        imageSrc: "/assets/img2.jpg",
      },
      {
        name: "Berita 2",
        href: "/berita/2",
        imageSrc: "/assets/img2.jpg",
      },
      {
        name: "Berita 3",
        href: "/berita/3",
        imageSrc: "/assets/img2.jpg",
      },
    ],
  },
];
