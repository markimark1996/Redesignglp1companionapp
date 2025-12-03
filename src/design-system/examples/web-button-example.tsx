/**
 * Example: Button Component for Web
 * Using shared design tokens with Tailwind CSS
 */

import { colors, spacing, borderRadius, typography } from '../tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  disabled = false 
}: ButtonProps) {
  // Map variants to Tailwind classes using design tokens
  const variantClasses = {
    primary: 'bg-[#6264A1] text-white hover:bg-[#6264A1]/90',
    secondary: 'bg-[#B2D4EE] text-[#465E5A] hover:bg-[#B2D4EE]/90',
    outline: 'bg-transparent border border-[#465E5A]/15 text-[#465E5A] hover:bg-[#465E5A]/5',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-[4px]
        transition-colors
        duration-150
        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}

// Alternative: Using inline styles with tokens (for non-Tailwind projects)
export function ButtonWithInlineStyles({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick,
  disabled = false 
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    borderRadius: `${borderRadius.md}px`,
    fontWeight: typography.fontWeight.medium,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 150ms ease-in-out',
    border: 'none',
  };
  
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.semantic.primary,
      color: colors.semantic.primaryForeground,
    },
    secondary: {
      backgroundColor: colors.semantic.secondary,
      color: colors.semantic.secondaryForeground,
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.text.primary,
      border: `1px solid ${colors.border.default}`,
    },
  };
  
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      paddingLeft: `${spacing.sm + spacing.xs}px`,
      paddingRight: `${spacing.sm + spacing.xs}px`,
      paddingTop: `${spacing.xs + 2}px`,
      paddingBottom: `${spacing.xs + 2}px`,
      fontSize: `${typography.fontSize.sm}px`,
    },
    md: {
      paddingLeft: `${spacing.md}px`,
      paddingRight: `${spacing.md}px`,
      paddingTop: `${spacing.sm}px`,
      paddingBottom: `${spacing.sm}px`,
      fontSize: `${typography.fontSize.base}px`,
    },
    lg: {
      paddingLeft: `${spacing.lg}px`,
      paddingRight: `${spacing.lg}px`,
      paddingTop: `${spacing.sm + spacing.xs}px`,
      paddingBottom: `${spacing.sm + spacing.xs}px`,
      fontSize: `${typography.fontSize.lg}px`,
    },
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
    >
      {children}
    </button>
  );
}

/**
 * Usage example:
 * 
 * <Button variant="primary" size="md" onClick={() => console.log('Clicked')}>
 *   Add to Shopping List
 * </Button>
 */
