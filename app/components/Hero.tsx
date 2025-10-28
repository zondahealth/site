'use client';

import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('home.hero');
  const tButtons = useTranslations('common.buttons');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-36 bg-gradient-to-br from-zonda-blue-dark via-zonda-blue to-zonda-blue-dark overflow-hidden min-h-screen flex items-center">
      {/* Stylish wave background pattern - covers most of hero */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-25"
        style={{
          backgroundImage: 'url(/background-lines.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          transform: 'scaleX(-1)',
          zIndex: 1,
        }}
      ></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,215,74,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(3,106,250,0.1),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-12 sm:space-y-14 lg:space-y-10 order-2 lg:order-1">
            <div className="space-y-8 sm:space-y-10 lg:space-y-8">
              <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white font-bold leading-tight">
                <span className="block">{t('title').split(' ')[0]}</span>
                <span className="relative inline-block">
                  <span className="text-zonda-yellow font-extrabold block drop-shadow-lg">
                    {t('title').split(' ').slice(1).join(' ')}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent bg-[length:200%_100%] animate-gradient-x bg-clip-text text-transparent font-extrabold">
                    {t('title').split(' ').slice(1).join(' ')}
                  </span>
                </span>
              </h1>

              <div className="space-y-6 sm:space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium tracking-wide">
                  {t('subtitle1')}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium tracking-wide">
                  {t('subtitle2')}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-zonda-orange text-white flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-fit hover:bg-zonda-yellow hover:text-zonda-blue-dark transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 text-base sm:text-lg"
              >
                {tButtons('contactUs')}{' '}
                <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Image - Hidden on mobile, visible on md and up */}
          <div className="hidden lg:block lg:order-2 relative">
            {/* Subtle dark glow effects */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-700/15 to-slate-800/20 rounded-lg blur-2xl animate-pulse opacity-40 scale-105"
              style={{ animationDuration: '4s' }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-l from-gray-800/25 via-slate-600/20 to-gray-800/25 rounded-lg blur-xl animate-pulse opacity-30 scale-110"
              style={{ animationDelay: '2s', animationDuration: '6s' }}
            ></div>

            {/* Single moving glow */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-slate-600/15 via-gray-800/20 to-slate-600/15 rounded-lg blur-2xl opacity-25 scale-115 animate-spin"
              style={{ animationDuration: '30s' }}
            ></div>

            {/* Image container with subtle glow and rocking motion */}
            <div className="relative z-10 p-4">
              <div className="animate-rocking">
                <ImageWithFallback
                  src="https://cdn.prod.website-files.com/678523f579864a099494bb62/685891a1ab9320c829afe285_zonda-health-mundo.png"
                  alt="Zonda Health Mundo"
                  className="w-full h-auto object-cover max-w-md mx-auto lg:max-w-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
