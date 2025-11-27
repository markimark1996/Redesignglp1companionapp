import { Award, Star, TrendingUp, Info } from 'lucide-react';
import { useState } from 'react';

export type GlpSuitabilityLevel = 1 | 2 | 3;

interface GlpSuitabilityBadgeProps {
  level: GlpSuitabilityLevel;
  variant?: 'compact' | 'full' | 'ribbon';
  showDetails?: boolean;
}

export function GlpSuitabilityBadge({ level, variant = 'full', showDetails = false }: GlpSuitabilityBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getLevelConfig = (level: GlpSuitabilityLevel) => {
    switch (level) {
      case 3:
        return {
          label: 'High GLP-1 Suitability',
          shortLabel: 'High',
          score: '★★★',
          color: '#2E7D32',
          bgColor: '#E8F5E9',
          accentColor: '#4CAF50',
          icon: Award,
          benefits: ['High protein 25g+', 'Perfect portions', 'Gentle on digestion'],
          description: 'Expertly crafted for GLP-1 users with optimal protein, portion control, and digestive comfort.',
        };
      case 2:
        return {
          label: 'Moderate GLP-1 Suitability',
          shortLabel: 'Moderate',
          score: '★★',
          color: '#558B2F',
          bgColor: '#F1F8E9',
          accentColor: '#8BC34A',
          icon: TrendingUp,
          benefits: ['Good protein 15-25g', 'Balanced portions', 'Minor adjustments'],
          description: 'Well-suited for GLP-1 users with good protein content and balanced portions.',
        };
      case 1:
        return {
          label: 'Basic GLP-1 Suitability',
          shortLabel: 'Basic',
          score: '★',
          color: '#9E9D24',
          bgColor: '#F9FBE7',
          accentColor: '#CDDC39',
          icon: Info,
          benefits: ['Moderate protein', 'Adjust portions', 'Customisable'],
          description: 'Can be adapted for GLP-1 users with minor modifications to portion size or protein content.',
        };
    }
  };

  const config = getLevelConfig(level);
  const Icon = config.icon;

  // Compact variant - for image overlays
  if (variant === 'compact') {
    return (
      <div
        className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm border-l-4 shadow-sm"
        style={{ borderLeftColor: config.color }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Icon className="w-4 h-4" style={{ color: config.color }} />
        <div className="flex flex-col">
          <span className="text-xs leading-tight" style={{ color: config.color }}>
            {config.shortLabel}
          </span>
          <span className="text-xs leading-none" style={{ color: config.color }}>
            {config.score}
          </span>
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full left-0 mb-2 w-56 bg-[#465E5A] text-white p-3 text-xs leading-relaxed shadow-xl z-20 pointer-events-none">
            <div className="mb-1.5">{config.label}</div>
            <div className="text-white/80">{config.description}</div>
            {/* Arrow */}
            <div className="absolute top-full left-6 border-4 border-transparent border-t-[#465E5A]"></div>
          </div>
        )}
      </div>
    );
  }

  // Ribbon variant - for featured placement
  if (variant === 'ribbon') {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 border-2 shadow-md relative"
          style={{ 
            backgroundColor: config.bgColor,
            borderColor: config.color,
          }}
        >
          {/* Medal Icon */}
          <div 
            className="w-8 h-8 flex items-center justify-center"
            style={{ backgroundColor: config.color }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide" style={{ color: config.color }}>
              {config.label}
            </span>
            <span className="text-lg leading-none mt-0.5" style={{ color: config.color }}>
              {config.score}
            </span>
          </div>

          {/* Corner accent */}
          <div 
            className="absolute -top-1 -right-1 w-3 h-3"
            style={{ backgroundColor: config.accentColor }}
          ></div>
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-[#465E5A] text-white p-3 text-xs leading-relaxed shadow-xl z-20 pointer-events-none">
            <div className="mb-1.5">{config.label}</div>
            <div className="text-white/80 mb-2">{config.description}</div>
            <ul className="space-y-1">
              {config.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/90">
                  <div className="w-1 h-1 bg-white/60"></div>
                  {benefit}
                </li>
              ))}
            </ul>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#465E5A]"></div>
          </div>
        )}
      </div>
    );
  }

  // Full variant - for card content
  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className="p-3 border-l-4"
        style={{ 
          backgroundColor: config.bgColor,
          borderLeftColor: config.color,
        }}
      >
        <div className="flex items-start gap-3">
          {/* Icon Badge */}
          <div 
            className="w-10 h-10 flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: config.color }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-sm uppercase tracking-wide" style={{ color: config.color }}>
                {config.label}
              </span>
              <span className="text-base" style={{ color: config.color }}>
                {config.score}
              </span>
            </div>

            {/* Benefits */}
            {showDetails && (
              <ul className="space-y-1 mt-2">
                {config.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs" style={{ color: config.color }}>
                    <div className="w-1 h-1 mt-1.5 flex-shrink-0" style={{ backgroundColor: config.color }}></div>
                    <span className="opacity-80">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && !showDetails && (
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-[#465E5A] text-white p-3 text-xs leading-relaxed shadow-xl z-20 pointer-events-none">
          <div className="mb-1.5">{config.label}</div>
          <div className="text-white/80 mb-2">{config.description}</div>
          <ul className="space-y-1">
            {config.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2 text-white/90">
                <div className="w-1 h-1 bg-white/60"></div>
                {benefit}
              </li>
            ))}
          </ul>
          {/* Arrow */}
          <div className="absolute top-full left-6 border-4 border-transparent border-t-[#465E5A]"></div>
        </div>
      )}
    </div>
  );
}

// Helper function to determine GLP-1 suitability level based on recipe properties
export function calculateGlpSuitability(protein: number, fibre: number, calories: number): GlpSuitabilityLevel {
  // Level 3 (GLP-1 Optimised): High protein (25g+), high fibre (7g+), appropriate calories
  if (protein >= 25 && fibre >= 6 && calories <= 500) {
    return 3;
  }
  
  // Level 2 (GLP-1 Suitable): Good protein (15-25g), adequate fibre
  if (protein >= 15 && calories <= 600) {
    return 2;
  }
  
  // Level 1 (GLP-1 Adaptable): Lower protein but still usable with modifications
  return 1;
}