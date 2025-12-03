import React from 'react';
import type { CampaignStatus, DeliverableStatus } from '../../../types';
import styles from './Badge.module.css';

interface BadgeProps {
  status: CampaignStatus | DeliverableStatus | string;
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig: Record<string, { label: string; color: string }> = {
  // Campaign statuses
  borrador: { label: 'Borrador', color: 'gray' },
  propuesta: { label: 'Propuesta', color: 'blue' },
  aceptada: { label: 'Aceptada', color: 'green' },
  en_progreso: { label: 'En Progreso', color: 'yellow' },
  completada: { label: 'Completada', color: 'success' },
  cancelada: { label: 'Cancelada', color: 'red' },
  // Deliverable statuses
  pending: { label: 'Pendiente', color: 'gray' },
  submitted: { label: 'Enviado', color: 'blue' },
  approved: { label: 'Aprobado', color: 'green' },
  rejected: { label: 'Rechazado', color: 'red' }
};

export const Badge: React.FC<BadgeProps> = ({ status, size = 'md' }) => {
  const config = statusConfig[status] || { label: status, color: 'gray' };

  return (
    <span className={`${styles.badge} ${styles[config.color]} ${styles[size]}`}>
      {config.label}
    </span>
  );
};
