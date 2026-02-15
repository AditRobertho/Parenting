import { siteConfig } from '@/config/site';

/**
 * Generates a WhatsApp deep link with a pre-filled message.
 *
 * @param phone - The target phone number (optional, defaults to config).
 * @param message - The message to pre-fill (optional, defaults to config based on lang).
 * @param lang - The language for the default message ('en' or 'id').
 * @returns The formatted WhatsApp URL.
 */
export function generateWhatsAppLink(
  lang: 'en' | 'id' = 'en',
  phone?: string,
  message?: string
): string {
  const targetPhone = phone || siteConfig.whatsapp.number;
  // Remove any non-numeric characters from the phone number
  const sanitizedPhone = targetPhone.replace(/\D/g, '');

  let targetMessage = message;

  if (!targetMessage) {
    targetMessage =
      lang === 'id'
        ? siteConfig.whatsapp.message.id
        : siteConfig.whatsapp.message.en;
  }

  const encodedMessage = encodeURIComponent(targetMessage);

  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}
