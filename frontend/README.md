# BrandFluenceAI - Frontend Prototype

React + TypeScript prototype for BrandFluenceAI, aligned with the PRD and architecture specifications.

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **React Router DOM** - Client-side routing
- **Apollo Client** - GraphQL client (configured, ready for backend)
- **CSS Modules** - Scoped component styling

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable UI components
│   │   ├── Button/
│   │   └── CreatorCard/
│   └── layout/         # Layout components
│       └── Sidebar/
├── pages/              # Page components
│   ├── LandingPage/
│   ├── MatchingPage/
│   └── AnalyticsPage/
├── types/              # TypeScript interfaces (aligned with PRD)
├── data/               # Mock data (aligned with MongoDB schemas)
├── config/             # Configuration files
│   └── apollo.ts       # Apollo Client setup
├── styles/             # Global styles
├── hooks/              # Custom React hooks (future)
└── utils/              # Utility functions (future)
```

## Design System

The design system is extracted from the HTML mockups and defined in `src/index.css`:

- **Colors**: Primary (#6366F1), Secondary (#EC4899), Accent (#14B8A6), Dark theme
- **Typography**: Sora (display), DM Sans (body)
- **Gradients**: Multiple gradient variants
- **Spacing**: Consistent spacing scale
- **Border Radius**: Predefined radius values

## Available Pages

1. **Landing Page** (`/`) - Public homepage with hero, features, and CTA
2. **Matching Page** (`/matching`) - AI-powered creator matching dashboard
3. **Analytics Page** (`/analytics`) - Campaign performance metrics

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` (or next available port)

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features Implemented

### MUST Features (from PRD)
- ✅ Landing page with clear value proposition
- ✅ Creator matching interface with AI insights
- ✅ Match scoring system (95%, 88%, 82% badges)
- ✅ Creator cards with engagement metrics
- ✅ Analytics dashboard with campaign metrics

### UI Components
- ✅ Reusable Button component (4 variants)
- ✅ Sidebar navigation with active states
- ✅ Creator cards with avatars, stats, and CTAs
- ✅ Stat cards with trend indicators
- ✅ Responsive grid layouts

### Data Layer
- ✅ TypeScript interfaces matching PRD MongoDB schemas
- ✅ Mock data for creators, campaigns, analytics
- ✅ Apollo Client configuration (ready for backend integration)

## Apollo Client Setup

The Apollo Client is configured in `src/config/apollo.ts` and ready to connect to the NestJS GraphQL backend.

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
VITE_GRAPHQL_ENDPOINT=http://localhost:3000/graphql
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

### Authentication

The Apollo Client is configured with an auth link that automatically attaches JWT tokens from localStorage to requests.

## Next Steps (Backend Integration)

1. Connect to NestJS GraphQL backend
2. Replace mock data with real GraphQL queries
3. Implement authentication flows (JWT/OAuth2)
4. Add campaign creation and management
5. Implement real-time messaging
6. Add payment integration (Stripe)
7. Implement AI features (OpenAI GPT-4)

## TypeScript Types

All types are defined in `src/types/index.ts` and match the MongoDB schemas from the PRD:

- `User` - User profiles (brands & creators)
- `CreatorCard` - Creator display data
- `Campaign` - Campaign information
- `Analytics` - Performance metrics
- `AIInsight` - AI recommendations

## Responsive Design

The prototype is fully responsive with breakpoints at:
- Desktop: 1400px+
- Tablet: 1024px - 1400px
- Mobile: < 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

This is a prototype with mock data. All interactions are client-side only until the NestJS backend is integrated.
