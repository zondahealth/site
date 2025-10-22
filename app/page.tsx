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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24">
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
        </div>

        <ColoredSection variant="blue">
          <div className="h-full flex flex-col">
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Plataforma de Gestión
              </h2>
              <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                Centralizá la gestión de pacientes, turnos, tratamientos y
                profesionales en una plataforma integrada, con métricas y mayor
                control operativo.
              </p>
              <GlassButton
                variant="blue"
                size="lg"
                glow="blue"
                className="group/btn w-fit mx-auto"
                onClick={() => (window.location.href = '/platform-org')}
              >
                <span>Explorar Plataforma de Gestión</span>
              </GlassButton>
            </div>
            <div className="mt-auto flex justify-center">
              <img
                src="/webshots/patients-cropped.png"
                alt="Plataforma de Gestión"
                className="w-[50%] h-auto object-cover drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </ColoredSection>
        <ColoredSection variant="yellow">
          <div className="h-full flex flex-col">
            <div className="flex justify-center">
              <img
                src="/appshots/app-down.png"
                alt="Plataforma Profesional"
                className="w-[25%] h-auto object-cover drop-shadow-[0_0_60px_rgba(0,0,0,0.95)]"
              />
            </div>
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Plataforma Profesionales
              </h2>
              <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                Herramientas especializadas para profesionales de la salud con
                funcionalidades avanzadas y control total de su práctica médica.
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
                <span>Ver Herramientas</span>
              </GlassButton>
            </div>
          </div>
        </ColoredSection>
        <ColoredSection variant="orange">
          <div className="text-center space-y-6">
            <img
              src="/webshots/metrics-floating.png"
              alt="Reportes y Datos"
              className="w-[35%] h-auto object-cover mx-auto"
            />
            <h2 className="text-3xl font-bold mb-4 text-white">
              Reportes y Datos
            </h2>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
              Obtené reportes personalizados y visualización de datos por
              región, unidad, profesional, diagnóstico, tratamiento y mucho más.
            </p>
            <GlassButton
              variant="orange"
              size="lg"
              glow="medium"
              className="group/btn"
              onClick={() => (window.location.href = '/data')}
            >
              <span>Ver Reportes</span>
            </GlassButton>
          </div>
        </ColoredSection>
        <ColoredSection variant="teal">
          <div className="text-center space-y-6">
            <img
              src="/misc/brain.png"
              alt="Razonamiento via IA"
              className="w-[20%] h-auto object-cover mx-auto"
            />
            <h2 className="text-3xl font-bold mb-4 text-white">
              Razonamiento via IA
            </h2>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
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
              <span>Descubrir IA</span>
            </GlassButton>
          </div>
        </ColoredSection>
        <ColoredSection variant="pink">
          <div className="h-full flex flex-col">
            <div className="text-center space-y-6 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Interoperabilidad
              </h2>
              <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                Nuestra API conecta sistemas existentes y facilita el
                intercambio seguro, estandarizado y eficiente de datos clínicos
                y administrativos.
              </p>
              <GlassButton
                variant="pink"
                size="lg"
                glow="medium"
                className="group/btn w-fit mx-auto"
                onClick={() => (window.location.href = '/interop')}
              >
                <span>Conectar Sistemas</span>
              </GlassButton>
            </div>
            <div className="mt-auto flex justify-center">
              <img
                src="/misc/console-cropped.png"
                alt="Interoperabilidad"
                className="w-[50%] h-auto object-cover drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
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
