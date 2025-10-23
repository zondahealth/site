import React from 'react';

interface ColoredSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'yellow'
    | 'blue'
    | 'orange'
    | 'green'
    | 'purple'
    | 'pink'
    | 'teal'
    | 'light-yellow'
    | 'light-blue'
    | 'light-green';
}

export const ColoredSection: React.FC<ColoredSectionProps> = ({
  children,
  className = '',
  variant = 'blue',
}) => {
  const getBackgroundColor = (
    variant:
      | 'yellow'
      | 'blue'
      | 'orange'
      | 'green'
      | 'purple'
      | 'pink'
      | 'teal'
      | 'light-yellow'
      | 'light-blue'
      | 'light-green'
  ) => {
    switch (variant) {
      case 'yellow':
        return 'rgba(247, 215, 74, 0.1)'; // zonda-yellow muy pálido
      case 'orange':
        return 'rgba(247, 95, 40, 0.1)'; // zonda-orange muy pálido
      case 'green':
        return 'rgba(34, 197, 94, 0.1)'; // verde muy pálido
      case 'purple':
        return 'rgba(147, 51, 234, 0.1)'; // púrpura muy pálido
      case 'pink':
        return 'rgba(236, 72, 153, 0.1)'; // rosa muy pálido
      case 'teal':
        return 'rgba(20, 184, 166, 0.1)'; // teal muy pálido
      case 'light-yellow':
        return 'rgba(255, 248, 220, 0.08)'; // amarillo más visible
      case 'light-blue':
        return 'rgba(240, 248, 255, 0.08)'; // azul más visible
      case 'light-green':
        return 'rgba(240, 255, 240, 0.08)'; // verde más visible
      case 'blue':
      default:
        return 'rgba(3, 106, 250, 0.1)'; // zonda-blue muy pálido
    }
  };

  const getGradientStyle = (
    variant:
      | 'yellow'
      | 'blue'
      | 'orange'
      | 'green'
      | 'purple'
      | 'pink'
      | 'teal'
      | 'light-yellow'
      | 'light-blue'
      | 'light-green'
  ) => {
    switch (variant) {
      case 'yellow':
        return {
          background:
            'linear-gradient(60deg, #FFEB3B 0%, #FFD54F 25%, #FFC107 50%, #FF8F00 75%, #FF6F00 100%)',
          boxShadow:
            '0 0 40px rgba(255, 235, 59, 0.3), 0 0 80px rgba(255, 193, 7, 0.2)',
        };
      case 'orange':
        return {
          background:
            'linear-gradient(240deg, var(--zonda-orange) 0%, #FF8C42 25%, #FF7043 50%, #FF5722 75%, #E64A19 100%)',
          boxShadow:
            '0 0 40px rgba(247, 95, 40, 0.3), 0 0 80px rgba(255, 87, 34, 0.2)',
        };
      case 'green':
        return {
          background:
            'linear-gradient(330deg, #4CAF50 0%, #66BB6A 25%, #81C784 50%, #4CAF50 75%, #388E3C 100%)',
          boxShadow:
            '0 0 40px rgba(76, 175, 80, 0.3), 0 0 80px rgba(56, 142, 60, 0.2)',
        };
      case 'purple':
        return {
          background:
            'linear-gradient(120deg, #9C27B0 0%, #AB47BC 25%, #BA68C8 50%, #9C27B0 75%, #7B1FA2 100%)',
          boxShadow:
            '0 0 40px rgba(156, 39, 176, 0.3), 0 0 80px rgba(123, 31, 162, 0.2)',
        };
      case 'pink':
        return {
          background:
            'linear-gradient(200deg, #E91E63 0%, #EC407A 25%, #F06292 50%, #E91E63 75%, #C2185B 100%)',
          boxShadow:
            '0 0 40px rgba(233, 30, 99, 0.3), 0 0 80px rgba(194, 24, 91, 0.2)',
        };
      case 'teal':
        return {
          background:
            'linear-gradient(150deg, #009688 0%, #26A69A 25%, #4DB6AC 50%, #009688 75%, #00695C 100%)',
          boxShadow:
            '0 0 40px rgba(0, 150, 136, 0.3), 0 0 80px rgba(0, 105, 92, 0.2)',
        };
      case 'light-yellow':
        return {
          background:
            'linear-gradient(60deg, #FFF59D 0%, #FFF9C4 25%, #FFF8E1 50%, #FFFDE7 75%, #FFF9C4 100%)',
          boxShadow:
            '0 0 30px rgba(255, 248, 220, 0.15), 0 0 60px rgba(255, 235, 59, 0.08)',
        };
      case 'light-blue':
        return {
          background:
            'linear-gradient(30deg, #BBDEFB 0%, #E3F2FD 25%, #F3E5F5 50%, #E8F5E8 75%, #BBDEFB 100%)',
          boxShadow:
            '0 0 30px rgba(240, 248, 255, 0.15), 0 0 60px rgba(3, 106, 250, 0.08)',
        };
      case 'light-green':
        return {
          background:
            'linear-gradient(330deg, #C8E6C9 0%, #F1F8E9 25%, #E8F5E8 50%, #E0F2F1 75%, #C8E6C9 100%)',
          boxShadow:
            '0 0 30px rgba(240, 255, 240, 0.15), 0 0 60px rgba(34, 197, 94, 0.08)',
        };
      case 'blue':
      default:
        return {
          background:
            'linear-gradient(30deg, var(--zonda-blue) 0%, #1E88E5 25%, #1976D2 50%, #1565C0 75%, #0D47A1 100%)',
          boxShadow:
            '0 0 40px rgba(3, 106, 250, 0.3), 0 0 80px rgba(25, 118, 210, 0.2)',
        };
    }
  };

  return (
    <section className={`relative py-8 px-4 ${className}`}>
      <div className="container mx-auto">
        <div
          className="rounded-2xl h-[32rem] md:h-[36rem] lg:h-[42rem] xl:h-[48rem] 2xl:h-[52rem] flex items-center justify-center overflow-hidden"
          style={getGradientStyle(variant)}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
