/**
 * @fileoverview Pages Barrel Export
 *
 * Central export point for all page components.
 * Import from this file for cleaner imports in routing configuration.
 *
 * @example
 * ```ts
 * import { LandingPage, LoginPage, MatchingPage } from 'src/pages';
 * ```
 */

// Public Pages (Unauthenticated)
export { LandingPage } from './LandingPage';
export { LoginPage } from './LoginPage';
export { RegisterPage } from './RegisterPage';

// Onboarding Pages
export { OnboardingCreatorPage } from './OnboardingCreatorPage';
export { OnboardingBrandPage } from './OnboardingBrandPage';

// Protected Pages (Authenticated)
export { MatchingPage } from './MatchingPage';
export { AnalyticsPage } from './AnalyticsPage';
export { CampaignsPage } from './CampaignsPage';
export { CampaignDetailPage } from './CampaignDetailPage';
export { CreatorProfilePage } from './CreatorProfilePage';
