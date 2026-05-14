import Image from 'next/image';
import Link from 'next/link';

const productLinks = [
  { href: '/products/profesionales', label: 'Profesionales' },
  { href: '/products/organizaciones', label: 'Organizaciones' },
  { href: '/products/interoperabilidad', label: 'Interoperabilidad' },
  {
    href: '/products/internacion-domiciliaria',
    label: 'Internación domiciliaria',
  },
];

const companyLinks = [
  { href: '/casos-de-uso', label: 'Casos de uso' },
  { href: '/desarrolladores', label: 'Desarrolladores' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/contacto', label: 'Contactanos' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-zonda-blue-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,140,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,234,0,0.08),transparent_24%)]" />

      <div className="layout-shell relative z-10 py-14 sm:py-16">
        <div className="grid gap-12 border-b border-[color:rgba(255,255,255,0.14)] pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Inicio de Zonda Health"
              className="inline-flex items-center"
            >
              <Image
                src="/logo/white-full-logo.png"
                alt="Zonda Health"
                width={164}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 text-base leading-relaxed text-[color:rgba(248,250,255,0.76)]">
              Infraestructura digital para salud en América Latina, diseñada
              para conectar operación, interoperabilidad y decisiones clínicas
              con más claridad.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[color:rgba(248,250,255,0.7)]">
              Productos
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-white/88 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[color:rgba(248,250,255,0.7)]">
              Navegación
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-white/88 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://azul.zondahealth.com"
                className="text-base font-medium text-white/88 transition-colors duration-200 hover:text-white"
              >
                Iniciar sesión
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-[color:rgba(248,250,255,0.68)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Zonda Health. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-1 sm:items-end">
            <a
              href="mailto:support@zondahealth.com"
              className="transition-colors duration-200 hover:text-white"
            >
              support@zondahealth.com
            </a>
            <p>San Juan, Argentina</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
