'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { GlassButton } from './ui/glass-button';
import { AppWindow, Brain, Cable, ChartLine, ArrowRight } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: AppWindow,
      title: 'Plataforma de Gestion',
      description:
        'Centralizá la gestión de pacientes, turnos, tratamientos y profesionales en una plataforma integrada, con métricas y mayor control operativo.',
      link: '/management',
      buttonVariant: 'blue' as const,
      buttonGlow: 'blue' as const,
    },
    {
      icon: Cable,
      title: 'Interoperabilidad',
      description:
        'Nuestra API conecta sistemas existentes y facilita el intercambio seguro, estandarizado y eficiente de datos clínicos y administrativos.',
      link: '/interop',
      buttonVariant: 'purple' as const,
      buttonGlow: 'purple' as const,
    },
    {
      icon: ChartLine,
      title: 'Reportes y Datos',
      description:
        'Obtené reportes personalizados y visualización de datos por región, unidad, profesional, diagnóstico, tratamiento y mucho más.',
      link: '/data',
      buttonVariant: 'green' as const,
      buttonGlow: 'green' as const,
    },
    {
      icon: Brain,
      title: 'Razonamiento via IA',
      description:
        'Convertimos datos en información clave mediante IA, ayudando a tomar mejores decisiones clínicas y optimizar procesos médicos.',
      link: '/ai',
      buttonVariant: 'orange' as const,
      buttonGlow: 'medium' as const,
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group relative bg-white hover:bg-white transition-all duration-300 border border-gray-200 hover:border-zonda-blue/30 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 h-full flex flex-col rounded-2xl overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zonda-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="text-center pb-4 flex-grow relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zonda-blue/10 to-zonda-blue/20 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-zonda-blue group-hover:to-zonda-blue-dark group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Icon className="w-10 h-10 text-zonda-blue group-hover:text-white transition-colors duration-300" />
                  </div>

                  <CardTitle className="text-xl mb-4 font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>

                  <CardDescription className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 mt-auto relative z-10">
                  <GlassButton
                    variant="blue"
                    size="lg"
                    glow="blue"
                    className="w-full group/btn"
                    onClick={() => (window.location.href = solution.link)}
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </GlassButton>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
