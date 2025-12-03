import React, { useState } from 'react';
import { Modal, FormTextarea, Button } from '../../common';
import { RatingStars } from './RatingStars';
import styles from './ReviewForm.module.css';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  campaignId: string;
  campaignName: string;
  onSubmit: (reviewData: ReviewFormData) => void;
}

export interface ReviewFormData {
  rating: number;
  title: string;
  comment: string;
  criteria: {
    communication: number;
    quality: number;
    timeliness: number;
    professionalism: number;
  };
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
  isOpen,
  onClose,
  campaignName,
  onSubmit
}) => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [criteria, setCriteria] = useState({
    communication: 0,
    quality: 0,
    timeliness: 0,
    professionalism: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      alert('Por favor selecciona una calificación');
      return;
    }

    if (comment.trim().length < 10) {
      alert('El comentario debe tener al menos 10 caracteres');
      return;
    }

    onSubmit({
      rating,
      title,
      comment,
      criteria
    });

    // Reset form
    setRating(0);
    setTitle('');
    setComment('');
    setCriteria({
      communication: 0,
      quality: 0,
      timeliness: 0,
      professionalism: 0
    });
    onClose();
  };

  const updateCriteria = (key: keyof typeof criteria, value: number) => {
    setCriteria(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Dejar Reseña" size="md">
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.campaignInfo}>
          <span className={styles.campaignIcon}>🎯</span>
          <span className={styles.campaignName}>{campaignName}</span>
        </div>

        {/* Overall Rating */}
        <div className={styles.section}>
          <label className={styles.label}>
            Calificación General <span className={styles.required}>*</span>
          </label>
          <RatingStars
            rating={rating}
            onChange={setRating}
            size="lg"
            showValue
          />
        </div>

        {/* Title */}
        <div className={styles.section}>
          <label htmlFor="title" className={styles.label}>
            Título (opcional)
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Resume tu experiencia"
            maxLength={100}
            className={styles.input}
          />
          <span className={styles.charCount}>{title.length}/100</span>
        </div>

        {/* Comment */}
        <div className={styles.section}>
          <FormTextarea
            label="Comentario"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Cuéntanos sobre tu experiencia con esta colaboración..."
            required
            maxLength={500}
            showCounter
            rows={6}
          />
        </div>

        {/* Criteria Ratings */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>
            Calificaciones Detalladas (opcional)
          </h4>
          <div className={styles.criteriaGrid}>
            <div className={styles.criteriaItem}>
              <label className={styles.criteriaLabel}>Comunicación</label>
              <RatingStars
                rating={criteria.communication}
                onChange={(value) => updateCriteria('communication', value)}
                size="sm"
              />
            </div>
            <div className={styles.criteriaItem}>
              <label className={styles.criteriaLabel}>Calidad</label>
              <RatingStars
                rating={criteria.quality}
                onChange={(value) => updateCriteria('quality', value)}
                size="sm"
              />
            </div>
            <div className={styles.criteriaItem}>
              <label className={styles.criteriaLabel}>Puntualidad</label>
              <RatingStars
                rating={criteria.timeliness}
                onChange={(value) => updateCriteria('timeliness', value)}
                size="sm"
              />
            </div>
            <div className={styles.criteriaItem}>
              <label className={styles.criteriaLabel}>Profesionalismo</label>
              <RatingStars
                rating={criteria.professionalism}
                onChange={(value) => updateCriteria('professionalism', value)}
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Publicar Reseña
          </Button>
        </div>

        <p className={styles.note}>
          * Las reseñas no pueden ser editadas después de publicarse. Asegúrate de
          que toda la información sea precisa.
        </p>
      </form>
    </Modal>
  );
};
