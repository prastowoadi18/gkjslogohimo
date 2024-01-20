import { z } from "zod";

const requiredString = z.string().min(1, "Required");

export const createBeritaSchema = z.object({
  title: requiredString.max(100),
  description: z.string().max(5000).optional(),
  imageUrl: z.string(),
});

export type CreateBeritaValues = z.infer<typeof createBeritaSchema>;
