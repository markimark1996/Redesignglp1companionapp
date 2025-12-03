/**
 * Example: Button Component for React Native
 * Using shared design tokens with StyleSheet
 */

// React Native imports (these would be available in a React Native project)
// import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { colors, spacing, borderRadius, typography, animation } from '../tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: string;
  onPress?: () => void;
  disabled?: boolean;
}

export function NativeButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onPress,
  disabled = false 
}: ButtonProps) {
  return (
    // Note: Pressable is React Native component
    // @ts-ignore - This is示例代码 for React Native
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      {/* @ts-ignore */}
      <Text style={[styles.text, styles[`${variant}Text`]]}>
        {children}
      </Text>
    </Pressable>
  );
}

// React Native StyleSheet (this syntax would work in React Native)
const styles = {
  // Base styles
  base: {
    borderRadius: borderRadius.md,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexDirection: 'row' as const,
  },
  
  // Variant styles
  primary: {
    backgroundColor: colors.semantic.primary,
  },
  secondary: {
    backgroundColor: colors.semantic.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  
  // Size styles
  sm: {
    paddingHorizontal: spacing.sm + spacing.xs,
    paddingVertical: spacing.xs + 2,
  },
  md: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  lg: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + spacing.xs,
  },
  
  // Text styles
  text: {
    fontWeight: typography.fontWeight.medium as any,
  },
  primaryText: {
    color: colors.semantic.primaryForeground,
    fontSize: typography.fontSize.base,
  },
  secondaryText: {
    color: colors.semantic.secondaryForeground,
    fontSize: typography.fontSize.base,
  },
  outlineText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.base,
  },
  
  // State styles
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.8,
  },
};

/**
 * Complete React Native implementation
 * (Copy this to your React Native project)
 */

/*
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../design-system/tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: string;
  onPress?: () => void;
  disabled?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onPress,
  disabled = false 
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Variants
  primary: {
    backgroundColor: colors.semantic.primary,
  },
  secondary: {
    backgroundColor: colors.semantic.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  
  // Sizes
  size_sm: {
    paddingHorizontal: spacing.sm + spacing.xs,
    paddingVertical: spacing.xs + 2,
  },
  size_md: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  size_lg: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + spacing.xs,
  },
  
  // Text
  text: {
    fontWeight: '500',
  },
  primaryText: {
    color: colors.semantic.primaryForeground,
    fontSize: typography.fontSize.base,
  },
  secondaryText: {
    color: colors.semantic.secondaryForeground,
    fontSize: typography.fontSize.base,
  },
  outlineText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.base,
  },
  
  // States
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.8,
  },
});

// Usage:
// <Button variant="primary" size="md" onPress={() => console.log('Pressed')}>
//   Add to Shopping List
// </Button>
*/
