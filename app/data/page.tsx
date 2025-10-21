import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function DataPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Reportes, Métricas y{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                  Visualización de Datos
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Convertimos los datos en información útil para la toma de
                decisiones. A través de dashboards y herramientas de
                visualización, podrás acceder a reportes personalizados por
                región, unidad, profesional, diagnóstico y tratamiento.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dashboards Inteligentes y Reportes Personalizados
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accede a información valiosa a través de visualizaciones
                intuitivas que se adaptan a las necesidades específicas de tu
                organización.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Capacidades de Visualización
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Reportes personalizados por región y unidad
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Análisis por profesional y especialidad
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Métricas de diagnóstico y tratamiento
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Visualizaciones interactivas y dinámicas
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Beneficios de la Visualización
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Toma de decisiones basada en datos
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Identificación de tendencias y patrones
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Optimización de recursos y procesos
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Seguimiento de indicadores clave
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Integration Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Flexibilidad en la Ingesta de Datos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                No importa cómo ingestes los datos al motor de Zonda, si usando
                nuestro sistema de gestión o nuestra API directamente, nosotros
                dejamos que elijas tu propia experiencia.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sistema de Gestión
                </h3>
                <p className="text-gray-600">
                  Utiliza nuestra plataforma integral de gestión para ingresar
                  datos de forma estructurada y organizada.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  API Directa
                </h3>
                <p className="text-gray-600">
                  Conecta tus sistemas existentes directamente a través de
                  nuestra API robusta y flexible.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
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
