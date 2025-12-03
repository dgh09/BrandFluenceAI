// BrandFluenceAI - TypeScript Interfaces
// Based on PRD MongoDB Schemas

/**
 * User Types
 */
export type UserType = 'creator' | 'brand';
export type UserStatus = 'activo' | 'inactivo' | 'bloqueado';

export interface SocialMedia {
  tiktok?: string;
  instagram?: string;
  youtube?: string;
}

export interface UserMetrics {
  followers: number;
  engagementRate: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  platform: 'tiktok' | 'instagram' | 'youtube';
  metrics: {
    views: number;
    likes: number;
    comments: number;
  };
  date: Date;
  url?: string;
}

export interface UserProfile {
  nombre: string;
  foto: string;
  bio: string;
  nichos: string[];
  redesSociales: SocialMedia;
  metricas: UserMetrics;
  tarifa?: number; // Only for creators
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  _id: string;
  email: string;
  tipo: UserType;
  perfil: UserProfile;
  verificado: boolean;
  estado: UserStatus;
  portfolio?: PortfolioItem[];
  availability?: {
    status: 'available' | 'busy' | 'unavailable';
    nextAvailable?: Date;
  };
  profileComplete?: boolean;
  location?: string;
  rating?: number;
  totalReviews?: number;
}

/**
 * Campaign Types
 */
export type CampaignStatus =
  | 'borrador'
  | 'propuesta'
  | 'aceptada'
  | 'en_progreso'
  | 'completada'
  | 'cancelada';

export type DeliverableType = 'video' | 'imagen' | 'reel' | 'historia' | 'post';
export type DeliverableStatus = 'pending' | 'submitted' | 'approved' | 'rejected';
export type TimelineEventType = 'created' | 'accepted' | 'milestone' | 'submitted' | 'completed' | 'cancelled';

export interface Deliverable {
  id: string;
  type: DeliverableType;
  quantity: number;
  dueDate: Date;
  status: DeliverableStatus;
  submittedUrl?: string;
  submittedAt?: Date;
  approvedAt?: Date;
  rejectionReason?: string;
}

export interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  date: Date;
  description: string;
  userId: string;
  userName: string;
}

export interface CampaignBrief {
  description: string;
  requirements: string[];
  references?: string[];
  targetAudience?: string;
  keyMessages?: string[];
}

export interface PaymentTerms {
  upfront: number; // percentage
  milestone: number; // percentage
  completion: number; // percentage
}

export interface CampaignParticipants {
  brandId: string;
  brandName: string;
  creatorIds: string[];
  creatorNames: string[];
}

export interface Contract {
  generadoEn: Date;
  terminosAceptados: boolean;
  pdfUrl?: string;
}

export interface CampaignMetrics {
  alcance: number;
  engagement: number;
  conversiones?: number;
}

export interface Campaign {
  _id: string;
  nombreCampaña: string;
  marcaId: string;
  creadorId: string;
  descripcion: string;
  presupuesto: number;
  deliverables: Deliverable[];
  deadline: Date;
  estado: CampaignStatus;
  contrato?: Contract;
  metricas?: CampaignMetrics;
  createdAt: Date;
  updatedAt: Date;
  // Extended fields for Phase 3
  participants: CampaignParticipants;
  timeline: TimelineEvent[];
  brief: CampaignBrief;
  paymentTerms: PaymentTerms;
  progress?: number; // 0-100 percentage
}

/**
 * Review Types
 */
export interface ReviewCriteria {
  communication?: number;
  quality?: number;
  timeliness?: number;
  professionalism?: number;
}

export interface Review {
  _id: string;
  campaña: string;
  de: string;
  para: string;
  calificacion: 1 | 2 | 3 | 4 | 5;
  comentario: string;
  createdAt: Date;
  // Extended fields for Phase 4
  title?: string;
  criteria?: ReviewCriteria;
  images?: string[];
  verified?: boolean;
  helpful?: number;
}

/**
 * Creator Card Types (for UI)
 */
export interface CreatorCard {
  id: string;
  nombre: string;
  handle: string;
  avatar: string;
  nichos: string[];
  seguidores: string;
  engagementRate: string;
  precioPorVideo: string;
  tarifa: string; // Price range (e.g., "$500-$800")
  verificado: boolean;
  matchScore: number;
  bio: string;
  matchReasons: string[];
  plataformas: ('tiktok' | 'instagram' | 'youtube')[];
}

/**
 * Analytics Types
 */
export interface AnalyticsOverview {
  totalViews: number;
  totalEngagement: number;
  totalComments: number;
  engagementRate: number;
  previousPeriodChange: {
    views: number;
    engagement: number;
    comments: number;
    engagementRate: number;
  };
}

export interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
}

export interface EngagementDistribution {
  likes: number;
  comments: number;
  shares: number;
  saves: number;
}

export interface AudienceInsights {
  age: {
    '18-24': number;
    '25-34': number;
    '35-44': number;
    '45+': number;
  };
  gender: {
    female: number;
    male: number;
    other: number;
  };
  locations: {
    country: string;
    percentage: number;
  }[];
}

/**
 * Matching Types
 */
export interface MatchFilters {
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
  audienciaTarget?: string;
  genero?: string;
  ubicacion?: string;
  idioma?: string;
}

export interface AIInsight {
  icon: string;
  title: string;
  description: string;
}
