import { gql } from '@apollo/client';

/**
 * Query to search creators with intelligent matching
 */
export const SEARCH_CREATORS_WITH_MATCHING = gql`
  query SearchCreatorsWithMatching($filters: MatchingFiltersInput!, $limit: Int, $offset: Int) {
    searchCreators(filters: $filters, limit: $limit, offset: $offset) {
      total
      creators {
        _id
        perfil {
          nombre
          handle
          avatar
          bio
          nichos
          redesSociales {
            tiktok
            instagram
            youtube
          }
          metricas {
            followers
            engagementRate
          }
          tarifa
        }
        verificado
        ubicacion
        rating
        # AI Matching Score and Reasons
        matchScore
        matchReasons
        # Additional insights
        audienceDemographics {
          age {
            range18_24
            range25_34
            range35_44
            range45Plus
          }
          gender {
            female
            male
            other
          }
          topLocations
        }
        # Recent performance
        recentCampaigns {
          total
          avgRating
          completionRate
        }
      }
    }
  }
`;

/**
 * Query to get AI-powered matching recommendations
 */
export const GET_MATCHING_RECOMMENDATIONS = gql`
  query GetMatchingRecommendations($brandId: ID!, $campaignBrief: String) {
    getMatchingRecommendations(brandId: $brandId, campaignBrief: $campaignBrief) {
      recommendations {
        creatorId
        creator {
          _id
          perfil {
            nombre
            handle
            avatar
            bio
            nichos
          }
          verificado
        }
        matchScore
        matchReasons
        estimatedReach
        estimatedEngagement
        suggestedBudget {
          min
          max
        }
      }
      insights {
        icon
        title
        description
        priority
      }
    }
  }
`;

/**
 * Query to get creator profile with full details
 */
export const GET_CREATOR_PROFILE = gql`
  query GetCreatorProfile($creatorId: ID!) {
    getCreator(id: $creatorId) {
      _id
      email
      tipo
      perfil {
        nombre
        handle
        avatar
        foto
        bio
        nichos
        redesSociales {
          tiktok
          instagram
          youtube
        }
        metricas {
          followers
          engagementRate
        }
        tarifa
      }
      verificado
      ubicacion
      rating
      totalReviews
      portfolio {
        id
        title
        description
        thumbnailUrl
        platform
        metrics {
          views
          likes
          comments
        }
        date
        url
      }
      availability {
        status
        nextAvailable
      }
      # Historical performance
      campaignHistory {
        total
        completed
        avgRating
        totalReach
        avgEngagement
      }
    }
  }
`;

/**
 * Mutation to save matching preferences
 */
export const SAVE_MATCHING_PREFERENCES = gql`
  mutation SaveMatchingPreferences($userId: ID!, $preferences: MatchingFiltersInput!) {
    saveMatchingPreferences(userId: $userId, preferences: $preferences) {
      success
      message
      preferences {
        ...MatchingFiltersFragment
      }
    }
  }

  fragment MatchingFiltersFragment on MatchingPreferences {
    nicho
    presupuesto {
      min
      max
    }
    seguidores {
      min
      max
    }
    engagementRate {
      min
      max
    }
    plataformas
    tipoContenido
    audienciaEdad
    audienciaGenero
    ubicacion
    idioma
  }
`;

/**
 * Query to get saved matching preferences
 */
export const GET_MATCHING_PREFERENCES = gql`
  query GetMatchingPreferences($userId: ID!) {
    getMatchingPreferences(userId: $userId) {
      ...MatchingFiltersFragment
    }
  }

  fragment MatchingFiltersFragment on MatchingPreferences {
    nicho
    presupuesto {
      min
      max
    }
    seguidores {
      min
      max
    }
    engagementRate {
      min
      max
    }
    plataformas
    tipoContenido
    audienciaEdad
    audienciaGenero
    ubicacion
    idioma
  }
`;

/**
 * Query to get AI insights for matching
 */
export const GET_AI_MATCHING_INSIGHTS = gql`
  query GetAIMatchingInsights($brandId: ID!, $filters: MatchingFiltersInput) {
    getAIMatchingInsights(brandId: $brandId, filters: $filters) {
      insights {
        icon
        title
        description
        type
        priority
        actionable
        action {
          label
          type
          data
        }
      }
      trendingCreators {
        creatorId
        reason
        growthRate
      }
      marketInsights {
        avgEngagementRate
        avgPriceRange {
          min
          max
        }
        popularNiches
        seasonalTrends
      }
    }
  }
`;
