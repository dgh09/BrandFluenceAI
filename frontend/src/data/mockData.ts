// BrandFluenceAI - Mock Data
// Aligned with PRD specifications and MongoDB schemas

import type {
  CreatorCard,
  AIInsight,
  ContentItem,
  AnalyticsOverview,
  EngagementDistribution,
  AudienceInsights,
  PortfolioItem,
  Review,
  Campaign
} from '../types';

/**
 * Mock Creators for Matching Page
 */
export const mockCreators: CreatorCard[] = [
  {
    id: '1',
    nombre: 'María García',
    handle: '@mariafit',
    avatar: '',
    nichos: ['Fitness', 'Lifestyle'],
    seguidores: '125K',
    engagementRate: '8.5%',
    precioPorVideo: '$850',
    tarifa: '$800-$900',
    verificado: true,
    matchScore: 95,
    bio: 'Entrenadora personal certificada. Contenido motivacional y rutinas de ejercicio. Audiencia 80% femenina, 18-35 años.',
    matchReasons: [
      'Nicho perfecto para deportes',
      'Engagement rate superior al promedio',
      'Dentro de tu presupuesto'
    ],
    plataformas: ['instagram', 'tiktok']
  },
  {
    id: '2',
    nombre: 'Carlos Ruiz',
    handle: '@carlosrunning',
    avatar: '',
    nichos: ['Fitness'],
    seguidores: '98K',
    engagementRate: '7.2%',
    precioPorVideo: '$650',
    tarifa: '$600-$700',
    verificado: true,
    matchScore: 92,
    bio: 'Corredor profesional. Comparto tips de entrenamiento y nutrición. Audiencia mixta, apasionada por el running.',
    matchReasons: [
      'Especializado en deportes',
      'Audiencia altamente comprometida',
      'Experiencia con marcas deportivas'
    ],
    plataformas: ['instagram', 'youtube']
  },
  {
    id: '3',
    nombre: 'Ana Silva',
    handle: '@anaactiva',
    avatar: '',
    nichos: ['Lifestyle'],
    seguidores: '156K',
    engagementRate: '9.1%',
    precioPorVideo: '$950',
    tarifa: '$900-$1000',
    verificado: true,
    matchScore: 88,
    bio: 'Instructora de yoga certificada. Contenido sobre bienestar físico y mental. Comunidad fiel y comprometida.',
    matchReasons: [
      'Alto engagement con audiencia femenina',
      'Contenido premium y auténtico',
      'Match con valores de marca'
    ],
    plataformas: ['tiktok', 'instagram']
  },
  {
    id: '4',
    nombre: 'David Torres',
    handle: '@davidgym',
    avatar: '',
    nichos: ['Fitness'],
    seguidores: '87K',
    engagementRate: '6.8%',
    precioPorVideo: '$550',
    tarifa: '$500-$600',
    verificado: true,
    matchScore: 85,
    bio: 'Coach de fitness y nutrición. Rutinas de gym y planes alimenticios. Audiencia 70% masculina, 20-40 años.',
    matchReasons: [
      'Complementa tu campaña deportiva',
      'Precio competitivo',
      'Audiencia masculina balanceada'
    ],
    plataformas: ['youtube', 'instagram']
  },
  {
    id: '5',
    nombre: 'Laura Mendez',
    handle: '@laurasport',
    avatar: '',
    nichos: ['Fitness'],
    seguidores: '72K',
    engagementRate: '7.5%',
    precioPorVideo: '$480',
    tarifa: '$450-$550',
    verificado: true,
    matchScore: 82,
    bio: 'Atleta de crossfit. WODs, competencias y motivación diaria. Comunidad apasionada por el deporte intenso.',
    matchReasons: [
      'Nicho deportivo de alto rendimiento',
      'Mejor precio del match',
      'Alta autenticidad'
    ],
    plataformas: ['tiktok']
  },
  {
    id: '6',
    nombre: 'Miguel Rojas',
    handle: '@mikeoutdoor',
    avatar: '',
    nichos: ['Lifestyle'],
    seguidores: '105K',
    engagementRate: '5.9%',
    precioPorVideo: '$720',
    tarifa: '$650-$800',
    verificado: true,
    matchScore: 80,
    bio: 'Aventurero y deportista outdoor. Senderismo, ciclismo de montaña y camping. Audiencia amante de la naturaleza.',
    matchReasons: [
      'Deportes outdoor y lifestyle',
      'Contenido de alta calidad visual',
      'Audiencia exploradora'
    ],
    plataformas: ['youtube', 'instagram']
  },
  // Additional creators for better filtering
  {
    id: '7',
    nombre: 'Sofía Ramírez',
    handle: '@sofi_beauty',
    avatar: '',
    nichos: ['Belleza', 'Moda'],
    seguidores: '220K',
    engagementRate: '10.2%',
    precioPorVideo: '$1200',
    tarifa: '$1100-$1300',
    verificado: true,
    matchScore: 78,
    bio: 'Maquilladora profesional. Tutoriales de belleza y reseñas de productos. Audiencia femenina apasionada por el makeup.',
    matchReasons: [
      'Engagement excepcional',
      'Audiencia fiel y comprometida',
      'Experiencia con marcas de belleza'
    ],
    plataformas: ['tiktok', 'instagram', 'youtube']
  },
  {
    id: '8',
    nombre: 'Juan tech',
    handle: '@juantech',
    avatar: '',
    nichos: ['Tecnología'],
    seguidores: '145K',
    engagementRate: '6.5%',
    precioPorVideo: '$800',
    tarifa: '$750-$850',
    verificado: true,
    matchScore: 75,
    bio: 'Geek apasionado por la tecnología. Reviews de gadgets y noticias tech. Audiencia masculina 25-40 años.',
    matchReasons: [
      'Experto en tecnología',
      'Audiencia tech-savvy',
      'Alto alcance'
    ],
    plataformas: ['youtube', 'instagram']
  },
  {
    id: '9',
    nombre: 'Valentina Cocina',
    handle: '@vale_cocina',
    avatar: '',
    nichos: ['Comida'],
    seguidores: '180K',
    engagementRate: '11.5%',
    precioPorVideo: '$900',
    tarifa: '$850-$950',
    verificado: true,
    matchScore: 72,
    bio: 'Chef y creadora de recetas. Cocina fácil y deliciosa. Audiencia diversa amante de la gastronomía.',
    matchReasons: [
      'Engagement muy alto',
      'Nicho de comida en tendencia',
      'Contenido viral'
    ],
    plataformas: ['tiktok', 'instagram']
  },
  {
    id: '10',
    nombre: 'Roberto Viajes',
    handle: '@robe_travel',
    avatar: '',
    nichos: ['Viajes'],
    seguidores: '95K',
    engagementRate: '4.8%',
    precioPorVideo: '$600',
    tarifa: '$550-$650',
    verificado: false,
    matchScore: 70,
    bio: 'Viajero empedernido. Destinos increíbles y tips de viaje. Audiencia aventurera y curiosa.',
    matchReasons: [
      'Contenido aspiracional',
      'Precio accesible',
      'Audiencia exploradora'
    ],
    plataformas: ['youtube', 'instagram']
  },
  {
    id: '11',
    nombre: 'Carla Gaming',
    handle: '@carla_gamer',
    avatar: '',
    nichos: ['Gaming'],
    seguidores: '310K',
    engagementRate: '8.9%',
    precioPorVideo: '$1500',
    tarifa: '$1400-$1600',
    verificado: true,
    matchScore: 68,
    bio: 'Streamer y gamer profesional. Contenido de videojuegos y e-sports. Audiencia mayormente masculina 16-30 años.',
    matchReasons: [
      'Mayor alcance',
      'Nicho gaming en crecimiento',
      'Alta interacción'
    ],
    plataformas: ['youtube', 'tiktok']
  },
  {
    id: '12',
    nombre: 'Pablo Moda',
    handle: '@pablo_fashion',
    avatar: '',
    nichos: ['Moda'],
    seguidores: '130K',
    engagementRate: '7.8%',
    precioPorVideo: '$750',
    tarifa: '$700-$800',
    verificado: true,
    matchScore: 65,
    bio: 'Fashionista y consultor de imagen. Tendencias y outfits del día. Audiencia mixta interesada en moda.',
    matchReasons: [
      'Experto en moda masculina',
      'Audiencia diversa',
      'Buen precio-calidad'
    ],
    plataformas: ['instagram', 'tiktok']
  }
];

