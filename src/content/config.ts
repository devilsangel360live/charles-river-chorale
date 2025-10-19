import { defineCollection, z } from 'astro:content';

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    priority: z.enum(['low', 'normal', 'high']).default('normal'),
    published: z.boolean().default(true),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eventDate: z.coerce.date(),
    eventTime: z.string().optional(),
    location: z.string(),
    description: z.string(),
    eventType: z.enum(['rehearsal', 'performance', 'meeting', 'other']).default('rehearsal'),
    published: z.boolean().default(true),
  }),
});

const sheetMusic = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    composer: z.string(),
    arranger: z.string().optional(),
    concert: z.string(),
    voicePart: z.enum(['Soprano', 'Alto', 'Tenor', 'Bass', 'All Parts']).default('All Parts'),
    pdfFile: z.string().optional(),
    practiceTrack: z.string().optional(),
    notes: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Handbook', 'Guidelines', 'Forms', 'Other']).default('Other'),
    description: z.string(),
    file: z.string().optional(),
    link: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const directory = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    voicePart: z.enum(['Soprano', 'Alto', 'Tenor', 'Bass']).optional(),
    joinDate: z.string().optional(),
    role: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  announcements,
  events,
  'sheet-music': sheetMusic,
  resources,
  directory,
};
