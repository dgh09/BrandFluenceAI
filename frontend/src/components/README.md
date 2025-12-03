# Components Documentation

This directory contains all React components for the BrandFluenceAI application, organized by purpose and reusability.

## Directory Structure

```
src/components/
├── common/          # Reusable UI components used across the app
├── features/        # Feature-specific components
├── layout/          # Layout components (Sidebar, Header, Footer)
└── README.md        # This file
```

## Component Categories

### 1. Common Components (`/common`)

Reusable, generic UI components that can be used anywhere in the application. These components are:
- **Framework-agnostic**: No business logic
- **Highly reusable**: Used in multiple places
- **Well-documented**: Clear props and examples
- **Accessible**: Follow WCAG 2.1 AA standards

#### Available Components:

| Component | Description | Props |
|-----------|-------------|-------|
| `Button` | Versatile button with variants and sizes | `variant`, `size`, `children` |
| `Badge` | Status badge component | `status`, `children` |
| `Modal` | Accessible modal dialog | `isOpen`, `onClose`, `title`, `children` |
| `Tabs` | Tab navigation component | `tabs`, `activeTab`, `onChange` |
| `FormInput` | Text input with label and validation | `label`, `error`, `...inputProps` |
| `FormTextarea` | Textarea with label and validation | `label`, `error`, `maxLength` |
| `FormSelect` | Select dropdown with label | `label`, `options`, `...selectProps` |
| `CreatorCard` | Card displaying creator information | `creator`, `onClick` |

### 2. Feature Components (`/features`)

Components tied to specific features or pages. Organized by feature domain:

#### Campaign (`/features/Campaign`)
- `CampaignCard` - Display campaign summary
- `CampaignTimeline` - Visual timeline of campaign events

#### Creator Profile (`/features/CreatorProfile`)
- `ProfileHeader` - Creator profile header with avatar and bio
- `ProfileStats` - Statistics display (followers, engagement, etc.)
- `ProfilePortfolio` - Portfolio items grid
- `ProfileReviews` - Reviews list
- `ContactButton` - Contact/hire CTA

#### Matching (`/features/MatchingFilters`)
- `MatchingFilters` - Advanced filtering panel for creator matching

#### Reviews (`/features/Review`)
- `RatingStars` - Interactive star rating input/display
- `ReviewCard` - Individual review display
- `ReviewForm` - Review submission form

### 3. Layout Components (`/layout`)

Components that define the application's structure and navigation:

- `Sidebar` - Main navigation sidebar
- (More to come: Header, Footer, etc.)

## Coding Standards

### File Organization

Each component should follow this structure:

```
ComponentName/
├── ComponentName.tsx         # Component logic
├── ComponentName.module.css  # Component styles
├── index.ts                  # Barrel export
└── ComponentName.test.tsx    # Tests (coming soon)
```

For smaller components, a single file is acceptable:
```
ComponentName.tsx
ComponentName.module.css
```

### Component Template

```tsx
/**
 * @fileoverview [Component Name] Component
 *
 * [Brief description of what this component does]
 *
 * @module components/[category]/[ComponentName]
 */

import React from 'react';
import styles from './ComponentName.module.css';

/**
 * Props for the [ComponentName] component
 */
interface ComponentNameProps {
  /** Description of prop */
  propName: PropType;

  /** Optional prop with default */
  optionalProp?: string;
}

/**
 * [ComponentName] Component
 *
 * [Detailed description of functionality, use cases, and behavior]
 *
 * @component
 * @example
 * ```tsx
 * <ComponentName propName="value">
 *   Content
 * </ComponentName>
 * ```
 *
 * @param {ComponentNameProps} props - Component props
 * @returns {React.ReactElement} Rendered component
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  propName,
  optionalProp = 'default',
}) => {
  return (
    <div className={styles.container}>
      {/* Component JSX */}
    </div>
  );
};
```

### Best Practices

#### 1. TypeScript

