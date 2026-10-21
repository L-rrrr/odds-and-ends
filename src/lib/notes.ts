import { getCollection } from 'astro:content';

export const kindLabel = { tech: 'tech, explained', anything: 'anything else' } as const;

// e.g. "oct 2026"
export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' }).toLowerCase();

// published notes, newest first
export const getNotes = async () =>
  (await getCollection('notes', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const noteUrl = (id: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/notes/${id}/`;