/**
 * AI Insights for Matching Page
 */
export const mockAIInsights: AIInsight[] = [
  {
    icon: '💡',
    title: 'Mejor momento para lanzar',
    description: 'Basado en el análisis de tendencias, te recomendamos lanzar tu campaña de deportes entre el lunes y miércoles para máximo engagement.'
  },
  {
    icon: '🎨',
    title: 'Estilo de contenido trending',
    description: 'Los videos cortos (15-30s) con música energética y transiciones rápidas están generando +40% más engagement en tu nicho.'
  },
  {
    icon: '📊',
    title: 'Presupuesto optimizado',
    description: 'Para tu presupuesto de $2,000, encontramos 15 creadores de alta calidad con engagement rate superior al 5%.'
  }
];

/**
 * Analytics Overview Data
 */
export const mockAnalyticsOverview: AnalyticsOverview = {
  totalViews: 2400000,
  totalEngagement: 186000,
  totalComments: 12500,
  engagementRate: 7.8,
  previousPeriodChange: {
    views: 15.3,
    engagement: 23.1,
    comments: 8.7,
    engagementRate: 1.2
  }
};

/**
 * Top Content Items
 */
export const mockTopContent: ContentItem[] = [
  {
    id: '1',
    title: 'Rutina Matutina #1',
    thumbnail: '',
    views: 856000,
    likes: 45000,
    comments: 2100
  },
  {
    id: '2',
    title: 'Tips de Fitness',
    thumbnail: '',
    views: 642000,
    likes: 38000,
    comments: 1800
  },
  {
    id: '3',
    title: 'Unboxing Sneakers',
    thumbnail: '',
    views: 523000,
    likes: 32000,
    comments: 1500
  }
];

