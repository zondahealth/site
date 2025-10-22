import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function DataPage() {
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
                  Reportes, Métricas y{' '}
                  <span className="text-zonda-yellow">
                    Visualización de Datos
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-white/95 leading-relaxed font-medium">
                  Convertimos los datos en información útil para la toma de
                  decisiones. A través de dashboards y herramientas de
                  visualización, podrás acceder a reportes personalizados por
                  región, unidad, profesional, diagnóstico y tratamiento.
                </p>
              </div>
              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  src="/webshots/metrics5.png"
                  alt="Dashboard de Métricas"
                  style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Características de Visualización de Datos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Herramientas avanzadas para el análisis y visualización de
                información médica
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Dashboards Interactivos
                </h3>
                <p className="text-gray-600">
                  Visualizaciones dinámicas que se adaptan a tus necesidades
                  específicas de análisis.
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Análisis de Tendencias
                </h3>
                <p className="text-gray-600">
                  Identificación automática de patrones y tendencias en los
                  datos médicos.
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tiempo Real
                </h3>
                <p className="text-gray-600">
                  Actualizaciones en tiempo real para mantener la información
                  siempre actualizada.
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Reportes Personalizados
                </h3>
                <p className="text-gray-600">
                  Generación automática de reportes personalizados por región,
                  unidad y profesional.
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Visualizaciones Avanzadas
                </h3>
                <p className="text-gray-600">
                  Gráficos, tablas y visualizaciones interactivas para mejor
                  comprensión de datos.
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Exportación de Datos
                </h3>
                <p className="text-gray-600">
                  Exporta tus análisis en múltiples formatos para compartir y
                  presentar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Reports Section */}
        <section className="py-20 bg-gradient-to-br from-zonda-yellow to-zonda-orange relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Reportes Detallados por Paciente
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
                Cada paciente tiene un panel personalizado con métricas, alertas
                y evolución mes a mes. Seguimiento continuo de la salud con
                visualizaciones claras y tendencias automáticas.
              </p>
            </div>

            <div className="grid lg:grid-cols-6 gap-16 items-center">
              {/* Left: Content */}
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Signos Vitales
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Seguimiento automático de presión arterial y frecuencia
                      cardíaca
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
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Alertas Automáticas
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Notificaciones inmediatas cuando se detectan valores fuera
                      de rango
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Evolución Temporal
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Visualización cronológica de registros y procedimientos
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
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Tendencias Visuales
                    </h4>
                    <p className="text-gray-800 text-sm font-medium">
                      Gráficos y colores que facilitan la comprensión de la
                      evolución
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="lg:col-span-3">
                <img
                  src="/webshots/metrics1.png"
                  alt="Panel de Paciente - Resumen Clínico"
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Data Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Flexibilidad en la Ingesta de Datos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                No importa cómo ingestes los datos al motor de Zonda, si usando
                nuestro sistema de gestión o nuestra API directamente, nosotros
                dejamos que elijas tu propia experiencia.
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sistema de Gestión
                </h3>
                <p className="text-gray-600">
                  Utiliza nuestra plataforma integral de gestión para ingresar
                  datos de forma estructurada y organizada.
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  API Directa
                </h3>
                <p className="text-gray-600">
                  Conecta tus sistemas existentes directamente a través de
                  nuestra API robusta y flexible.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Resultados Instantáneos
                </h3>
                <p className="text-gray-600">
                  Obtén resultados en tiempo real para cualquier caso de uso que
                  quieras integrar.
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
