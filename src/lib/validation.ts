import { z } from "zod";

const requiredString = z.string().min(1, "Required");

const imageBerita = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be an image file",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");

export const createBeritaSchema = z.object({
  title: requiredString.max(100),
  description: z.string().max(5000).optional(),
  imageUrl: imageBerita,
});

export type CreateBeritaValues = z.infer<typeof createBeritaSchema>;
