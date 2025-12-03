/**
 * Utility Functions
 *
 * Reusable utility functions for common operations across the application.
 * These functions follow functional programming principles and are pure when possible.
 */

// ============================================================================
// FORMATTING UTILITIES
// ============================================================================

/**
 * Formats a number as currency (USD)
 * @param amount - The amount to format
 * @returns Formatted currency string (e.g., "$1,234.56")
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats a number with thousands separator
 * @param num - The number to format
 * @returns Formatted number string (e.g., "10,000")
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Formats a number as a compact string (e.g., 1.2K, 3.4M)
 * @param num - The number to format
 * @returns Compact formatted string
 */
export const formatCompactNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

/**
 * Formats a percentage value
 * @param value - The value to format (0-100 or 0-1)
 * @param normalize - Whether to normalize from 0-1 to 0-100
 * @returns Formatted percentage string (e.g., "12.5%")
 */
export const formatPercentage = (value: number, normalize = false): string => {
  const percentage = normalize ? value * 100 : value;
  return `${percentage.toFixed(1)}%`;
};

/**
 * Formats a date relative to now (e.g., "hace 2 días")
 * @param date - The date to format
 * @returns Relative time string
 */
export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Hace 1 día';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;
  return `Hace ${Math.floor(diffDays / 365)} años`;
};

/**
 * Formats a date as a readable string
 * @param date - The date to format
 * @returns Formatted date string (e.g., "15 Ene 2024")
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

// ============================================================================
// STRING UTILITIES
// ============================================================================

/**
 * Truncates a string to a maximum length with ellipsis
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated string
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
};

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns Capitalized string
 */
export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a string to slug format (kebab-case)
 * @param str - The string to slugify
 * @returns Slugified string
 */
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Extracts initials from a name
 * @param name - Full name
 * @returns Initials (e.g., "JD" for "John Doe")
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns True if valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a URL
 * @param url - The URL to validate
 * @returns True if valid, false otherwise
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object)
 * @param value - The value to check
 * @returns True if empty, false otherwise
 */
export const isEmpty = (value: unknown): boolean => {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

/**
 * Groups an array of objects by a key
 * @param array - The array to group
 * @param key - The key to group by
 * @returns Grouped object
 */
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
};

/**
 * Removes duplicate items from an array
 * @param array - The array to deduplicate
 * @returns Array with unique items
 */
export const unique = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

/**
 * Sorts an array of objects by a key
 * @param array - The array to sort
 * @param key - The key to sort by
 * @param order - Sort order ('asc' or 'desc')
 * @returns Sorted array (new array, doesn't mutate original)
 */
export const sortBy = <T>(
  array: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

// ============================================================================
// STORAGE UTILITIES
// ============================================================================

/**
 * Safely gets an item from localStorage with JSON parsing
 * @param key - Storage key
 * @returns Parsed value or null
 */
export const getStorageItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error reading from localStorage (key: ${key}):`, error);
    return null;
  }
};

/**
 * Safely sets an item in localStorage with JSON stringification
 * @param key - Storage key
 * @param value - Value to store
 */
export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage (key: ${key}):`, error);
  }
};

/**
 * Removes an item from localStorage
 * @param key - Storage key
 */
export const removeStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage (key: ${key}):`, error);
  }
};

// ============================================================================
// DEBOUNCE/THROTTLE UTILITIES
// ============================================================================

/**
 * Creates a debounced function that delays execution
 * @param func - The function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Generates a random ID
 * @returns Random string ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Clamps a number between min and max values
 * @param value - The value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Delays execution for a specified time
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Creates a range of numbers
 * @param start - Start value
 * @param end - End value
 * @param step - Step increment
 * @returns Array of numbers
 */
export const range = (start: number, end: number, step = 1): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};
