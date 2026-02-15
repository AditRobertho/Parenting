import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    order: z.number().default(0),
    chaosText: z.string().optional(),
    calmText: z.string().optional(),
    ctaText: z.string().optional(),
    headline: z.string().optional(),
    bodyText: z.string().optional(),
    authorImage: z.string().optional(),
    authorName: z.string().optional(),
    authorTitle: z.string().optional(),
    testimonials: z
      .array(
        z.object({
          name: z.string(),
          age: z.string(),
          quote: z.string(),
        })
      )
      .optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
    component: z.enum(['hero', 'prose', 'testimonials', 'faq', 'final-close']),
  }),
});

export const collections = {
  sections,
};
