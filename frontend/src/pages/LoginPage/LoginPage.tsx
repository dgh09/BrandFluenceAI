import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button, FormInput } from '../../components/common';
import styles from './LoginPage.module.css';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(email, password);

    if (success) {
      navigate('/matching');
    } else {
      setError('Email o contraseña incorrectos');
    }

    setIsLoading(false);
  };

  const fillCreatorCredentials = () => {
    setEmail('maria@creator.com');
    setPassword('creator123');
    setError('');
  };

  const fillBrandCredentials = () => {
    setEmail('nike@brand.com');
    setPassword('brand123');
    setError('');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          {/* Logo and Header */}
          <div className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🚀</span>
              <h1 className={styles.logoText}>BrandFluenceAI</h1>
            </div>
            <p className={styles.subtitle}>
              Conecta marcas con creadores de contenido
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />

            <FormInput
              label="Contraseña"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            {error && (
              <div className={styles.error}>
                <span className={styles.errorIcon}>⚠️</span>
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              className={styles.submitButton}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className={styles.demoSection}>
            <div className={styles.divider}>
              <span>Cuentas de demostración</span>
            </div>

            <div className={styles.demoAccounts}>
              <button
                type="button"
                onClick={fillCreatorCredentials}
                className={styles.demoButton}
              >
                <div className={styles.demoIcon}>👤</div>
                <div className={styles.demoInfo}>
                  <div className={styles.demoLabel}>Creador</div>
                  <div className={styles.demoEmail}>maria@creator.com</div>
                </div>
              </button>

              <button
                type="button"
                onClick={fillBrandCredentials}
                className={styles.demoButton}
              >
                <div className={styles.demoIcon}>🏢</div>
                <div className={styles.demoInfo}>
                  <div className={styles.demoLabel}>Marca</div>
                  <div className={styles.demoEmail}>nike@brand.com</div>
                </div>
              </button>
            </div>

            <p className={styles.demoNote}>
              Haz clic en cualquier cuenta para autocompletar las credenciales
            </p>
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
          </div>
        </div>

        {/* Info Panel */}
        <div className={styles.infoPanel}>
          <h2>Plataforma de Influencer Marketing con IA</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎯</span>
              <div>
                <h3>Matching Inteligente</h3>
                <p>Encuentra los creadores perfectos con IA</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>📊</span>
              <div>
                <h3>Analytics en Tiempo Real</h3>
                <p>Métricas detalladas de tus campañas</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🤝</span>
              <div>
                <h3>Gestión de Campañas</h3>
                <p>Administra todo el ciclo de colaboración</p>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⭐</span>
              <div>
                <h3>Sistema de Reseñas</h3>
                <p>Calificaciones verificadas y transparentes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
