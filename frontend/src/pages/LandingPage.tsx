import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common';
import { platformStats } from '../data/mockData';
import styles from './LandingPage.module.css';

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.landing}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <img src="/brandfluence-logo-full.svg" alt="BrandFluenceAI" />
          </div>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#how-it-works">Cómo funciona</a>
            <a href="#pricing">Precios</a>
            <Link to="/login">
              <Button variant="secondary" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">
                Empezar Gratis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              Conecta <span className="gradient-text">Marcas</span> y{' '}
              <span className="gradient-text">Creadores</span> con IA
            </h1>
            <p>
              La plataforma inteligente que revoluciona las colaboraciones UGC.
              Matching automático, gestión simplificada y resultados medibles.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Soy Creador 🎨
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Soy Marca 🚀
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{platformStats.creators}</div>
            <div className={styles.statLabel}>Creadores Activos</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{platformStats.brands}</div>
            <div className={styles.statLabel}>Marcas Conectadas</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{platformStats.satisfaction}</div>
            <div className={styles.statLabel}>Satisfacción</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{platformStats.campaigns}</div>
            <div className={styles.statLabel}>Campañas Exitosas</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className={styles.sectionHeader}>
          <h2>
            <span className="gradient-text">Cómo Funciona</span>
          </h2>
          <p>De la conexión al contenido viral en 4 simples pasos</p>
        </div>

        <div className={styles.workflowContainer}>
          {/* For Brands */}
          <div className={styles.workflowColumn}>
            <div className={styles.workflowHeader}>
              <span className={styles.workflowIcon}>🏢</span>
              <h3>Para Marcas</h3>
            </div>
            <div className={styles.steps}>
              {brandSteps.map((step, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={styles.workflowDivider}></div>

          {/* For Creators */}
          <div className={styles.workflowColumn}>
            <div className={styles.workflowHeader}>
              <span className={styles.workflowIcon}>👤</span>
              <h3>Para Creadores</h3>
            </div>
            <div className={styles.steps}>
              {creatorSteps.map((step, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <div className={styles.sectionHeader}>
          <h2>
            Potenciado por <span className="gradient-text">IA Real</span>
          </h2>
          <p>Tecnología de vanguardia para conexiones auténticas</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing} id="pricing">
        <div className={styles.sectionHeader}>
          <h2>
            Planes que <span className="gradient-text">Escalan Contigo</span>
          </h2>
          <p>Transparente, flexible y sin sorpresas. Cancela cuando quieras.</p>
        </div>
        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.featured && <div className={styles.badge}>Más Popular</div>}
              <div className={styles.pricingHeader}>
                <div className={styles.planIcon}>{plan.icon}</div>
                <h3>{plan.title}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>
              <div className={styles.pricingPrice}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && <span className={styles.period}>/{plan.period}</span>}
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/login">
                <Button
                  variant={plan.featured ? 'primary' : 'secondary'}
                  size="lg"
                  style={{ width: '100%' }}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2>Empieza a Colaborar Hoy</h2>
            <p>
              Únete a miles de creadores y marcas que ya están creando contenido
              viral
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/register">
                <Button variant="white" size="lg">
                  Registrarse Gratis
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" size="lg">
                  Ver Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img src="/brandfluence-logo-full.svg" alt="BrandFluenceAI" className={styles.footerLogo} />
            <p>
              La plataforma que conecta marcas y creadores con inteligencia
              artificial. Colaboraciones auténticas, eficientes y virales.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Producto</h4>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Precios</a>
              </li>
              <li>
                <a href="#">Casos de Éxito</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Recursos</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Guías</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 BrandFluenceAI. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

const brandSteps = [
  {
    icon: '📝',
    title: 'Crea tu Campaña',
    description: 'Define objetivos, presupuesto y tipo de contenido. Nuestra IA te guía en cada paso.'
  },
  {
    icon: '🎯',
    title: 'Matching Automático',
    description: 'La IA analiza +10K creadores y te muestra los matches perfectos para tu marca.'
  },
  {
    icon: '🤝',
    title: 'Colabora y Gestiona',
    description: 'Revisa propuestas, aprueba contenido y gestiona todo desde un solo lugar.'
  },
  {
    icon: '📈',
    title: 'Mide Resultados',
    description: 'Analytics en tiempo real: alcance, engagement, conversiones y ROI detallado.'
  }
];

const creatorSteps = [
  {
    icon: '✨',
    title: 'Crea tu Perfil',
    description: 'Conecta tus redes sociales y muestra tu portfolio. La IA optimiza tu visibilidad.'
  },
  {
    icon: '💼',
    title: 'Recibe Propuestas',
    description: 'Las marcas te descubren automáticamente. Elige las colaboraciones que te apasionan.'
  },
  {
    icon: '🎨',
    title: 'Crea Contenido',
    description: 'Recibe briefs claros, sube drafts y obtén feedback. Sin emails interminables.'
  },
  {
    icon: '💰',
    title: 'Cobra Seguro',
    description: 'Pagos automáticos al completar. Sin retrasos, sin complicaciones, 100% seguro.'
  }
];

const features = [
  {
    icon: '🎯',
    title: 'Matching Inteligente',
    description:
      'Nuestro algoritmo de IA analiza nicho, estilo, audiencia y engagement para encontrar el match perfecto entre marcas y creadores.'
  },
  {
    icon: '💰',
    title: 'Pagos Seguros',
    description:
      'Gestión completa de contratos y pagos en la plataforma. Transparente, seguro y sin complicaciones.'
  },
  {
    icon: '📊',
    title: 'Analytics en Tiempo Real',
    description:
      'Dashboard completo con métricas de alcance, engagement y conversiones. Mide el éxito de cada campaña.'
  },
  {
    icon: '🤖',
    title: 'Brief con IA',
    description:
      'Genera briefs creativos automáticamente con GPT-4. Ideas frescas y personalizadas para cada campaña.'
  },
  {
    icon: '⭐',
    title: 'Sistema de Reputación',
    description:
      'Reseñas verificadas y calificaciones transparentes. Construye tu reputación con cada colaboración exitosa.'
  },
  {
    icon: '🛡️',
    title: 'Anti-Fraude',
    description:
      'Validación automática de perfiles con IA. Menos del 1% de fraude en nuestra plataforma.'
  }
];

const pricingPlans = [
  {
    icon: '👤',
    title: 'Creadores Free',
    description: 'Perfecto para empezar tu carrera como creador',
    price: 'Gratis',
    period: null,
    featured: false,
    cta: 'Empezar Gratis',
    features: [
      'Perfil profesional completo',
      'Hasta 3 campañas activas',
      'Matching IA básico',
      'Portfolio de trabajos',
      'Sistema de reviews',
      'Pagos seguros (10% fee)',
      'Analytics últimos 30 días',
      'Soporte por email'
    ]
  },
  {
    icon: '⭐',
    title: 'Creator Pro',
    description: 'Para creadores serios que quieren crecer',
    price: '$29',
    period: 'mes',
    featured: true,
    cta: 'Prueba 14 Días Gratis',
    features: [
      '✓ Todo de Free +',
      '10 campañas activas',
      'Badge verificado + prioridad',
      'Acceso 24h antes a campañas',
      'IA: Pitch Assistant automático',
      'Analytics avanzados + benchmarks',
      'Pagos en 24h (5% fee)',
      'Portfolio personalizado',
      'Media kit con IA',
      'Masterclasses mensuales'
    ]
  },
  {
    icon: '🏢',
    title: 'Marcas - Starter',
    description: 'Ideal para marcas que empiezan con UGC',
    price: '$99',
    period: 'mes',
    featured: false,
    cta: 'Probar 14 Días Gratis',
    features: [
      'Hasta 5 campañas activas',
      'Matching IA ilimitado',
      'Gestión de contratos',
      'Analytics avanzados',
      'Brief generado con IA',
      'Pagos automatizados',
      'Sistema de aprobaciones',
      'Soporte prioritario 24/7',
      'Sin comisión por colaboración'
    ]
  },
  {
    icon: '🚀',
    title: 'Marcas - Pro',
    description: 'Para marcas que escalan sus campañas UGC',
    price: '$299',
    period: 'mes',
    featured: false,
    cta: 'Contactar Ventas',
    features: [
      'Campañas ilimitadas',
      'Todo de Starter +',
      'Account Manager dedicado',
      'API personalizada',
      'Whitelabel disponible',
      'Reportes personalizados',
      'Integraciones avanzadas',
      'Onboarding personalizado',
      'SLA garantizado'
    ]
  }
];
