import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain =
    process.env.DOMAIN || "https://gkjslogohimo-devtest.vercel.app/";
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${domain}/berita`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/tentang/gereja`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${domain}/tentang/pendeta`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${domain}/tentang/jemaat`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.3,
    },
  ];
}
