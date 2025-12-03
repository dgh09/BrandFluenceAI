import React from 'react';
import type { PortfolioItem } from '../../../types';
import styles from './ProfilePortfolio.module.css';

interface ProfilePortfolioProps {
  items: PortfolioItem[];
}

export const ProfilePortfolio: React.FC<ProfilePortfolioProps> = ({ items }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'tiktok':
        return '📱';
      case 'instagram':
        return '📷';
      case 'youtube':
        return '🎥';
      default:
        return '📹';
    }
  };

  return (
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <p className={styles.subtitle}>Trabajos destacados y colaboraciones previas</p>

      {items.length > 0 ? (
        <div className={styles.portfolioGrid}>
          {items.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
              <div className={styles.thumbnail}>
                <div className={styles.platformBadge}>
                  {getPlatformIcon(item.platform)}
                </div>
                {item.thumbnailUrl ? (
                  <img src={item.thumbnailUrl} alt={item.title} />
                ) : (
                  <div className={styles.placeholderThumbnail}>
                    {item.title.charAt(0)}
                  </div>
                )}
              </div>

              <div className={styles.itemContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricIcon}>👁️</span>
                    <span>{formatNumber(item.metrics.views)}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricIcon}>❤️</span>
                    <span>{formatNumber(item.metrics.likes)}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricIcon}>💬</span>
                    <span>{formatNumber(item.metrics.comments)}</span>
                  </div>
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewLink}
                  >
                    Ver contenido →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📁</div>
          <p>No hay trabajos en el portfolio todavía</p>
        </div>
      )}
    </div>
  );
};
