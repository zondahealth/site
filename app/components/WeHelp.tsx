import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Clock, Target, Shield } from 'lucide-react';

export function WeHelp() {
  const stats = [
    {
      label: 'Ahorro en costos operativos',
      value: '+30%',
      icon: TrendingUp,
      description: 'Optimización de recursos',
    },
    {
      label: 'Reducción en tiempos de espera',
      value: '+40%',
      icon: Clock,
      description: 'Eficiencia mejorada',
    },
    {
      label: 'Reducción en errores médicos',
      value: '+35%',
      icon: Target,
      description: 'Precisión aumentada',
    },
    {
      label: 'Ahorro en fraude y prácticas inapropiadas',
      value: '+30%',
      icon: Shield,
      description: 'Seguridad garantizada',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.03),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Ayudamos a mejorar los{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                resultados
              </span>{' '}
              de tu negocio y a ofrecer una atención centrada en el paciente.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Somos un equipo de expertos en tecnología de la salud dedicados a
              mejorar los resultados de tu negocio y a ofrecer una atención
              centrada en el paciente.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm p-5 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200/50 transform hover:-translate-y-1"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>

                    <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {stat.value}
                    </div>

                    <div className="text-sm font-semibold text-gray-800 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
