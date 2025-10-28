'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español', flag: '🇦🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const currentLanguage = languages.find((lang) => lang.code === locale)!;

  const handleLanguageChange = (newLocale: string) => {
    let pathWithoutLocale = pathname;

    if (pathname.startsWith(`/${locale}`)) {
      pathWithoutLocale = pathname.slice(`/${locale}`.length);
    }

    if (pathWithoutLocale === '' || pathWithoutLocale === '/') {
      pathWithoutLocale = '';
    }

    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const availableLanguages = languages.filter(
    (lang) => lang.code !== currentLanguage.code
  );

  return (
    <div className="relative w-full">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center text-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 py-3 px-4 rounded-lg text-sm font-medium border-2 border-gray-300 bg-white shadow-sm hover:border-zonda-blue hover:shadow-md"
      >
        <span>{currentLanguage.flag}</span>
        <ChevronDown className="h-3 w-3 text-gray-500" />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 text-gray-700"
            >
              <span>{language.flag}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
