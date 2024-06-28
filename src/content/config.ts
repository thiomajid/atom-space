import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    heroImage: z.string(),
    draft: z.boolean().default(true),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1).max(5).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    heroImage: z.string(),
    draft: z.boolean().default(true),
    state: z.enum(["Complete", "Paused", "In Progress"]).default("Paused"),
    repository: z.string().optional(),
    liveLink: z.string().optional(),
    liveLinkText: z.string().optional(),
    tags: z.array(z.string()).min(1).optional(),
  }),
});

export const collections = { blog, projects };
