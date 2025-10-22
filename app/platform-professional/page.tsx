import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function PlatformProfessionalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 bg-gradient-to-br from-zonda-blue/6 to-zonda-blue-dark/4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-zonda-blue/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-zonda-blue-dark/6 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Plataforma{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                  Profesional
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                Herramientas especializadas para profesionales de la salud que
                les permiten interactuar con la data de sus pacientes y
                optimizar su práctica médica
              </p>
            </div>

            {/* Professional App Screenshot */}
            <div className="relative max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-zonda-blue/15 bg-gradient-to-br from-zonda-blue/5 via-zonda-blue/10 to-zonda-blue-dark/10 ring-1 ring-zonda-blue/10 backdrop-blur">
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-zonda-blue/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute bottom-0 right-0 w-72 h-48 bg-zonda-yellow/10 rounded-bl-3xl blur-2xl z-0"></div>
              <div className="flex justify-center items-center w-full pt-8 pb-8">
                <img
                  src="/appshots/header.png"
                  className="w-full lg:w-2/3 h-auto object-contain relative z-10"
                  alt="Plataforma Profesional"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Platform Section */}
        <section className="py-20 bg-gradient-to-br from-zonda-blue via-zonda-blue-dark to-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex lg:flex-row flex-col gap-16 items-stretch">
              {/* Left: Text Content */}
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

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Características de la App Profesional
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Diseñada específicamente para profesionales de la salud
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Historial Médico Completo
                </h3>
                <p className="text-gray-600">
                  Acceso completo al historial médico de pacientes desde
                  múltiples instituciones.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Registro de Consultas
                </h3>
                <p className="text-gray-600">
                  Registro eficiente y detallado de consultas médicas y
                  tratamientos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prescripción Digital
                </h3>
                <p className="text-gray-600">
                  Sistema integrado de prescripción digital de medicamentos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Análisis de Datos
                </h3>
                <p className="text-gray-600">
                  Análisis detallado del estado del paciente por visita y
                  evolución.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Multi-Institucional
                </h3>
                <p className="text-gray-600">
                  Trabajo con múltiples instituciones de salud desde una sola
                  plataforma.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-zonda-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Acceso Móvil
                </h3>
                <p className="text-gray-600">
                  Aplicación móvil optimizada para acceso desde cualquier
                  dispositivo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
