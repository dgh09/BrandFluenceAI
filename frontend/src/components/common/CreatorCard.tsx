import React from 'react';
import type { CreatorCard as CreatorCardType } from '../../types';
import { Button } from './Button';
import styles from './CreatorCard.module.css';

interface CreatorCardProps {
  creator: CreatorCardType;
  onContact?: (creatorId: string) => void;
  onViewProfile?: (creatorId: string) => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({
  creator,
  onContact,
  onViewProfile
}) => {
  const getGradientStyle = (score: number) => {
    if (score >= 90) return 'var(--gradient-1)';
    if (score >= 85) return 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)';
    if (score >= 80) return 'linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%)';
    return 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)';
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.matchScore}
        style={{ background: getGradientStyle(creator.matchScore) }}
      >
        {creator.matchScore}
      </div>

      <div className={styles.header}>
        <div
          className={styles.avatar}
          style={{ background: getGradientStyle(creator.matchScore) }}
        >
          {creator.verificado && (
            <div className={styles.verified}>✓</div>
          )}
        </div>
        <div className={styles.mainInfo}>
          <h3>{creator.nombre}</h3>
          <p className={styles.handle}>{creator.handle}</p>
          <div className={styles.niches}>
            {creator.nichos.map((nicho) => (
              <span key={nicho} className={styles.nicheTag}>
                {nicho}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{creator.seguidores}</div>
          <div className={styles.statLabel}>Seguidores</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{creator.engagementRate}</div>
          <div className={styles.statLabel}>Engagement</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{creator.precioPorVideo}</div>
          <div className={styles.statLabel}>Por video</div>
        </div>
      </div>

      <p className={styles.bio}>{creator.bio}</p>

      <div className={styles.matchReasons}>
        {creator.matchReasons.map((reason, index) => (
          <div key={index} className={styles.matchReason}>
            <span className={styles.reasonIcon}>✓</span>
            <span>{reason}</span>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <Button
          variant="contact"
          onClick={() => onContact?.(creator.id)}
          className={styles.btnContact}
        >
          Contactar
        </Button>
        <button
          className={styles.btnView}
          onClick={() => onViewProfile?.(creator.id)}
        >
          👁 Ver Perfil
        </button>
      </div>
    </div>
  );
};
