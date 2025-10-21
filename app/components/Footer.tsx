import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gradient-to-br from-zonda-blue-dark to-zonda-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/Zonda_Logotipo-blanco.png"
                alt="Zonda Health Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Transformando la gestión de salud con tecnología innovadora.
              Simplificamos la administración médica para profesionales y
              pacientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Soluciones
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  Inteligencia Artificial
                </Link>
              </li>
              <li>
                <Link
                  href="/data"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  Análisis de Datos
                </Link>
              </li>
              <li>
                <Link
                  href="/interop"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  Interoperabilidad
                </Link>
              </li>
              <li>
                <Link
                  href="/management"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  Gestión Administrativa
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Desarrolladores
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://zondahealth.readme.io/reference/getpatients"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  Documentación API
                </a>
              </li>
              <li>
                <a
                  href="https://zondahealth.readme.io/reference/getpatients"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  Referencia API
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@zondahealth.com"
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                >
                  support@zondahealth.com
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm">
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm">
              © {currentYear} Zonda Health. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>San Juan, Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
