// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  posts,
};

const blog = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    excerpt: z.string().optional(),
  }),
});

const about = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    image: z.string().optional(), // or image().optional() if using Astro image integration
  }),
});

