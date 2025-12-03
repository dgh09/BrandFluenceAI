import React from 'react';
import type { TimelineEvent } from '../../../types';
import styles from './CampaignTimeline.module.css';

interface CampaignTimelineProps {
  events: TimelineEvent[];
}

const eventIcons: Record<string, string> = {
  created: '✨',
  accepted: '✅',
  milestone: '🎯',
  submitted: '📤',
  completed: '🎉',
  cancelled: '❌'
};

export const CampaignTimeline: React.FC<CampaignTimelineProps> = ({ events }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={styles.timeline}>
      <h2 className={styles.title}>Timeline</h2>
      <div className={styles.events}>
        {events.map((event, index) => (
          <div key={event.id} className={styles.event}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>{eventIcons[event.type] || '📌'}</div>
              {index < events.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.content}>
              <div className={styles.eventHeader}>
                <h4 className={styles.eventDescription}>{event.description}</h4>
                <span className={styles.eventDate}>{formatDate(event.date)}</span>
              </div>
              <p className={styles.eventUser}>{event.userName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
