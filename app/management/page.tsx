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
              <img
                src="/screens/management.png"
                alt="Screenshot de la Plataforma Institucional"
                className="relative w-full h-auto max-h-[600px] object-contain z-10"
              />
            </div>
          </div>
        </section>

        {/* Professional Platform Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zonda-blue/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-zonda-yellow/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Plataforma{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                  Profesional
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
                Herramientas especializadas para profesionales de la salud que
                les permiten interactuar con la data de sus pacientes y
                optimizar su práctica médica
              </p>
            </div>

            {/* Professional App Screenshots - Premium Container */}
            <div className="mb-24 relative max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-zonda-blue/15 bg-gradient-to-br from-zonda-blue/5 via-zonda-blue/10 to-zonda-blue-dark/10 ring-1 ring-zonda-blue/10 backdrop-blur">
              {/* Decorative Background Shapes */}
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-zonda-blue/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute bottom-0 right-0 w-72 h-48 bg-zonda-blue-dark/10 rounded-bl-3xl blur-2xl z-0"></div>

              <div className="relative z-10 p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center">
                  <img
                    src="/screens/app_home.png"
                    className="w-full lg:w-1/3 h-96 lg:h-[500px] object-contain "
                    alt="Dashboard Principal"
                  />
                  <img
                    src="/screens/app_patients.png"
                    className="w-full lg:w-1/3 h-96 lg:h-[500px] object-contain "
                    alt="Gestión de Pacientes"
                  />
                  <img
                    src="/screens/app_sessions.png"
                    className="w-full lg:w-1/3 h-96 lg:h-[500px] object-contain "
                    alt="Sesiones y Tratamientos"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Features Card */}
              <div className="bg-gradient-to-br from-zonda-blue/5 to-zonda-blue/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Funcionalidades Profesionales
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-3 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">
                      Interacción directa con data de pacientes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-3 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">
                      Organización con múltiples instituciones
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-3 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">
                      Registro de nuevos registros médicos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-3 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">
                      Prescripción digital de medicamentos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-3 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">
                      Análisis del estado del paciente por visita
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zonda-blue mr-3 text-lg">✓</span>
                    <span className="text-gray-700 font-medium">
                      Historial médico completo y accesible
                    </span>
                  </li>
                </ul>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ventajas para Profesionales
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      Acceso unificado a información de pacientes desde
                      múltiples instituciones
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      Registro eficiente de consultas y tratamientos
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      Prescripción digital integrada
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      Seguimiento detallado de la evolución del paciente
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      Mejor comprensión del estado del paciente en cada visita
                    </p>
                  </div>
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
