import React from 'react';
import {
  Building2,
  Hospital,
  User,
  Ambulance,
  Stethoscope,
  Heart,
  UserCheck,
} from 'lucide-react';

// MultiOrgViewComponent - Hierarchical organization chart
export function MultiOrgViewComponent() {
  const medicalStaffIcons = [
    { Icon: Stethoscope, color: 'text-blue-500' },
    { Icon: UserCheck, color: 'text-green-500' },
    { Icon: Heart, color: 'text-red-500' },
  ];

  // Function to create organization card
  const createOrgCard = (
    title: string,
    icon: React.ComponentType<{ className?: string }>,
    iconColor: string = 'text-gray-600',
    showStaffIcons: boolean = false
  ) => (
    <div className="bg-gray-100 rounded-lg p-4 w-48 text-center border border-gray-200 shadow-sm">
      {/* Icon and Title Row */}
      <div className="flex items-center justify-center gap-3">
        {/* Small circular avatar icon */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-sm">
          {React.createElement(icon, {
            className: `w-5 h-5 ${iconColor}`,
          })}
        </div>

        {/* Title */}
        <span className="text-lg font-semibold text-gray-800">{title}</span>
      </div>

      {/* Medical Staff Icons - only for sub-organizations */}
      {showStaffIcons && (
        <div className="flex justify-center items-center mt-3">
          <div className="flex -space-x-2">
            {medicalStaffIcons.map((staff, index) => (
              <div
                key={index}
                className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-sm"
              >
                <staff.Icon className="w-3 h-3 text-gray-700" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8">
      {/* Radial Layout Container with Animation */}
      <div className="relative w-[300px] h-[300px] mx-auto">
        {/* Main Organization in Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {createOrgCard('Aseguradora', Building2, 'text-gray-800')}
        </div>

        {/* Individual Orbital Cards */}
        {/* Hospital - Orbiting */}
        <div className="orbit-item orbit-hospital absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {createOrgCard('Hospital', Hospital, 'text-blue-600', true)}
        </div>

        {/* Médico - Orbiting */}
        <div className="orbit-item orbit-medico absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {createOrgCard('Médico', User, 'text-green-600', true)}
        </div>

        {/* Domiciliario - Orbiting */}
        <div className="orbit-item orbit-domiciliario absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {createOrgCard('Domiciliario', Ambulance, 'text-yellow-600', true)}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit-hospital {
          0% {
            transform: translateX(180px) translateY(0px);
          }
          25% {
            transform: translateX(0px) translateY(-100px);
          }
          50% {
            transform: translateX(-180px) translateY(0px);
          }
          75% {
            transform: translateX(0px) translateY(100px);
          }
          100% {
            transform: translateX(180px) translateY(0px);
          }
        }
        @keyframes orbit-medico {
          0% {
            transform: translateX(-180px) translateY(120px);
          }
          25% {
            transform: translateX(-180px) translateY(0px);
          }
          50% {
            transform: translateX(-180px) translateY(-120px);
          }
          75% {
            transform: translateX(180px) translateY(-120px);
          }
          100% {
            transform: translateX(-180px) translateY(120px);
          }
        }
        @keyframes orbit-domiciliario {
          0% {
            transform: translateX(-240px) translateY(-120px);
          }
          25% {
            transform: translateX(240px) translateY(-120px);
          }
          50% {
            transform: translateX(280px) translateY(0px);
          }
          75% {
            transform: translateX(240px) translateY(100px);
          }
          100% {
            transform: translateX(-240px) translateY(-120px);
          }
        }
        .orbit-item {
          /* Positioning handled in HTML */
        }
        .orbit-hospital {
          animation: orbit-hospital 20s linear infinite;
        }
        .orbit-medico {
          animation: orbit-medico 20s linear infinite;
        }
        .orbit-domiciliario {
          animation: orbit-domiciliario 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
