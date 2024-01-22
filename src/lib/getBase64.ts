import { getPlaiceholder } from "plaiceholder";
import { Berita } from "@prisma/client";

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    //console.log(base64)

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default async function addBlurredDataUrls(
  images: Berita[],
): Promise<Berita[]> {
  // Make all requests at once instead of awaiting each one - avoiding a waterfall
  const base64Promises = images.map((photo) => getBase64(photo.imageUrl!));

  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Berita[] = images.map((photo, i) => {
    return {
      ...photo,
      blur: base64Results[i],
    };
  });

  return photosWithBlur;
}
