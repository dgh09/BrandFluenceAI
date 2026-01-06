import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common';
import { platformStats } from '../data/mockData';
import styles from './LandingPage.module.css';

export const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.landing}>
      {/* Skip Navigation Link for Accessibility */}
      <a href="#main-content" className={styles.skipLink}>
        Saltar al contenido principal
      </a>

      {/* Navigation */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Navegación principal">
        <div className={styles.navContainer}>
          <Link to="/" aria-label="BrandFluenceAI - Ir a inicio" className={styles.logo}>
            BrandFluenceAI
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#how-it-works" className={styles.navLink}>Cómo funciona</a>
            <a href="#pricing" className={styles.navLink}>Precios</a>
            <Link to="/login">
              <Button variant="secondary" size="sm" aria-label="Iniciar sesión en tu cuenta">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm" aria-label="Registrarse gratis">
                Empezar Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}
          role="menu"
        >
          <a href="#features" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Cómo funciona</a>
          <a href="#pricing" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Precios</a>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="secondary" size="md" style={{ width: '100%' }}>
              Iniciar Sesión
            </Button>
          </Link>
          <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" size="md" style={{ width: '100%' }}>
              Empezar Gratis
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main-content" className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 id="hero-heading" className={styles.heroHeading}>
              Conecta <span className="gradient-text">Marcas</span> y{' '}
              <span className="gradient-text">Creadores</span> con IA
            </h1>
            <p className={styles.heroDescription}>
              La plataforma inteligente que revoluciona las colaboraciones UGC.
              Matching automático, gestión simplificada y resultados medibles.
            </p>
            <div className={styles.heroButtons} role="group" aria-label="Opciones de registro">
              <Link to="/register?type=creator">
                <Button variant="primary" size="lg" aria-label="Registrarse como creador de contenido">
                  <span className={styles.buttonText}>Soy Creador</span>
                  <span className={styles.buttonIcon} aria-hidden="true">🎨</span>
                </Button>
              </Link>
              <Link to="/register?type=brand">
                <Button variant="primary" size="lg" aria-label="Registrarse como marca">
                  <span className={styles.buttonText}>Soy Marca</span>
                  <span className={styles.buttonIcon} aria-hidden="true">🚀</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.floatingCards}>
              <div className={`${styles.card} ${styles.card1}`}>
                <div className={styles.creatorCard}>
                  <div className={styles.creatorAvatar}></div>
                  <div className={styles.creatorInfo}>
                    <h4>María García</h4>
                    <p>Fashion & Lifestyle</p>
                  </div>
                </div>
                <div className={styles.matchScore}>
                  <div className={styles.score}>95</div>
                  <p>Match Score</p>
                </div>
              </div>
              <div className={`${styles.card} ${styles.card2}`}>
                <div className={styles.creatorCard}>
                  <div className={styles.creatorAvatar} style={{ background: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)' }}></div>
                  <div className={styles.creatorInfo}>
                    <h4>Carlos Ruiz</h4>
                    <p>Tech & Gaming</p>
                  </div>
                </div>
                <div className={styles.matchScore}>
                  <div className={styles.score}>88</div>
                  <p>Match Score</p>
                </div>
              </div>
              <div className={`${styles.card} ${styles.card3}`}>
                <div className={styles.creatorCard}>
                  <div className={styles.creatorAvatar} style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%)' }}></div>
                  <div className={styles.creatorInfo}>
                    <h4>Ana Silva</h4>
                    <p>Food & Travel</p>
                  </div>
                </div>
                <div className={styles.matchScore}>
                  <div className={styles.score}>92</div>
                  <p>Match Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats} aria-label="Estadísticas de la plataforma">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber} aria-label={`${platformStats.creators} creadores activos`}>{platformStats.creators}</div>
            <div className={styles.statLabel}>Creadores Activos</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} aria-label={`${platformStats.brands} marcas conectadas`}>{platformStats.brands}</div>
            <div className={styles.statLabel}>Marcas Conectadas</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} aria-label={`${platformStats.satisfaction} de satisfacción`}>{platformStats.satisfaction}</div>
            <div className={styles.statLabel}>Satisfacción</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber} aria-label={`${platformStats.campaigns} campañas exitosas`}>{platformStats.campaigns}</div>
            <div className={styles.statLabel}>Campañas Exitosas</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="how-it-works" aria-labelledby="how-it-works-heading">
        <div className={styles.sectionHeader}>
          <h2 id="how-it-works-heading">
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
      <section className={styles.features} id="features" aria-labelledby="features-heading">
        <div className={styles.sectionHeader}>
          <h2 id="features-heading">
            Potenciado por <span className="gradient-text">IA Real</span>
          </h2>
          <p>Tecnología de vanguardia para conexiones auténticas</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <article key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon} aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing} id="pricing" aria-labelledby="pricing-heading">
        <div className={styles.sectionHeader}>
          <h2 id="pricing-heading">
            Planes que <span className="gradient-text">Escalan Contigo</span>
          </h2>
          <p>Transparente, flexible y sin sorpresas. Cancela cuando quieras.</p>
        </div>
        <div className={styles.pricingGrid} role="list">
          {pricingPlans.map((plan) => (
            <article
              key={plan.title}
              className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}
              role="listitem"
              aria-label={`Plan ${plan.title}${plan.featured ? ' - Más popular' : ''}`}
            >
              {plan.featured && <div className={styles.badge} aria-label="Plan más popular">Más Popular</div>}
              <div className={styles.pricingHeader}>
                <div className={styles.planIcon} aria-hidden="true">{plan.icon}</div>
                <h3>{plan.title}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>
              <div className={styles.pricingPrice}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && <span className={styles.period}>/{plan.period}</span>}
              </div>
              <ul className={styles.featuresList} aria-label={`Características del plan ${plan.title}`}>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/register">
                <Button
                  variant="primary"
                  size="lg"
                  style={{ width: '100%' }}
                  aria-label={`${plan.cta} - Plan ${plan.title}`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 id="cta-heading">Empieza a Colaborar Hoy</h2>
            <p>
              Únete a miles de creadores y marcas que ya están creando contenido
              viral
            </p>
            <div className={styles.ctaButtons} role="group" aria-label="Acciones principales">
              <Link to="/register">
                <Button variant="white" size="lg" aria-label="Registrarse gratis en BrandFluenceAI">
                  Registrarse Gratis
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" size="lg" aria-label="Ver demostración de la plataforma">
                  Ver Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} role="contentinfo" aria-label="Pie de página">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>BrandFluenceAI</h3>
            <p>
              La plataforma que conecta marcas y creadores con inteligencia
              artificial. Colaboraciones auténticas, eficientes y virales.
            </p>
          </div>
          <nav className={styles.footerLinks} aria-label="Enlaces de producto">
            <h4>Producto</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Precios</a>
              </li>
              <li>
                <a href="#casos-exito">Casos de Éxito</a>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
            </ul>
          </nav>
          <nav className={styles.footerLinks} aria-label="Enlaces de recursos">
            <h4>Recursos</h4>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#guias">Guías</a>
              </li>
              <li>
                <a href="#templates">Templates</a>
              </li>
              <li>
                <a href="#api-docs">API Docs</a>
              </li>
            </ul>
          </nav>
          <nav className={styles.footerLinks} aria-label="Enlaces de empresa">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#sobre-nosotros">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#carreras">Carreras</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
              <li>
                <a href="#legal">Legal</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} BrandFluenceAI. Todos los derechos reservados.</p>
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
