import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/layout';
import { CreatorCard } from '../components/common';
import { MatchingFilters } from '../components/features/MatchingFilters';
import { mockCreators, mockAIInsights } from '../data/mockData';
import { useMatchingFilters } from '../hooks/useMatchingFilters';
import styles from './MatchingPage.module.css';

export const MatchingPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    filters,
    filteredCreators,
    updateFilter,
    clearFilters,
    sortBy,
    setSortBy,
    activeFiltersCount
  } = useMatchingFilters(mockCreators);

  return (
    <div className={styles.matchingPage}>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div>
            <h1>🎯 Matching Inteligente</h1>
            <p>Encuentra a los creadores perfectos con IA</p>
          </div>
        </div>

        {/* AI Insights */}
        <div className={styles.aiInsights}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIcon}>🤖</div>
            <div>
              <h3>Insights de IA</h3>
              <p>Recomendaciones personalizadas para tu campaña</p>
            </div>
          </div>
          <div className={styles.insightsList}>
            {mockAIInsights.map((insight, index) => (
              <div key={index} className={styles.insightItem}>
                <div className={styles.insightIcon}>{insight.icon}</div>
                <div>
                  <h4>{insight.title}</h4>
                  <p>{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content with Filters */}
        <div className={styles.contentWithFilters}>
          {/* Filters Sidebar */}
          <MatchingFilters
            filters={filters}
            onFilterChange={updateFilter}
            onClearFilters={clearFilters}
            activeFiltersCount={activeFiltersCount}
          />

          {/* Results Section */}
          <div className={styles.resultsSection}>
            {/* Results Header */}
            <div className={styles.resultsHeader}>
              <div>
                <h2>{filteredCreators.length} Creadores Encontrados</h2>
                {activeFiltersCount > 0 && (
                  <p>{activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} activo{activeFiltersCount > 1 ? 's' : ''}</p>
                )}
              </div>
              <div className={styles.sortOptions}>
                <label>Ordenar por:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'relevance' | 'price' | 'engagement')}
                  className={styles.sortSelect}
                >
                  <option value="relevance">Relevancia</option>
                  <option value="price">Precio</option>
                  <option value="engagement">Engagement</option>
                </select>
              </div>
            </div>

            {/* Creators Grid */}
            {filteredCreators.length > 0 ? (
              <div className={styles.creatorsGrid}>
                {filteredCreators.map((creator) => (
                  <CreatorCard
                    key={creator.id}
                    creator={creator}
                    onContact={(id) => console.log('Contact', id)}
                    onViewProfile={(id) => navigate(`/creator/${id}`)}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3>No se encontraron creadores</h3>
                <p>Intenta ajustar los filtros para ver más resultados</p>
                <button onClick={clearFilters} className={styles.clearFiltersButton}>
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
