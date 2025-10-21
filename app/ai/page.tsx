import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="pt-40 pb-20 relative min-h-screen flex items-center"
          style={{
            backgroundImage: 'url(/webshots/profile-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/20">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Inteligencia Artificial y{' '}
                  <span className="bg-gradient-to-r from-zonda-blue to-blue-600 bg-clip-text text-transparent">
                    Datos
                  </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Mediante el uso de inteligencia artificial, Zonda interpreta
                  grandes volúmenes de datos clínicos y genera insights, alertas
                  o recomendaciones clínicas automáticas. Esta capacidad puede
                  ayudar a identificar patrones de riesgo en pacientes,
                  anticipar o incluso sugerir tratamientos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Learning Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sistema de Aprendizaje Continuo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                El sistema aprende con cada nuevo dato ingresado, creando
                perfiles de salud dinámicos por paciente. Más información sobre
                comportamientos futuros, mejores resultados clínicos y menos
                costos.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Capacidades de la IA
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Interpretación de grandes volúmenes de datos clínicos
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Generación automática de insights y recomendaciones
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Identificación de patrones de riesgo en pacientes
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Anticipación y sugerencia de tratamientos
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Beneficios del Aprendizaje Continuo
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Perfiles de salud dinámicos que evolucionan
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Mejor predicción de comportamientos futuros
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Mejores resultados clínicos
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Reducción de costos operativos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Health Profiles and Alerts Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perfiles de Salud y Alertas Inteligentes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Creamos perfiles de salud completos y sistemas de alertas que
                mantienen a todos los actores informados
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">👤</span>
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

              <div className="bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🚨</span>
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

              <div className="bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-zonda-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🏥</span>
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

        {/* Medical Notes Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Notas Médicas Inteligentes
              </h2>
              <p className="text-lg text-gray-600">
                Ayuda a los profesionales de la salud a escribir sus notas
                flexiblemente, Zonda entiende, mejora y estructura las
                evoluciones médicas para obtener mejores resultados luego
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl overflow-hidden flex justify-center">
              <video
                src="/appshots/notes.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="max-w-5xl w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
