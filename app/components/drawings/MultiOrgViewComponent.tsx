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
    showStaffIcons: boolean = false,
    gradient: string = 'from-gray-100 to-gray-200'
  ) => (
    <div
      className={`bg-gradient-to-br ${gradient} rounded-lg p-4 w-40 text-center border border-white/20 shadow-xl backdrop-blur-sm`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-3">
        {/* Glass-like circular icon */}
        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30 shadow-lg">
          {React.createElement(icon, {
            className: `w-6 h-6 ${iconColor}`,
          })}
        </div>
      </div>

      {/* Title */}
      {title && (
        <div className="mb-3">
          <span className="text-lg font-bold text-white drop-shadow-lg">
            {title}
          </span>
        </div>
      )}

      {/* Medical Staff Icons - only for sub-organizations */}
      {showStaffIcons && (
        <div className="flex justify-center items-center mt-2">
          <div className="flex -space-x-2">
            {medicalStaffIcons.map((staff, index) => (
              <div
                key={index}
                className="w-6 h-6 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20 shadow-lg"
              >
                <staff.Icon className="w-3 h-3 text-gray-600" />
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
          {createOrgCard(
            'Aseguradora',
            Building2,
            'text-white',
            false,
            'from-blue-400 via-blue-600 to-blue-800'
          )}
        </div>

        {/* Individual Orbital Cards */}
        {/* Hospital - Orbiting */}
        <div className="orbit-item orbit-hospital absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {createOrgCard(
            '',
            Hospital,
            'text-gray-800',
            true,
            'from-white to-gray-100'
          )}
        </div>

        {/* Médico - Orbiting */}
        <div className="orbit-item orbit-medico absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {createOrgCard(
            '',
            User,
            'text-gray-800',
            true,
            'from-white to-gray-100'
          )}
        </div>

        {/* Domiciliario - Orbiting */}
        <div className="orbit-item orbit-domiciliario absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {createOrgCard(
            '',
            Ambulance,
            'text-gray-800',
            true,
            'from-white to-gray-100'
          )}
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
