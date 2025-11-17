'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import { Contact } from './Contact';

type CaseStudyLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function CaseStudyLayout({ title, children }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Title Section */}
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight text-center">
              {title}
            </h1>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:px-32 lg:py-16">
            {/* Blog Post Content */}
            <div className="prose prose-lg max-w-none">{children}</div>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
