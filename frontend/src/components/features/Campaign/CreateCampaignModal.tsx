import React, { useState } from 'react';
import { Button, FormInput, FormTextarea, Modal } from '../../common';
import type { DeliverableType } from '../../../types';
import styles from './CreateCampaignModal.module.css';

interface Deliverable {
  type: DeliverableType;
  quantity: number;
  description: string;
}

interface CampaignFormData {
  campaignName: string;
  description: string;
  objectives: string[];
  deliverables: Deliverable[];
  budget: string;
  startDate: string;
  deadline: string;
  specialRequirements: string;
  hashtags: string[];
}

interface CreateCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  creatorId: string;
  creatorName: string;
  onSubmit: (data: CampaignFormData) => void;
}

const CAMPAIGN_OBJECTIVES = [
  'Aumentar awareness de marca',
  'Generar engagement',
  'Impulsar ventas',
  'Lanzamiento de producto',
  'Promoción especial',
  'Crecimiento de seguidores',
  'Generar tráfico web',
  'Contenido educativo'
];

const DELIVERABLE_TYPES: { value: DeliverableType; label: string }[] = [
  { value: 'video', label: 'Video' },
  { value: 'imagen', label: 'Imagen' },
  { value: 'reel', label: 'Reel' },
  { value: 'historia', label: 'Historia' },
  { value: 'post', label: 'Post' }
];

