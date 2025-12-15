import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormInput, FormTextarea, FormSelect } from '../../components/common';
import styles from './OnboardingBrandPage.module.css';

type OnboardingStep = 1 | 2 | 3;

interface OnboardingData {
  // Step 1: Información de la Empresa
  logo: File | null;
  logoPreview: string;
  companyName: string;
  industry: string;
  description: string;
  website: string;

  // Step 2: Preferencias de Campaña
  budgetRange: {
    min: string;
    max: string;
  };
  selectedNiches: string[];
  contentTypes: string[];
  campaignFrequency: string;

  // Step 3: Configuración de Cuenta
  country: string;
  currency: string;
  paymentMethods: string[];
}

const INDUSTRIES = [
  'Moda y Belleza',
  'Tecnología',
  'Alimentos y Bebidas',
  'Salud y Bienestar',
  'Deportes y Fitness',
  'Viajes y Turismo',
  'Entretenimiento',
  'Educación',
  'Finanzas',
  'Retail',
  'Automotriz',
  'Inmobiliaria',
  'Servicios Profesionales',
  'Otro'
];

const AVAILABLE_NICHES = [
  'Belleza',
  'Moda',
  'Fitness',
  'Tecnología',
  'Gaming',
  'Comida',
  'Viajes',
  'Lifestyle',
  'Educación',
  'Deportes',
  'Música',
  'Arte',
  'Negocios',
  'Salud',
  'Entretenimiento'
];

const CONTENT_TYPES = [
  { value: 'video', label: 'Videos' },
  { value: 'foto', label: 'Fotos' },
  { value: 'reel', label: 'Reels' },
  { value: 'historia', label: 'Historias' },
  { value: 'post', label: 'Posts' },
  { value: 'livestream', label: 'Livestreams' }
];

const CAMPAIGN_FREQUENCIES = [
  { value: 'occasional', label: 'Ocasional (1-2 por año)' },
  { value: 'quarterly', label: 'Trimestral (4 por año)' },
  { value: 'monthly', label: 'Mensual' },
  { value: 'weekly', label: 'Semanal' },
  { value: 'ongoing', label: 'Continuo' }
];

const COUNTRIES = [
  'México',
  'Estados Unidos',
  'España',
  'Colombia',
  'Argentina',
  'Chile',
  'Perú',
  'Otro'
];

const CURRENCIES = [
  { value: 'MXN', label: 'Peso Mexicano (MXN)' },
  { value: 'USD', label: 'Dólar Estadounidense (USD)' },
  { value: 'EUR', label: 'Euro (EUR)' },
  { value: 'COP', label: 'Peso Colombiano (COP)' },
  { value: 'ARS', label: 'Peso Argentino (ARS)' },
  { value: 'CLP', label: 'Peso Chileno (CLP)' },
  { value: 'PEN', label: 'Sol Peruano (PEN)' }
];

const PAYMENT_METHODS = [
  { value: 'credit_card', label: 'Tarjeta de Crédito/Débito' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'bank_transfer', label: 'Transferencia Bancaria' }
];

