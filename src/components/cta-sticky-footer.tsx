import { useEffect, useState } from 'react';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

interface StickyFooterProps {
  lang: 'en' | 'id';
}

export const StickyFooter = ({ lang }: StickyFooterProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px (past hero roughly)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = generateWhatsAppLink(lang);

  const handleTrackClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'click_whatsapp',
        language: lang,
        location: 'sticky_footer',
      });
    }
  };

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-t p-4 md:hidden transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="flex flex-col gap-2 max-w-md mx-auto">
        <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
          <span className="font-medium text-foreground">
            {lang === 'en' ? 'Limited Spots Available' : 'Tempat Terbatas'}
          </span>
          <span>{lang === 'en' ? '4 Spots Left' : 'Sisa 4 Slot'}</span>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          onClick={handleTrackClick}
        >
          <Button
            size="lg"
            className="w-full font-bold shadow-lg bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {lang === 'en' ? 'Secure Your Spot' : 'Amankan Slot Anda'}
          </Button>
        </a>
      </div>
    </div>
  );
};
