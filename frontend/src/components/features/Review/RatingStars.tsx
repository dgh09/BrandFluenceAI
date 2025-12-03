import React, { useState } from 'react';
import styles from './RatingStars.module.css';

interface RatingStarsProps {
  rating: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  onChange,
  readonly = false,
  size = 'md',
  showValue = false
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleClick = (value: number) => {
    if (!readonly && onChange) {
      onChange(value);
    }
  };

  const handleMouseEnter = (value: number) => {
    if (!readonly) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(null);
    }
  };

  const displayRating = hoverRating ?? rating;

  return (
    <div className={`${styles.ratingStars} ${styles[size]}`}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            disabled={readonly}
            className={`${styles.star} ${
              value <= displayRating ? styles.filled : styles.empty
            } ${readonly ? styles.readonly : styles.interactive}`}
            aria-label={`${value} star${value > 1 ? 's' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
      {showValue && (
        <span className={styles.value}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
