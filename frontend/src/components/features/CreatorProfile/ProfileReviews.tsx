import React from 'react';
import type { Review } from '../../../types';
import styles from './ProfileReviews.module.css';

interface ProfileReviewsProps {
  reviews: Review[];
  averageRating: number;
  onSeeAll?: () => void;
}

export const ProfileReviews: React.FC<ProfileReviewsProps> = ({
  reviews,
  averageRating,
  onSeeAll
}) => {
  const renderStars = (rating: number) => {
    return (
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? styles.starFilled : styles.starEmpty}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const displayReviews = reviews.slice(0, 3);

  return (
    <div className={styles.reviews}>
      <div className={styles.header}>
        <div>
          <h2>Reseñas</h2>
          <p className={styles.subtitle}>
            {averageRating.toFixed(1)}/5 • {reviews.length} reseña{reviews.length !== 1 ? 's' : ''}
          </p>
        </div>
        {reviews.length > 3 && onSeeAll && (
          <button onClick={onSeeAll} className={styles.seeAllButton}>
            Ver todas →
          </button>
        )}
      </div>

      {displayReviews.length > 0 ? (
        <div className={styles.reviewsList}>
          {displayReviews.map((review) => (
            <div key={review._id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInfo}>
                  <div className={styles.avatar}>
                    {review.de.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.reviewerName}>{review.de}</div>
                    <div className={styles.reviewDate}>
                      {formatDate(review.createdAt)}
                    </div>
                  </div>
                </div>
                {renderStars(review.calificacion)}
              </div>
              <p className={styles.comment}>{review.comentario}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>⭐</div>
          <p>No hay reseñas todavía</p>
        </div>
      )}
    </div>
  );
};
