'use client';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { WeHelp } from './components/WeHelp';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ColoredSection } from './components/ColoredSection';
import { GlassButton } from './components/ui/glass-button';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative pt-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Transformamos la{' '}
              <span className="text-zonda-blue">Gestión Sanitaria</span> con
              Tecnología Avanzada
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Desarrollamos{' '}
                <span className="font-semibold text-zonda-blue">
                  infraestructuras digitales interoperables
                </span>{' '}
                que unifican sistemas fragmentados, optimizando flujos de
                trabajo y mejorando la calidad asistencial.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nuestra plataforma integral permite a organizaciones sanitarias{' '}
                <span className="font-semibold bg-gradient-to-r from-zonda-blue to-blue-600 bg-clip-text text-transparent">
                  maximizar su eficiencia operativa y rentabilidad
                </span>{' '}
                mediante la integración inteligente de tecnologías existentes,
                sin necesidad de reemplazar inversiones previas.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zonda-blue">+40%</div>
                  <div className="text-sm text-gray-700 font-medium">
                    Eficiencia Operativa
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zonda-blue">-60%</div>
                  <div className="text-sm text-gray-700 font-medium">
                    Tiempo de Gestión
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zonda-blue">100%</div>
                  <div className="text-sm text-gray-700 font-medium">
                    Interoperabilidad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ColoredSection variant="blue">
          <div className="h-full flex flex-col">
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Gestión Sanitaria Integral
              </h2>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
                Unifica la administración de pacientes, agenda médica, historias
                clínicas y recursos humanos en una solución centralizada con
                analytics avanzados y control operativo en tiempo real.
              </p>
              <GlassButton
                variant="blue"
                size="lg"
                glow="blue"
                className="group/btn w-fit mx-auto"
                onClick={() => (window.location.href = '/platform-org')}
              >
                <span>Descubrir Solución Integral</span>
              </GlassButton>
            </div>
            <div className="mt-auto flex justify-center">
              <img
                src="/webshots/patients-cropped.png"
                alt="Plataforma de Gestión"
                className="w-[70%] md:w-[60%] lg:w-[50%] h-auto object-cover drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </ColoredSection>
        <ColoredSection variant="yellow">
          <div className="h-full flex flex-col">
            <div className="flex justify-center px-6 sm:px-8 lg:px-12">
              <img
                src="/appshots/app-down.png"
                alt="Plataforma Profesional"
                className="w-[50%] md:w-[40%] lg:w-[30%] h-auto object-cover drop-shadow-[0_0_60px_rgba(0,0,0,0.95)]"
              />
            </div>
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Plataforma Profesional
              </h2>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
                Tecnología especializada para profesionales sanitarios con
                herramientas de diagnóstico asistido, gestión de consultas y
                análisis predictivo para optimizar la práctica clínica.
              </p>
              <GlassButton
                variant="orange"
                size="lg"
                glow="medium"
                className="group/btn w-fit mx-auto"
                onClick={() =>
                  (window.location.href = '/platform-professional')
                }
              >
                <span>Explorar Plataforma Profesional</span>
              </GlassButton>
            </div>
          </div>
        </ColoredSection>
        <ColoredSection variant="orange">
          <div className="text-center space-y-6 px-6 sm:px-8 lg:px-12">
            <img
              src="/webshots/metrics-floating.png"
              alt="Reportes y Datos"
              className="w-[60%] md:w-[50%] lg:w-[40%] h-auto object-cover mx-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            />
            <h2 className="text-3xl font-bold mb-4 text-white">
              Reportes y Analítica Clínica
            </h2>
            <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
              Dashboard ejecutivo con métricas de rendimiento, análisis
              predictivo de demanda, indicadores de calidad asistencial y
              reportes personalizados por unidad, profesional y especialidad
              médica.
            </p>
            <GlassButton
              variant="orange"
              size="lg"
              glow="medium"
              className="group/btn"
              onClick={() => (window.location.href = '/data')}
            >
              <span>Acceder a Analytics</span>
            </GlassButton>
          </div>
        </ColoredSection>
        <ColoredSection variant="teal">
          <div className="text-center space-y-6 px-6 sm:px-8 lg:px-12">
            <img
              src="/misc/brain.png"
              alt="Razonamiento via IA"
              className="w-[40%] md:w-[30%] lg:w-[25%] h-auto object-cover mx-auto drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            />
            <h2 className="text-3xl font-bold mb-4 text-white">
              Inteligencia Artificial Clínica
            </h2>
            <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
              Convertimos datos en información clave mediante IA, ayudando a
              tomar mejores decisiones clínicas y optimizar procesos médicos.
            </p>
            <GlassButton
              variant="green"
              size="lg"
              glow="green"
              className="group/btn"
              onClick={() => (window.location.href = '/ai')}
            >
              <span>Explorar IA Clínica</span>
            </GlassButton>
          </div>
        </ColoredSection>
        <ColoredSection variant="pink">
          <div className="h-full flex flex-col">
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Interoperabilidad
              </h2>
              <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
                Nuestra API conecta sistemas existentes y facilita el
                intercambio seguro, estandarizado y eficiente de datos clínicos
                y administrativos, sin necesidad de reemplazar inversiones
                previas.
              </p>
              <GlassButton
                variant="pink"
                size="lg"
                glow="medium"
                className="group/btn w-fit mx-auto"
                onClick={() => (window.location.href = '/interop')}
              >
                <span>Integrar Tecnologías</span>
              </GlassButton>
            </div>
            <div className="mt-auto flex justify-center px-6 sm:px-8 lg:px-12">
              <img
                src="/misc/console-cropped.png"
                alt="Interoperabilidad"
                className="w-[85%] md:w-[60%] lg:w-[50%] h-auto object-cover drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </ColoredSection>
        <WeHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
