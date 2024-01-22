import { z } from "zod";

const requiredString = z.string().min(1, "Required");

export const createBeritaSchema = z.object({
  title: requiredString.max(100),
  description: z.string().max(5000).optional(),
  imageUrl: z.string(),
});

export type CreateBeritaValues = z.infer<typeof createBeritaSchema>;

export const editBeritaSchema = z.object({
  id: z.string(),
  title: requiredString.max(100),
  description: z.string().max(5000).optional(),
  imageUrl: z.string(),
});

export type EditBeritaValues = z.infer<typeof editBeritaSchema>;

export const createMajelisSchema = z.object({
  nama: requiredString.max(100),
  bidang: requiredString.max(100),
  imageUrl: z.string(),
});

export type CreateMajelisValues = z.infer<typeof createMajelisSchema>;

export const editMajelisSchema = z.object({
  id: z.string(),
  nama: requiredString.max(100),
  bidang: requiredString.max(100),
  imageUrl: z.string(),
});

export type EditMajelisValues = z.infer<typeof editMajelisSchema>;

const BasicImageSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const PhotoSchema = z.object({
  blurredDataUrl: z.string().optional(),
});

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>;
export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>;