/**
 * Engagement Distribution
 */
export const mockEngagementDistribution: EngagementDistribution = {
  likes: 74400,  // 40%
  comments: 55800,  // 30%
  shares: 37200,  // 20%
  saves: 18600   // 10%
};

/**
 * Audience Insights
 */
export const mockAudienceInsights: AudienceInsights = {
  age: {
    '18-24': 45,
    '25-34': 35,
    '35-44': 15,
    '45+': 5
  },
  gender: {
    female: 62,
    male: 35,
    other: 3
  },
  locations: [
    { country: '🇨🇴 Colombia', percentage: 55 },
    { country: '🇲🇽 México', percentage: 20 },
    { country: '🇪🇸 España', percentage: 15 },
    { country: '🇦🇷 Argentina', percentage: 10 }
  ]
};

/**
 * Chart Data (7 days)
 */
export const mockChartData = [
  { day: 'Lun', value: 60 },
  { day: 'Mar', value: 75 },
  { day: 'Mié', value: 85 },
  { day: 'Jue', value: 70 },
  { day: 'Vie', value: 95 },
  { day: 'Sáb', value: 100 },
  { day: 'Dom', value: 80 }
];

/**
 * Platform Stats (for Landing Page)
 */
export const platformStats = {
  creators: '10K+',
  brands: '1K+',
  satisfaction: '95%',
  campaigns: '50K+'
};

/**
 * Portfolio Items (for Creator Profiles)
 */
