import { useState, useMemo } from 'react';
import type { CreatorCard, MatchFilters } from '../types';

const initialFilters: MatchFilters = {
  nicho: [],
  presupuesto: { min: 0, max: 10000 },
  seguidores: { min: 0, max: 10000000 },
  engagementRate: { min: 0, max: 20 },
  plataformas: [],
  ubicacion: '',
  idioma: ''
};

export const useMatchingFilters = (creators: CreatorCard[]) => {
  const [filters, setFilters] = useState<MatchFilters>(initialFilters);
  const [sortBy, setSortBy] = useState<'relevance' | 'price' | 'engagement'>('relevance');

  const filteredCreators = useMemo(() => {
    let result = [...creators];

    // Filter by nicho
    if (filters.nicho && filters.nicho.length > 0) {
      result = result.filter(creator =>
        creator.nichos.some(nicho => filters.nicho?.includes(nicho))
      );
    }

    // Filter by presupuesto (assuming tarifa is a number)
    if (filters.presupuesto) {
      result = result.filter(creator => {
        // Extract numeric value from tarifa string (e.g., "$500-$800" -> 650)
        const tarifaMatch = creator.tarifa.match(/\d+/g);
        if (tarifaMatch) {
          const avgTarifa = tarifaMatch.reduce((sum, num) => sum + parseInt(num), 0) / tarifaMatch.length;
          return avgTarifa >= filters.presupuesto!.min && avgTarifa <= filters.presupuesto!.max;
        }
        return true;
      });
    }

    // Filter by engagement rate
    if (filters.engagementRate) {
      result = result.filter(creator => {
        const engagementValue = parseFloat(creator.engagementRate.replace('%', ''));
        return engagementValue >= filters.engagementRate!.min && engagementValue <= filters.engagementRate!.max;
      });
    }

    // Filter by plataformas
    if (filters.plataformas && filters.plataformas.length > 0) {
      result = result.filter(creator =>
        filters.plataformas?.some(plat => creator.plataformas.includes(plat))
      );
    }

    // Sort results
    switch (sortBy) {
      case 'relevance':
        result.sort((a, b) => b.matchScore - a.matchScore);
        break;
      case 'price':
        result.sort((a, b) => {
          const getTarifa = (tarifa: string) => {
            const match = tarifa.match(/\d+/g);
            return match ? parseInt(match[0]) : 0;
          };
          return getTarifa(a.tarifa) - getTarifa(b.tarifa);
        });
        break;
      case 'engagement':
        result.sort((a, b) => {
          const getEngagement = (rate: string) => parseFloat(rate.replace('%', ''));
          return getEngagement(b.engagementRate) - getEngagement(a.engagementRate);
        });
        break;
    }

    return result;
  }, [creators, filters, sortBy]);

  const updateFilter = (key: keyof MatchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.nicho && filters.nicho.length > 0) count += filters.nicho.length;
    if (filters.plataformas && filters.plataformas.length > 0) count += filters.plataformas.length;
    if (filters.presupuesto && (filters.presupuesto.min > 0 || filters.presupuesto.max < 10000)) count++;
    if (filters.engagementRate && (filters.engagementRate.min > 0 || filters.engagementRate.max < 20)) count++;
    return count;
  }, [filters]);

  return {
    filters,
    filteredCreators,
    updateFilter,
    clearFilters,
    sortBy,
    setSortBy,
    activeFiltersCount
  };
};
