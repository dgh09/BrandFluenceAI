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

const contentTypeOptions = [
  { value: 'video', label: '📹 Videos' },
  { value: 'foto', label: '📷 Fotos' },
  { value: 'reel', label: '🎬 Reels' },
  { value: 'historia', label: '📱 Historias' },
  { value: 'livestream', label: '🔴 Livestreams' }
];

const ubicacionOptions = [
  'México', 'Estados Unidos', 'España', 'Colombia', 'Argentina',
  'Chile', 'Perú', 'Venezuela', 'Ecuador', 'Guatemala'
];

const audienceAgeOptions = ['18-24', '25-34', '35-44', '45-54', '55+'];
const audienceGenderOptions = ['Femenino', 'Masculino', 'Mixto'];

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

  const handleContentTypeToggle = (type: string) => {
    const currentTypes = filters.tipoContenido || [];
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter(t => t !== type)
      : [...currentTypes, type];
    onFilterChange('tipoContenido', newTypes);
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

      {/* Seguidores */}
      <div className={styles.filterSection}>
        <h4>Seguidores</h4>
        <div className={styles.rangeInputs}>
          <input
            type="number"
            placeholder="Min"
            value={filters.seguidores?.min || 0}
            onChange={(e) => onFilterChange('seguidores', {
              ...filters.seguidores,
              min: parseInt(e.target.value) || 0
            })}
            className={styles.rangeInput}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.seguidores?.max || 10000000}
            onChange={(e) => onFilterChange('seguidores', {
              ...filters.seguidores,
              max: parseInt(e.target.value) || 10000000
            })}
            className={styles.rangeInput}
          />
        </div>
        <small className={styles.filterHint}>Número mínimo y máximo de seguidores</small>
      </div>

      {/* Tipo de Contenido */}
      <div className={styles.filterSection}>
        <h4>Tipo de Contenido</h4>
        <div className={styles.checkboxGroup}>
          {contentTypeOptions.map(type => (
            <label key={type.value} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filters.tipoContenido?.includes(type.value) || false}
                onChange={() => handleContentTypeToggle(type.value)}
              />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ubicación del Creador */}
      <div className={styles.filterSection}>
        <h4>Ubicación del Creador</h4>
        <select
          value={filters.ubicacion || ''}
          onChange={(e) => onFilterChange('ubicacion', e.target.value)}
          className={styles.select}
        >
          <option value="">Todas las ubicaciones</option>
          {ubicacionOptions.map(ubicacion => (
            <option key={ubicacion} value={ubicacion}>
              {ubicacion}
            </option>
          ))}
        </select>
      </div>

      {/* Audiencia Objetivo */}
      <div className={styles.filterSection}>
        <h4>Audiencia Objetivo</h4>

        <div className={styles.subSection}>
          <label className={styles.subLabel}>Edad</label>
          <select
            value={filters.audienciaEdad || ''}
            onChange={(e) => onFilterChange('audienciaEdad', e.target.value)}
            className={styles.select}
          >
            <option value="">Todas las edades</option>
            {audienceAgeOptions.map(age => (
              <option key={age} value={age}>
                {age} años
              </option>
            ))}
          </select>
        </div>

        <div className={styles.subSection}>
          <label className={styles.subLabel}>Género</label>
          <select
            value={filters.audienciaGenero || ''}
            onChange={(e) => onFilterChange('audienciaGenero', e.target.value)}
            className={styles.select}
          >
            <option value="">Todos los géneros</option>
            {audienceGenderOptions.map(gender => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
      </div>
    </aside>
  );
};
