# BrandFluenceAI - Frontend Architecture

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design Patterns](#design-patterns)
- [State Management](#state-management)
- [Code Organization](#code-organization)
- [Best Practices](#best-practices)
- [Performance](#performance)

## Overview

BrandFluenceAI is a platform connecting brands and content creators through AI-powered matching. The frontend is built with React + TypeScript + Vite, following modern web development best practices.

### Key Features

- 🎯 AI-powered creator-brand matching
- 📊 Advanced analytics dashboard
- 💼 Campaign management system
- ⭐ Reviews and ratings
- 📱 Responsive design (mobile-first)
- 🎨 Modern UI with CSS Modules
- 🔐 JWT-based authentication

## Tech Stack

### Core

- **React 18**: UI library with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **React Router v6**: Client-side routing

### Data & State

- **Apollo Client**: GraphQL client for data fetching
- **React Context API**: Global state (auth, theme)
- **Custom Hooks**: Reusable stateful logic

### Styling

- **CSS Modules**: Scoped component styles
- **CSS Custom Properties**: Design system tokens
- **Modern CSS**: Grid, Flexbox, Container Queries

### Code Quality

- **ESLint**: Code linting
- **TypeScript Strict Mode**: Maximum type safety
- **Prettier** (recommended): Code formatting

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── common/       # Reusable UI components
│   │   ├── features/     # Feature-specific components
│   │   └── layout/       # Layout components
│   ├── config/           # Configuration files
│   │   └── apollo.ts     # Apollo Client setup
│   ├── constants/        # App constants
│   │   └── index.ts      # Centralized constants
│   ├── contexts/         # React contexts
│   │   └── AuthContext.tsx
│   ├── data/             # Mock data (temporary)
│   │   └── mockData.ts
│   ├── hooks/            # Custom React hooks
│   │   ├── useMatchingFilters.ts
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── LandingPage/
│   │   ├── LoginPage/
│   │   ├── MatchingPage/
│   │   └── ...
│   ├── styles/           # Global styles
│   │   └── index.css     # CSS custom properties
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/            # Utility functions
│   │   └── index.ts
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Vite types
├── .eslintrc.cjs         # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

## Design Patterns

### Component Architecture

We follow **Atomic Design principles** with a pragmatic approach:

```
Atoms (common/)
  ↓
Molecules (common/)
  ↓
Organisms (features/)
  ↓
Templates (layout/)
  ↓
Pages (pages/)
```

### Component Categories

1. **Common Components** (`src/components/common/`)
   - Reusable UI primitives
   - No business logic
   - Highly composable
   - Example: Button, Input, Modal

2. **Feature Components** (`src/components/features/`)
   - Domain-specific components
   - Contains business logic
   - Composed of common components
   - Example: CampaignCard, ProfileHeader

3. **Layout Components** (`src/components/layout/`)
   - Page structure and navigation
   - Example: Sidebar, Header, Footer

4. **Page Components** (`src/pages/`)
   - Route-level components
   - Compose feature + common components
   - Handle data fetching
   - Example: MatchingPage, CampaignsPage

### Component Pattern

```tsx
/**
 * Component documentation
 */

// 1. Imports
import React from 'react';
import styles from './Component.module.css';

// 2. Types
interface ComponentProps {
  // Props definition
}

// 3. Component
export const Component: React.FC<ComponentProps> = ({
  prop1,
  prop2 = 'default',
}) => {
  // 4. Hooks
  const [state, setState] = useState();

  // 5. Derived state / Memoization
  const computed = useMemo(() => {}, [deps]);

  // 6. Event handlers
  const handleClick = useCallback(() => {}, []);

  // 7. Effects
  useEffect(() => {}, [deps]);

  // 8. Render
  return (
    <div className={styles.container}>
      {/* JSX */}
    </div>
  );
};
```

## State Management

### Local State

Use **useState** for simple component state:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

### Complex Local State

Use **useReducer** for complex state logic:

```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Global State

Use **React Context** for app-wide state:

```tsx
// AuthContext provides: user, login, logout, isAuthenticated
const { user, logout } = useAuth();
```

### Server State

Use **Apollo Client** for GraphQL data:

```tsx
const { data, loading, error } = useQuery(GET_CREATORS);
```

### Derived State

Use **useMemo** for expensive computations:

```tsx
const filteredCreators = useMemo(() => {
  return creators.filter(/* ... */);
}, [creators, filters]);
```

## Code Organization

### File Naming

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatCurrency.ts`)
- **Types**: PascalCase (e.g., `User`, `Campaign`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)

### Import Order

1. React and external libraries
2. Internal modules (absolute imports)
3. Relative imports
4. Types (using `import type`)
5. Styles

```tsx
// 1. External
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 2. Internal (absolute)
import { Button } from 'src/components/common';
import { formatCurrency } from 'src/utils';

// 3. Relative
import { ProfileHeader } from './ProfileHeader';

// 4. Types
import type { User } from 'src/types';

// 5. Styles
import styles from './Component.module.css';
```

### Barrel Exports

Use index files for clean imports:

```tsx
// src/components/common/index.ts
export { Button } from './Button';
export { Badge } from './Badge';

// Usage
import { Button, Badge } from 'src/components/common';
```

## Best Practices

### TypeScript

✅ **DO:**
- Use strict mode
- Define explicit types for props
- Use type inference for local variables
- Export reusable types
- Use `type` for unions/primitives, `interface` for objects

❌ **DON'T:**
- Use `any` (use `unknown` if necessary)
- Use `Function` type (use specific function signatures)
- Ignore TS errors with `@ts-ignore`

### React

✅ **DO:**
- Use functional components
- Use hooks for state and effects
- Memoize expensive computations
- Use prop destructuring
- Provide default values for optional props

❌ **DON'T:**
- Mutate state directly
- Use index as key in lists
- Define components inside components
- Use inline functions in JSX for callbacks

### CSS

✅ **DO:**
- Use CSS Modules for scoping
- Use CSS custom properties for theming
- Follow mobile-first approach
- Use semantic class names

❌ **DON'T:**
- Use inline styles (except dynamic values)
- Use !important
- Hard-code colors/spacing (use CSS variables)

### Performance

✅ **DO:**
- Use `React.memo` for expensive components
- Use `useCallback` for functions passed as props
- Use `useMemo` for expensive calculations
- Lazy load routes with `React.lazy`

❌ **DON'T:**
- Premature optimization
- Over-memoize everything
- Inline function definitions in JSX

## Performance

### Code Splitting

Routes are lazy-loaded:

```tsx
const MatchingPage = React.lazy(() => import('./pages/MatchingPage'));
```

### Memoization

Use memoization strategically:

```tsx
// Memoize expensive computations
const filtered = useMemo(() => expensiveFilter(data), [data]);

// Memoize callbacks to prevent re-renders
const handleClick = useCallback(() => {}, []);

// Memoize components
export const ExpensiveComponent = React.memo(Component);
```

### Bundle Size

- Tree-shaking enabled (ES modules)
- CSS Modules for scoped styles
- Vite for optimized builds

## Development Workflow

### Running Locally

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
```

### Code Quality

```bash
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler
```

## Future Improvements

- [ ] Add unit tests (Vitest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Implement error boundaries
- [ ] Add loading skeletons
- [ ] Optimize images (next-gen formats)
- [ ] Add service worker for offline support
- [ ] Implement analytics tracking
- [ ] Add accessibility audits
- [ ] Performance monitoring (Web Vitals)

## Contributing

Please read the component documentation in `src/components/README.md` and follow the established patterns and conventions.

---

**Questions?** Contact the development team or refer to inline documentation in the codebase.
