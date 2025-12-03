import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/layout';
import {
  ProfileHeader,
  ProfileStats,
  ProfilePortfolio,
  ProfileReviews,
  ContactButton
} from '../../components/features/CreatorProfile';
import { mockCreators, mockPortfolioItems, mockReviews } from '../../data/mockData';
import styles from './CreatorProfilePage.module.css';

export const CreatorProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find creator by ID
  const creator = mockCreators.find(c => c.id === id);

  if (!creator) {
    return (
      <div className={styles.profilePage}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.notFound}>
            <h1>Creador no encontrado</h1>
            <p>El perfil que buscas no existe o ha sido eliminado.</p>
            <button
              onClick={() => navigate('/matching')}
              className={styles.backButton}
            >
              ← Volver a Matching
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Get portfolio items for this creator (filter by creator ID in real app)
  const portfolioItems = mockPortfolioItems.slice(0, 6);

  // Get reviews for this creator (filter by creator ID in real app)
  const creatorReviews = mockReviews.slice(0, 5);
  const averageRating = creatorReviews.length > 0
    ? creatorReviews.reduce((sum, r) => sum + r.calificacion, 0) / creatorReviews.length
    : 0;

  return (
    <div className={styles.profilePage}>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <button onClick={() => navigate('/matching')} className={styles.breadcrumbLink}>
            Matching
          </button>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{creator.nombre}</span>
        </div>

        {/* Profile Content */}
        <div className={styles.profileContent}>
          <div className={styles.mainColumn}>
            <ProfileHeader
              creator={creator}
              location="México"
              availability="available"
            />

            <ProfileStats
              creator={creator}
              rating={averageRating}
              totalReviews={creatorReviews.length}
              responseTime="2 horas"
            />

            <ProfilePortfolio items={portfolioItems} />

            <ProfileReviews
              reviews={creatorReviews}
              averageRating={averageRating}
              onSeeAll={() => console.log('See all reviews')}
            />
          </div>

          <aside className={styles.sidebar}>
            <ContactButton
              creatorId={creator.id}
              creatorName={creator.nombre}
              price={creator.precioPorVideo}
            />
          </aside>
        </div>
      </main>
    </div>
  );
};
