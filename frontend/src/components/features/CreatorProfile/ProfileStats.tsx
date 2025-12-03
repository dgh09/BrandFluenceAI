import React from 'react';
import type { CreatorCard } from '../../../types';
import styles from './ProfileStats.module.css';

interface ProfileStatsProps {
  creator: CreatorCard;
  rating?: number;
  totalReviews?: number;
  responseTime?: string;
}

export const ProfileStats: React.FC<ProfileStatsProps> = ({
  creator,
  rating = 4.8,
  totalReviews = 24,
  responseTime = '2 horas'
}) => {
  const stats = [
    {
      icon: '👥',
      label: 'Seguidores',
      value: creator.seguidores,
      color: 'var(--primary)'
    },
    {
      icon: '❤️',
      label: 'Engagement Rate',
      value: creator.engagementRate,
      color: 'var(--secondary)'
    },
    {
      icon: '⭐',
      label: 'Calificación',
      value: `${rating}/5 (${totalReviews})`,
      color: 'var(--warning)'
    },
    {
      icon: '⏱️',
      label: 'Tiempo de respuesta',
      value: responseTime,
      color: 'var(--accent)'
    }
  ];

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statIcon} style={{ color: stat.color }}>
            {stat.icon}
          </div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
