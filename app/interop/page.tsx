import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ApiCodeContainer } from '../components/ApiCodeContainer';

export default function InteropPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                  Interoperabilidad
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Nuestra robusta API actúa como puente para integrar fuentes de
                datos existentes. Permite que las instituciones mantengan sus
                propios sistemas (facturación, turnos, historias clínicas, etc.)
                mientras se conectan con Zonda para compartir y visualizar datos
                de forma segura y estandarizada.
              </p>

              <div>
                <ApiCodeContainer />
              </div>

              {/* API Documentation Section */}
              <div className="mt-12 max-w-4xl mx-auto">
                <a
                  href="https://zondahealth.readme.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-zonda-blue hover:bg-zonda-blue-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Ver Documentación de la API
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Premium Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-zonda-blue/12 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-zonda-blue-dark/12 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-zonda-yellow/8 to-transparent rounded-full blur-xl"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="relative">
              {/* Premium Container */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-10 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-zonda-blue/15 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-zonda-blue-dark/15 to-transparent rounded-full blur-lg"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Main Quote */}
                  <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                      Dedica tiempo a ofrecer el mejor servicio
                    </span>
                    <br />
                    <span className="text-gray-800">
                      de prestación de salud, nosotros te proveemos
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue-dark to-zonda-blue">
                      la tecnología.
                    </span>
                  </blockquote>

                  {/* Divider */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-zonda-blue to-zonda-blue-dark rounded-full"></div>
                  </div>

                  {/* Mission Statement */}
                  <div className="max-w-3xl mx-auto">
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center font-medium">
                      Nuestra misión es liberar a las instituciones de salud de
                      las complejidades tecnológicas para que puedan enfocarse
                      en lo que
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark font-bold">
                        {' '}
                        más importa: cuidar a sus pacientes.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Integration Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                API Robusta y Flexible
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ¿El resultado? Facilitamos el intercambio fluido de información
                entre organizaciones o dentro de estructuras complejas como
                redes de hospitales.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Características de la API
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Integración con sistemas existentes (facturación, turnos,
                      historias clínicas)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Mantenimiento de sistemas propios mientras se conectan con
                      Zonda
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Compartir y visualizar datos de forma segura y
                      estandarizada
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      API extremadamente flexible y adaptable
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Beneficios de la Integración
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Intercambio fluido de información entre organizaciones
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Conexión en estructuras complejas como redes de hospitales
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Mantenimiento de sistemas existentes
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-2">✓</span>
                    Seguridad y estandarización de datos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
