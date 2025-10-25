'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ChevronDown, Globe } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Extract locale from pathname instead of using useLocale hook
  const locale = pathname.startsWith('/en') ? 'en' : 'es';

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    // Get the current path without the locale prefix
    let pathWithoutLocale = pathname;

    // Remove the current locale prefix if it exists
    if (pathname.startsWith(`/${locale}`)) {
      pathWithoutLocale = pathname.slice(`/${locale}`.length);
    }

    // Handle root path case
    if (pathWithoutLocale === '' || pathWithoutLocale === '/') {
      pathWithoutLocale = '';
    }

    // Navigate to the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center space-x-2 text-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 py-3 px-4 rounded-lg text-sm font-medium border-2 border-gray-300 bg-white shadow-sm hover:border-zonda-blue hover:shadow-md"
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-gray-800 font-semibold">
          {currentLanguage.name}
        </span>
        <ChevronDown className="h-3 w-3 text-gray-500" />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                language.code === locale
                  ? 'bg-zonda-blue/10 text-zonda-blue font-semibold'
                  : 'text-gray-700'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
