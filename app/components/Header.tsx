'use client';

import { Button } from './ui/button';
import {
  Menu,
  X,
  ChevronDown,
  User,
  Building2,
  Network,
  BarChart3,
  Brain,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  icon?: React.ComponentType<{ className?: string }>;
}

const navigationItems: NavItem[] = [
  {
    label: 'Soluciones',
    children: [
      {
        label: 'Plataforma Profesional',
        href: '/platform-professional',
        icon: User,
      },
      {
        label: 'Plataforma Organización',
        href: '/platform-org',
        icon: Building2,
      },
      { label: 'Interoperabilidad', href: '/interop', icon: Network },
      { label: 'Reportes y Datos', href: '/data', icon: BarChart3 },
      { label: 'IA Razonamiento', href: '/ai', icon: Brain },
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
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemLabel: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4 pointer-events-auto">
        <div className="bg-white/70 rounded-full px-6 py-3 shadow-2xl border border-zonda-blue/10 backdrop-blur-md">
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
                      item.children && handleMouseEnter(item.label)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-1 transition-all duration-300 py-2 px-4 rounded-lg text-sm font-medium ${
                          item.label === 'Desarrolladores'
                            ? 'bg-gradient-to-r from-zonda-blue to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transform hover:from-blue-600 hover:to-zonda-blue'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-semibold tracking-wide">
                          {item.label}
                        </span>
                        {item.label === 'Desarrolladores' && (
                          <span className="ml-1 text-xs bg-white/20 px-1.5 py-0.5 rounded-full font-bold">
                            API
                          </span>
                        )}
                      </a>
                    ) : (
                      <button className="flex items-center space-x-1 text-gray-700 font-semibold hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 py-2 px-4 rounded-lg text-sm hover:scale-105 transform">
                        <span className="font-semibold tracking-wide">
                          {item.label}
                        </span>
                        {item.children && <ChevronDown className="h-3 w-3" />}
                      </button>
                    )}

                    {/* Dropdown Menu */}
                    {item.children && activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-4 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="grid grid-cols-3 gap-2 px-4">
                          {item.children.map((child) => {
                            const IconComponent = child.icon;
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                className="flex flex-col items-center space-y-2 p-4 text-gray-700 hover:bg-gradient-to-r hover:from-zonda-blue/5 hover:to-blue-50 hover:text-zonda-blue transition-all duration-300 font-semibold text-sm rounded-lg hover:scale-[1.02] transform group"
                              >
                                {IconComponent && (
                                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-zonda-blue/10 transition-colors duration-300">
                                    <IconComponent className="h-5 w-5 text-gray-500 group-hover:text-zonda-blue transition-colors duration-300" />
                                  </div>
                                )}
                                <span className="text-center text-xs leading-tight">
                                  {child.label}
                                </span>
                              </a>
                            );
                          })}
                        </div>
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
                  className="border-zonda-blue text-zonda-blue hover:bg-zonda-blue hover:text-white transition-all duration-300 font-semibold text-sm px-5 py-2.5 rounded-lg hover:scale-105 transform shadow-md hover:shadow-lg"
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link
                href="https://app.zondahealth.com/auth/registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-zonda-blue to-blue-600 hover:from-blue-600 hover:to-zonda-blue text-white transition-all duration-300 font-semibold text-sm px-5 py-2.5 rounded-lg hover:scale-105 transform shadow-lg hover:shadow-xl">
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/70 border-t border-zonda-blue/20 rounded-lg shadow-lg backdrop-blur-md">
              {/* Mobile Navigation Items */}
              <div className="px-3 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-4 py-3 font-semibold transition-all duration-300 rounded-lg text-sm ${
                          item.label === 'Desarrolladores'
                            ? 'bg-gradient-to-r from-zonda-blue to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transform hover:from-blue-600 hover:to-zonda-blue'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold tracking-wide">
                            {item.label}
                          </span>
                          {item.label === 'Desarrolladores' && (
                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-bold">
                              API
                            </span>
                          )}
                        </div>
                      </a>
                    ) : (
                      <div className="block px-4 py-3 text-gray-700 font-semibold text-sm">
                        <span className="font-semibold tracking-wide">
                          {item.label}
                        </span>
                      </div>
                    )}
                    {/* Mobile Submenu */}
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => {
                          const IconComponent = child.icon;
                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-zonda-blue/5 hover:to-blue-50 hover:text-zonda-blue transition-all duration-300 rounded-lg font-semibold hover:scale-105 transform group"
                            >
                              {IconComponent && (
                                <div className="p-1.5 bg-gray-100 rounded-md group-hover:bg-zonda-blue/10 transition-colors duration-300">
                                  <IconComponent className="h-4 w-4 text-gray-500 group-hover:text-zonda-blue transition-colors duration-300" />
                                </div>
                              )}
                              <span>{child.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="px-3 py-2 space-y-3 border-t border-zonda-blue/10 mt-4 pt-4">
                <Link
                  href="https://app.zondahealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-zonda-blue text-zonda-blue hover:bg-zonda-blue hover:text-white transition-all duration-300 font-semibold py-3 rounded-lg hover:scale-105 transform shadow-md hover:shadow-lg"
                  >
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link
                  href="https://app.zondahealth.com/auth/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-zonda-blue to-blue-600 hover:from-blue-600 hover:to-zonda-blue text-white transition-all duration-300 font-semibold py-3 rounded-lg hover:scale-105 transform shadow-lg hover:shadow-xl">
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