export const mockPortfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Campaña Nike Running 2024',
    description: 'Video colaboración para el lanzamiento de nuevos tenis deportivos. Rutina de entrenamiento matutino.',
    thumbnailUrl: '',
    platform: 'instagram',
    metrics: {
      views: 1250000,
      likes: 98000,
      comments: 4200
    },
    date: new Date('2024-01-15'),
    url: '#'
  },
  {
    id: '2',
    title: 'Review Proteína Whey',
    description: 'Reseña honesta de suplemento deportivo. Resultados después de 30 días de uso.',
    thumbnailUrl: '',
    platform: 'youtube',
    metrics: {
      views: 856000,
      likes: 62000,
      comments: 3100
    },
    date: new Date('2024-02-20'),
    url: '#'
  },
  {
    id: '3',
    title: 'Reto 30 días Fitness',
    description: 'Serie de videos mostrando transformación física en 30 días con rutinas y dieta.',
    thumbnailUrl: '',
    platform: 'tiktok',
    metrics: {
      views: 3420000,
      likes: 280000,
      comments: 12500
    },
    date: new Date('2024-03-10'),
    url: '#'
  },
  {
    id: '4',
    title: 'Unboxing Gear Deportivo',
    description: 'Apertura y review de nuevo equipo deportivo. Primeras impresiones y prueba.',
    thumbnailUrl: '',
    platform: 'instagram',
    metrics: {
      views: 645000,
      likes: 42000,
      comments: 1800
    },
    date: new Date('2024-04-05'),
    url: '#'
  },
  {
    id: '5',
    title: 'Tips de Nutrición',
    description: 'Guía completa de nutrición para deportistas. Meal prep y recetas saludables.',
    thumbnailUrl: '',
    platform: 'youtube',
    metrics: {
      views: 920000,
      likes: 71000,
      comments: 5400
    },
    date: new Date('2024-05-12'),
    url: '#'
  },
  {
    id: '6',
    title: 'Day in My Life',
    description: 'Un día en mi vida como atleta. Rutina completa de entrenamiento y recuperación.',
    thumbnailUrl: '',
    platform: 'tiktok',
    metrics: {
      views: 2100000,
      likes: 185000,
      comments: 8900
    },
    date: new Date('2024-06-01'),
    url: '#'
  }
];

/**
 * Reviews (for Creator Profiles)
 */
export const mockReviews: Review[] = [
  {
    _id: '1',
    campaña: 'campaign-001',
    de: 'Nike Sports',
    para: 'creator-001',
    calificacion: 5,
    comentario: 'Excelente trabajo! María entregó contenido de altísima calidad y superó nuestras expectativas. Muy profesional en todo momento y gran engagement con su audiencia.',
    createdAt: new Date('2024-01-20')
  },
  {
    _id: '2',
    campaña: 'campaign-002',
    de: 'Adidas México',
    para: 'creator-001',
    calificacion: 5,
    comentario: 'Colaboración perfecta. Los videos generaron excelentes resultados y María fue muy receptiva a todos los ajustes. Definitivamente trabajaremos juntos de nuevo.',
    createdAt: new Date('2024-02-15')
  },
  {
    _id: '3',
    campaña: 'campaign-003',
    de: 'Proteina Max',
    para: 'creator-001',
    calificacion: 4,
    comentario: 'Muy buen contenido y profesionalismo. Único detalle fue un pequeño retraso en la entrega, pero la calidad final lo compensó completamente.',
    createdAt: new Date('2024-03-05')
  },
  {
    _id: '4',
    campaña: 'campaign-004',
    de: 'GymShark',
    para: 'creator-001',
    calificacion: 5,
    comentario: 'María es increíble! El contenido que creó fue viral y generó miles de visitas a nuestra tienda. Excelente ROI y comunicación impecable.',
    createdAt: new Date('2024-04-12')
  },
  {
    _id: '5',
    campaña: 'campaign-005',
    de: 'FitFood Co',
    para: 'creator-001',
    calificacion: 5,
    comentario: 'Una de las mejores colaboraciones que hemos tenido. Contenido auténtico, engagement real y resultados medibles. Altamente recomendada!',
    createdAt: new Date('2024-05-20')
  },
  {
    _id: '6',
    campaña: 'campaign-006',
    de: 'Under Armour',
    para: 'creator-002',
    calificacion: 5,
    comentario: 'Carlos hizo un trabajo excepcional. Su audiencia respondió muy bien a nuestra campaña y el contenido fue muy creativo.',
    createdAt: new Date('2024-03-18')
  },
  {
    _id: '7',
    campaña: 'campaign-007',
    de: 'Puma Running',
    para: 'creator-002',
    calificacion: 4,
    comentario: 'Gran profesional. Buen contenido aunque esperábamos un poco más de originalidad. En general muy satisfechos.',
    createdAt: new Date('2024-04-22')
  },
  {
    _id: '8',
    campaña: 'campaign-008',
    de: 'Lululemon',
    para: 'creator-003',
    calificacion: 5,
    comentario: 'Ana es fantástica! Su contenido de yoga fue perfecto para nuestra marca. Audiencia muy comprometida y resultados excelentes.',
    createdAt: new Date('2024-02-28')
  }
];

