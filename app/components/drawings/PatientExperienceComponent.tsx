import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
  AlertCircle,
  User,
  Heart,
  Activity,
  Stethoscope,
  BriefcaseMedical,
} from 'lucide-react';

export function PatientExperienceComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate scroll progress (0 to 1)
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
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="lg:col-span-3">
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto p-8 "
      >
        {/* Main Container with overlapping cards */}
        <div className="relative">
          {/* 1. Professional Health Survey Card - Behind */}
          <div className="relative z-10">
            <Card
              className="w-96 bg-white shadow-xl border border-white/20 rounded-2xl"
              style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.15)' }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Evaluación de Salud Integral
                  </CardTitle>
                </div>
                <p className="text-sm text-gray-500">
                  Complete esta evaluación para optimizar su atención médica
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Question 1 */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    ¿Practica actividad física regularmente?
                  </label>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      Sí, regularmente
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      Ocasionalmente
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      No
                    </Button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">
                    ¿Consume tabaco o productos similares?
                  </label>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      Sí
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      No
                    </Button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">
                    ¿Tiene antecedentes familiares de enfermedades
                    cardiovasculares?
                  </label>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      Sí
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      No
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 text-gray-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      No sé
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Enviar Evaluación
                </Button>
              </CardContent>
            </Card>
          </div>

          <div
            className="absolute top-16 -right-16 z-40 transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${scrollProgress * 130}px)`,
            }}
          >
            <Card
              className="w-64 bg-white shadow-md border border-white/20 rounded-xl"
              style={{ boxShadow: '0 0 20px rgba(249, 115, 22, 0.15)' }}
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-semibold">
                    Aviso Importante
                  </span>
                </div>
                <div className="text-xs space-y-1">
                  <p>
                    El Dr. González llegará 15 minutos tarde debido a una
                    emergencia.
                  </p>
                  <p className="font-medium">
                    Su cita se reprogramará automáticamente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className="absolute bottom-24 -left-24 z-40 transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${-scrollProgress * 120}px)`,
            }}
          >
            <Card
              className="w-64 bg-white shadow-lg border border-gray-200/50 rounded-xl"
              style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)' }}
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-900">
                    Nueva Cita Programada
                  </span>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>
                    Tienes una nueva cita el
                    <span className="font-semibold text-gray-900">
                      25 de marzo
                    </span>{' '}
                    con
                  </p>
                  <p className="font-semibold text-gray-900">
                    Dr. Carlos Mendoza - Cardiología
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Healthcare Icon in corner */}
          <div
            className="absolute bottom-4 -right-2 z-40 transition-all duration-300 ease-out"
            style={{ transform: `translateX(${scrollProgress * 40}px)` }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Healthcare Icon in corner */}
          <div
            className="absolute top-10 -left-10 z-40 transition-all duration-300 ease-out"
            style={{ transform: `translateX(${-scrollProgress * 40}px)` }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BriefcaseMedical className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
