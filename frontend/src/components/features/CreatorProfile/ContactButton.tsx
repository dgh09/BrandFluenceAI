import React from 'react';
import { Button } from '../../common';
import styles from './ContactButton.module.css';

interface ContactButtonProps {
  creatorId: string;
  creatorName: string;
  price: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  creatorId,
  price
}) => {
  const handleContact = () => {
    console.log('Contacting creator:', creatorId);
    // Future: Open message modal or redirect to campaign creation
  };

  const handleStartCampaign = () => {
    console.log('Starting campaign with:', creatorId);
    // Future: Redirect to campaign creation with pre-selected creator
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.priceCard}>
        <div className={styles.priceLabel}>Tarifa por video</div>
        <div className={styles.priceValue}>{price}</div>
        <p className={styles.priceNote}>Precio negociable según proyecto</p>
      </div>

      <div className={styles.actions}>
        <Button
          variant="primary"
          size="lg"
          onClick={handleStartCampaign}
          className={styles.primaryButton}
        >
          Crear Campaña
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={handleContact}
        >
          Enviar Mensaje
        </Button>
      </div>

      <div className={styles.guarantee}>
        <span className={styles.guaranteeIcon}>✓</span>
        <span>Pago seguro • Contratos verificados • Soporte 24/7</span>
      </div>
    </div>
  );
};
