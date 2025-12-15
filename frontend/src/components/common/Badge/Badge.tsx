import React from 'react';
import type { CampaignStatus, DeliverableStatus } from '../../../types';
import styles from './Badge.module.css';

interface BadgeProps {
  status?: CampaignStatus | DeliverableStatus | string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  onRemove?: () => void;
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

const variantColorMap: Record<string, string> = {
  primary: 'blue',
  secondary: 'gray',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  gray: 'gray'
};

export const Badge: React.FC<BadgeProps> = ({
  status,
  variant,
  size = 'md',
  children,
  onRemove
}) => {
  // If children is provided, use it. Otherwise, use status label
  let label = children;
  let color = variant ? variantColorMap[variant] : 'gray';

  if (status && !children) {
    const config = statusConfig[status] || { label: status, color: 'gray' };
    label = config.label;
    color = config.color;
  }

  return (
    <span className={`${styles.badge} ${styles[color]} ${styles[size]}`}>
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className={styles.removeButton}
          type="button"
        >
          ✕
        </button>
      )}
    </span>
  );
};
