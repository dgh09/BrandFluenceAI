/**
 * Matching Filters Input for GraphQL queries
 */
export interface MatchingFiltersInput {
  nicho?: string[];
  presupuesto?: {
    min: number;
    max: number;
  };
  seguidores?: {
    min: number;
    max: number;
  };
  engagementRate?: {
    min: number;
    max: number;
  };
  plataformas?: ('tiktok' | 'instagram' | 'youtube')[];
  tipoContenido?: string[];
  audienciaEdad?: string;
  audienciaGenero?: string;
  ubicacion?: string;
  idioma?: string;
}

/**
 * Creator with Matching Score
 */
export interface CreatorWithMatch {
  _id: string;
  perfil: {
    nombre: string;
    handle: string;
    avatar: string;
    bio: string;
    nichos: string[];
    redesSociales: {
      tiktok?: string;
      instagram?: string;
      youtube?: string;
    };
    metricas: {
      followers: number;
      engagementRate: number;
    };
    tarifa?: number;
  };
  verificado: boolean;
  ubicacion?: string;
  rating?: number;
  matchScore: number;
  matchReasons: string[];
  audienceDemographics?: {
    age: {
      range18_24: number;
      range25_34: number;
      range35_44: number;
      range45Plus: number;
    };
    gender: {
      female: number;
      male: number;
      other: number;
    };
    topLocations: string[];
  };
  recentCampaigns?: {
    total: number;
    avgRating: number;
    completionRate: number;
  };
}

/**
 * Search Creators Response
 */
export interface SearchCreatorsResponse {
  total: number;
  creators: CreatorWithMatch[];
}

/**
 * Matching Recommendation
 */
export interface MatchingRecommendation {
  creatorId: string;
  creator: {
    _id: string;
    perfil: {
      nombre: string;
      handle: string;
      avatar: string;
      bio: string;
      nichos: string[];
    };
    verificado: boolean;
  };
  matchScore: number;
  matchReasons: string[];
  estimatedReach: number;
  estimatedEngagement: number;
  suggestedBudget: {
    min: number;
    max: number;
  };
}

/**
 * AI Insight
 */
export interface AIInsightType {
  icon: string;
  title: string;
  description: string;
  type?: string;
  priority?: 'high' | 'medium' | 'low';
  actionable?: boolean;
  action?: {
    label: string;
    type: string;
    data: any;
  };
}

/**
 * Matching Recommendations Response
 */
export interface MatchingRecommendationsResponse {
  recommendations: MatchingRecommendation[];
  insights: AIInsightType[];
}

/**
 * Trending Creator
 */
export interface TrendingCreator {
  creatorId: string;
  reason: string;
  growthRate: number;
}

/**
 * Market Insights
 */
export interface MarketInsights {
  avgEngagementRate: number;
  avgPriceRange: {
    min: number;
    max: number;
  };
  popularNiches: string[];
  seasonalTrends: string[];
}

/**
 * AI Matching Insights Response
 */
export interface AIMatchingInsightsResponse {
  insights: AIInsightType[];
  trendingCreators: TrendingCreator[];
  marketInsights: MarketInsights;
}

/**
 * Save Preferences Response
 */
export interface SavePreferencesResponse {
  success: boolean;
  message: string;
  preferences: MatchingFiltersInput;
}
