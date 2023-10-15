import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  schema: ({ image }) =>  z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    cover: image().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
};
