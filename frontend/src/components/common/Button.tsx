/**
 * @fileoverview Button Component
 *
 * A reusable, accessible button component with multiple variants and sizes.
 * Supports all standard HTML button attributes and provides consistent styling
 * across the application.
 *
 * @module components/common/Button
 */

import React from 'react';
import styles from './Button.module.css';

/**
 * Available button visual variants
 * - primary: Main action button with gradient background
 * - secondary: Secondary action button with outline style
 * - contact: Special button for contact/CTA actions
 * - white: White button for use on colored backgrounds
 */
export type ButtonVariant = 'primary' | 'secondary' | 'contact' | 'white';

/**
 * Available button sizes
 * - sm: Small button (32px height)
 * - md: Medium button (40px height) - default
 * - lg: Large button (48px height)
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Button component
 * Extends all native HTML button attributes
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant;

  /** Size of the button */
  size?: ButtonSize;

  /** Content to display inside the button */
  children: React.ReactNode;

  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * Button Component
 *
 * A versatile button component that supports multiple variants, sizes, and
 * all standard HTML button attributes. Automatically handles disabled states,
 * click events, and accessibility attributes.
 *
 * @component
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * // Secondary large button
 * <Button variant="secondary" size="lg" disabled>
 *   Disabled Button
 * </Button>
 *
 * // Contact button with custom class
 * <Button variant="contact" className="custom-class">
 *   Get Started
 * </Button>
 * ```
 *
 * @param {ButtonProps} props - Component props
 * @returns {React.ReactElement} Rendered button element
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  // Combine all CSS classes: base + variant + size + custom
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
