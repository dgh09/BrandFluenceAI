import React from 'react';
import type { MatchFilters } from '../../../types';
import styles from './MatchingFilters.module.css';

interface MatchingFiltersProps {
  filters: MatchFilters;
  onFilterChange: (key: keyof MatchFilters, value: any) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

const nichoOptions = [
  'Moda',
  'Belleza',
  'Fitness',
  'Tecnología',
  'Lifestyle',
  'Comida',
  'Viajes',
  'Gaming'
];

const plataformaOptions = ['tiktok', 'instagram', 'youtube'] as const;

export const MatchingFilters: React.FC<MatchingFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  activeFiltersCount
}) => {
  const handleNichoToggle = (nicho: string) => {
    const currentNichos = filters.nicho || [];
    const newNichos = currentNichos.includes(nicho)
      ? currentNichos.filter(n => n !== nicho)
      : [...currentNichos, nicho];
    onFilterChange('nicho', newNichos);
  };

  const handlePlataformaToggle = (plataforma: 'tiktok' | 'instagram' | 'youtube') => {
    const currentPlataformas = filters.plataformas || [];
    const newPlataformas = currentPlataformas.includes(plataforma)
      ? currentPlataformas.filter(p => p !== plataforma)
      : [...currentPlataformas, plataforma];
    onFilterChange('plataformas', newPlataformas);
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.filterHeader}>
        <h3>Filtros</h3>
        {activeFiltersCount > 0 && (
          <button onClick={onClearFilters} className={styles.clearButton}>
            Limpiar ({activeFiltersCount})
          </button>
        )}
      </div>

      {/* Nicho */}
      <div className={styles.filterSection}>
        <h4>Nicho</h4>
        <div className={styles.checkboxGroup}>
          {nichoOptions.map(nicho => (
            <label key={nicho} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filters.nicho?.includes(nicho) || false}
                onChange={() => handleNichoToggle(nicho)}
              />
              <span>{nicho}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Presupuesto */}
      <div className={styles.filterSection}>
        <h4>Presupuesto</h4>
        <div className={styles.rangeInputs}>
          <input
            type="number"
            placeholder="Min"
            value={filters.presupuesto?.min || 0}
            onChange={(e) => onFilterChange('presupuesto', {
              ...filters.presupuesto,
              min: parseInt(e.target.value) || 0
            })}
            className={styles.rangeInput}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.presupuesto?.max || 10000}
            onChange={(e) => onFilterChange('presupuesto', {
              ...filters.presupuesto,
              max: parseInt(e.target.value) || 10000
            })}
            className={styles.rangeInput}
          />
        </div>
      </div>

      {/* Engagement Rate */}
      <div className={styles.filterSection}>
        <h4>Engagement Rate (%)</h4>
        <div className={styles.rangeInputs}>
          <input
            type="number"
            placeholder="Min"
            value={filters.engagementRate?.min || 0}
            onChange={(e) => onFilterChange('engagementRate', {
              ...filters.engagementRate,
              min: parseFloat(e.target.value) || 0
            })}
            className={styles.rangeInput}
            step="0.1"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.engagementRate?.max || 20}
            onChange={(e) => onFilterChange('engagementRate', {
              ...filters.engagementRate,
              max: parseFloat(e.target.value) || 20
            })}
            className={styles.rangeInput}
            step="0.1"
          />
        </div>
      </div>

      {/* Plataformas */}
      <div className={styles.filterSection}>
        <h4>Plataformas</h4>
        <div className={styles.checkboxGroup}>
          {plataformaOptions.map(plataforma => (
            <label key={plataforma} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filters.plataformas?.includes(plataforma) || false}
                onChange={() => handlePlataformaToggle(plataforma)}
              />
              <span className={styles.platformLabel}>
                {plataforma === 'tiktok' && '📱 TikTok'}
                {plataforma === 'instagram' && '📷 Instagram'}
                {plataforma === 'youtube' && '🎥 YouTube'}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
