import React from 'react';
import type { Review } from '../../../types';
import { RatingStars } from './RatingStars';
import styles from './ReviewCard.module.css';

interface ReviewCardProps {
  review: Review;
  showCampaign?: boolean;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  showCampaign = false
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <div className={styles.reviewer}>
          <div className={styles.avatar}>
            {review.de.charAt(0)}
          </div>
          <div className={styles.reviewerInfo}>
            <div className={styles.reviewerName}>{review.de}</div>
            <div className={styles.reviewDate}>{formatDate(review.createdAt)}</div>
          </div>
        </div>
        <RatingStars rating={review.calificacion} readonly size="sm" />
      </div>

      {review.title && (
        <h4 className={styles.title}>{review.title}</h4>
      )}

      <p className={styles.comment}>{review.comentario}</p>

      {review.criteria && (
        <div className={styles.criteria}>
          <div className={styles.criteriaGrid}>
            {review.criteria.communication !== undefined && (
              <div className={styles.criteriaItem}>
                <span className={styles.criteriaLabel}>Comunicación</span>
                <RatingStars
                  rating={review.criteria.communication}
                  readonly
                  size="sm"
                />
              </div>
            )}
            {review.criteria.quality !== undefined && (
              <div className={styles.criteriaItem}>
                <span className={styles.criteriaLabel}>Calidad</span>
                <RatingStars
                  rating={review.criteria.quality}
                  readonly
                  size="sm"
                />
              </div>
            )}
            {review.criteria.timeliness !== undefined && (
              <div className={styles.criteriaItem}>
                <span className={styles.criteriaLabel}>Puntualidad</span>
                <RatingStars
                  rating={review.criteria.timeliness}
                  readonly
                  size="sm"
                />
              </div>
            )}
            {review.criteria.professionalism !== undefined && (
              <div className={styles.criteriaItem}>
                <span className={styles.criteriaLabel}>Profesionalismo</span>
                <RatingStars
                  rating={review.criteria.professionalism}
                  readonly
                  size="sm"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {review.images && review.images.length > 0 && (
        <div className={styles.images}>
          {review.images.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img src={img} alt={`Review ${idx + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      )}

      {showCampaign && (
        <div className={styles.campaign}>
          <span className={styles.campaignIcon}>🎯</span>
          <span className={styles.campaignText}>
            Campaña: {review.campaña}
          </span>
        </div>
      )}

      <div className={styles.footer}>
        {review.verified && (
          <span className={styles.verified}>
            ✓ Colaboración verificada
          </span>
        )}
        <button className={styles.helpfulButton}>
          👍 Útil {review.helpful ? `(${review.helpful})` : ''}
        </button>
      </div>
    </div>
  );
};
