import React from 'react';
import type { CreatorCard } from '../../../types';
import styles from './ProfileHeader.module.css';

interface ProfileHeaderProps {
  creator: CreatorCard;
  location?: string;
  availability?: 'available' | 'busy' | 'unavailable';
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  creator,
  location = 'México',
  availability = 'available'
}) => {
  const availabilityConfig = {
    available: { label: 'Disponible', color: 'var(--success)' },
    busy: { label: 'Ocupado', color: 'var(--warning)' },
    unavailable: { label: 'No disponible', color: 'var(--text-muted)' }
  };

  const status = availabilityConfig[availability];

  return (
    <div className={styles.header}>
      <div className={styles.avatarSection}>
        <div className={styles.avatar}>
          {creator.avatar || creator.nombre.charAt(0)}
        </div>
        {creator.verificado && (
          <div className={styles.verifiedBadge}>✓</div>
        )}
      </div>

      <div className={styles.info}>
        <div className={styles.nameRow}>
          <h1>{creator.nombre}</h1>
          <span className={styles.handle}>{creator.handle}</span>
        </div>

        <div className={styles.meta}>
          {location && (
            <div className={styles.metaItem}>
              <span className={styles.icon}>📍</span>
              {location}
            </div>
          )}
          <div className={styles.metaItem}>
            <span
              className={styles.statusDot}
              style={{ backgroundColor: status.color }}
            />
            {status.label}
          </div>
        </div>

        <p className={styles.bio}>{creator.bio}</p>

        <div className={styles.nichos}>
          {creator.nichos.map((nicho, index) => (
            <span key={index} className={styles.nichoTag}>
              {nicho}
            </span>
          ))}
        </div>

        <div className={styles.platforms}>
          {creator.plataformas.map((platform, index) => (
            <a
              key={index}
              href="#"
              className={styles.platformLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform === 'tiktok' && '📱 TikTok'}
              {platform === 'instagram' && '📷 Instagram'}
              {platform === 'youtube' && '🎥 YouTube'}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
