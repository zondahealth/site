import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Activity, Pill, Clock } from 'lucide-react';

export function MedicalCardComponent() {
  const [showHealthRecord, setShowHealthRecord] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHealthRecord((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const healthRecordData = {
    diagnosis: 'neumonía',
    observations: [
      {
        code: '8480-6',
        name: 'Presión arterial sistólica',
        value: '135',
        unit: 'mmHg',
        timestamp: null,
      },
      {
        code: '8462-4',
        name: 'Presión arterial diastólica',
        value: '75',
        unit: 'mmHg',
        timestamp: null,
      },
      {
        code: '8867-4',
        name: 'Frecuencia cardíaca',
        value: '84',
        unit: 'lpm',
        timestamp: null,
      },
      {
        code: '9279-1',
        name: 'Frecuencia respiratoria',
        value: '28',
        unit: 'rpm',
        timestamp: null,
      },
      {
        code: '59408-5',
        name: 'Saturación de oxígeno',
        value: '96',
        unit: '%',
        timestamp: null,
      },
    ],
    notes:
      'Paciente orientado en tiempo y espacio, bajo tratamiento con levofloxacina. Presenta tos persistente con expectoración y dificultad para respirar. Evaluación cardiovascular sin alteraciones, R1 y R2 normofonéticos.',
  };

  const renderOriginalCard = () => (
    <Card
      className={`bg-white shadow-xl border border-white/20 rounded-2xl transition-all duration-700 ease-in-out ${
        showHealthRecord
          ? 'opacity-0 scale-95 -rotate-2 blur-sm z-10'
          : 'opacity-100 scale-100 rotate-0 blur-none z-20'
      }`}
      style={{
        boxShadow: showHealthRecord
          ? '0 0 10px rgba(59, 130, 246, 0.05)'
          : '0 0 30px rgba(59, 130, 246, 0.25)',
      }}
    >
      <CardContent className="pt-6">
        <div className="text-sm text-gray-700 space-y-2">
          <div className="text-center text-lg font-semibold">
            Notas del Profesional
          </div>
          <div>PTE vigil OTE</div>
          <div>
            PTE CON NEUMONIA TRATADA CON LEVOFLOXACINA. PERSISTE TOS CON
            ESPECTORACION Y DIFICULTAD PARA RESPIRAR
          </div>
          <div>TA. 135/75 FC. 84 FR. 28 SATO2. 96%</div>
          <div>Ap. CARDIOVASC. R1 y R2 normofoneticos</div>
        </div>
      </CardContent>
    </Card>
  );

  const renderHealthRecordCard = () => (
    <Card
      className={`bg-white shadow-xl border border-white/20 rounded-2xl transition-all duration-700 ease-in-out ${
        showHealthRecord
          ? 'opacity-100 scale-100 rotate-0 blur-none z-20'
          : 'opacity-0 scale-95 rotate-2 blur-sm z-10'
      }`}
      style={{
        boxShadow: showHealthRecord
          ? '0 0 30px rgba(34, 197, 94, 0.25)'
          : '0 0 10px rgba(34, 197, 94, 0.05)',
      }}
    >
      <CardContent className="space-y-4 pt-6">
        {/* Diagnosis */}
        <div className="bg-red-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Pill className="w-3 h-3 text-red-600" />
            <span className="text-xs font-semibold text-red-800">
              Diagnóstico
            </span>
          </div>
          <div className="text-xs text-red-700 capitalize">
            {healthRecordData.diagnosis}
          </div>
        </div>

        {/* Vital Signs */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-semibold text-gray-700">
              Signos Vitales
            </span>
          </div>
          <div className="space-y-1">
            {healthRecordData.observations.map((obs, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-blue-50 rounded px-2 py-1"
              >
                <span className="text-xs text-blue-600 font-medium">
                  {obs.name}
                </span>
                <span className="text-xs font-bold text-blue-800">
                  {obs.value} {obs.unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-3 h-3 text-gray-600" />
            <span className="text-xs font-semibold text-gray-700">
              Notas Clínicas
            </span>
          </div>
          <div className="text-xs text-gray-600 leading-relaxed">
            {healthRecordData.notes}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="relative w-full max-w-md mx-auto p-4">
      <div className="relative flex items-center justify-center">
        {renderOriginalCard()}
        <div className="absolute inset-0 flex items-center justify-center">
          {renderHealthRecordCard()}
        </div>
      </div>
    </div>
  );
}
