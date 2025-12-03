/**
 * Application Constants
 *
 * Centralized location for all application constants, configuration values,
 * and magic numbers. This improves maintainability and reduces duplication.
 */

// ============================================================================
// ROUTES
// ============================================================================

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  MATCHING: '/matching',
  ANALYTICS: '/analytics',
  CAMPAIGNS: '/campaigns',
  CAMPAIGN_DETAIL: (id: string) => `/campaign/${id}`,
  CREATOR_PROFILE: (id: string) => `/creator/${id}`,
} as const;

// ============================================================================
// API CONFIGURATION
// ============================================================================

export const API_CONFIG = {
  GRAPHQL_URI: 'http://localhost:4000/graphql',
  REQUEST_TIMEOUT: 30000, // 30 seconds
} as const;

// ============================================================================
// PLATFORM CONFIGURATION
// ============================================================================

export const PLATFORM_STATS = {
  CREATORS: '10,000+',
  BRANDS: '500+',
  SATISFACTION: '98%',
  CAMPAIGNS: '5,000+',
} as const;

// ============================================================================
// PRICING TIERS
// ============================================================================

export const PRICING = {
  CREATOR_FREE: {
    PRICE: 0,
    MAX_CAMPAIGNS: 3,
    PLATFORM_FEE: 0.10, // 10%
    ANALYTICS_DAYS: 30,
  },
  CREATOR_PRO: {
    PRICE: 29,
    MAX_CAMPAIGNS: 10,
    PLATFORM_FEE: 0.05, // 5%
    TRIAL_DAYS: 14,
  },
  BRAND_STARTER: {
    PRICE: 99,
    MAX_CAMPAIGNS: 5,
    TRIAL_DAYS: 14,
  },
  BRAND_PRO: {
    PRICE: 299,
    MAX_CAMPAIGNS: Infinity,
  },
} as const;

// ============================================================================
// SOCIAL PLATFORMS
// ============================================================================

export const PLATFORMS = {
  TIKTOK: 'tiktok',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
} as const;

export type Platform = typeof PLATFORMS[keyof typeof PLATFORMS];

// ============================================================================
// USER TYPES
// ============================================================================

export const USER_TYPES = {
  CREATOR: 'creator',
  BRAND: 'brand',
} as const;

export type UserType = typeof USER_TYPES[keyof typeof USER_TYPES];

// ============================================================================
// CAMPAIGN STATUS
// ============================================================================

export const CAMPAIGN_STATUS = {
  DRAFT: 'borrador',
  PROPOSAL: 'propuesta',
  ACCEPTED: 'aceptada',
  IN_PROGRESS: 'en_progreso',
  COMPLETED: 'completada',
  CANCELLED: 'cancelada',
} as const;

export type CampaignStatus = typeof CAMPAIGN_STATUS[keyof typeof CAMPAIGN_STATUS];

// ============================================================================
// DELIVERABLE TYPES
// ============================================================================

export const DELIVERABLE_TYPES = {
  VIDEO: 'video',
  IMAGE: 'imagen',
  REEL: 'reel',
  STORY: 'historia',
} as const;

export type DeliverableType = typeof DELIVERABLE_TYPES[keyof typeof DELIVERABLE_TYPES];

// ============================================================================
// DELIVERABLE STATUS
// ============================================================================

export const DELIVERABLE_STATUS = {
  PENDING: 'pending',
  SUBMITTED: 'submitted',
  APPROVED: 'approved',
  REJECTED: 'rejected',
} as const;

export type DeliverableStatus = typeof DELIVERABLE_STATUS[keyof typeof DELIVERABLE_STATUS];

// ============================================================================
// NICHO (NICHE) OPTIONS
// ============================================================================

export const NICHOS = [
  'moda',
  'fitness',
  'belleza',
  'tecnología',
  'viajes',
  'gastronomía',
  'lifestyle',
  'gaming',
] as const;

export type Nicho = typeof NICHOS[number];

// ============================================================================
// FILTER DEFAULTS
// ============================================================================

export const FILTER_DEFAULTS = {
  BUDGET_MIN: 0,
  BUDGET_MAX: 50000,
  FOLLOWERS_MIN: 0,
  FOLLOWERS_MAX: 1000000,
  ENGAGEMENT_MIN: 0,
  ENGAGEMENT_MAX: 20,
} as const;

// ============================================================================
// UI CONSTANTS
// ============================================================================

export const UI = {
  MAX_UPLOAD_SIZE_MB: 10,
  DEBOUNCE_DELAY_MS: 300,
  TOAST_DURATION_MS: 3000,
  MAX_FILE_NAME_LENGTH: 50,
  ITEMS_PER_PAGE: 12,
} as const;

// ============================================================================
// VALIDATION RULES
// ============================================================================

export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_BIO_LENGTH: 500,
  MAX_CAMPAIGN_NAME_LENGTH: 100,
  MAX_REVIEW_LENGTH: 500,
  MIN_RATING: 1,
  MAX_RATING: 5,
} as const;

// ============================================================================
// STORAGE KEYS
// ============================================================================

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  THEME_PREFERENCE: 'theme',
} as const;

// ============================================================================
// ERROR MESSAGES
// ============================================================================

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Por favor, intenta de nuevo.',
  INVALID_CREDENTIALS: 'Credenciales inválidas. Verifica tu email y contraseña.',
  SESSION_EXPIRED: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
  GENERIC_ERROR: 'Algo salió mal. Por favor, intenta de nuevo.',
} as const;

// ============================================================================
// SUCCESS MESSAGES
// ============================================================================

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: '¡Bienvenido de vuelta!',
  CAMPAIGN_CREATED: 'Campaña creada exitosamente',
  REVIEW_SUBMITTED: 'Reseña publicada exitosamente',
  PROFILE_UPDATED: 'Perfil actualizado exitosamente',
} as const;
