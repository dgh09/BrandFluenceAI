import React from 'react';
import type { Campaign } from '../../../types';
import { Badge } from '../../common';
import styles from './CampaignCard.module.css';

interface CampaignCardProps {
  campaign: Campaign;
  onView: (id: string) => void;
  onEdit?: (id: string) => void;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  onView,
  onEdit
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const deliverablesPending = campaign.deliverables.filter(
    d => d.status === 'pending'
  ).length;
  const deliverablesTotal = campaign.deliverables.length;

  return (
    <div className={styles.card} onClick={() => onView(campaign._id)}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{campaign.nombreCampaña}</h3>
          <p className={styles.brand}>{campaign.participants.brandName}</p>
        </div>
        <Badge status={campaign.estado} />
      </div>

      <div className={styles.participants}>
        <div className={styles.avatarGroup}>
          {campaign.participants.creatorNames.slice(0, 3).map((name, idx) => (
            <div key={idx} className={styles.avatar} title={name}>
              {name.charAt(0)}
            </div>
          ))}
          {campaign.participants.creatorNames.length > 3 && (
            <div className={styles.avatar}>
              +{campaign.participants.creatorNames.length - 3}
            </div>
          )}
        </div>
        <span className={styles.creatorCount}>
          {campaign.participants.creatorNames.length} creador
          {campaign.participants.creatorNames.length > 1 ? 'es' : ''}
        </span>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Presupuesto</span>
          <span className={styles.statValue}>{formatCurrency(campaign.presupuesto)}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Entregables</span>
          <span className={styles.statValue}>
            {deliverablesTotal - deliverablesPending}/{deliverablesTotal}
          </span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Fecha límite</span>
          <span className={styles.statValue}>{formatDate(campaign.deadline)}</span>
        </div>
      </div>

      {campaign.progress !== undefined && campaign.estado === 'en_progreso' && (
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${campaign.progress}%` }}
            />
          </div>
          <span className={styles.progressText}>{campaign.progress}%</span>
        </div>
      )}

      {onEdit && campaign.estado === 'borrador' && (
        <div className={styles.actions}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(campaign._id);
            }}
            className={styles.editButton}
          >
            Editar
          </button>
        </div>
      )}
    </div>
  );
};
