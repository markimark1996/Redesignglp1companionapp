/**
 * GLP-1 Suitability Badge - Cross-Platform Comparison
 * Shows how the same component looks across Web and Native
 */

import { colors, spacing, borderRadius, typography } from '../tokens';

// =============================================================================
// WEB IMPLEMENTATION (React + Tailwind CSS)
// =============================================================================

type SuitabilityLevel = 'High' | 'Medium' | 'Low';

interface GlpBadgeProps {
  level: SuitabilityLevel;
  showLabel?: boolean;
}

export function GlpBadgeWeb({ level, showLabel = true }: GlpBadgeProps) {
  const config = {
    High: {
      bg: 'bg-[#DDEFDC]',
      text: 'text-[#465E5A]',
      border: 'border-[#465E5A]/15',
      indicator: 'bg-[#465E5A]',
    },
    Medium: {
      bg: 'bg-[#C5DFF2]',
      text: 'text-[#465E5A]',
      border: 'border-[#465E5A]/15',
      indicator: 'bg-[#6264A1]',
    },
    Low: {
      bg: 'bg-[#EEEBE7]',
      text: 'text-[#465E5A]',
      border: 'border-[#465E5A]/15',
      indicator: 'bg-[#465E5A]/50',
    },
  };
  
  const { bg, text, border, indicator } = config[level];
  
  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 ${bg} ${text} border ${border} rounded-[2px]`}>
      <span className={`w-2 h-2 rounded-full ${indicator}`}></span>
      {showLabel && <span className="text-xs">{level}</span>}
    </div>
  );
}

// Alternative: Web with inline styles (no Tailwind)
export function GlpBadgeWebInline({ level, showLabel = true }: GlpBadgeProps) {
  const config = {
    High: colors.glpSuitability.high,
    Medium: colors.glpSuitability.medium,
    Low: colors.glpSuitability.low,
  };
  
  const style = config[level];
  
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: `${spacing.xs}px`,
      paddingLeft: `${spacing.sm}px`,
      paddingRight: `${spacing.sm}px`,
      paddingTop: `${spacing.xs}px`,
      paddingBottom: `${spacing.xs}px`,
      backgroundColor: style.background,
      color: style.foreground,
      border: `1px solid ${colors.border.default}`,
      borderRadius: `${borderRadius.sm}px`,
    }}>
      <span style={{
        width: `${spacing.sm}px`,
        height: `${spacing.sm}px`,
        borderRadius: '50%',
        backgroundColor: style.indicator,
      }}></span>
      {showLabel && (
        <span style={{ fontSize: `${typography.fontSize.xs}px` }}>
          {level}
        </span>
      )}
    </div>
  );
}

// =============================================================================
// REACT NATIVE IMPLEMENTATION
// =============================================================================

/**
 * React Native version of GLP Suitability Badge
 * 
 * To use in React Native project:
 * 1. Copy the tokens.ts file to your React Native project
 * 2. Import View and Text from 'react-native'
 * 3. Use StyleSheet.create for styles
 */

/*
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../design-system/tokens';

type SuitabilityLevel = 'High' | 'Medium' | 'Low';

interface GlpBadgeProps {
  level: SuitabilityLevel;
  showLabel?: boolean;
}

export function GlpBadgeNative({ level, showLabel = true }: GlpBadgeProps) {
  const config = colors.glpSuitability[level.toLowerCase() as 'high' | 'medium' | 'low'];
  
  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: config.background,
        borderColor: colors.border.default,
      }
    ]}>
      <View style={[
        styles.indicator,
        { backgroundColor: config.indicator }
      ]} />
      
      {showLabel && (
        <Text style={[styles.label, { color: config.foreground }]}>
          {level}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
  },
  indicator: {
    width: spacing.sm,
    height: spacing.sm,
    borderRadius: spacing.sm / 2,
  },
  label: {
    fontSize: typography.fontSize.xs,
    fontWeight: '400',
  },
});
*/

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

/**
 * Web Usage:
 * 
 * import { GlpBadgeWeb } from './design-system/examples/glp-badge-comparison';
 * 
 * <GlpBadgeWeb level="High" />
 * <GlpBadgeWeb level="Medium" showLabel={false} />
 * <GlpBadgeWeb level="Low" />
 */

/**
 * Native Usage:
 * 
 * import { GlpBadgeNative } from './design-system/examples/glp-badge-comparison';
 * 
 * <GlpBadgeNative level="High" />
 * <GlpBadgeNative level="Medium" showLabel={false} />
 * <GlpBadgeNative level="Low" />
 */

// =============================================================================
// VISUAL COMPARISON
// =============================================================================

/**
 * Both implementations produce identical visual results:
 * 
 * High Level:
 * ┌──────────────┐
 * │ ● High       │  Green mint background, dark teal indicator
 * └──────────────┘
 * 
 * Medium Level:
 * ┌──────────────┐
 * │ ● Medium     │  Blue background, purple indicator
 * └──────────────┘
 * 
 * Low Level:
 * ┌──────────────┐
 * │ ◌ Low        │  Warm grey background, faded indicator
 * └──────────────┘
 * 
 * Design specifications maintained:
 * - 2px border radius (sharp rectangles)
 * - Consistent colour palette from design tokens
 * - 8px indicator size
 * - 4px gap between indicator and label
 * - 8px horizontal padding
 * - 4px vertical padding
 * - 12px label font size
 */

// =============================================================================
// TESTING CHECKLIST
// =============================================================================

/**
 * Visual Testing:
 * □ Badge displays correctly on light backgrounds
 * □ Badge displays correctly on dark backgrounds  
 * □ Indicator is perfectly circular
 * □ Label text is legible and properly aligned
 * □ Spacing is consistent across all levels
 * □ Border is subtle but visible
 * 
 * Responsive Testing (Web):
 * □ Badge scales appropriately at different viewport sizes
 * □ Badge doesn't break on mobile devices
 * □ Text remains readable on small screens
 * 
 * Accessibility Testing:
 * □ Colour contrast meets WCAG AA standards
 * □ Badge has appropriate ARIA label (web)
 * □ Badge is accessible to screen readers (native)
 * □ Badge doesn't rely solely on colour to convey meaning
 * 
 * Platform-Specific Testing (Native):
 * □ Badge renders correctly on iOS
 * □ Badge renders correctly on Android
 * □ Badge handles dynamic text sizing
 * □ Badge displays properly in RTL languages
 */
