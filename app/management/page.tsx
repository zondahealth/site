import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 bg-gradient-to-br from-zonda-blue/6 to-zonda-blue-dark/4 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-zonda-blue/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-zonda-blue-dark/6 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Plataforma de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                  Gestión
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                Ofrecemos una plataforma digital integral de gestión para
                instituciones de salud que permite centralizar operaciones clave
                como la administración de pacientes, turnos, tratamientos y
                profesionales.
              </p>
            </div>

            {/* Platform Screenshot - Simple */}
            <div className="relative max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-zonda-blue/15 bg-gradient-to-br from-zonda-blue/5 via-zonda-blue/10 to-zonda-blue-dark/10 ring-1 ring-zonda-blue/10 backdrop-blur">
              {/* Decorative Background Shapes */}
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-zonda-blue/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute bottom-0 right-0 w-72 h-48 bg-zonda-yellow/10 rounded-bl-3xl blur-2xl z-0"></div>
              <video
                src="/webshots/records-moving.mp4"
                autoPlay
                loop={false}
                muted
                playsInline
                className="relative w-full h-auto max-h-[600px] object-contain z-10"
              />
            </div>
          </div>
        </section>

        <section className="text-center pt-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Plataforma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
              Profesional
            </span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto font-medium leading-relaxed">
            Herramientas especializadas para profesionales de la salud que les
            permiten interactuar con la data de sus pacientes y optimizar su
            práctica médica
          </p>
          <div className="flex justify-center items-center w-full pt-8">
            <img
              src="/appshots/header.png"
              className="w-full lg:w-2/3 h-auto object-contain"
              alt="Header"
            />
          </div>
        </section>

        {/* Professional Platform Section */}
        <section className="py-20 bg-gradient-to-br from-zonda-blue via-zonda-blue-dark to-black relative overflow-hidden">
          {/* Cool background elements */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex lg:flex-row flex-col gap-16 items-stretch">
              {/* Left: Simplified Text Content */}
              <div className="flex-1 flex flex-col gap-8 justify-between">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Funcionalidades Clave
                  </h3>
                  <div className="space-y-4 text-white/90 font-medium">
                    <p>• Interacción directa con data de pacientes</p>
                    <p>• Organización con múltiples instituciones</p>
                    <p>• Registro de nuevos registros médicos</p>
                    <p>• Prescripción digital de medicamentos</p>
                    <p>• Análisis del estado del paciente por visita</p>
                    <p>• Historial médico completo y accesible</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Beneficios Principales
                  </h4>
                  <div className="space-y-3 text-white/85 font-medium">
                    <p>
                      Acceso unificado a información de pacientes desde
                      múltiples instituciones
                    </p>
                    <p>Registro eficiente de consultas y tratamientos</p>
                    <p>Prescripción digital integrada</p>
                    <p>Seguimiento detallado de la evolución del paciente</p>
                  </div>
                </div>
              </div>

              {/* Right: Enhanced Image Container */}
              <div className="flex-1 flex justify-center items-center">
                <div className="relative w-full h-full flex items-center">
                  {/* Glowing effect */}
                  <img
                    src="/appshots/cool.png"
                    alt="Plataforma Profesional"
                    className="rounded-2xl object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
