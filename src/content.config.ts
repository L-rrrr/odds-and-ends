import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // "tech" shows under "tech, explained"; "anything" under "anything else"
    kind: z.enum(['tech', 'anything']),
    // optional: the AI prompt that would get you the same answer
    prompt: z.string().optional(),
    // set to true to keep a note off the site while you're still writing it
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