- **Always use TypeScript**: No `any` types unless absolutely necessary
- **Define interfaces**: Create clear prop interfaces
- **Export types**: Make types available for consumers
- **Use type imports**: `import type { ... }` for type-only imports

```tsx
// ✅ Good
import type { User } from '../../types';
interface UserCardProps {
  user: User;
  onSelect: (id: string) => void;
}

// ❌ Bad
interface UserCardProps {
  user: any;
  onSelect: Function;
}
```

#### 2. Props

- **Destructure props**: Always destructure in function signature
- **Provide defaults**: Use default parameters for optional props
- **Document props**: Add JSDoc comments to each prop
- **Use prop spreading carefully**: Only spread when necessary

```tsx
// ✅ Good
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};

// ❌ Bad
export const Button = (props) => {
  return <button>{props.children}</button>;
};
```

#### 3. CSS Modules

- **Use CSS Modules**: Scoped styles for all components
- **Follow BEM-like naming**: Use descriptive class names
- **Avoid inline styles**: Use CSS modules for consistency
- **Use CSS variables**: Reference global CSS variables for colors/spacing

```tsx
// ✅ Good
<div className={styles.container}>
  <h2 className={styles.title}>Title</h2>
</div>

// ❌ Bad
<div style={{ padding: '20px', backgroundColor: '#6366F1' }}>
  <h2>Title</h2>
</div>
```

#### 4. Component Composition

- **Single Responsibility**: One component, one purpose
- **Composition over inheritance**: Build complex UIs by composing simple components
- **Props over context**: Use props for direct parent-child communication
- **Children prop**: Accept children for flexible content

```tsx
// ✅ Good - Composable
<Modal isOpen={isOpen} onClose={onClose}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>
    <Button onClick={onClose}>Close</Button>
  </Modal.Footer>
</Modal>

// ❌ Bad - Too many props
<Modal
  title="Title"
  content="Content"
  buttons={[{ label: 'Close', onClick: onClose }]}
/>
```

#### 5. Performance

- **Use React.memo**: For expensive components that re-render often
- **useCallback**: Memoize callbacks passed to child components
- **useMemo**: Memoize expensive calculations
- **Avoid inline functions in JSX**: Define handlers outside render

```tsx
// ✅ Good
const handleClick = useCallback(() => {
  // Handler logic
}, [dependency]);

return <Button onClick={handleClick}>Click</Button>;

// ❌ Bad
return <Button onClick={() => handleSomething()}>Click</Button>;
```

#### 6. Accessibility

- **Semantic HTML**: Use appropriate HTML elements
- **ARIA attributes**: Add ARIA labels when needed
- **Keyboard navigation**: Support Tab, Enter, Escape
- **Focus management**: Handle focus appropriately

```tsx
// ✅ Good
<button
  onClick={handleClick}
  aria-label="Close modal"
  aria-pressed={isPressed}
>
  ×
</button>

// ❌ Bad
<div onClick={handleClick}>×</div>
```

## Import Conventions

### Absolute Imports

Use absolute imports from `src/` for better readability:

```tsx
// ✅ Good
import { Button } from 'src/components/common';
import { User } from 'src/types';
import { formatCurrency } from 'src/utils';

// ❌ Bad (but still works)
import { Button } from '../../../components/common';
```

### Barrel Exports

Use `index.ts` files to create clean import paths:

```tsx
// src/components/common/index.ts
export { Button } from './Button';
export { Badge } from './Badge';
export { Modal } from './Modal';

// Usage
import { Button, Badge, Modal } from 'src/components/common';
```

## State Management

### Component State

- **useState**: For simple local state
- **useReducer**: For complex state logic
- **Custom hooks**: Extract reusable stateful logic

### Global State

- **Context API**: For app-wide state (auth, theme)
- **Apollo Client**: For server state (GraphQL data)

## Testing (Coming Soon)

Each component should have:
- **Unit tests**: Test component logic and rendering
- **Integration tests**: Test component interactions
- **Accessibility tests**: Verify WCAG compliance

## Questions?

For questions about component architecture or conventions, please contact the development team or refer to the main project README.
