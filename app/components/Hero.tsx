'use client';

import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
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
    <section className="relative py-24 sm:py-32 lg:py-36 bg-gradient-to-br from-zonda-blue-dark via-zonda-blue to-zonda-blue-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,215,74,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(3,106,250,0.1),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white font-bold leading-tight">
                Transformando
                <span className="relative inline-block">
                  <span className="text-zonda-yellow font-extrabold block drop-shadow-lg">
                    la Salud.
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent bg-[length:200%_100%] animate-gradient-x bg-clip-text text-transparent font-extrabold">
                    la Salud.
                  </span>
                </span>
              </h1>

              <div className="space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg text-white leading-relaxed font-medium tracking-wide">
                  Promovemos la eficiencia de las instituciones de salud en
                  América Latina.
                </p>
                <p className="text-base sm:text-lg text-white leading-relaxed font-medium tracking-wide">
                  Empresas de todos los tamaños pueden gestionar sus operaciones
                  completas de manera rápida, segura y flexible usando el
                  software y API de Zonda.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full bg-zonda-orange text-white flex items-center gap-3 w-fit hover:bg-zonda-yellow hover:text-zonda-blue-dark transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
              >
                Contactanos <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Image - Hidden on mobile, visible on md and up */}
          <div className="hidden lg:block lg:order-2 relative">
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
