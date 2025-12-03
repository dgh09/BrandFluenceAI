import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/layout';
import { Button, Badge } from '../../components/common';
import { CampaignTimeline } from '../../components/features/Campaign';
import { ReviewForm, type ReviewFormData } from '../../components/features/Review';
import { mockCampaigns } from '../../data/mockData';
import styles from './CampaignDetailPage.module.css';

export const CampaignDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const campaign = mockCampaigns.find(c => c._id === id);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleSubmitReview = (reviewData: ReviewFormData) => {
    console.log('Review submitted:', reviewData);
    // In a real app, this would submit to the backend
    alert('¡Gracias por tu reseña! Se ha enviado exitosamente.');
  };

  if (!campaign) {
    return (
      <div className={styles.campaignDetailPage}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.notFound}>
            <h1>Campaña no encontrada</h1>
            <p>La campaña que buscas no existe o ha sido eliminada.</p>
            <Button variant="primary" onClick={() => navigate('/campaigns')}>
              ← Volver a Campañas
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
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

  return (
    <div className={styles.campaignDetailPage}>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <button onClick={() => navigate('/campaigns')} className={styles.breadcrumbLink}>
            Campañas
          </button>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>{campaign.nombreCampaña}</span>
        </div>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{campaign.nombreCampaña}</h1>
            <p className={styles.dates}>
              Creada: {formatDate(campaign.createdAt)} • Fecha límite: {formatDate(campaign.deadline)}
            </p>
          </div>
          <div className={styles.headerActions}>
            <Badge status={campaign.estado} size="lg" />
            {campaign.estado === 'borrador' && (
              <Button variant="secondary" onClick={() => console.log('Edit campaign')}>
                Editar
              </Button>
            )}
          </div>
        </div>

        <div className={styles.content}>
          {/* Main Column */}
          <div className={styles.mainColumn}>
            {/* Participants */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Participantes</h2>
              <div className={styles.participants}>
                <div className={styles.participant}>
                  <div className={styles.participantAvatar}>
                    {campaign.participants.brandName.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.participantLabel}>Marca</div>
                    <div className={styles.participantName}>{campaign.participants.brandName}</div>
                  </div>
                </div>
                {campaign.participants.creatorNames.map((name, idx) => (
                  <div key={idx} className={styles.participant}>
                    <div className={styles.participantAvatar}>
                      {name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.participantLabel}>Creador</div>
                      <div className={styles.participantName}>{name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Brief */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Brief de Campaña</h2>
              <p className={styles.description}>{campaign.brief.description}</p>

              {campaign.brief.requirements.length > 0 && (
                <div className={styles.requirements}>
                  <h3 className={styles.subsectionTitle}>Requisitos</h3>
                  <ul className={styles.requirementsList}>
                    {campaign.brief.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {campaign.brief.keyMessages && campaign.brief.keyMessages.length > 0 && (
                <div className={styles.keyMessages}>
                  <h3 className={styles.subsectionTitle}>Mensajes Clave</h3>
                  <div className={styles.messagesList}>
                    {campaign.brief.keyMessages.map((msg, idx) => (
                      <div key={idx} className={styles.messageTag}>{msg}</div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Deliverables */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Entregables</h2>
              <div className={styles.deliverables}>
                {campaign.deliverables.map((deliverable) => (
                  <div key={deliverable.id} className={styles.deliverable}>
                    <div className={styles.deliverableHeader}>
                      <div className={styles.deliverableInfo}>
                        <span className={styles.deliverableType}>
                          {deliverable.type === 'video' && '🎥'}
                          {deliverable.type === 'imagen' && '📷'}
                          {deliverable.type === 'reel' && '🎬'}
                          {deliverable.type === 'historia' && '📱'}
                          {deliverable.type === 'post' && '📝'}
                          {' '}
                          {deliverable.type.charAt(0).toUpperCase() + deliverable.type.slice(1)}
                        </span>
                        <span className={styles.deliverableQuantity}>x{deliverable.quantity}</span>
                      </div>
                      <Badge status={deliverable.status} size="sm" />
                    </div>
                    <div className={styles.deliverableMeta}>
                      Fecha límite: {formatDate(deliverable.dueDate)}
                    </div>
                    {deliverable.submittedUrl && (
                      <a href={deliverable.submittedUrl} className={styles.deliverableLink} target="_blank" rel="noopener noreferrer">
                        Ver entregable →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <CampaignTimeline events={campaign.timeline} />
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Budget Card */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Presupuesto</h3>
              <div className={styles.budgetValue}>{formatCurrency(campaign.presupuesto)}</div>

              <div className={styles.paymentTerms}>
                <div className={styles.paymentTerm}>
                  <span className={styles.paymentLabel}>Anticipo</span>
                  <span className={styles.paymentValue}>{campaign.paymentTerms.upfront}%</span>
                </div>
                <div className={styles.paymentTerm}>
                  <span className={styles.paymentLabel}>Hito intermedio</span>
                  <span className={styles.paymentValue}>{campaign.paymentTerms.milestone}%</span>
                </div>
                <div className={styles.paymentTerm}>
                  <span className={styles.paymentLabel}>Al completar</span>
                  <span className={styles.paymentValue}>{campaign.paymentTerms.completion}%</span>
                </div>
              </div>
            </div>

            {/* Contract Card */}
            {campaign.contrato && (
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contrato</h3>
                <div className={styles.contractInfo}>
                  <div className={styles.contractStatus}>
                    {campaign.contrato.terminosAceptados ? '✅ Aceptado' : '⏳ Pendiente'}
                  </div>
                  <div className={styles.contractDate}>
                    {formatDate(campaign.contrato.generadoEn)}
                  </div>
                </div>
                {campaign.contrato.pdfUrl && (
                  <Button
                    variant="secondary"
                    onClick={() => window.open(campaign.contrato!.pdfUrl, '_blank')}
                  >
                    📄 Ver Contrato
                  </Button>
                )}
              </div>
            )}

            {/* Actions */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Acciones</h3>
              <div className={styles.actions}>
                {campaign.estado === 'completada' && (
                  <Button
                    variant="primary"
                    onClick={() => setIsReviewModalOpen(true)}
                  >
                    ⭐ Dejar Reseña
                  </Button>
                )}
                {campaign.estado === 'en_progreso' && (
                  <Button variant="primary" onClick={() => console.log('Mark complete')}>
                    Marcar como Completada
                  </Button>
                )}
                {campaign.estado !== 'completada' && campaign.estado !== 'cancelada' && (
                  <Button variant="secondary" onClick={() => console.log('Cancel campaign')}>
                    Cancelar Campaña
                  </Button>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Review Form Modal */}
        <ReviewForm
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          campaignId={campaign._id}
          campaignName={campaign.nombreCampaña}
          onSubmit={handleSubmitReview}
        />
      </main>
    </div>
  );
};
