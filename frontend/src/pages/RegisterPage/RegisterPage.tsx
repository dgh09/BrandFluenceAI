import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button, FormInput } from '../../components/common';
import type { UserType } from '../../types';
import styles from './RegisterPage.module.css';

type RegistrationStep = 'select-type' | 'form';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  // State
  const [step, setStep] = useState<RegistrationStep>('select-type');
  const [userType, setUserType] = useState<UserType | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '', // Solo para marcas
    position: '', // Solo para marcas
    acceptTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle user type selection
  const handleSelectType = (type: UserType) => {
    setUserType(type);
    setStep('form');
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Debe contener al menos una mayúscula';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Debe contener al menos un número';
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    // Brand-specific fields
    if (userType === 'brand') {
      if (!formData.companyName) {
        newErrors.companyName = 'El nombre de la empresa es requerido';
      }
      if (!formData.position) {
        newErrors.position = 'El cargo es requerido';
      }
    }

    // Terms acceptance
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !userType) {
      return;
    }

    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const success = register({
        email: formData.email,
        password: formData.password,
        tipo: userType,
        companyName: userType === 'brand' ? formData.companyName : undefined,
        position: userType === 'brand' ? formData.position : undefined
      });

      if (success) {
        // Redirect to onboarding
        if (userType === 'creator') {
          navigate('/onboarding/creator');
        } else {
          navigate('/onboarding/brand');
        }
      } else {
        setErrors({ email: 'Este email ya está registrado' });
      }
    } catch (error) {
      setErrors({ general: 'Error al crear la cuenta. Intenta nuevamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle back to type selection
  const handleBack = () => {
    setStep('select-type');
    setUserType(null);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      position: '',
      acceptTerms: false
    });
    setErrors({});
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContainer}>
        <div className={styles.registerCard}>
          {/* Logo and Header */}
          <div className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🚀</span>
              <h1 className={styles.logoText}>BrandFluenceAI</h1>
            </div>
            <p className={styles.subtitle}>
              {step === 'select-type'
                ? 'Únete a la plataforma que conecta marcas y creadores'
                : userType === 'creator'
                ? 'Registro de Creador de Contenido'
                : 'Registro de Marca'}
            </p>
          </div>

          {/* Step 1: Select User Type */}
          {step === 'select-type' && (
            <div className={styles.typeSelection}>
              <h2>Selecciona tu tipo de cuenta</h2>
              <div className={styles.typeOptions}>
                <button
                  className={styles.typeCard}
                  onClick={() => handleSelectType('creator')}
                >
                  <div className={styles.typeIcon}>👤</div>
                  <h3>Soy Creador</h3>
                  <p>Encuentra oportunidades de colaboración con marcas</p>
                  <ul className={styles.typeFeatures}>
                    <li>✓ Perfil profesional</li>
                    <li>✓ Recibe propuestas de marcas</li>
                    <li>✓ Gestiona tus campañas</li>
                    <li>✓ Cobra de forma segura</li>
                  </ul>
                </button>

                <button
                  className={styles.typeCard}
                  onClick={() => handleSelectType('brand')}
                >
                  <div className={styles.typeIcon}>🏢</div>
                  <h3>Soy Marca</h3>
                  <p>Encuentra y contrata creadores de contenido</p>
                  <ul className={styles.typeFeatures}>
                    <li>✓ Matching con IA</li>
                    <li>✓ Gestión de campañas</li>
                    <li>✓ Analytics en tiempo real</li>
                    <li>✓ Pagos automatizados</li>
                  </ul>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Registration Form */}
          {step === 'form' && userType && (
            <form onSubmit={handleSubmit} className={styles.form}>
              <button
                type="button"
                onClick={handleBack}
                className={styles.backButton}
              >
                ← Cambiar tipo de cuenta
              </button>

              {errors.general && (
                <div className={styles.errorBanner}>
                  <span className={styles.errorIcon}>⚠️</span>
                  {errors.general}
                </div>
              )}

              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={userType === 'brand' ? 'tu@empresa.com' : 'tu@email.com'}
                required
                error={errors.email}
              />

              <FormInput
                label="Contraseña"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mínimo 8 caracteres"
                required
                error={errors.password}
                helperText="Debe contener al menos 8 caracteres, 1 mayúscula y 1 número"
              />

              <FormInput
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirma tu contraseña"
                required
                error={errors.confirmPassword}
              />

              {/* Brand-specific fields */}
              {userType === 'brand' && (
                <>
                  <FormInput
                    label="Nombre de la Empresa"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Ej: Nike, Coca-Cola"
                    required
                    error={errors.companyName}
                  />

                  <FormInput
                    label="Tu Cargo"
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Ej: Marketing Manager"
                    required
                    error={errors.position}
                  />
                </>
              )}

              {/* Terms and Conditions */}
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <span>
                    Acepto los{' '}
                    <a href="#" className={styles.link}>
                      Términos y Condiciones
                    </a>{' '}
                    y la{' '}
                    <a href="#" className={styles.link}>
                      Política de Privacidad
                    </a>
                  </span>
                </label>
                {errors.acceptTerms && (
                  <span className={styles.errorText}>{errors.acceptTerms}</span>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className={styles.submitButton}
              >
                {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
              </Button>
            </form>
          )}

          {/* Footer */}
          <div className={styles.footer}>
            <p>
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className={styles.link}>
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>

        {/* Info Panel */}
        {step === 'form' && (
          <div className={styles.infoPanel}>
            <h2>
              {userType === 'creator'
                ? 'Únete a miles de creadores'
                : 'Las mejores marcas confían en nosotros'}
            </h2>
            <div className={styles.features}>
              {userType === 'creator' ? (
                <>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>💰</span>
                    <div>
                      <h3>Gana más</h3>
                      <p>Accede a campañas mejor pagadas</p>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🎯</span>
                    <div>
                      <h3>Matching perfecto</h3>
                      <p>IA encuentra las marcas ideales para ti</p>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🛡️</span>
                    <div>
                      <h3>Pagos seguros</h3>
                      <p>Cobra sin complicaciones</p>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>📊</span>
                    <div>
                      <h3>Crece tu carrera</h3>
                      <p>Analytics y herramientas profesionales</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🤖</span>
                    <div>
                      <h3>Matching con IA</h3>
                      <p>Encuentra creadores perfectos automáticamente</p>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>⚡</span>
                    <div>
                      <h3>10x más rápido</h3>
                      <p>Lanza campañas en minutos, no semanas</p>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>📈</span>
                    <div>
                      <h3>Resultados medibles</h3>
                      <p>Analytics completos de tus campañas</p>
                    </div>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>✅</span>
                    <div>
                      <h3>Sin riesgos</h3>
                      <p>Perfiles verificados y pagos seguros</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
