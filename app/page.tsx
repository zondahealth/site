import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { WeHelp } from './components/WeHelp';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ColoredSection } from './components/ColoredSection';

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
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Plataforma Gestión
            </h2>
            <p className="text-lg text-white">
              Centralizá la gestión de pacientes, turnos, tratamientos y
              profesionales en una plataforma integrada
            </p>
          </div>
        </ColoredSection>
        <ColoredSection variant="yellow">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Plataforma Profesionales
            </h2>
            <p className="text-lg text-white">
              Herramientas especializadas para profesionales de la salud con
              funcionalidades avanzadas
            </p>
          </div>
        </ColoredSection>
        <ColoredSection variant="orange">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Reportes y Data
            </h2>
            <p className="text-lg text-white">
              Obtené reportes personalizados y visualización de datos por
              región, unidad, profesional y diagnóstico
            </p>
          </div>
        </ColoredSection>
        <ColoredSection variant="teal">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              AI y Razonamiento
            </h2>
            <p className="text-lg text-white">
              Convertimos datos en información clave mediante IA, ayudando a
              tomar mejores decisiones clínicas
            </p>
          </div>
        </ColoredSection>
        <ColoredSection variant="pink">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Interoperabilidad
            </h2>
            <p className="text-lg text-white">
              Nuestra API conecta sistemas existentes y facilita el intercambio
              seguro y eficiente de datos clínicos
            </p>
          </div>
        </ColoredSection>
        <WeHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
