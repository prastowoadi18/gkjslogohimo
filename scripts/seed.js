const { placeholderBerita, placeholderMajelis } = require("./placeholder-data");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    placeholderBerita.map(async (berita) => {
      await prisma.berita.upsert({
        where: {
          slug: berita.slug,
        },
        update: berita,
        create: berita,
      });
    }),
  );
}

// async function main() {
//   await Promise.all(
//     placeholderMajelis.map(async (majelis) => {
//       await prisma.majelis.upsert({
//         where: {
//           slug: majelis.slug,
//         },
//         update: majelis,
//         create: majelis,
//       });
//     }),
//   );
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
