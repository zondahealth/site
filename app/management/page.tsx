import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function ManagementPage() {
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
                Nuestras{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                  Plataformas
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                Descubre nuestras dos plataformas especializadas: una para la
                gestión integral de instituciones de salud y otra para
                profesionales médicos.
              </p>
            </div>

            {/* Platform Cards */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Plataforma Gestión Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-zonda-blue/15 p-8 hover:shadow-3xl transition-all duration-300 flex flex-col">
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Plataforma de{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                      Gestión
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Para instituciones de salud que necesitan centralizar
                    operaciones clave como administración de pacientes, turnos,
                    tratamientos y profesionales.
                  </p>
                </div>

                <div className="mb-8 h-64 flex items-center justify-center">
                  <video
                    src="/webshots/records-moving.mp4"
                    autoPlay
                    loop={false}
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Gestión de pacientes y historias clínicas</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Administración de turnos y citas</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Gestión de tratamientos y profesionales</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Reportes y analytics avanzados</span>
                  </div>
                </div>

                <Link href="/platform-org">
                  <Button className="w-full bg-zonda-blue hover:bg-zonda-blue-dark text-white font-medium py-3">
                    Conocer Plataforma Gestión
                  </Button>
                </Link>
              </div>

              {/* Plataforma Profesional Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-zonda-blue/15 p-8 hover:shadow-3xl transition-all duration-300 flex flex-col">
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Plataforma{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zonda-blue to-zonda-blue-dark">
                      Profesional
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Para profesionales de la salud que necesitan herramientas
                    especializadas para interactuar con datos de pacientes y
                    optimizar su práctica médica.
                  </p>
                </div>

                <div className="mb-8 h-64 flex items-center justify-center">
                  <img
                    src="/appshots/header.png"
                    alt="Plataforma Profesional"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Acceso a historial médico completo</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Registro eficiente de consultas</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Prescripción digital integrada</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-zonda-blue rounded-full mr-3"></div>
                    <span>Trabajo multi-institucional</span>
                  </div>
                </div>

                <Link href="/platform-professional">
                  <Button className="w-full bg-zonda-blue hover:bg-zonda-blue-dark text-white font-medium py-3">
                    Conocer Plataforma Profesional
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
