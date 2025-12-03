/**
 * Spoon Guru Design System - Platform-Agnostic Design Tokens
 * These tokens can be used across web, iOS, and Android platforms
 */

export const colors = {
  // Primary Palette - Ground
  ground: {
    teal: '#465E5A',
    purple: '#6264A1',
    mint: '#DDEFDC',
    blue: '#C5DFF2',
  },
  
  // Secondary Palette - Electric
  electric: {
    blue: '#B2D4EE',
    green: '#E5F2E4',
    purple: '#9697C0',
  },
  
  // Backgrounds
  background: {
    beige: '#E3DBD1',
    warm: '#EEEBE7',
    cool: '#F4F6F7',
  },
  
  // Semantic colours
  semantic: {
    primary: '#6264A1',        // Ground Purple
    primaryForeground: '#ffffff',
    secondary: '#B2D4EE',      // Electric Blue
    secondaryForeground: '#465E5A',
    destructive: '#d4183d',
    destructiveForeground: '#ffffff',
    success: '#DDEFDC',        // Ground Mint
    successForeground: '#465E5A',
  },
  
  // Text colours
  text: {
    primary: '#465E5A',        // Ground Teal
    secondary: 'rgba(70, 94, 90, 0.7)',
    tertiary: 'rgba(70, 94, 90, 0.5)',
    inverse: '#ffffff',
  },
  
  // Border colours
  border: {
    default: 'rgba(70, 94, 90, 0.15)',
    focus: '#6264A1',
  },
  
  // GLP-1 Suitability levels
  glpSuitability: {
    high: {
      background: '#DDEFDC',   // Ground Mint
      foreground: '#465E5A',
      indicator: '#465E5A',
    },
    medium: {
      background: '#C5DFF2',   // Ground Blue
      foreground: '#465E5A',
      indicator: '#6264A1',
    },
    low: {
      background: '#EEEBE7',   // Background Warm
      foreground: '#465E5A',
      indicator: 'rgba(70, 94, 90, 0.5)',
    },
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
} as const;

export const typography = {
  fontFamily: {
    primary: 'Maison Neue',    // Native: Implement as platform-specific
    fallback: 'Inter',         // Web fallback
    monospace: 'SF Mono',      // For numerical data
  },
  
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  } as const,
  
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const borderRadius = {
  none: 0,
  sm: 2,      // Sharp rectangles
  md: 4,      // Standard for most components
  lg: 4,      // Maximum for Spoon Guru style
  full: 9999, // For circular elements (indicators, avatars)
} as const;

export const shadows = {
  // Subtle shadows for cards and elevated elements
  sm: {
    // Web: box-shadow
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2, // Android
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 48,
} as const;

export const breakpoints = {
  // Web responsive breakpoints
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  wide: 1280,
} as const;

export const layout = {
  maxWidth: {
    content: 1280,     // Max width for main content
    reading: 768,      // Max width for readable text
  },
  
  header: {
    height: 64,        // Standard header height
    heightMobile: 56,  // Smaller for mobile
  },
  
  bottomNav: {
    height: 64,        // Bottom navigation height
    heightMobile: 56,
  },
  
  containerPadding: {
    mobile: spacing.md,
    tablet: spacing.lg,
    desktop: spacing.xl,
  },
} as const;

// Platform-specific utilities
export const platform = {
  isWeb: typeof window !== 'undefined' && !('ReactNativeWebView' in window),
  isNative: typeof navigator !== 'undefined' && navigator.product === 'ReactNative',
  isIOS: typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent),
  isAndroid: typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent),
} as const;

// Animation durations (in milliseconds)
export const animation = {
  fast: 150,
  normal: 250,
  slow: 400,
  
  // Easing functions (as strings for CSS, objects for native)
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;

// GLP-1 specific tokens
export const glpFeatures = {
  proteinTarget: {
    minimum: 60,      // grams per day
    optimal: 80,
  },
  
  mealFrequency: {
    minimum: 3,       // meals per day
    optimal: 4,
  },
  
  suitabilityLevels: ['High', 'Medium', 'Low'] as const,
} as const;

// Export type helpers for TypeScript
export type Color = keyof typeof colors;
export type Spacing = keyof typeof spacing;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type GlpSuitabilityLevel = typeof glpFeatures.suitabilityLevels[number];
