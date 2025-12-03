# 🛠️ Especificaciones Técnicas de Implementación

## BrandFluenceAI - Guía para Desarrolladores

---

## 📋 Índice

1. [Estructura de Componentes React](#estructura-de-componentes)
2. [Sistema de Diseño](#sistema-de-diseño)
3. [GraphQL Schema](#graphql-schema)
4. [Rutas y Navegación](#rutas-y-navegación)
5. [State Management](#state-management)
6. [Integraciones de IA](#integraciones-de-ia)
7. [Testing Strategy](#testing-strategy)

---

## 🧩 Estructura de Componentes React

### Componentes Principales

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── Button.test.tsx
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── Sidebar/
│   ├── creator/
│   │   ├── CreatorCard/
│   │   ├── CreatorProfile/
│   │   └── CreatorStats/
│   ├── brand/
│   │   ├── MatchingDashboard/
│   │   ├── FilterPanel/
│   │   └── AIInsights/
│   ├── analytics/
│   │   ├── MetricCard/
│   │   ├── Chart/
│   │   └── TopContent/
│   └── layout/
│       ├── Header/
│       ├── Footer/
│       └── Navigation/
├── pages/
│   ├── Landing.tsx
│   ├── Matching.tsx
│   ├── Analytics.tsx
│   ├── Profile.tsx
│   └── Campaign.tsx
├── hooks/
│   ├── useMatching.ts
│   ├── useAnalytics.ts
│   └── useAuth.ts
├── graphql/
│   ├── queries/
│   ├── mutations/
│   └── subscriptions/
├── utils/
│   ├── formatters.ts
│   ├── validators.ts
│   └── constants.ts
└── styles/
    ├── globals.css
    └── variables.css
```

### Componente CreatorCard - Ejemplo Completo

```tsx
// components/creator/CreatorCard/CreatorCard.tsx

import React from 'react';
import { Creator } from '@/types';
import { formatNumber } from '@/utils/formatters';
import styles from './CreatorCard.module.css';

interface CreatorCardProps {
  creator: Creator;
  matchScore?: number;
  onContact: (creatorId: string) => void;
  onViewProfile: (creatorId: string) => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({
  creator,
  matchScore,
  onContact,
  onViewProfile
}) => {
  return (
    <div className={styles.card}>
      {matchScore && (
        <div className={styles.matchBadge}>
          {matchScore}
        </div>
      )}
      
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={creator.avatar} alt={creator.name} />
          {creator.verified && (
            <div className={styles.verifiedBadge}>✓</div>
          )}
        </div>
        
        <div className={styles.info}>
          <h3>{creator.name}</h3>
          <p className={styles.handle}>@{creator.handle}</p>
          <div className={styles.tags}>
            {creator.niches.map(niche => (
              <span key={niche} className={styles.tag}>
                {niche}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>
            {formatNumber(creator.followers)}
          </div>
          <div className={styles.statLabel}>Seguidores</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>
            {creator.engagementRate}%
          </div>
          <div className={styles.statLabel}>Engagement</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>
            ${creator.ratePerPost}
          </div>
          <div className={styles.statLabel}>Por video</div>
        </div>
      </div>

      <p className={styles.bio}>{creator.bio}</p>

      {matchScore && (
        <div className={styles.matchReasons}>
          {creator.matchReasons?.map((reason, index) => (
            <div key={index} className={styles.reason}>
              <span className={styles.checkmark}>✓</span>
              <span>{reason}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        <button 
          className={styles.btnContact}
          onClick={() => onContact(creator.id)}
        >
          Contactar
        </button>
        <button 
          className={styles.btnView}
          onClick={() => onViewProfile(creator.id)}
        >
          👁 Ver Perfil
        </button>
      </div>
    </div>
  );
};
```

---

## 🎨 Sistema de Diseño

### Variables CSS Globales

```css
/* styles/variables.css */

:root {
  /* Colors */
  --primary: #6366F1;
  --primary-dark: #4F46E5;
  --secondary: #EC4899;
  --accent: #14B8A6;
  --success: #10B981;
  --warning: #F59E0B;
  --danger: #EF4444;
  
  /* Dark Theme */
  --dark: #0F172A;
  --dark-light: #1E293B;
  --dark-lighter: #334155;
  
  /* Text */
  --text: #F8FAFC;
  --text-muted: #94A3B8;
  
  /* Gradients */
  --gradient-1: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  --gradient-2: linear-gradient(135deg, #14B8A6 0%, #6366F1 100%);
  --gradient-3: linear-gradient(135deg, #F59E0B 0%, #EC4899 100%);
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Typography */
  --font-display: 'Sora', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  
  /* Z-index */
  --z-dropdown: 1000;
  --z-modal: 2000;
  --z-tooltip: 3000;
}
```

### Tokens de Diseño en TypeScript

```typescript
// utils/design-tokens.ts

export const colors = {
  primary: '#6366F1',
  secondary: '#EC4899',
  accent: '#14B8A6',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  dark: '#0F172A',
  darkLight: '#1E293B',
  text: '#F8FAFC',
  textMuted: '#94A3B8',
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
} as const;

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1400px',
} as const;
```

---

## 🔌 GraphQL Schema

### Types

```graphql
type User {
  id: ID!
  email: String!
  type: UserType!
  profile: Profile!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum UserType {
  CREATOR
  BRAND
}

type Profile {
  name: String!
  avatar: String
  bio: String
  verified: Boolean!
  # Creator-specific
  handle: String
  niches: [String!]
  socialMedia: SocialMedia
  metrics: CreatorMetrics
  ratePerPost: Float
  portfolio: [PortfolioItem!]
  # Brand-specific
  company: String
  logo: String
  budget: Float
  targetNiches: [String!]
}

type SocialMedia {
  tiktok: String
  instagram: String
  youtube: String
}

type CreatorMetrics {
  followers: Int!
  engagementRate: Float!
  averageViews: Int
}

type PortfolioItem {
  id: ID!
  title: String!
  url: String!
  thumbnail: String
  metrics: ContentMetrics
}

type ContentMetrics {
  views: Int!
  likes: Int!
  comments: Int!
  shares: Int!
}

type MatchResult {
  creator: User!
  score: Int!
  reasons: [String!]!
}

type Campaign {
  id: ID!
  name: String!
  brand: User!
  creator: User
  description: String!
  budget: Float!
  deadline: DateTime!
  deliverables: [String!]!
  status: CampaignStatus!
  contract: Contract
  metrics: CampaignMetrics
  createdAt: DateTime!
}

enum CampaignStatus {
  DRAFT
  PROPOSED
  ACCEPTED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

type Contract {
  id: ID!
  generatedAt: DateTime!
  acceptedAt: DateTime
  terms: String!
  pdfUrl: String
}

type CampaignMetrics {
  totalViews: Int!
  totalEngagement: Int!
  comments: Int!
  engagementRate: Float!
  conversions: Int
}
```

### Queries

```graphql
type Query {
  # Auth
  me: User!
  
  # Matching
  getMatches(
    niches: [String!]
    budget: Float
    minFollowers: Int
    minEngagementRate: Float
    limit: Int
  ): [MatchResult!]!
  
  # Profiles
  getCreatorProfile(id: ID!): User!
  getBrandProfile(id: ID!): User!
  
  # Campaigns
  getMyCampaigns: [Campaign!]!
  getCampaign(id: ID!): Campaign!
  
  # Analytics
  getCampaignAnalytics(campaignId: ID!): CampaignMetrics!
}
```

### Mutations

```graphql
type Mutation {
  # Auth
  register(input: RegisterInput!): AuthPayload!
  login(email: String!, password: String!): AuthPayload!
  
  # Profile
  updateProfile(input: ProfileInput!): User!
  
  # Campaigns
  createCampaign(input: CampaignInput!): Campaign!
  updateCampaign(id: ID!, input: CampaignInput!): Campaign!
  acceptCampaign(id: ID!): Campaign!
  completeCampaign(id: ID!): Campaign!
  
  # Reviews
  createReview(input: ReviewInput!): Review!
}

type AuthPayload {
  token: String!
  user: User!
}
```

---

## 🗺️ Rutas y Navegación

### React Router Setup

```typescript
// App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes - Creator */}
        <Route element={<ProtectedRoute allowedTypes={['CREATOR']} />}>
          <Route path="/creator/dashboard" element={<CreatorDashboard />} />
          <Route path="/creator/profile" element={<CreatorProfile />} />
          <Route path="/creator/campaigns" element={<CreatorCampaigns />} />
        </Route>
        
        {/* Protected Routes - Brand */}
        <Route element={<ProtectedRoute allowedTypes={['BRAND']} />}>
          <Route path="/brand/dashboard" element={<BrandDashboard />} />
          <Route path="/brand/matching" element={<MatchingDashboard />} />
          <Route path="/brand/campaigns" element={<BrandCampaigns />} />
          <Route path="/brand/analytics/:campaignId" element={<Analytics />} />
        </Route>
        
        {/* Shared Routes */}
        <Route element={<ProtectedRoute allowedTypes={['CREATOR', 'BRAND']} />}>
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🔄 State Management

### Apollo Client Setup

```typescript
// lib/apollo-client.ts

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getMatches: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});
```

### Custom Hooks

```typescript
// hooks/useMatching.ts

import { useQuery, useMutation } from '@apollo/client';
import { GET_MATCHES } from '@/graphql/queries';

interface UseMatchingParams {
  niches?: string[];
  budget?: number;
  minFollowers?: number;
  minEngagementRate?: number;
}

export const useMatching = (params: UseMatchingParams) => {
  const { data, loading, error, refetch } = useQuery(GET_MATCHES, {
    variables: params,
    skip: !params.niches?.length,
  });

  return {
    matches: data?.getMatches || [],
    loading,
    error,
    refetch,
  };
};
```

---

## 🤖 Integraciones de IA

### OpenAI Integration (Backend - NestJS)

```typescript
// src/ai-integration/openai.service.ts

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  async generateBrief(campaignDetails: CampaignDetails): Promise<string> {
    const prompt = `
      Genera un brief creativo para una campaña UGC con los siguientes detalles:
      
      Marca: ${campaignDetails.brandName}
      Producto: ${campaignDetails.product}
      Objetivo: ${campaignDetails.objective}
      Audiencia: ${campaignDetails.targetAudience}
      Tono: ${campaignDetails.tone}
      
      El brief debe incluir:
      1. Concepto principal
      2. Ideas de contenido (3-5)
      3. Llamados a la acción sugeridos
      4. Hashtags relevantes
      5. Elementos visuales clave
    `;

    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return completion.choices[0].message.content;
  }

  async calculateMatchScore(
    creator: Creator,
    campaignPreferences: CampaignPreferences,
  ): Promise<MatchResult> {
    // Implementación del algoritmo de matching
    let score = 0;
    const reasons: string[] = [];

    // Nicho match (40%)
    const nicheMatch = creator.niches.some(niche =>
      campaignPreferences.targetNiches.includes(niche)
    );
    if (nicheMatch) {
      score += 40;
      reasons.push('Nicho perfecto para la campaña');
    }

    // Budget match (30%)
    if (creator.ratePerPost <= campaignPreferences.budget) {
      score += 30;
      reasons.push('Dentro de tu presupuesto');
    }

    // Engagement rate (30%)
    if (creator.metrics.engagementRate >= 5) {
      score += 30;
      reasons.push('Engagement rate superior al promedio');
    }

    return { creator, score, reasons };
  }
}
```

### Matching Resolver

```typescript
// src/matching/matching.resolver.ts

import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MatchingService } from './matching.service';
import { OpenAIService } from '../ai-integration/openai.service';

@Resolver()
export class MatchingResolver {
  constructor(
    private matchingService: MatchingService,
    private openaiService: OpenAIService,
  ) {}

  @Query(() => [MatchResult])
  @UseGuards(JwtAuthGuard)
  async getMatches(
    @Args('niches', { type: () => [String] }) niches: string[],
    @Args('budget', { type: () => Float, nullable: true }) budget?: number,
    @Args('minFollowers', { type: () => Int, nullable: true }) minFollowers?: number,
    @Args('minEngagementRate', { type: () => Float, nullable: true }) minEngagementRate?: number,
  ): Promise<MatchResult[]> {
    const creators = await this.matchingService.findCreators({
      niches,
      minFollowers,
      minEngagementRate,
    });

    const campaignPreferences = {
      targetNiches: niches,
      budget: budget || Infinity,
    };

    const matches = await Promise.all(
      creators.map(creator =>
        this.openaiService.calculateMatchScore(creator, campaignPreferences)
      )
    );

    return matches
      .filter(match => match.score >= 60)
      .sort((a, b) => b.score - a.score);
  }
}
```

---

## 🧪 Testing Strategy

### Unit Tests - Component

```typescript
// components/creator/CreatorCard/CreatorCard.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { CreatorCard } from './CreatorCard';

const mockCreator = {
  id: '1',
  name: 'María García',
  handle: 'mariafit',
  avatar: '/avatar.jpg',
  verified: true,
  niches: ['Fitness', 'Lifestyle'],
  followers: 125000,
  engagementRate: 8.5,
  ratePerPost: 850,
  bio: 'Entrenadora personal certificada',
  matchReasons: ['Nicho perfecto', 'Alto engagement'],
};

describe('CreatorCard', () => {
  it('renders creator information correctly', () => {
    render(
      <CreatorCard
        creator={mockCreator}
        matchScore={95}
        onContact={jest.fn()}
        onViewProfile={jest.fn()}
      />
    );

    expect(screen.getByText('María García')).toBeInTheDocument();
    expect(screen.getByText('@mariafit')).toBeInTheDocument();
    expect(screen.getByText('95')).toBeInTheDocument();
    expect(screen.getByText('125K')).toBeInTheDocument();
  });

  it('calls onContact when contact button is clicked', () => {
    const onContact = jest.fn();
    render(
      <CreatorCard
        creator={mockCreator}
        onContact={onContact}
        onViewProfile={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText('Contactar'));
    expect(onContact).toHaveBeenCalledWith('1');
  });
});
```

### Integration Tests - GraphQL

```typescript
// __tests__/integration/matching.test.ts

import { ApolloServer } from '@apollo/server';
import { GET_MATCHES } from '@/graphql/queries';

describe('Matching Integration', () => {
  let testServer: ApolloServer;

  beforeAll(async () => {
    testServer = await createTestServer();
  });

  it('returns matching creators based on filters', async () => {
    const response = await testServer.executeOperation({
      query: GET_MATCHES,
      variables: {
        niches: ['Fitness'],
        budget: 1000,
        minEngagementRate: 5,
      },
    });

    expect(response.body.kind).toBe('single');
    expect(response.body.singleResult.data.getMatches).toHaveLength(3);
    expect(response.body.singleResult.data.getMatches[0].score).toBeGreaterThanOrEqual(60);
  });
});
```

---

## 📦 Build & Deploy

### Docker Setup

```dockerfile
# Dockerfile

FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000

CMD ["npm", "start"]
```

### Environment Variables

```env
# .env.example

# App
NODE_ENV=production
PORT=3000

# Database
MONGODB_URI=mongodb://localhost:27017/brandfluence

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# OpenAI
OPENAI_API_KEY=sk-...

# AWS S3
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_BUCKET_NAME=brandfluence-media

# Frontend
REACT_APP_API_URL=http://localhost:3000/graphql
REACT_APP_WS_URL=ws://localhost:3000/graphql
```

---

## 📚 Recursos Adicionales

- **Figma**: [Link a diseños] (si aplica)
- **Storybook**: `npm run storybook`
- **GraphQL Playground**: `http://localhost:3000/graphql`
- **Documentation**: `/docs`

---

**Versión**: 1.0  
**Última actualización**: Diciembre 2024  
**Mantenido por**: Equipo de Desarrollo BrandFluenceAI