export const OnboardingBrandPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState<OnboardingData>({
    logo: null,
    logoPreview: '',
    companyName: '',
    industry: '',
    description: '',
    website: '',
    budgetRange: { min: '', max: '' },
    selectedNiches: [],
    contentTypes: [],
    campaignFrequency: '',
    country: '',
    currency: 'USD',
    paymentMethods: []
  });

  // Handle input changes
  const handleInputChange = (field: keyof OnboardingData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Handle logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, logo: 'La imagen no puede pesar más de 5MB' });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setData(prev => ({
          ...prev,
          logo: file,
          logoPreview: reader.result as string
        }));
        if (errors.logo) {
          const newErrors = { ...errors };
          delete newErrors.logo;
          setErrors(newErrors);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle niche selection
  const toggleNiche = (niche: string) => {
    setData(prev => {
      const currentNiches = prev.selectedNiches;
      if (currentNiches.includes(niche)) {
        return { ...prev, selectedNiches: currentNiches.filter(n => n !== niche) };
      } else if (currentNiches.length < 5) {
        return { ...prev, selectedNiches: [...currentNiches, niche] };
      }
      return prev;
    });
  };

  // Handle content type selection
  const toggleContentType = (type: string) => {
    setData(prev => {
      const currentTypes = prev.contentTypes;
      if (currentTypes.includes(type)) {
        return { ...prev, contentTypes: currentTypes.filter(t => t !== type) };
      } else {
        return { ...prev, contentTypes: [...currentTypes, type] };
      }
    });
  };

  // Handle payment method selection
  const togglePaymentMethod = (method: string) => {
    setData(prev => {
      const currentMethods = prev.paymentMethods;
      if (currentMethods.includes(method)) {
        return { ...prev, paymentMethods: currentMethods.filter(m => m !== method) };
      } else {
        return { ...prev, paymentMethods: [...currentMethods, method] };
      }
    });
  };

  // Validate current step
  const validateStep = (step: OnboardingStep): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!data.companyName.trim()) newErrors.companyName = 'El nombre de la empresa es requerido';
        if (!data.industry) newErrors.industry = 'La industria es requerida';
        if (!data.description.trim()) newErrors.description = 'La descripción es requerida';
        else if (data.description.length > 500) newErrors.description = 'Máximo 500 caracteres';
        if (data.website && !isValidURL(data.website)) {
          newErrors.website = 'URL inválida';
        }
        break;

      case 2:
        if (!data.budgetRange.min || !data.budgetRange.max) {
          newErrors.budgetRange = 'El rango de presupuesto es requerido';
        } else if (parseFloat(data.budgetRange.min) >= parseFloat(data.budgetRange.max)) {
          newErrors.budgetRange = 'El presupuesto mínimo debe ser menor al máximo';
        }
        if (data.selectedNiches.length === 0) {
          newErrors.selectedNiches = 'Selecciona al menos 1 nicho';
        }
        if (data.contentTypes.length === 0) {
          newErrors.contentTypes = 'Selecciona al menos 1 tipo de contenido';
        }
        if (!data.campaignFrequency) {
          newErrors.campaignFrequency = 'Selecciona la frecuencia de campañas';
        }
        break;

      case 3:
        if (!data.country) newErrors.country = 'El país es requerido';
        if (!data.currency) newErrors.currency = 'La moneda es requerida';
        if (data.paymentMethods.length === 0) {
          newErrors.paymentMethods = 'Selecciona al menos 1 método de pago';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidURL = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep((currentStep + 1) as OnboardingStep);
      }
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as OnboardingStep);
    }
  };

  // Handle skip for now
  const handleSkip = () => {
    localStorage.setItem('onboarding_brand_partial', JSON.stringify(data));
    navigate('/matching');
  };

  // Handle complete
  const handleComplete = async () => {
    if (!validateStep(3)) return;

    // TODO: Save to backend via GraphQL mutation
    console.log('Brand onboarding completed:', data);

    // Remove pending onboarding flag
    localStorage.removeItem('pending_onboarding');
    localStorage.removeItem('onboarding_brand_partial');

    // Navigate to matching page
    navigate('/matching');
  };

  // Calculate progress
  const progress = (currentStep / 3) * 100;

  return (
    <div className={styles.onboardingPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🚀</span>
            <h1>BrandFluenceAI</h1>
          </div>
          <button onClick={handleSkip} className={styles.skipButton}>
            Guardar y continuar después
          </button>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <div className={styles.progressText}>
            Paso {currentStep} de 3 · {Math.round(progress)}% completado
          </div>
        </div>

        {/* Step Content */}
        <div className={styles.content}>
          {/* Step 1: Información de la Empresa */}
          {currentStep === 1 && (
            <div className={styles.stepContainer}>
              <div className={styles.stepHeader}>
                <h2>Información de la Empresa</h2>
                <p>Cuéntanos sobre tu marca para conectar con los mejores creadores</p>
              </div>

              <div className={styles.form}>
                {/* Logo Upload */}
                <div className={styles.logoSection}>
                  <label className={styles.label}>Logo de la Empresa (Opcional)</label>
                  <div className={styles.logoUpload}>
                    <div className={styles.logoPreview}>
                      {data.logoPreview ? (
                        <img src={data.logoPreview} alt="Logo" />
                      ) : (
                        <div className={styles.logoPlaceholder}>
                          <span>🏢</span>
                          <p>Sube tu logo</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.logoActions}>
                      <label htmlFor="logo-input" className={styles.uploadButton}>
                        <Button variant="secondary" size="sm" as="span">
                          Subir Logo
                        </Button>
                      </label>
                      <input
                        id="logo-input"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className={styles.fileInput}
                      />
                      <p className={styles.uploadHelp}>
                        Mínimo 300x300px, máximo 5MB
                      </p>
                    </div>
                  </div>
                  {errors.logo && <span className={styles.error}>{errors.logo}</span>}
                </div>

                <FormInput
                  label="Nombre de la Empresa"
                  name="companyName"
                  type="text"
                  value={data.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Ej: Nike, Coca-Cola"
                  required
                  error={errors.companyName}
                />

                <FormSelect
                  label="Industria/Sector"
                  name="industry"
                  value={data.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  options={INDUSTRIES.map(ind => ({ value: ind, label: ind }))}
                  placeholder="Selecciona una industria"
                  required
                  error={errors.industry}
                />

                <FormTextarea
                  label="Descripción de la Empresa"
                  name="description"
                  value={data.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe tu marca, productos/servicios y valores..."
                  required
                  error={errors.description}
                  helperText={`${data.description.length}/500 caracteres`}
                  rows={4}
                />

                <FormInput
                  label="Website URL (Opcional)"
                  name="website"
                  type="text"
                  value={data.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://www.tuempresa.com"
                  error={errors.website}
                />
              </div>
            </div>
          )}

          {/* Step 2: Preferencias de Campaña */}
          {currentStep === 2 && (
            <div className={styles.stepContainer}>
              <div className={styles.stepHeader}>
                <h2>Preferencias de Campaña</h2>
                <p>Ayúdanos a entender qué tipo de campañas buscas</p>
              </div>

              <div className={styles.form}>
                {/* Budget Range */}
                <div className={styles.budgetSection}>
                  <label className={styles.label}>Presupuesto Habitual por Campaña *</label>
                  <div className={styles.budgetInputs}>
                    <FormInput
                      label=""
                      name="budgetMin"
                      type="number"
                      value={data.budgetRange.min}
                      onChange={(e) =>
                        handleInputChange('budgetRange', {
                          ...data.budgetRange,
                          min: e.target.value
                        })
                      }
                      placeholder="Mínimo"
                      min={0}
                    />
                    <span className={styles.budgetSeparator}>-</span>
                    <FormInput
                      label=""
                      name="budgetMax"
                      type="number"
                      value={data.budgetRange.max}
                      onChange={(e) =>
                        handleInputChange('budgetRange', {
                          ...data.budgetRange,
                          max: e.target.value
                        })
                      }
                      placeholder="Máximo"
                      min={0}
                    />
                  </div>
                  {errors.budgetRange && (
                    <span className={styles.error}>{errors.budgetRange}</span>
                  )}
                </div>

                {/* Niches */}
                <div className={styles.nichesSection}>
                  <label className={styles.label}>
                    Nichos de Interés ({data.selectedNiches.length}/5) *
                  </label>
                  <div className={styles.nichesGrid}>
                    {AVAILABLE_NICHES.map(niche => (
                      <button
                        key={niche}
                        type="button"
                        onClick={() => toggleNiche(niche)}
                        className={`${styles.nicheButton} ${
                          data.selectedNiches.includes(niche) ? styles.nicheSelected : ''
                        }`}
                        disabled={
                          !data.selectedNiches.includes(niche) &&
                          data.selectedNiches.length >= 5
                        }
                      >
                        {niche}
                      </button>
                    ))}
                  </div>
                  {errors.selectedNiches && (
                    <span className={styles.error}>{errors.selectedNiches}</span>
                  )}
                </div>

                {/* Content Types */}
                <div className={styles.contentTypesSection}>
                  <label className={styles.label}>Tipo de Contenido Preferido *</label>
                  <div className={styles.contentTypesGrid}>
                    {CONTENT_TYPES.map(type => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => toggleContentType(type.value)}
                        className={`${styles.contentTypeButton} ${
                          data.contentTypes.includes(type.value) ? styles.contentTypeSelected : ''
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                  {errors.contentTypes && (
                    <span className={styles.error}>{errors.contentTypes}</span>
                  )}
                </div>

                {/* Campaign Frequency */}
                <FormSelect
                  label="Frecuencia de Campañas Estimada"
                  name="campaignFrequency"
                  value={data.campaignFrequency}
                  onChange={(e) => handleInputChange('campaignFrequency', e.target.value)}
                  options={CAMPAIGN_FREQUENCIES}
                  placeholder="Selecciona la frecuencia"
                  required
                  error={errors.campaignFrequency}
                />
              </div>
            </div>
          )}

          {/* Step 3: Configuración de Cuenta */}
          {currentStep === 3 && (
            <div className={styles.stepContainer}>
              <div className={styles.stepHeader}>
                <h2>Configuración de Cuenta</h2>
                <p>Define tus preferencias de región y pago</p>
              </div>

              <div className={styles.form}>
                <FormSelect
                  label="País/Región de Operación"
                  name="country"
                  value={data.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  options={COUNTRIES.map(c => ({ value: c, label: c }))}
                  placeholder="Selecciona tu país"
                  required
                  error={errors.country}
                />

                <FormSelect
                  label="Moneda Preferida"
                  name="currency"
                  value={data.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                  options={CURRENCIES}
                  required
                  error={errors.currency}
                />

                {/* Payment Methods */}
                <div className={styles.paymentMethodsSection}>
                  <label className={styles.label}>Métodos de Pago Aceptados *</label>
                  <div className={styles.paymentMethodsGrid}>
                    {PAYMENT_METHODS.map(method => (
                      <button
                        key={method.value}
                        type="button"
                        onClick={() => togglePaymentMethod(method.value)}
                        className={`${styles.paymentMethodButton} ${
                          data.paymentMethods.includes(method.value)
                            ? styles.paymentMethodSelected
                            : ''
                        }`}
                      >
                        <span className={styles.checkIcon}>
                          {data.paymentMethods.includes(method.value) ? '✓' : ''}
                        </span>
                        {method.label}
                      </button>
                    ))}
                  </div>
                  {errors.paymentMethods && (
                    <span className={styles.error}>{errors.paymentMethods}</span>
                  )}
                </div>

                <div className={styles.infoBox}>
                  <span className={styles.infoIcon}>ℹ️</span>
                  <div>
                    <strong>Nota:</strong> Los pagos en la plataforma son completamente seguros.
                    Podrás configurar tus métodos de pago detalladamente más adelante.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className={styles.navigation}>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={handlePrevious}>
              ← Anterior
            </Button>
          )}
          <div className={styles.spacer} />
          {currentStep < 3 ? (
            <Button variant="primary" onClick={handleNext}>
              Siguiente →
            </Button>
          ) : (
            <Button variant="primary" onClick={handleComplete}>
              Completar Onboarding
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
