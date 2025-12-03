import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CampaignStatus } from '../../types';
import { Sidebar } from '../../components/layout';
import { Button, Tabs } from '../../components/common';
import { CampaignCard } from '../../components/features/Campaign';
import { mockCampaigns } from '../../data/mockData';
import styles from './CampaignsPage.module.css';

type TabId = 'activas' | 'completadas' | 'borradores';

const tabStatusMap: Record<TabId, CampaignStatus[]> = {
  activas: ['propuesta', 'aceptada', 'en_progreso'],
  completadas: ['completada'],
  borradores: ['borrador']
};

export const CampaignsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('activas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCampaigns = useMemo(() => {
    let result = mockCampaigns.filter(campaign =>
      tabStatusMap[activeTab].includes(campaign.estado)
    );

    if (searchQuery) {
      result = result.filter(campaign =>
        campaign.nombreCampaña.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.participants.brandName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [activeTab, searchQuery]);

  const tabs = [
    {
      id: 'activas' as const,
      label: 'Activas',
      count: mockCampaigns.filter(c => tabStatusMap.activas.includes(c.estado)).length
    },
    {
      id: 'completadas' as const,
      label: 'Completadas',
      count: mockCampaigns.filter(c => c.estado === 'completada').length
    },
    {
      id: 'borradores' as const,
      label: 'Borradores',
      count: mockCampaigns.filter(c => c.estado === 'borrador').length
    }
  ];

  return (
    <div className={styles.campaignsPage}>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div>
            <h1>🚀 Campañas</h1>
            <p>Gestiona todas tus colaboraciones con creadores</p>
          </div>
          <Button
            variant="primary"
            onClick={() => console.log('Create campaign')}
          >
            + Crear Campaña
          </Button>
        </div>

        {/* Search Bar */}
        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Buscar campañas por nombre o marca..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={styles.clearButton}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(id) => setActiveTab(id as TabId)}
        />

        {/* Campaigns Grid */}
        {filteredCampaigns.length > 0 ? (
          <div className={styles.campaignsGrid}>
            {filteredCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign._id}
                campaign={campaign}
                onView={(id) => navigate(`/campaign/${id}`)}
                onEdit={
                  campaign.estado === 'borrador'
                    ? (id) => console.log('Edit campaign', id)
                    : undefined
                }
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              {searchQuery ? '🔍' : activeTab === 'activas' ? '🚀' : activeTab === 'completadas' ? '✅' : '📝'}
            </div>
            <h3>
              {searchQuery
                ? 'No se encontraron campañas'
                : activeTab === 'activas'
                ? 'No tienes campañas activas'
                : activeTab === 'completadas'
                ? 'No tienes campañas completadas'
                : 'No tienes borradores'}
            </h3>
            <p>
              {searchQuery
                ? 'Intenta con otro término de búsqueda'
                : activeTab === 'activas'
                ? 'Crea una nueva campaña para empezar a colaborar con creadores'
                : activeTab === 'completadas'
                ? 'Tus campañas completadas aparecerán aquí'
                : 'Los borradores de campañas aparecerán aquí'}
            </p>
            {!searchQuery && activeTab === 'activas' && (
              <Button
                variant="primary"
                onClick={() => console.log('Create campaign')}
              >
                + Crear Campaña
              </Button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
