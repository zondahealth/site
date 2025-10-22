'use client';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArrowRight, Home } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function NotFound() {
  const scrollToHome = () => {
    window.location.href = '/';
  };

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 404 Hero Section */}
        <section className="relative py-16 sm:py-24 md:py-32 lg:py-36 overflow-hidden min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 sm:space-y-10 lg:space-y-8 flex-col flex">
                {/* 404 Error Code */}
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-zonda-yellow drop-shadow-lg">
                  404
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zonda-blue drop-shadow-lg">
                  Página no encontrada
                </div>
              </div>

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
        </section>
      </main>
      <Footer />
    </div>
  );
}
