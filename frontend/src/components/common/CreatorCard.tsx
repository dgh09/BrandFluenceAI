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
  const getMatchScoreColor = (score: number): { color: string; label: string; emoji: string } => {
    if (score >= 90) return { color: '#10B981', label: 'Excelente', emoji: '🌟' }; // Green
    if (score >= 75) return { color: '#3B82F6', label: 'Muy Bueno', emoji: '⭐' }; // Blue
    if (score >= 60) return { color: '#F59E0B', label: 'Bueno', emoji: '👍' }; // Orange
    return { color: '#9CA3AF', label: 'Regular', emoji: '📊' }; // Gray
  };

  const matchInfo = getMatchScoreColor(creator.matchScore);

  const getGradientStyle = (score: number) => {
    if (score >= 90) return 'linear-gradient(135deg, #10B981 0%, #059669 100%)'; // Green
    if (score >= 75) return 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'; // Blue
    if (score >= 60) return 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'; // Orange
    return 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)'; // Gray
  };

  // Don't show cards with score < 60 according to US-013
  if (creator.matchScore < 60) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div
        className={styles.matchScore}
        style={{ background: getGradientStyle(creator.matchScore) }}
      >
        <div className={styles.matchScoreValue}>
          <span className={styles.matchNumber}>{creator.matchScore}</span>
          <span className={styles.matchEmoji}>{matchInfo.emoji}</span>
        </div>
        <div className={styles.matchLabel}>{matchInfo.label}</div>
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
