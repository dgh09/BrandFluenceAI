import React from 'react';
import { Sidebar } from '../components/layout';
import { mockAnalyticsOverview, mockTopContent } from '../data/mockData';
import styles from './AnalyticsPage.module.css';

export const AnalyticsPage: React.FC = () => {
  const overview = mockAnalyticsOverview;

  return (
    <div className={styles.analyticsPage}>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div>
            <h1>📈 Analytics & Performance</h1>
            <p>Campaña: Summer Collection 2024</p>
          </div>
        </div>

        {/* Overview Stats */}
        <div className={styles.overviewStats}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>👁️ Total de Vistas</div>
            <div className={styles.statValue}>
              {(overview.totalViews / 1000000).toFixed(1)}M
            </div>
            <div className={`${styles.statChange} ${styles.positive}`}>
              ↑ +{overview.previousPeriodChange.views}% vs semana anterior
            </div>
          </div>

          <div className={`${styles.statCard} ${styles.green}`}>
            <div className={styles.statLabel}>❤️ Engagement Total</div>
            <div className={styles.statValue}>
              {(overview.totalEngagement / 1000).toFixed(0)}K
            </div>
            <div className={`${styles.statChange} ${styles.positive}`}>
              ↑ +{overview.previousPeriodChange.engagement}% vs semana anterior
            </div>
          </div>

          <div className={`${styles.statCard} ${styles.orange}`}>
            <div className={styles.statLabel}>💬 Comentarios</div>
            <div className={styles.statValue}>
              {(overview.totalComments / 1000).toFixed(1)}K
            </div>
            <div className={`${styles.statChange} ${styles.positive}`}>
              ↑ +{overview.previousPeriodChange.comments}% vs semana anterior
            </div>
          </div>

          <div className={`${styles.statCard} ${styles.pink}`}>
            <div className={styles.statLabel}>📊 Engagement Rate</div>
            <div className={styles.statValue}>{overview.engagementRate}%</div>
            <div className={`${styles.statChange} ${styles.positive}`}>
              ↑ +{overview.previousPeriodChange.engagementRate}% vs semana anterior
            </div>
          </div>
        </div>

        {/* Top Content */}
        <div className={styles.topContent}>
          <h2>Top Content</h2>
          <div className={styles.contentList}>
            {mockTopContent.map((content) => (
              <div key={content.id} className={styles.contentItem}>
                <div className={styles.contentThumbnail} />
                <div className={styles.contentInfo}>
                  <div className={styles.contentTitle}>{content.title}</div>
                  <div className={styles.contentStats}>
                    <span>👁️ {(content.views / 1000).toFixed(0)}K</span>
                    <span>❤️ {(content.likes / 1000).toFixed(0)}K</span>
                    <span>💬 {(content.comments / 1000).toFixed(1)}K</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
