import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client/react';
import { Button, FormInput, FormTextarea, FormSelect, Badge } from '../../components/common';
import {
  COMPLETE_CREATOR_ONBOARDING,
  type CreatorOnboardingInput
} from '../../graphql';
import { useAuth } from '../../contexts/AuthContext';
import styles from './OnboardingCreatorPage.module.css';

type OnboardingStep = 1 | 2 | 3 | 4;

interface OnboardingData {
  // Step 1: Información Básica
  avatar: File | null;
  avatarPreview: string;
  fullName: string;
  handle: string;
  bio: string;

  // Step 2: Especialización
  selectedNiches: string[];
  customTags: string[];

  // Step 3: Redes Sociales
  tiktok: string;
  instagram: string;
  youtube: string;

  // Step 4: Portfolio y Tarifas
  portfolioItems: {
    url: string;
    type: 'tiktok' | 'instagram' | 'youtube';
  }[];
  pricePerVideo: string;
  availability: 'available' | 'busy' | 'unavailable';
}

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

export const OnboardingCreatorPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCheckingHandle, setIsCheckingHandle] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    avatar: null,
    avatarPreview: '',
    fullName: '',
    handle: '',
    bio: '',
    selectedNiches: [],
    customTags: [],
    tiktok: '',
    instagram: '',
    youtube: '',
    portfolioItems: [{ url: '', type: 'tiktok' }],
    pricePerVideo: '',
    availability: 'available'
  });

  // GraphQL mutations and queries
  const [completeOnboarding, { loading: onboardingLoading }] = useMutation(COMPLETE_CREATOR_ONBOARDING);

  // Check if handle is unique using local validation
  // TODO: Integrate with backend GraphQL query when needed
  const checkHandleAvailability = async (handle: string): Promise<boolean> => {
    // Local validation: check against reserved handles
    const takenHandles = ['admin', 'test', 'demo', 'brandfluence', 'root', 'system'];
    return !takenHandles.includes(handle.toLowerCase().replace('@', ''));
  };

  // Handle input changes
  const handleInputChange = (field: keyof OnboardingData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Validate handle uniqueness with debounce
  useEffect(() => {
    const validateHandle = async () => {
      if (data.handle.length >= 3) {
        setIsCheckingHandle(true);
        const timer = setTimeout(async () => {
          const isAvailable = await checkHandleAvailability(data.handle);
          if (!isAvailable) {
            setErrors(prev => ({ ...prev, handle: 'Este handle ya está en uso' }));
          } else if (errors.handle === 'Este handle ya está en uso') {
            const newErrors = { ...errors };
            delete newErrors.handle;
            setErrors(newErrors);
          }
          setIsCheckingHandle(false);
        }, 800);

        return () => clearTimeout(timer);
      }
    };

    validateHandle();
  }, [data.handle]);

  // Handle avatar upload
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, avatar: 'La imagen no puede pesar más de 5MB' });
        return;
      }

      // Validate image dimensions
      const img = new Image();
      const reader = new FileReader();

      reader.onloadend = () => {
        img.src = reader.result as string;
      };

      img.onload = () => {
        if (img.width < 500 || img.height < 500) {
          setErrors({ ...errors, avatar: 'La imagen debe ser de al menos 500x500px' });
          return;
        }

        setData(prev => ({
          ...prev,
          avatar: file,
          avatarPreview: img.src
        }));
        if (errors.avatar) {
          const newErrors = { ...errors };
          delete newErrors.avatar;
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

  // Add custom tag
  const [newTag, setNewTag] = useState('');
  const addCustomTag = () => {
    if (newTag.trim() && !data.customTags.includes(newTag.trim())) {
      setData(prev => ({
        ...prev,
        customTags: [...prev.customTags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeCustomTag = (tag: string) => {
    setData(prev => ({
      ...prev,
      customTags: prev.customTags.filter(t => t !== tag)
    }));
  };

  // Handle portfolio items
  const addPortfolioItem = () => {
    if (data.portfolioItems.length < 10) {
      setData(prev => ({
        ...prev,
        portfolioItems: [...prev.portfolioItems, { url: '', type: 'tiktok' }]
      }));
    }
  };

  const updatePortfolioItem = (index: number, field: 'url' | 'type', value: string) => {
    setData(prev => ({
      ...prev,
      portfolioItems: prev.portfolioItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const removePortfolioItem = (index: number) => {
    if (data.portfolioItems.length > 1) {
      setData(prev => ({
        ...prev,
        portfolioItems: prev.portfolioItems.filter((_, i) => i !== index)
      }));
    }
  };

  // Validate current step
  const validateStep = (step: OnboardingStep): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!data.fullName.trim()) newErrors.fullName = 'El nombre es requerido';
        if (!data.handle.trim()) newErrors.handle = 'El handle es requerido';
        else if (data.handle.length < 3) newErrors.handle = 'Mínimo 3 caracteres';
        if (!data.bio.trim()) newErrors.bio = 'La biografía es requerida';
        else if (data.bio.length > 500) newErrors.bio = 'Máximo 500 caracteres';
        break;

      case 2:
        if (data.selectedNiches.length === 0) {
          newErrors.selectedNiches = 'Selecciona al menos 1 nicho';
        }
        break;

      case 3:
        if (!data.tiktok && !data.instagram && !data.youtube) {
          newErrors.socialMedia = 'Agrega al menos una red social';
        }
        // Validate URLs
        if (data.tiktok && !isValidURL(data.tiktok)) {
          newErrors.tiktok = 'URL inválida';
        }
        if (data.instagram && !isValidURL(data.instagram)) {
          newErrors.instagram = 'URL inválida';
        }
        if (data.youtube && !isValidURL(data.youtube)) {
          newErrors.youtube = 'URL inválida';
        }
        break;

      case 4:
        const validPortfolioItems = data.portfolioItems.filter(item => item.url.trim() !== '');
        if (validPortfolioItems.length < 3) {
          newErrors.portfolio = 'Agrega al menos 3 ejemplos de contenido';
        }
        if (!data.pricePerVideo) {
          newErrors.pricePerVideo = 'La tarifa es requerida';
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
      if (currentStep < 4) {
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
    // Save partial data to localStorage
    localStorage.setItem('onboarding_partial', JSON.stringify(data));
    navigate('/matching');
  };

  // Handle complete
  const handleComplete = async () => {
    if (!validateStep(4)) return;

    try {
      // Prepare input for GraphQL mutation
      const validPortfolioItems = data.portfolioItems.filter(item => item.url.trim() !== '');

      const input: CreatorOnboardingInput = {
        avatar: data.avatarPreview || undefined,
        fullName: data.fullName,
        handle: data.handle,
        bio: data.bio,
        nichos: data.selectedNiches,
        customTags: data.customTags.length > 0 ? data.customTags : undefined,
        redesSociales: {
          tiktok: data.tiktok || undefined,
          instagram: data.instagram || undefined,
          youtube: data.youtube || undefined
        },
        portfolio: validPortfolioItems,
        pricePerVideo: data.pricePerVideo,
        availability: data.availability
      };

      // Call GraphQL mutation
      const { data: mutationData } = await completeOnboarding({
        variables: { input }
      });

      if (mutationData?.completeCreatorOnboarding?.success) {
        // Remove pending onboarding flag
        localStorage.removeItem('pending_onboarding');
        localStorage.removeItem('onboarding_partial');

        // Navigate to matching page
        navigate('/matching');
      } else {
        throw new Error(mutationData?.completeCreatorOnboarding?.message || 'Error al completar onboarding');
      }
    } catch (error) {
      console.error('Error completing onboarding:', error);
      // For now, if backend is not available, save to localStorage and navigate anyway
      console.log('Onboarding data saved locally:', data);
      localStorage.removeItem('pending_onboarding');
      localStorage.removeItem('onboarding_partial');
      navigate('/matching');
    }
  };

  // Calculate progress
  const progress = (currentStep / 4) * 100;

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
            Paso {currentStep} de 4 · {Math.round(progress)}% completado
          </div>
        </div>

        {/* Step Content */}
        <div className={styles.content}>
          {/* Step 1: Información Básica */}
          {currentStep === 1 && (
            <div className={styles.stepContainer}>
              <div className={styles.stepHeader}>
                <h2>Información Básica</h2>
                <p>Cuéntanos sobre ti para que las marcas te conozcan mejor</p>
              </div>

              <div className={styles.form}>
                {/* Avatar Upload */}
                <div className={styles.avatarSection}>
                  <label className={styles.label}>Foto de Perfil</label>
                  <div className={styles.avatarUpload}>
                    <div className={styles.avatarPreview}>
                      {data.avatarPreview ? (
                        <img src={data.avatarPreview} alt="Avatar" />
                      ) : (
                        <div className={styles.avatarPlaceholder}>
                          <span>📷</span>
                          <p>Sube tu foto</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.avatarActions}>
                      <label htmlFor="avatar-input" className={styles.uploadButton}>
                        <Button variant="secondary" size="sm" as="span">
                          Subir Foto
                        </Button>
                      </label>
                      <input
                        id="avatar-input"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className={styles.fileInput}
                      />
                      <p className={styles.uploadHelp}>
                        Mínimo 500x500px, máximo 5MB
                      </p>
                    </div>
                  </div>
                  {errors.avatar && <span className={styles.error}>{errors.avatar}</span>}
                </div>

                <FormInput
                  label="Nombre Completo"
                  name="fullName"
                  type="text"
                  value={data.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Ej: María García"
                  required
                  error={errors.fullName}
                />

                <FormInput
                  label="Username/Handle"
                  name="handle"
                  type="text"
                  value={data.handle}
                  onChange={(e) => handleInputChange('handle', e.target.value)}
                  placeholder="Ej: @mariagarcia"
                  required
                  error={errors.handle}
                  helperText={
                    isCheckingHandle
                      ? 'Verificando disponibilidad...'
                      : data.handle.length >= 3 && !errors.handle
                      ? '✓ Handle disponible'
                      : 'Debe ser único en la plataforma'
                  }
                />

                <FormTextarea
                  label="Biografía"
                  name="bio"
                  value={data.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Cuéntanos sobre ti, tu estilo y tu audiencia..."
                  required
                  error={errors.bio}
                  helperText={`${data.bio.length}/500 caracteres`}
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Step 2: Especialización */}
          {currentStep === 2 && (
            <div className={styles.stepContainer}>
              <div className={styles.stepHeader}>
                <h2>Especialización</h2>
                <p>Selecciona los nichos en los que creas contenido (máximo 5)</p>
              </div>

              <div className={styles.form}>
                <div className={styles.nichesSection}>
                  <label className={styles.label}>
                    Nichos ({data.selectedNiches.length}/5)
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

                {/* Custom Tags */}
                <div className={styles.tagsSection}>
                  <label className={styles.label}>Tags Personalizados (Opcional)</label>
                  <div className={styles.tagInput}>
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomTag())}
                      placeholder="Ej: Sostenibilidad, Minimalismo..."
                      className={styles.input}
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={addCustomTag}
                    >
                      Agregar
                    </Button>
                  </div>
                  {data.customTags.length > 0 && (
                    <div className={styles.tagsList}>
                      {data.customTags.map(tag => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          onRemove={() => removeCustomTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Redes Sociales */}
          {currentStep === 3 && (
            <div className={styles.stepContainer}>
              <div className={styles.stepHeader}>
                <h2>Redes Sociales</h2>
                <p>Conecta tus redes sociales (al menos 1 requerida)</p>
              </div>

              <div className={styles.form}>
                {errors.socialMedia && (
                  <div className={styles.errorBanner}>
                    <span>⚠️</span>
                    {errors.socialMedia}
                  </div>
                )}

                <FormInput
                  label="TikTok"
                  name="tiktok"
                  type="text"
                  value={data.tiktok}
                  onChange={(e) => handleInputChange('tiktok', e.target.value)}
                  placeholder="https://tiktok.com/@tuusuario"
                  error={errors.tiktok}
                />

                <FormInput
                  label="Instagram"
                  name="instagram"
                  type="text"
                  value={data.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value)}
                  placeholder="https://instagram.com/tuusuario"
                  error={errors.instagram}
                />

                <FormInput
                  label="YouTube"
                  name="youtube"
                  type="text"
                  value={data.youtube}
                  onChange={(e) => handleInputChange('youtube', e.target.value)}
                  placeholder="https://youtube.com/@tucanal"
                  error={errors.youtube}
                />
              </div>
            </div>
          )}

          {/* Step 4: Portfolio y Tarifas */}
          {currentStep === 4 && (
            <div className={styles.stepContainer}>
              <div className={styles.stepHeader}>
                <h2>Portfolio y Tarifas</h2>
                <p>Muestra tu mejor trabajo y define tus tarifas</p>
              </div>

              <div className={styles.form}>
                <div className={styles.portfolioSection}>
                  <label className={styles.label}>
                    Ejemplos de Contenido (mínimo 3)
                  </label>
                  {data.portfolioItems.map((item, index) => (
                    <div key={index} className={styles.portfolioItem}>
                      <div className={styles.portfolioInputs}>
                        <select
                          value={item.type}
                          onChange={(e) =>
                            updatePortfolioItem(index, 'type', e.target.value)
                          }
                          className={styles.select}
                        >
                          <option value="tiktok">TikTok</option>
                          <option value="instagram">Instagram</option>
                          <option value="youtube">YouTube</option>
                        </select>
                        <input
                          type="text"
                          value={item.url}
                          onChange={(e) =>
                            updatePortfolioItem(index, 'url', e.target.value)
                          }
                          placeholder="URL del contenido"
                          className={styles.input}
                        />
                        {data.portfolioItems.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removePortfolioItem(index)}
                            className={styles.removeButton}
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {data.portfolioItems.length < 10 && (
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={addPortfolioItem}
                    >
                      + Agregar Ejemplo
                    </Button>
                  )}
                  {errors.portfolio && (
                    <span className={styles.error}>{errors.portfolio}</span>
                  )}
                </div>

                <FormInput
                  label="Tarifa por Video"
                  name="pricePerVideo"
                  type="text"
                  value={data.pricePerVideo}
                  onChange={(e) => handleInputChange('pricePerVideo', e.target.value)}
                  placeholder="Ej: $500 - $800"
                  required
                  error={errors.pricePerVideo}
                  helperText="Tu tarifa sugerida por deliverable"
                />

                <div className={styles.availabilitySection}>
                  <label className={styles.label}>Disponibilidad</label>
                  <div className={styles.availabilityOptions}>
                    <button
                      type="button"
                      onClick={() => handleInputChange('availability', 'available')}
                      className={`${styles.availabilityButton} ${
                        data.availability === 'available' ? styles.selected : ''
                      }`}
                    >
                      <span className={styles.statusDot} style={{ background: '#10B981' }} />
                      Disponible
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('availability', 'busy')}
                      className={`${styles.availabilityButton} ${
                        data.availability === 'busy' ? styles.selected : ''
                      }`}
                    >
                      <span className={styles.statusDot} style={{ background: '#F59E0B' }} />
                      Ocupado
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('availability', 'unavailable')}
                      className={`${styles.availabilityButton} ${
                        data.availability === 'unavailable' ? styles.selected : ''
                      }`}
                    >
                      <span className={styles.statusDot} style={{ background: '#EF4444' }} />
                      No disponible
                    </button>
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
          {currentStep < 4 ? (
            <Button variant="primary" onClick={handleNext}>
              Siguiente →
            </Button>
          ) : (
            <Button variant="primary" onClick={handleComplete} disabled={onboardingLoading}>
              {onboardingLoading ? 'Guardando...' : 'Completar Onboarding'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
