import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    email?: string;
    url?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  navigation: Omit<NavigationItem, 'icon'>[];
  whatsapp: {
    number: string;
    message: {
      en: string;
      id: string;
    };
  };
  gtmId?: string;
}

export const siteConfig: SiteConfig = {
  name: 'Parenting Calm Authority',
  description:
    'Turn Chaos into Calm: A proven framework for parents to regain authority and peace in the home.',
  url: 'https://parenting-calm.com',

  author: {
    name: 'Your Name',
    email: 'hello@example.com',
    url: 'https://example.com',
  },

  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },

  navigation: [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'README', path: '/readme' },
    { title: 'License', path: '/mit-license' },
  ],
  whatsapp: {
    number: '+6281234567890', // Placeholder
    message: {
      en: "Hi, I'm interested in the Calm Authority workshop and would like to secure my spot.",
      id: 'Halo, saya tertarik dengan workshop Calm Authority dan ingin mengamankan slot saya.',
    },
  },
  gtmId: 'GTM-XXXXXX', // Placeholder
};
