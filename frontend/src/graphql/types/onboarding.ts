/**
 * Creator Onboarding Input Types
 */
export interface CreatorOnboardingInput {
  avatar?: string; // Base64 encoded image or URL
  fullName: string;
  handle: string;
  bio: string;
  nichos: string[];
  customTags?: string[];
  redesSociales: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };
  portfolio: Array<{
    url: string;
    type: 'tiktok' | 'instagram' | 'youtube';
  }>;
  pricePerVideo: string;
  availability: 'available' | 'busy' | 'unavailable';
}

/**
 * Brand Onboarding Input Types
 */
export interface BrandOnboardingInput {
  logo?: string; // Base64 encoded image or URL
  companyName: string;
  industry: string;
  description: string;
  website?: string;
  budgetRange: {
    min: string;
    max: string;
  };
  nichos: string[];
  contentTypes: string[];
  campaignFrequency: string;
  country: string;
  currency: string;
  paymentMethods: string[];
}

/**
 * Onboarding Response Types
 */
export interface OnboardingResponse {
  success: boolean;
  user: {
    _id: string;
    email: string;
    nombre: string;
    tipo: 'creator' | 'brand';
    perfil: any;
  };
  message: string;
}

export interface HandleAvailabilityResponse {
  available: boolean;
  message: string;
}
