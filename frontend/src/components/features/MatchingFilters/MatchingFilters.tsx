import React from 'react';
import { RangeSlider } from '../../common';
import type { MatchFilters } from '../../../types';
import styles from './MatchingFilters.module.css';

interface MatchingFiltersProps {
  filters: MatchFilters;
  onFilterChange: (key: keyof MatchFilters, value: any) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
  onSavePreferences?: () => void;
  onLoadPreferences?: () => void;
  hasSavedPreferences?: boolean;
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
  activeFiltersCount,
  onSavePreferences,
  onLoadPreferences,
  hasSavedPreferences
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

      {/* Preferences Management */}
      {(onSavePreferences || onLoadPreferences) && (
        <div className={styles.preferencesSection}>
          {hasSavedPreferences && onLoadPreferences && (
            <button
              onClick={onLoadPreferences}
              className={styles.loadButton}
              title="Cargar preferencias guardadas"
            >
              📥 Cargar Preferencias
            </button>
          )}
          {onSavePreferences && (
            <button
              onClick={onSavePreferences}
              className={styles.saveButton}
              title="Guardar filtros actuales"
            >
              💾 {hasSavedPreferences ? 'Actualizar' : 'Guardar'}
            </button>
          )}
        </div>
      )}

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
      <RangeSlider
        label="Presupuesto por Campaña"
        min={0}
        max={10000}
        step={100}
        value={{
          min: filters.presupuesto?.min || 0,
          max: filters.presupuesto?.max || 10000
        }}
        onChange={(value) => onFilterChange('presupuesto', value)}
        formatValue={(v) => `$${v.toLocaleString()}`}
      />

      {/* Engagement Rate */}
      <RangeSlider
        label="Engagement Rate"
        min={0}
        max={20}
        step={0.5}
        value={{
          min: filters.engagementRate?.min || 0,
          max: filters.engagementRate?.max || 20
        }}
        onChange={(value) => onFilterChange('engagementRate', value)}
        formatValue={(v) => `${v}%`}
      />

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
      <RangeSlider
        label="Seguidores"
        min={0}
        max={10000000}
        step={10000}
        value={{
          min: filters.seguidores?.min || 0,
          max: filters.seguidores?.max || 10000000
        }}
        onChange={(value) => onFilterChange('seguidores', value)}
        formatValue={(v) => {
          if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
          if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
          return v.toString();
        }}
      />

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
