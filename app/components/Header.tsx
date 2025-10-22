'use client';

import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: 'Soluciones',
    children: [
      { label: 'Plataformas', href: '/management' },
      { label: 'Interoperabilidad', href: '/interop' },
      { label: 'Reportes y Datos', href: '/data' },
      { label: 'IA Razonamiento', href: '/ai' },
    ],
  },
  {
    label: 'Desarrolladores',
    href: 'https://zondahealth.readme.io/reference/getpatients',
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4 pointer-events-auto">
        <div className="bg-white/95 rounded-full px-6 py-3 shadow-2xl border border-zonda-blue/10 backdrop-blur-md">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <a
                href="/"
                className="flex-shrink-0 inline-block"
                tabIndex={0}
                aria-label="Zonda Health"
              >
                <Image
                  src="/zonda-full.svg"
                  alt="Zonda Health"
                  width={180}
                  height={180}
                  className="h-12 w-auto"
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      item.children && setActiveDropdown(item.label)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 py-2 px-3 rounded-md text-sm"
                      >
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <button className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 py-2 px-3 rounded-md text-sm">
                        <span>{item.label}</span>
                        {item.children && <ChevronDown className="h-3 w-3" />}
                      </button>
                    )}

                    {/* Dropdown Menu */}
                    {item.children && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 font-semibold text-sm"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="https://app.zondahealth.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-zonda-blue text-zonda-blue hover:bg-zonda-blue hover:text-white transition-colors duration-200 font-medium text-sm px-4 py-2"
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link
                href="https://app.zondahealth.com/auth/registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-zonda-blue hover:bg-zonda-blue-dark text-white transition-colors duration-200 font-medium text-sm px-4 py-2">
                  Crear Cuenta de Profesional
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-zonda-blue-dark hover:bg-zonda-yellow/10"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 border-t border-zonda-blue/20 rounded-lg shadow-lg">
              {/* Mobile Navigation Items */}
              <div className="px-3 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-gray-700 font-semibold hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 rounded-md text-sm"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <div className="block px-3 py-2 text-gray-700 font-semibold text-sm">
                        {item.label}
                      </div>
                    )}
                    {/* Mobile Submenu */}
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200 rounded-md font-semibold"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="px-3 py-2 space-y-2 border-t border-zonda-blue/10 mt-4 pt-4">
                <Link
                  href="https://app.zondahealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-zonda-blue text-zonda-blue hover:bg-zonda-blue hover:text-white transition-colors duration-200"
                  >
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link
                  href="https://app.zondahealth.com/auth/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-zonda-blue hover:bg-zonda-blue-dark text-white transition-colors duration-200">
                    Crear Cuenta de Profesional
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
