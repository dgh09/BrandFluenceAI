import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/layout';
import { CreatorCard } from '../components/common';
import { MatchingFilters } from '../components/features/MatchingFilters';
import { CreateCampaignModal } from '../components/features/Campaign';
import { mockCreators, mockAIInsights } from '../data/mockData';
import { useMatchingFilters } from '../hooks/useMatchingFilters';
import styles from './MatchingPage.module.css';

export const MatchingPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    filters,
    filteredCreators,
    totalResults,
    updateFilter,
    clearFilters,
    sortBy,
    setSortBy,
    activeFiltersCount,
    currentPage,
    totalPages,
    setCurrentPage
  } = useMatchingFilters(mockCreators);

  // Campaign modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<{ id: string; name: string } | null>(null);

  const handleContactClick = (creatorId: string) => {
    const creator = mockCreators.find(c => c.id === creatorId);
    if (creator) {
      setSelectedCreator({ id: creator.id, name: creator.nombre });
      setIsModalOpen(true);
    }
  };

  const handleCampaignSubmit = (data: any) => {
    console.log('Campaign proposal submitted:', {
      creatorId: selectedCreator?.id,
      ...data
    });
    // TODO: Integrate with GraphQL mutation to create campaign
    alert(`¡Propuesta enviada a ${selectedCreator?.name}!`);
  };

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
                <h2>{totalResults} Creadores Encontrados</h2>
                {activeFiltersCount > 0 && (
                  <p>{activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} activo{activeFiltersCount > 1 ? 's' : ''}</p>
                )}
                {totalPages > 1 && (
                  <p className={styles.pageInfo}>
                    Mostrando {filteredCreators.length} de {totalResults} resultados (Página {currentPage} de {totalPages})
                  </p>
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
              <>
                <div className={styles.creatorsGrid}>
                  {filteredCreators.map((creator) => (
                    <CreatorCard
                      key={creator.id}
                      creator={creator}
                      onContact={handleContactClick}
                      onViewProfile={(id) => navigate(`/creator/${id}`)}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className={styles.pagination}>
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={styles.paginationButton}
                    >
                      ← Anterior
                    </button>

                    <div className={styles.paginationPages}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`${styles.paginationPage} ${
                            page === currentPage ? styles.paginationPageActive : ''
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={styles.paginationButton}
                    >
                      Siguiente →
                    </button>
                  </div>
                )}
              </>
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

      {/* Campaign Creation Modal */}
      {selectedCreator && (
        <CreateCampaignModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          creatorId={selectedCreator.id}
          creatorName={selectedCreator.name}
          onSubmit={handleCampaignSubmit}
        />
      )}
    </div>
  );
};
