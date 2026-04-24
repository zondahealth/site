'use client';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ArrowRight, Home } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 404 Hero Section */}
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
              <div className="space-y-8 sm:space-y-10 lg:space-y-8 flex-col flex">
                {/* 404 Error Code */}
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-zonda-yellow drop-shadow-lg">
                  404
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                  {t('title')}
                </div>
                <div className="text-lg text-white/80 max-w-md">
                  {t('description')}
                </div>
                <div className="flex gap-4">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 bg-zonda-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-zonda-yellow hover:text-zonda-blue-dark transition-colors"
                  >
                    <Home className="h-5 w-5" />
                    {t('goHome')}
                  </a>
                  <a
                    href="/platform-professional"
                    className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-zonda-blue transition-colors"
                  >
                    {t('exploreSolutions')}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Image container with subtle glow and rocking motion */}
              <div className="relative z-10 p-4">
                {/* Subtle dark glow effects */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-700/15 to-slate-800/20 rounded-full blur-2xl animate-pulse opacity-40 scale-105"
                  style={{ animationDuration: '4s' }}
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-l from-gray-800/25 via-slate-600/20 to-gray-800/25 rounded-full blur-xl animate-pulse opacity-30 scale-110"
                  style={{ animationDelay: '2s', animationDuration: '6s' }}
                ></div>

                {/* Single moving glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-slate-600/15 via-gray-800/20 to-slate-600/15 rounded-full blur-2xl opacity-25 scale-115 animate-spin"
                  style={{ animationDuration: '30s' }}
                ></div>

                <div className="animate-rocking relative z-10">
                  <ImageWithFallback
                    src="https://cdn.prod.website-files.com/678523f579864a099494bb62/685891a1ab9320c829afe285_zonda-health-mundo.png"
                    alt="Zonda Health Mundo"
                    className="w-full h-auto object-cover max-w-md mx-auto lg:max-w-none drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