/**
 * Mock Campaigns for Campaigns Page
 */
export const mockCampaigns: Campaign[] = [
  {
    _id: '1',
    nombreCampaña: 'Lanzamiento Línea Deportiva 2025',
    marcaId: 'brand-001',
    creadorId: 'creator-001',
    descripcion: 'Campaña de lanzamiento de nuestra nueva línea de ropa deportiva enfocada en rendimiento y sostenibilidad.',
    presupuesto: 15000,
    deliverables: [
      {
        id: 'del-1',
        type: 'video',
        quantity: 3,
        dueDate: new Date('2025-02-15'),
        status: 'approved',
        submittedUrl: 'https://example.com/video1.mp4',
        submittedAt: new Date('2025-01-10'),
        approvedAt: new Date('2025-01-12')
      },
      {
        id: 'del-2',
        type: 'reel',
        quantity: 5,
        dueDate: new Date('2025-02-20'),
        status: 'submitted',
        submittedUrl: 'https://example.com/reels.zip',
        submittedAt: new Date('2025-01-15')
      },
      {
        id: 'del-3',
        type: 'historia',
        quantity: 10,
        dueDate: new Date('2025-02-25'),
        status: 'pending'
      }
    ],
    deadline: new Date('2025-02-28'),
    estado: 'en_progreso',
    participants: {
      brandId: 'brand-001',
      brandName: 'Nike Sports',
      creatorIds: ['creator-001', 'creator-002'],
      creatorNames: ['María García', 'Carlos Ruiz']
    },
    timeline: [
      {
        id: 'evt-1',
        type: 'created',
        date: new Date('2024-12-15'),
        description: 'Campaña creada',
        userId: 'brand-001',
        userName: 'Nike Sports'
      },
      {
        id: 'evt-2',
        type: 'accepted',
        date: new Date('2024-12-18'),
        description: 'Campaña aceptada por los creadores',
        userId: 'creator-001',
        userName: 'María García'
      },
      {
        id: 'evt-3',
        type: 'milestone',
        date: new Date('2025-01-12'),
        description: 'Primer entregable aprobado',
        userId: 'brand-001',
        userName: 'Nike Sports'
      },
      {
        id: 'evt-4',
        type: 'submitted',
        date: new Date('2025-01-15'),
        description: 'Reels enviados para revisión',
        userId: 'creator-001',
        userName: 'María García'
      }
    ],
    brief: {
      description: 'Buscamos crear contenido auténtico y motivacional que muestre nuestra nueva línea de ropa deportiva en acción. El enfoque debe ser en el rendimiento, la comodidad y el compromiso con la sostenibilidad.',
      requirements: [
        'Mostrar al menos 3 prendas diferentes de la colección',
        'Incluir tomas en exterior e interior',
        'Mencionar características de sostenibilidad (materiales reciclados)',
        'Hashtags: #NikePerformance #SustainableSports #TrainWithPurpose'
      ],
      references: [
        'https://example.com/ref1.jpg',
        'https://example.com/ref2.jpg'
      ],
      targetAudience: 'Deportistas y fitness enthusiasts de 18-35 años, conscientes del medio ambiente',
      keyMessages: [
        'Rendimiento sin comprometer el planeta',
        'Innovación en materiales sostenibles',
        'Diseño que acompaña tu movimiento'
      ]
    },
    paymentTerms: {
      upfront: 30,
      milestone: 40,
      completion: 30
    },
    contrato: {
      generadoEn: new Date('2024-12-16'),
      terminosAceptados: true,
      pdfUrl: 'https://example.com/contract-001.pdf'
    },
    progress: 55,
    createdAt: new Date('2024-12-15'),
    updatedAt: new Date('2025-01-15')
  },
  {
    _id: '2',
    nombreCampaña: 'Campaña Belleza Natural - Primavera',
    marcaId: 'brand-002',
    creadorId: 'creator-004',
    descripcion: 'Promoción de nuestra nueva línea de cosméticos veganos para la temporada de primavera.',
    presupuesto: 8500,
    deliverables: [
      {
        id: 'del-4',
        type: 'video',
        quantity: 2,
        dueDate: new Date('2025-03-10'),
        status: 'pending'
      },
      {
        id: 'del-5',
        type: 'imagen',
        quantity: 8,
        dueDate: new Date('2025-03-15'),
        status: 'pending'
      }
    ],
    deadline: new Date('2025-03-20'),
    estado: 'aceptada',
    participants: {
      brandId: 'brand-002',
      brandName: 'Sephora',
      creatorIds: ['creator-004'],
      creatorNames: ['Sofía Mendoza']
    },
    timeline: [
      {
        id: 'evt-5',
        type: 'created',
        date: new Date('2025-01-05'),
        description: 'Campaña creada',
        userId: 'brand-002',
        userName: 'Sephora'
      },
      {
        id: 'evt-6',
        type: 'accepted',
        date: new Date('2025-01-08'),
        description: 'Campaña aceptada',
        userId: 'creator-004',
        userName: 'Sofía Mendoza'
      }
    ],
    brief: {
      description: 'Crear contenido fresco y natural que resalte los beneficios de nuestra línea vegana de cosméticos para primavera.',
      requirements: [
        'Mostrar rutina de maquillaje completa',
        'Enfatizar ingredientes naturales y veganos',
        'Iluminación natural',
        'Before/after shots'
      ],
      targetAudience: 'Mujeres 20-40 años interesadas en belleza consciente',
      keyMessages: [
        'Belleza que respeta la naturaleza',
        '100% vegano y cruelty-free',
        'Resultados naturales y luminosos'
      ]
    },
    paymentTerms: {
      upfront: 40,
      milestone: 30,
      completion: 30
    },
    contrato: {
      generadoEn: new Date('2025-01-06'),
      terminosAceptados: true,
      pdfUrl: 'https://example.com/contract-002.pdf'
    },
    progress: 0,
    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-08')
  },
  {
    _id: '3',
    nombreCampaña: 'Tech Review - Nuevo Smartphone',
    marcaId: 'brand-003',
    creadorId: 'creator-005',
    descripcion: 'Review completo del nuevo flagship smartphone con enfoque en fotografía y gaming.',
    presupuesto: 12000,
    deliverables: [
      {
        id: 'del-6',
        type: 'video',
        quantity: 1,
        dueDate: new Date('2024-12-20'),
        status: 'approved',
        submittedUrl: 'https://example.com/review.mp4',
        submittedAt: new Date('2024-12-18'),
        approvedAt: new Date('2024-12-19')
      },
      {
        id: 'del-7',
        type: 'post',
        quantity: 3,
        dueDate: new Date('2024-12-25'),
        status: 'approved',
        submittedAt: new Date('2024-12-22'),
        approvedAt: new Date('2024-12-23')
      }
    ],
    deadline: new Date('2024-12-25'),
    estado: 'completada',
    participants: {
      brandId: 'brand-003',
      brandName: 'Samsung México',
      creatorIds: ['creator-005'],
      creatorNames: ['Luis Torres']
    },
    timeline: [
      {
        id: 'evt-7',
        type: 'created',
        date: new Date('2024-11-15'),
        description: 'Campaña creada',
        userId: 'brand-003',
        userName: 'Samsung México'
      },
      {
        id: 'evt-8',
        type: 'accepted',
        date: new Date('2024-11-17'),
        description: 'Campaña aceptada',
        userId: 'creator-005',
        userName: 'Luis Torres'
      },
      {
        id: 'evt-9',
        type: 'submitted',
        date: new Date('2024-12-18'),
        description: 'Video review enviado',
        userId: 'creator-005',
        userName: 'Luis Torres'
      },
      {
        id: 'evt-10',
        type: 'milestone',
        date: new Date('2024-12-19'),
        description: 'Video aprobado',
        userId: 'brand-003',
        userName: 'Samsung México'
      },
      {
        id: 'evt-11',
        type: 'completed',
        date: new Date('2024-12-24'),
        description: 'Campaña completada exitosamente',
        userId: 'brand-003',
        userName: 'Samsung México'
      }
    ],
    brief: {
      description: 'Review técnico y honesto del nuevo Galaxy S25, destacando capacidades fotográficas y rendimiento en gaming.',
      requirements: [
        'Unboxing y primeras impresiones',
        'Pruebas de cámara en diferentes escenarios',
        'Gaming performance con juegos populares',
        'Comparativa con competidores',
        'Conclusión honesta'
      ],
      targetAudience: 'Tech enthusiasts y gamers de 18-35 años',
      keyMessages: [
        'Innovación en fotografía móvil',
        'Rendimiento gaming de siguiente nivel',
        'Diseño premium y duradero'
      ]
    },
    paymentTerms: {
      upfront: 50,
      milestone: 0,
      completion: 50
    },
    contrato: {
      generadoEn: new Date('2024-11-16'),
      terminosAceptados: true,
      pdfUrl: 'https://example.com/contract-003.pdf'
    },
    metricas: {
      alcance: 450000,
      engagement: 38500,
      conversiones: 1250
    },
    progress: 100,
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-12-24')
  },
  {
    _id: '4',
    nombreCampaña: 'Colaboración Restaurante Gourmet',
    marcaId: 'brand-004',
    creadorId: 'creator-006',
    descripcion: 'Serie de contenido mostrando el menú de temporada y experiencia gastronómica.',
    presupuesto: 6000,
    deliverables: [
      {
        id: 'del-8',
        type: 'reel',
        quantity: 4,
        dueDate: new Date('2025-02-10'),
        status: 'pending'
      },
      {
        id: 'del-9',
        type: 'historia',
        quantity: 8,
        dueDate: new Date('2025-02-15'),
        status: 'pending'
      }
    ],
    deadline: new Date('2025-02-20'),
    estado: 'propuesta',
    participants: {
      brandId: 'brand-004',
      brandName: 'Quintonil',
      creatorIds: ['creator-006'],
      creatorNames: ['Carmen Delgado']
    },
    timeline: [
      {
        id: 'evt-12',
        type: 'created',
        date: new Date('2025-01-20'),
        description: 'Propuesta enviada al creador',
        userId: 'brand-004',
        userName: 'Quintonil'
      }
    ],
    brief: {
      description: 'Mostrar la experiencia completa del menú degustación de temporada en nuestro restaurante.',
      requirements: [
        'Presentación de al menos 5 platillos del menú',
        'Proceso de preparación en cocina',
        'Ambiente y decoración del restaurante',
        'Reacciones auténticas a los sabores'
      ],
      targetAudience: 'Foodies y amantes de la gastronomía de 25-50 años',
      keyMessages: [
        'Cocina mexicana contemporánea',
        'Ingredientes locales y de temporada',
        'Experiencia gastronómica única'
      ]
    },
    paymentTerms: {
      upfront: 40,
      milestone: 30,
      completion: 30
    },
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-01-20')
  },
  {
    _id: '5',
    nombreCampaña: 'Guía de Viaje - Riviera Maya',
    marcaId: 'brand-005',
    creadorId: 'creator-007',
    descripcion: 'Contenido inspiracional sobre destinos y experiencias en la Riviera Maya.',
    presupuesto: 18000,
    deliverables: [
      {
        id: 'del-10',
        type: 'video',
        quantity: 4,
        dueDate: new Date('2025-03-15'),
        status: 'pending'
      },
      {
        id: 'del-11',
        type: 'imagen',
        quantity: 20,
        dueDate: new Date('2025-03-20'),
        status: 'pending'
      },
      {
        id: 'del-12',
        type: 'reel',
        quantity: 6,
        dueDate: new Date('2025-03-25'),
        status: 'pending'
      }
    ],
    deadline: new Date('2025-03-30'),
    estado: 'aceptada',
    participants: {
      brandId: 'brand-005',
      brandName: 'Visit México',
      creatorIds: ['creator-007'],
      creatorNames: ['Pablo Fernández']
    },
    timeline: [
      {
        id: 'evt-13',
        type: 'created',
        date: new Date('2025-01-10'),
        description: 'Campaña creada',
        userId: 'brand-005',
        userName: 'Visit México'
      },
      {
        id: 'evt-14',
        type: 'accepted',
        date: new Date('2025-01-14'),
        description: 'Campaña aceptada',
        userId: 'creator-007',
        userName: 'Pablo Fernández'
      }
    ],
    brief: {
      description: 'Crear contenido aspiracional que inspire a viajar a la Riviera Maya, destacando playas, cenotes, cultura y gastronomía.',
      requirements: [
        'Cobertura de al menos 5 destinos diferentes',
        'Mezcla de aventura y relajación',
        'Incluir cultura maya y sitios arqueológicos',
        'Experiencias gastronómicas locales',
        'Tips prácticos para viajeros'
      ],
      targetAudience: 'Viajeros aventureros de 25-45 años',
      keyMessages: [
        'Paraíso caribeño mexicano',
        'Cultura y naturaleza en armonía',
        'Experiencias auténticas'
      ]
    },
    paymentTerms: {
      upfront: 35,
      milestone: 35,
      completion: 30
    },
    contrato: {
      generadoEn: new Date('2025-01-12'),
      terminosAceptados: true,
      pdfUrl: 'https://example.com/contract-005.pdf'
    },
    progress: 0,
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-14')
  },
  {
    _id: '6',
    nombreCampaña: 'Borrador - Lanzamiento Gaming Gear',
    marcaId: 'brand-006',
    creadorId: 'creator-008',
    descripcion: 'Campaña para el lanzamiento de nueva línea de periféricos gaming.',
    presupuesto: 10000,
    deliverables: [
      {
        id: 'del-13',
        type: 'video',
        quantity: 2,
        dueDate: new Date('2025-04-01'),
        status: 'pending'
      }
    ],
    deadline: new Date('2025-04-15'),
    estado: 'borrador',
    participants: {
      brandId: 'brand-006',
      brandName: 'Razer',
      creatorIds: ['creator-008'],
      creatorNames: ['Diego Martínez']
    },
    timeline: [
      {
        id: 'evt-15',
        type: 'created',
        date: new Date('2025-01-25'),
        description: 'Borrador creado',
        userId: 'brand-006',
        userName: 'Razer'
      }
    ],
    brief: {
      description: 'Mostrar la nueva línea de mouse, teclado y audífonos gaming en acción.',
      requirements: [
        'Demostración de características técnicas',
        'Gameplay con los periféricos',
        'Comparativa con versión anterior'
      ],
      targetAudience: 'Gamers competitivos y streamers',
      keyMessages: [
        'Rendimiento profesional',
        'Diseño ergonómico'
      ]
    },
    paymentTerms: {
      upfront: 40,
      milestone: 30,
      completion: 30
    },
    createdAt: new Date('2025-01-25'),
    updatedAt: new Date('2025-01-25')
  }
];
