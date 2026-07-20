import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pen & Press (newsroom). To publish, add a .md file to src/content/insights/
// with type: "press-release", "perspective", or "letter" — no code changes needed.
const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('R&R Communications'),
    tags: z.array(z.string()).default([]),
    type: z.enum(['press-release', 'perspective', 'letter']).default('perspective'),
    client: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    image2: z.string().optional(),
    image2Alt: z.string().optional(),
  }),
});

export const collections = { insights };