export const CreateCampaignModal: React.FC<CreateCampaignModalProps> = ({
  isOpen,
  onClose,
  creatorId: _creatorId,
  creatorName,
  onSubmit
}) => {
  const [formData, setFormData] = useState<CampaignFormData>({
    campaignName: '',
    description: '',
    objectives: [],
    deliverables: [{ type: 'video', quantity: 1, description: '' }],
    budget: '',
    startDate: '',
    deadline: '',
    specialRequirements: '',
    hashtags: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isGeneratingBrief, setIsGeneratingBrief] = useState(false);
  const [newHashtag, setNewHashtag] = useState('');

  // Handle input changes
  const handleInputChange = (field: keyof CampaignFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Toggle objective
  const toggleObjective = (objective: string) => {
    setFormData(prev => {
      const current = prev.objectives;
      if (current.includes(objective)) {
        return { ...prev, objectives: current.filter(o => o !== objective) };
      } else {
        return { ...prev, objectives: [...current, objective] };
      }
    });
  };

  // Deliverable management
  const addDeliverable = () => {
    if (formData.deliverables.length < 10) {
      setFormData(prev => ({
        ...prev,
        deliverables: [...prev.deliverables, { type: 'video', quantity: 1, description: '' }]
      }));
    }
  };

  const updateDeliverable = (index: number, field: keyof Deliverable, value: any) => {
    setFormData(prev => ({
      ...prev,
      deliverables: prev.deliverables.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const removeDeliverable = (index: number) => {
    if (formData.deliverables.length > 1) {
      setFormData(prev => ({
        ...prev,
        deliverables: prev.deliverables.filter((_, i) => i !== index)
      }));
    }
  };

  // Hashtag management
  const addHashtag = () => {
    const tag = newHashtag.trim().replace(/^#/, '');
    if (tag && !formData.hashtags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        hashtags: [...prev.hashtags, tag]
      }));
      setNewHashtag('');
    }
  };

  const removeHashtag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      hashtags: prev.hashtags.filter(t => t !== tag)
    }));
  };

  // Generate brief with AI (simulated)
  const handleGenerateBrief = async () => {
    setIsGeneratingBrief(true);

    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 1500));

    const generatedBrief = `Estamos buscando crear contenido auténtico y engaging para nuestra campaña "${formData.campaignName || 'nueva campaña'}".

Queremos que ${creatorName} muestre de manera natural cómo nuestro producto/servicio se integra en su día a día, conectando con su audiencia de forma genuina.

El contenido debe reflejar los valores de la marca: autenticidad, innovación y calidad. Esperamos una narrativa que inspire y motive a la acción.`;

    setFormData(prev => ({
      ...prev,
      description: generatedBrief
    }));

    setIsGeneratingBrief(false);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.campaignName.trim()) {
      newErrors.campaignName = 'El nombre de la campaña es requerido';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción/brief es requerida';
    }

    if (formData.objectives.length === 0) {
      newErrors.objectives = 'Selecciona al menos un objetivo';
    }

    if (!formData.budget) {
      newErrors.budget = 'El presupuesto es requerido';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'La fecha de inicio es requerida';
    }

    if (!formData.deadline) {
      newErrors.deadline = 'El deadline es requerido';
    } else {
      const start = new Date(formData.startDate);
      const deadline = new Date(formData.deadline);
      const minDeadline = new Date();
      minDeadline.setDate(minDeadline.getDate() + 3);

      if (deadline < minDeadline) {
        newErrors.deadline = 'El deadline debe ser al menos 3 días en el futuro';
      }

      if (formData.startDate && deadline < start) {
        newErrors.deadline = 'El deadline debe ser posterior a la fecha de inicio';
      }
    }

    const hasValidDeliverable = formData.deliverables.some(d => d.quantity > 0);
    if (!hasValidDeliverable) {
      newErrors.deliverables = 'Agrega al menos un deliverable válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      onClose();
    }
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get minimum deadline (3 days from now)
  const getMinDeadline = () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    return minDate.toISOString().split('T')[0];
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Crear Propuesta de Campaña" size="lg">
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Creator Info */}
        <div className={styles.creatorInfo}>
          <span className={styles.infoIcon}>👤</span>
          <div>
            <strong>Propuesta para:</strong> {creatorName}
          </div>
        </div>

        {/* Campaign Name */}
        <FormInput
          label="Nombre de la Campaña"
          name="campaignName"
          type="text"
          value={formData.campaignName}
          onChange={(e) => handleInputChange('campaignName', e.target.value)}
          placeholder="Ej: Lanzamiento Producto Verano 2024"
          required
          error={errors.campaignName}
        />

        {/* Brief/Description */}
        <div className={styles.briefSection}>
          <div className={styles.briefHeader}>
            <label className={styles.label}>Descripción / Brief de la Campaña *</label>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleGenerateBrief}
              disabled={isGeneratingBrief || !formData.campaignName}
            >
              {isGeneratingBrief ? '🤖 Generando...' : '🤖 Generar con IA'}
            </Button>
          </div>
          <FormTextarea
            label=""
            name="description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe los objetivos de la campaña, el mensaje clave, el tono deseado..."
            required
            error={errors.description}
            rows={6}
          />
        </div>

        {/* Objectives */}
        <div className={styles.objectivesSection}>
          <label className={styles.label}>Objetivos de la Campaña *</label>
          <div className={styles.objectivesGrid}>
            {CAMPAIGN_OBJECTIVES.map(objective => (
              <button
                key={objective}
                type="button"
                onClick={() => toggleObjective(objective)}
                className={`${styles.objectiveButton} ${
                  formData.objectives.includes(objective) ? styles.objectiveSelected : ''
                }`}
              >
                {formData.objectives.includes(objective) && (
                  <span className={styles.checkmark}>✓</span>
                )}
                {objective}
              </button>
            ))}
          </div>
          {errors.objectives && <span className={styles.error}>{errors.objectives}</span>}
        </div>

        {/* Deliverables */}
        <div className={styles.deliverablesSection}>
          <label className={styles.label}>Deliverables Esperados *</label>
          {formData.deliverables.map((deliverable, index) => (
            <div key={index} className={styles.deliverableItem}>
              <div className={styles.deliverableInputs}>
                <select
                  value={deliverable.type}
                  onChange={(e) =>
                    updateDeliverable(index, 'type', e.target.value as DeliverableType)
                  }
                  className={styles.select}
                >
                  {DELIVERABLE_TYPES.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={deliverable.quantity}
                  onChange={(e) =>
                    updateDeliverable(index, 'quantity', parseInt(e.target.value) || 1)
                  }
                  className={styles.quantityInput}
                  placeholder="Cant."
                />
                <input
                  type="text"
                  value={deliverable.description}
                  onChange={(e) => updateDeliverable(index, 'description', e.target.value)}
                  placeholder="Descripción (opcional)"
                  className={styles.input}
                />
                {formData.deliverables.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDeliverable(index)}
                    className={styles.removeButton}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          ))}
          {formData.deliverables.length < 10 && (
            <Button type="button" variant="secondary" size="sm" onClick={addDeliverable}>
              + Agregar Deliverable
            </Button>
          )}
          {errors.deliverables && <span className={styles.error}>{errors.deliverables}</span>}
        </div>

        {/* Budget & Dates */}
        <div className={styles.budgetDatesGrid}>
          <FormInput
            label="Presupuesto Ofrecido"
            name="budget"
            type="text"
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            placeholder="Ej: $500 - $800"
            required
            error={errors.budget}
          />

          <div>
            <label className={styles.label}>Fecha de Inicio *</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className={styles.input}
              min={getMinDate()}
            />
            {errors.startDate && <span className={styles.error}>{errors.startDate}</span>}
          </div>

          <div>
            <label className={styles.label}>Deadline de Entrega *</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={(e) => handleInputChange('deadline', e.target.value)}
              className={styles.input}
              min={getMinDeadline()}
            />
            {!errors.deadline && (
              <span className={styles.helperText}>Debe ser al menos 3 días en el futuro</span>
            )}
            {errors.deadline && <span className={styles.error}>{errors.deadline}</span>}
          </div>
        </div>

        {/* Hashtags */}
        <div className={styles.hashtagsSection}>
          <label className={styles.label}>Hashtags/Menciones Requeridas (Opcional)</label>
          <div className={styles.hashtagInput}>
            <input
              type="text"
              value={newHashtag}
              onChange={(e) => setNewHashtag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHashtag())}
              placeholder="Ej: MiMarca, Verano2024"
              className={styles.input}
            />
            <Button type="button" variant="secondary" size="sm" onClick={addHashtag}>
              Agregar
            </Button>
          </div>
          {formData.hashtags.length > 0 && (
            <div className={styles.hashtagsList}>
              {formData.hashtags.map(tag => (
                <span key={tag} className={styles.hashtag}>
                  #{tag}
                  <button type="button" onClick={() => removeHashtag(tag)}>
                    ✕
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Special Requirements */}
        <FormTextarea
          label="Requisitos Especiales (Opcional)"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
          placeholder="Cualquier requisito adicional: ubicaciones específicas, productos a incluir, tono del mensaje, etc."
          rows={3}
        />

        {/* Info Box */}
        <div className={styles.infoBox}>
          <span className={styles.infoIcon}>ℹ️</span>
          <div>
            <strong>Nota:</strong> Al enviar esta propuesta, se generará automáticamente un
            contrato con estos términos. El creador podrá aceptar, rechazar o negociar.
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Enviar Propuesta
          </Button>
        </div>
      </form>
    </Modal>
  );
};
