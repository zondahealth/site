import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Activity, Pill, Clock, FileText, PillIcon } from 'lucide-react';

export function EHRComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - elementTop) / (windowHeight + elementHeight)
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
        code: '59408-5',
        name: 'Saturación de oxígeno',
        value: '96',
        unit: '%',
        timestamp: null,
      },
    ],
    notes:
      'Paciente orientado en tiempo y espacio, bajo tratamiento con levofloxacina.',
  };

  const prescriptionData = {
    patient: 'Juan Pérez',
    date: '2024-01-15',
    medications: [
      {
        name: 'Levofloxacina',
        dosage: '500mg',
        frequency: '1 vez al día',
        duration: '7 días',
      },
      {
        name: 'Ibuprofeno',
        dosage: '400mg',
        frequency: 'Cada 8 horas',
        duration: '5 días',
      },
    ],
    instructions:
      'Tomar con alimentos. Suspender si aparecen efectos adversos.',
  };

  const renderHealthRecordCard = () => (
    <Card
      className="bg-white shadow-xl border-5 border-white/50 rounded-2xl p-0"
      style={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.15)' }}
    >
      <CardContent className="space-y-3 py-3">
        {/* Diagnosis */}
        <div className="bg-red-50 rounded-lg p-3">
          <div className="flex items-center gap-2 ">
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

  const renderPrescriptionCard = () => (
    <Card
      className="bg-white shadow-xl border-5 border-white/50 rounded-2xl p-0"
      style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.15)' }}
    >
      <CardContent className="space-y-3 p-3">
        {/* Patient Info */}
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="text-xs font-semibold text-purple-800 mb-1">
            Paciente: {prescriptionData.patient}
          </div>
          <div className="text-xs text-purple-700">
            Fecha: {prescriptionData.date}
          </div>
        </div>

        {/* Medications - Simplified */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Pill className="w-3 h-3 text-purple-600" />
            <span className="text-xs font-semibold text-gray-700">
              Medicamentos
            </span>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <div>• Levofloxacina 500mg - 1/día</div>
            <div>• Ibuprofeno 400mg - 3/día</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="lg:col-span-3">
      <div ref={containerRef} className="relative w-full max-w-5xl mx-auto p-8">
        {/* Base EHR Image */}
        <div className="relative">
          <div
            className="absolute top-6 -right-10 z-40 transition-all duration-300 ease-out"
            style={{
              transform: `translateY(${scrollProgress * 100}px) translateX(${
                scrollProgress * 100
              }px)`,
            }}
          >
            <div className="w-64">{renderHealthRecordCard()}</div>
          </div>

          <div
            className="absolute bottom-10 -left-6 z-40 transition-all duration-300 ease-out"
            style={{
              transform: `translateY(${-scrollProgress * 50}px) translateX(${
                -scrollProgress * 50
              }px)`,
            }}
          >
            <div className="w-64">{renderPrescriptionCard()}</div>
          </div>

          <img src="/webshots/records.png" alt="EHR System" />
        </div>
      </div>
    </div>
  );
}
