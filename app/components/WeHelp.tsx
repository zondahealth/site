export function WeHelp() {
  const stats = [
    {
      label: 'Ahorro en costos operativos',
      value: '+30%',
      description: 'Optimización de recursos',
    },
    {
      label: 'Reducción en tiempos de espera',
      value: '+40%',
      description: 'Eficiencia mejorada',
    },
    {
      label: 'Reducción en errores médicos',
      value: '+35%',
      description: 'Precisión aumentada',
    },
    {
      label: 'Ahorro en fraude y prácticas inapropiadas',
      value: '+30%',
      description: 'Seguridad garantizada',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Ayudamos a mejorar los{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                resultados
              </span>{' '}
              de tu negocio y a ofrecer una atención centrada en el paciente.
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Somos un equipo de expertos en tecnología de la salud dedicados a
              mejorar los resultados de tu negocio y a ofrecer una atención
              centrada en el paciente.
            </p>
          </div>

          {/* Premium Stats Grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-left space-y-3">
                {/* Large prominent number in purple */}
                <div className="text-4xl lg:text-5xl font-bold text-purple-600">
                  {stat.value}
                </div>

                {/* Bold sub-heading in dark blue */}
                <div className="text-lg font-bold text-gray-800">
                  {stat.label}
                </div>

                {/* Descriptive text */}
                <div className="text-sm text-gray-700 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
