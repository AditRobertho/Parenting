import { languages } from '@/i18n/ui';
import { getRouteFromUrl } from '@/utils/i18n';

export default function LanguageToggle({ currentLang, url }: { currentLang: string, url: URL }) {
  const route = getRouteFromUrl(url);

  return (
    <div className="flex gap-2">
      {Object.entries(languages).map(([lang, label]) => (
        <a
            key={lang}
            href={`/${lang}${route ? `/${route}` : ''}`}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
              ${currentLang === lang 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
