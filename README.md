# Meaningful Parenting - "Calm Authority" Campaign

A high-performance, mobile-first campaign page for the **"Calm Authority" Parenting Workshop**.
Built with **Astro 5**, **React 19**, **Tailwind CSS v4**, and **Shadcn/UI**.

## 🚀 Project Overview

This project is a single-page conversion engine designed to validate the "Calm Authority" workshop offer.
It features:
- **Zero-JS Default Strategy**: Static HTML first for instant load times.
- **Bilingual Support**: English (`/en/`) and Bahasa Indonesia (`/id/`).
- **Conversational Commerce**: Direct integration with WhatsApp API for conversion.
- **Mobile-First Design**: Optimized for vertical scrolling and "thumb zone" ergonomics.

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build) (Static Site Generation)
- **UI Library**: [React 19](https://react.dev) + [Shadcn/UI](https://ui.shadcn.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Analytics**: GA4 via Google Tag Manager
- **Hosting**: Netlify

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📂 Project Structure

- `src/pages/[lang]/` - Localized campaign pages
- `src/components/ui/` - Shadcn UI components
- `src/content/sections/` - Markdown content for story sections
- `src/utils/whatsapp.ts` - WhatsApp link generator with pre-filled messages

## 🚢 Deployment

Target: **Netlify**
Build Command: `npm run build`
Publish Directory: `dist`

## 📄 License

Proprietary. All rights reserved.
