import { defineCollection, z } from "astro:content";

// Writing collection schema
const writingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  writing: writingCollection,
};
