import { gql } from '@apollo/client';

/**
 * Mutation to complete creator onboarding
 */
export const COMPLETE_CREATOR_ONBOARDING = gql`
  mutation CompleteCreatorOnboarding($input: CreatorOnboardingInput!) {
    completeCreatorOnboarding(input: $input) {
      success
      user {
        _id
        email
        nombre
        tipo
        perfil {
          avatar
          handle
          bio
          nichos
          customTags
          redesSociales {
            tiktok
            instagram
            youtube
          }
          portfolio {
            url
            type
          }
          pricePerVideo
          availability
        }
      }
      message
    }
  }
`;

/**
 * Mutation to complete brand onboarding
 */
export const COMPLETE_BRAND_ONBOARDING = gql`
  mutation CompleteBrandOnboarding($input: BrandOnboardingInput!) {
    completeBrandOnboarding(input: $input) {
      success
      user {
        _id
        email
        nombre
        tipo
        perfil {
          logo
          companyName
          industry
          description
          website
          budgetRange {
            min
            max
          }
          nichos
          contentTypes
          campaignFrequency
          country
          currency
          paymentMethods
        }
      }
      message
    }
  }
`;

/**
 * Query to check if handle is available
 */
export const CHECK_HANDLE_AVAILABILITY = gql`
  query CheckHandleAvailability($handle: String!) {
    checkHandleAvailability(handle: $handle) {
      available
      message
    }
  }
`;
