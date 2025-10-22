import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 bg-gradient-to-br from-zonda-blue-dark via-zonda-blue to-zonda-blue-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(247,215,74,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(3,106,250,0.1),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Section */}
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Inteligencia Artificial y{' '}
                  <span className="text-zonda-yellow">Datos</span>
                </h1>

                <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-medium">
                  Mediante el uso de inteligencia artificial, Zonda interpreta
                  grandes volúmenes de datos clínicos y genera insights, alertas
                  o recomendaciones clínicas automáticas. Esta capacidad puede
                  ayudar a identificar patrones de riesgo en pacientes,
                  anticipar o incluso sugerir tratamientos.
                </p>
              </div>
              {/* Image Section - Overlay */}
              <div className="flex justify-center relative">
                {/* First image (background) */}
                <img
                  src="/webshots/profile.png"
                  alt="Inteligencia Artificial en Salud"
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Health Profiles and Alerts Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Perfiles de Salud y Alertas Inteligentes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Creamos perfiles de salud completos y sistemas de alertas que
                mantienen a todos los actores informados
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Perfiles de Salud
                </h3>
                <p className="text-gray-600">
                  Armamos perfiles de salud completos que integran información
                  de múltiples fuentes para crear una visión unificada del
                  paciente.
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Alertas por Paciente
                </h3>
                <p className="text-gray-600">
                  Sistema inteligente de alertas que notifica sobre cambios en
                  el estado del paciente, tratamientos y seguimientos
                  necesarios.
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Alertas Organizacionales
                </h3>
                <p className="text-gray-600">
                  Alertas a nivel de organización para optimizar recursos,
                  gestionar capacidades y mejorar la eficiencia operativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-20 bg-gradient-to-br from-zonda-yellow to-zonda-orange relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Inteligencia Artificial Avanzada
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                Tecnología de vanguardia que transforma la atención médica a
                través de perfiles dinámicos, predicción inteligente y
                seguimiento continuo.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-16 items-center">
              {/*   Left: Image */}
              <div className="lg:col-span-3">
                <img
                  src="/webshots/profile-background.png"
                  alt="Inteligencia Artificial en Acción"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3">
                {/* Key Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-blue rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Perfiles de Salud Dinámicos
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Creamos perfiles de salud únicos por paciente a partir de
                      sus registros médicos y hábitos. Estos perfiles se
                      actualizan constantemente.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-orange rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
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
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Predicción y Prevención
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Gracias al análisis de datos históricos y actuales,
                      podemos anticipar comportamientos futuros y detectar
                      alertas tempranas.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-blue-dark rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Encuestas y Seguimiento
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      A través de encuestas periódicas, recopilamos nueva
                      información sobre cambios en el estilo de vida y síntomas.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="w-10 h-10 bg-zonda-yellow rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Mejores Resultados
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      La combinación de datos clínicos, hábitos y seguimiento
                      constante mejora la precisión del diagnóstico y optimiza
                      tratamientos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Notes Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="relative z-10 text-center bg-white">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Notas Médicas Inteligentes
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ayuda a los profesionales de la salud a escribir sus notas
                  flexiblemente, Zonda entiende, mejora y estructura las
                  evoluciones médicas para obtener mejores resultados luego
                </p>
              </div>

              <div className="flex justify-center -my-2 md:-my-16 relative z-0">
                <video
                  src="/appshots/notes.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-3xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
