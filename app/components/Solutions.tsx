'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { AppWindow, Brain, Cable, ChartLine, ArrowRight } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: AppWindow,
      title: 'Plataforma de Gestion',
      description:
        'Centralizá la gestión de pacientes, turnos, tratamientos y profesionales en una plataforma integrada, con métricas y mayor control operativo.',
      link: '/management',
    },
    {
      icon: Cable,
      title: 'Interoperabilidad',
      description:
        'Nuestra API conecta sistemas existentes y facilita el intercambio seguro, estandarizado y eficiente de datos clínicos y administrativos.',
      link: '/interop',
    },
    {
      icon: ChartLine,
      title: 'Reportes y Datos',
      description:
        'Obtené reportes personalizados y visualización de datos por región, unidad, profesional, diagnóstico, tratamiento y mucho más.',
      link: '/data',
    },
    {
      icon: Brain,
      title: 'Razonamiento via IA',
      description:
        'Convertimos datos en información clave mediante IA, ayudando a tomar mejores decisiones clínicas y optimizar procesos médicos.',
      link: '/ai',
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Soluciones Integrales para todo el ecosistema de la{' '}
            <span className="text-zonda-blue">Salud.</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              Creamos una{' '}
              <span className="font-semibold text-zonda-blue">
                infraestructura interoperable
              </span>{' '}
              que conecta múltiples soluciones existentes.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Somos la herramienta estratégica para instituciones que buscan
              escalar su{' '}
              <span className="font-semibold text-zonda-blue-dark">
                rentabilidad e impacto
              </span>{' '}
              sin tener que sobreinvertir o reemplazar sus sistemas actuales.
            </p>
          </div>
        </div>

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
                  <button
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-zonda-blue to-zonda-blue-dark text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/btn shadow-md"
                    onClick={() => (window.location.href = solution.link)}
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
