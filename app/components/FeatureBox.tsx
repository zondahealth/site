import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureBoxProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({
  icon: Icon,
  title,
  description,
  iconBgColor = 'bg-zonda-blue/10',
  iconColor = 'text-zonda-blue',
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-8 shadow-lg border border-gray-100 ${className}`}
    >
      <div
        className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-6`}
      >
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface SmallFeatureBoxProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

export const SmallFeatureBox: React.FC<SmallFeatureBoxProps> = ({
  icon: Icon,
  title,
  description,
  iconBgColor = 'bg-zonda-blue',
  iconColor = 'text-white',
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-lg border border-gray-100 ${className}`}
    >
      <div
        className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}
      >
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
