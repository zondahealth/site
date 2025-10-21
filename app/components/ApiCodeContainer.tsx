export function ApiCodeContainer() {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-sm font-mono">
          Zonda API Terminal
        </div>
      </div>

      {/* Code Display */}
      <div className="bg-black rounded-lg p-4 font-mono text-sm">
        <div className="space-y-1">
          {/* JavaScript Client Code */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">01</span>
            <span className="text-gray-500">|</span>
            <span className="text-green-500">
              // Inicializando cliente Zonda
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">02</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">
              const zonda = new ZondaClient(&#123;
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">03</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">
              {' '}
              apiKey: process.env.ZONDA_API_KEY,
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">04</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">
              {' '}
              baseUrl: "https://api.zondahealth.com"
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">05</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">&#125;);</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">06</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300"></span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">07</span>
            <span className="text-gray-500">|</span>
            <span className="text-green-500">
              // Obtener prescripciones del paciente
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">08</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">
              const prescriptions = await zonda.patients
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">09</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">
              {' '}
              .getPrescriptions("P-12345");
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">10</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300"></span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">11</span>
            <span className="text-gray-500">|</span>
            <span className="text-green-500">
              // Obtener registro médico específico
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">12</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">
              const record = await zonda.patients
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">13</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400">
              {' '}
              .getRecord("P-12345", "R-78901");
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">14</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300"></span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500 w-8 text-right">25</span>
            <span className="text-gray-500">|</span>
            <span className="text-green-400">
              ✅ API calls completed successfully
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
