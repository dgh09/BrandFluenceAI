# PRD (Product Requirements Document)
## BrandFluenceAI

**Versión:** 1.0  
**Fecha:** Diciembre 2024  
**Estado:** Listo para prototipado  

---

## 1. VISIÓN GENERAL

### 1.1 Propósito del Producto

BrandFluenceAI es una plataforma web que conecta de manera inteligente a creadores de contenido UGC (User Generated Content) y marcas/empresas, facilitando colaboraciones auténticas, eficientes y virales. Mediante inteligencia artificial, automatización y documentación transparente, revolucionamos cómo marcas y creadores descubren, colaboran y miden el éxito de sus campañas.

### 1.2 Misión

Democratizar y profesionalizar la relación entre creadores de contenido y marcas, utilizando inteligencia artificial para crear conexiones estratégicas, auténticas y escalables que generen valor medible para ambas partes.

### 1.3 Visión

Ser la plataforma líder global donde marcas y creadores se conectan, colaboran e impulsan campañas virales, potenciadas por IA y documentadas para inspirar a una comunidad digital activa y creciente.

### 1.4 Elevator Pitch

*"Imagina una app donde cualquier creador de contenido puede conectar con marcas, campañas e ideas en minutos. BrandFluenceAI usa IA real para encontrar el mejor match, potenciar la creatividad y medir el éxito, mientras todo se documenta en TikTok e Instagram para inspirar y viralizar la comunidad."*

---

## 2. OBJETIVOS ESTRATÉGICOS

1. **Alcanzar 10,000 creadores y 1,000 marcas en los primeros 12 meses**
2. **Lograr >90% satisfacción en usuarios tras colaboraciones**
3. **Implementar 2 iteraciones de IA con +20% precisión en matching**
4. **Reducir fraude a <1% mediante validación automática**
5. **Documentar y viralizar 50+ casos de éxito en redes**
6. **Generar ingresos MRR sostenibles en 18 meses**
7. **Expandir a 2+ países en 24 meses**
8. **Ser citados en medios especializados 3+ veces en el año 1**

---

## 3. USUARIOS TARGET

### 3.1 Creadores de Contenido UGC
- **Segmento:** Desde microinfluencers hasta creadores con audiencia media.
- **Motivación:** Acceso a oportunidades, visibilidad, monetización y crecimiento profesional.
- **Pain points:** Dificultad para encontrar marcas, procesos manuales, falta de retroalimentación.

### 3.2 Marcas y Empresas
- **Segmento:** Empresas pequeñas, medianas y pymes que buscan contenido auténtico.
- **Motivación:** Encontrar talento UGC rápido, optimizar ROI, evitar fraude.
- **Pain points:** Búsqueda manual tediosa, imposibilidad de validar perfiles, gestión compleja.

---

## 4. CARACTERÍSTICAS Y FUNCIONALIDADES (MVP - PROTOTIPO)

### 4.1 FEATURES MUST (Esenciales para MVP)

#### 4.1.1 Matching Inteligente
- **Descripción:** Algoritmo que recomienda creadores a marcas según nicho, presupuesto, estilo y engagement.
- **Prototipo:** Versión simple con reglas básicas (sin IA completa aún). Sugiere 3-5 creadores por marca.
- **Entrada de datos:** Formulario para marcas con preferencias (nicho, presupuesto, tipo contenido).
- **Salida esperada:** Lista ranqueada de creadores afines.
- **Criterios de aceptación:**
  - Mostrar recomendaciones en <3 segundos.
  - Permitir filtro por nicho y presupuesto.
  - Mostrar score de afinidad (0-100).

#### 4.1.2 Pagos y Contratos en Plataforma
- **Descripción:** Flujo para crear acuerdos y gestionar pagos entre marcas y creadores.
- **Prototipo:** Flujo simulado (pantallas de ejemplo, pasarela de prueba sin dinero real).
- **Módulos:**
  - Generador de contrato automático (términos básicos).
  - Panel de estado del pago (pendiente, procesado, completado).
  - Historial de transacciones.
- **Criterios de aceptación:**
  - Crear un contrato en <2 minutos.
  - Mostrar claramente términos y montos.
  - Dar opción de descargar contrato en PDF.

#### 4.1.3 Soporte y Acompañamiento vía Chat
- **Descripción:** Canal de soporte cercano (WhatsApp, Telegram o chat interno) para resolver dudas del usuario inicial.
- **Prototipo:** Chat atendido por equipo.
- **Funciones:**
  - Onboarding guiado por chat.
  - FAQ automáticas.
  - Escalación a agente si es necesario.
- **Criterios de aceptación:**
  - Respuesta en <24 horas.
  - Documentar 5+ FAQs comunes.
  - Satisfacción de soporte >80%.

---

### 4.2 FEATURES SHOULD (Importantes para experiencia)

#### 4.2.1 Perfil Profesional del Creador
- **Descripción:** Perfil completo con foto, nicho, ejemplos de contenido, métricas básicas y tarifas.
- **Campos principales:**
  - Foto de perfil, biografía, nichos (multi-select).
  - Links a redes sociales (TikTok, Instagram, YouTube).
  - Métricas básicas (followers, engagement rate estimado).
  - Tarifa sugerida por deliverable.
  - Portfolio (ejemplos de contenido).
- **Criterios de aceptación:**
  - Llenar perfil en <5 minutos.
  - Mostrar validación de datos (foto de calidad, redes activas).
  - Poder editarlo en cualquier momento.

#### 4.2.2 Dashboard de Métricas de Campaña
- **Descripción:** Panel visual que muestra resultados de campañas (alcance, interacciones, conversiones).
- **Métricas a mostrar:**
  - Alcance total (views, impressions).
  - Engagement (likes, comments, shares).
  - Tasa de conversión (si aplica).
  - Comparativa vs. objetivo.
- **Criterios de aceptación:**
  - Cargar datos en <2 segundos.
  - Gráficos claros y legibles.
  - Exportar reportes en PDF/Excel.

#### 4.2.3 Reseñas y Calificaciones Mutuas
- **Descripción:** Sistema de estrellas y comentarios al cierre de una colaboración.
- **Escala:** 1-5 estrellas.
- **Campos:** Criterios (cumplimiento, calidad, comunicación).
- **Criterios de aceptación:**
  - Poder calificar en <1 minuto.
  - Ver historial de reseñas de otros usuarios.
  - Reseñas no pueden ser editadas tras envío.

---

### 4.3 FEATURES COULD (Nicers para MVP v2+)

#### 4.3.1 Centro de Recursos y Plantillas
- **Descripción:** Página con guías, briefs descargables, checklists para optimizar campañas.
- **Contenido:**
  - Template de brief creativo.
  - Guía de mejores prácticas UGC.
  - Checklist de entrega.
  - Ejemplos de campañas exitosas.
- **Criterios de aceptación:**
  - 5+ recursos disponibles.
  - Descargas fáciles en PDF.
  - Analytics de qué recursos se descargan.

#### 4.3.2 Registro de Links y Resultados de Publicaciones
- **Descripción:** Creadores pueden registrar links de sus publicaciones y métricas finales.
- **Campos:**
  - URL de publicación (TikTok, Instagram, YouTube).
  - Vistas, likes, comentarios, shares.
  - Fecha de publicación.
- **Criterios de aceptación:**
  - Agregar publicación en <2 minutos.
  - Validar URL automáticamente.
  - Mostrar histórico de publicaciones.

---

## 5. ARQUITECTURA TÉCNICA

### 5.1 Stack Tecnológico

| Componente         | Tecnología              | Razón                                    |
|-------------------|------------------------|------------------------------------------|
| Frontend Web      | React.js               | Modular, escalable, ideal para interacción |
| Backend API       | Node.js + NestJS       | TypeScript, modular, soporte GraphQL      |
| Base de datos     | MongoDB                | Flexible, escalable, NoSQL                |
| IA Externa        | OpenAI GPT-4           | Generación texto, matching                |
| Almacenamiento    | AWS S3                 | Multimedia: imágenes, videos              |
| Autenticación     | JWT / OAuth2           | Seguridad, acceso controlado              |
| Despliegue        | Docker + Kubernetes    | Escalabilidad, flexibilidad               |
| Monitoreo         | Datadog / CloudWatch   | Logs, performance, alertas                |

### 5.2 Flujo de Datos Prototipo

```
[Usuario Frontend React]
         ↓
   [GraphQL Query/Mutation]
         ↓
[NestJS Backend + Resolvers]
         ↓
    ┌────────────────────────────┐
    │  Procesar lógica           │
    │  + Validar datos           │
    │  + Llamar IA si necesario  │
    └────────────────────────────┘
         ↓
   [MongoDB - Guardar/Recuperar]
         ↓
   [Respuesta GraphQL al Frontend]
         ↓
   [UI actualizada en React]
```

### 5.3 Módulos Backend

```
src/
├── users/            # Gestión de creadores y marcas
├── campaigns/        # Campañas, briefs, entregas
├── matching/         # Algoritmo de matching + IA
├── payments/         # Contratos y pagos
├── analytics/        # Métricas y reportes
├── ai-integration/   # Consumo APIs OpenAI
├── support/          # Chat, FAQs
├── auth/             # JWT/OAuth
└── common/           # Utilidades, guards
```

---

## 6. ESPECIFICACIONES DETALLADAS DE FUNCIONALIDADES (MVP)

### 6.1 Matching Inteligente

**User Story:**  
Como marca, quiero recibir recomendaciones automáticas de creadores ideales, para ahorrar tiempo y encontrar talento afín rápidamente.

**Flujo:**
1. Marca completa formulario: nicho, presupuesto, tipo contenido, audiencia objetivo.
2. Sistema calcula score de afinidad para cada creador.
3. Muestra top 5 creadores con score visible.
4. Marca puede ver perfil detallado de cada recomendación.
5. Marca selecciona creador(es) para iniciar campaña.

**Datos requeridos:**
- De Marca: nicho, presupuesto, tipo_contenido, audiencia_target.
- De Creador: nicho, tarifa, ejemplos_contenido, engagement_rate.

**Cálculo score (MVP - reglas básicas):**
```
score = (nicho_match * 0.4) + (presupuesto_match * 0.3) + (engagement_bonus * 0.3)
- nicho_match: 1 si coincide, 0 si no.
- presupuesto_match: 1 - abs(tarifa_creador - presupuesto_marca) / presupuesto_marca
- engagement_bonus: engagement_rate_creador / 10 (capped en 1)
```

**Criterios de aceptación:**
- ✓ Score visible para cada recomendación.
- ✓ Filtro por nicho funcional.
- ✓ Filtro por presupuesto funcional.
- ✓ Ordenamiento por relevancia.
- ✓ Perfil detallado accesible en un clic.

---

### 6.2 Pagos y Contratos

**User Story:**  
Como marca, quiero crear un contrato y gestionar pagos desde la plataforma, para garantizar acuerdos claros y builds trust.

**Flujo:**
1. Marca selecciona creador.
2. Sistema sugiere términos por defecto (duración, deliverables, pago).
3. Marca/Creador pueden editar términos.
4. Generar contrato PDF con resumen.
5. Ambas partes aceptan digitalmente (simulado en MVP).
6. Pago se procesa (simulado con Stripe test o similar).
7. Historial disponible para ambas partes.

**Estructura Contrato:**
```
- Fecha inicio/fin
- Deliverables (descripción, cantidad, formato)
- Tarifa total
- Cronograma de pagos
- Términos especiales
- Firmas digitales (simuladas)
```

**Criterios de aceptación:**
- ✓ Generar contrato en <2 min.
- ✓ Descargar PDF del contrato.
- ✓ Ambas partes pueden agregar comentarios/ajustes.
- ✓ Mostrar estado: Pendiente, Aceptado, Cancelado.
- ✓ Historial de transacciones accesible.

---

### 6.3 Perfil Profesional del Creador

**User Story:**  
Como creador, quiero tener un perfil profesional completo, para que las marcas entiendan mi valor y decidan colaborar conmigo.

**Secciones del Perfil:**

| Sección            | Campos                                   | Obligatorio |
|-------------------|------------------------------------------|-------------|
| Básica             | Foto, nombre, biografía (500 chars)     | Sí          |
| Nicho/Especialización | Multi-select (máx 5 nichos)              | Sí          |
| Redes Sociales     | Links a TikTok, Instagram, YouTube      | Mínimo 1    |
| Métricas           | Followers (auto-verificado si posible)  | No          |
| Tarifas            | Precio por deliverable (rango)          | No          |
| Portfolio          | Links/descripciones de 3+ trabajos       | Sí          |
| Disponibilidad     | Calendario de disponibilidad             | No          |

**Criterios de aceptación:**
- ✓ Perfil editable en cualquier momento.
- ✓ Validación de foto (mínimo 500x500px).
- ✓ Validación de URLs de redes.
- ✓ Mostrar perfil como "Completo" si tiene 80%+ de campos.
- ✓ Perfil público visible para marcas tras aceptar.

---

### 6.4 Dashboard de Métricas

**User Story:**  
Como marca/creador, quiero ver un dashboard con resultados de mis campañas, para medir éxito y optimizar futuras colaboraciones.

**Vistas principales:**

1. **Overview**
   - Campañas activas / completadas
   - Ingresos totales (si aplica)
   - Engagement promedio

2. **Detalle de Campaña**
   - Nombre, estado, creador/marca
   - Alcance (views)
   - Engagement (likes, comments, shares)
   - Tasa conversión (si dato disponible)
   - Comparativa vs. objetivo

3. **Histórico**
   - Lista de últimas 10 campañas
   - Filtro por fecha, estado
   - Exportar reportes

**Criterios de aceptación:**
- ✓ Datos actualizados en <3 segundos.
- ✓ Gráficos legibles (líneas, barras, pie).
- ✓ Exportar reportes en PDF con logo.
- ✓ Comparativa con meta (verde si cumple, rojo si no).

---

### 6.5 Reseñas y Calificaciones

**User Story:**  
Como usuario, quiero calificar y reseñar mi colaboración, para ayudar a otros a tomar decisiones y mejorar la confianza en la plataforma.

**Flujo:**
1. Al cerrar campaña, ambas partes reciben notificación para calificar.
2. Abre modal con escala 1-5 estrellas.
3. Campo de comentario (max 500 chars).
4. Enviar reseña (no editable después).
5. Reseña visible en perfil del otro usuario.

**Criterios de aceptación:**
- ✓ Calificar en <1 minuto.
- ✓ Ver historial de reseñas en perfil de usuario.
- ✓ Promedio de estrellas visible.
- ✓ Reseñas ordenadas por más recientes primero.

---

### 6.6 Soporte vía Chat

**User Story:**  
Como usuario nuevo, quiero tener soporte cercano para resolver dudas, para usar la plataforma sin fricción.

**Canales (MVP):**
- WhatsApp Bot (básico)
- Chat interno en app (atendido por equipo)

**FAQs Básicas:**
1. ¿Cómo creo mi perfil?
2. ¿Cómo encuentro marcas/creadores?
3. ¿Cómo funciona el pago?
4. ¿Qué pasa si hay disputa?
5. ¿Cómo reporto a un usuario?

**Criterios de aceptación:**
- ✓ Respuesta automática en <5 segundos.
- ✓ FAQ búsquedas por palabra clave.
- ✓ Escalación a agente humano si necesario.
- ✓ Historial de conversaciones guardado.

---

## 7. EXPERIENCIA DE USUARIO (UX/UI) - FLUJOS PRINCIPALES

### 7.1 Flujo Onboarding - Creador

```
1. Landing → "Soy Creador" → Registro (email, password)
2. Verificar email
3. Completar perfil:
   - Foto
   - Bio
   - Nichos
   - Redes sociales
   - Tarifas
4. Revisar perfil
5. Dashboard de oportunidades
```

### 7.2 Flujo Onboarding - Marca

```
1. Landing → "Soy Marca" → Registro (email, password, empresa)
2. Verificar email
3. Completar perfil:
   - Logo empresa
   - Descripción
   - Presupuesto habitual
   - Nichos objetivo
4. Revisar perfil
5. Formulario de preferencias para matching
6. Dashboard con recomendaciones
```

### 7.3 Flujo Colaboración

```
1. Marca ve recomendaciones de creadores
2. Marca selecciona creador
3. Formulario de campaña (qué, presupuesto, deadline)
4. Enviar propuesta a creador
5. Creador recibe notificación
6. Creador acepta/rechaza
7. Si acepta: Generar contrato
8. Ambas partes aceptan términos
9. Creador comienza trabajo
10. Creador sube entrega
11. Marca revisa y aprueba
12. Pago se procesa
13. Ambas calificaciones
14. Campaña completada
```

---

## 8. REQUISITOS DE DATOS Y ALMACENAMIENTO

### 8.1 Esquemas MongoDB (Simplificado)

**Usuarios (Creadores + Marcas)**
```json
{
  "_id": ObjectId,
  "email": String (unique),
  "contraseña": String (hashed),
  "tipo": "creator" | "brand",
  "perfil": {
    "nombre": String,
    "foto": String (URL a S3),
    "bio": String,
    "nichos": [String],
    "redesSociales": {
      "tiktok": String (URL),
      "instagram": String (URL),
      "youtube": String (URL)
    },
    "metricas": {
      "followers": Number,
      "engagementRate": Number
    },
    "tarifa": Number,
    "createdAt": Date,
    "updatedAt": Date
  },
  "verificado": Boolean,
  "estado": "activo" | "inactivo" | "bloqueado"
}
```

**Campañas**
```json
{
  "_id": ObjectId,
  "nombreCampaña": String,
  "marcaId": ObjectId (ref Usuario),
  "creadorId": ObjectId (ref Usuario),
  "descripcion": String,
  "presupuesto": Number,
  "deliverables": [String],
  "deadline": Date,
  "estado": "propuesta" | "aceptada" | "en_progreso" | "completada" | "cancelada",
  "contrato": {
    "generadoEn": Date,
    "terminosAceptados": Boolean,
    "pdfUrl": String
  },
  "metricas": {
    "alcance": Number,
    "engagement": Number,
    "conversiones": Number
  },
  "createdAt": Date,
  "updatedAt": Date
}
```

**Reseñas**
```json
{
  "_id": ObjectId,
  "campaña": ObjectId (ref Campaña),
  "de": ObjectId (ref Usuario),
  "para": ObjectId (ref Usuario),
  "calificacion": 1-5,
  "comentario": String,
  "createdAt": Date
}
```

---

## 9. SEGURIDAD Y CUMPLIMIENTO

### 9.1 Autenticación y Autorización
- **JWT tokens** con expiración de 24h.
- **Refresh tokens** con expiración de 7 días.
- **OAuth2** para login social (futuro).
- **Roles:** Admin, Creador, Marca.

### 9.2 Protección de Datos
- Contraseñas hasheadas con bcrypt.
- HTTPS obligatorio en producción.
- Cumplimiento básico GDPR (derecho a olvidar, export datos).
- Términos de Servicio y Política de Privacidad claros.

### 9.3 Validación Anti-Fraude (MVP básico)
- Verificación de email obligatoria.
- Validación de redes sociales (verificar que URL es real).
- Reporte de usuarios (marca como sospechoso).
- Panel admin para revisar reportes.

---

## 10. MÉTRICAS Y KPIs DE ÉXITO (PROTOTIPO)

### 10.1 Métricas de Adquisición
- **Nuevos usuarios por semana** (creadores + marcas).
- **Tasa de completitud de perfil** (% usuarios con perfil >80% completo).
- **Origen de tráfico** (orgánico, redes, referral, etc.).

### 10.2 Métricas de Engagement
- **Campañas iniciadas por semana**.
- **Tasa de conversión recomendación → colaboración**.
- **Tiempo promedio para cerrar colaboración**.
- **Calificación promedio de usuario** (estrellas).

### 10.3 Métricas de Retención
- **DAU/MAU** (usuarios diarios/mensuales activos).
- **Churn rate** (% usuarios que se van).
- **NPS** (Net Promoter Score).

### 10.4 Métricas de Viralidad (BrandFluence)
- **Menciones en redes** (TikTok, Instagram, etc.).
- **Followers en redes propias** (@brandfluenceai).
- **Usuarios adquiridos vía redes** (% del total).

---

## 11. PLAN DE PROTOTIPADO Y VALIDACIÓN

### 11.1 Fase 1: MVP Prototipo (Weeks 1-4)

**Funcionalidades:**
- ✓ Registro + perfil básico (creador/marca).
- ✓ Matching simple con reglas estáticas.
- ✓ Flujo propuesta → aceptación → contrato simulado.
- ✓ Dashboard básico de métricas (mockup).
- ✓ Chat de soporte (WhatsApp Bot simple).

**Usuarios Beta:**
- 10-15 creadores.
- 5-10 marcas.

**Validación:**
- Encuesta post-uso (5-10 min).
- Entrevistas con 3-5 usuarios clave.
- Medir: usabilidad, claridad, intención de volver.

### 11.2 Fase 2: Refinamiento (Weeks 5-8)

**Inputs de Fase 1:**
- Ajustar flujo según feedback.
- Mejorar matching con más criterios.
- Integrar reseñas y calificaciones.
- Centro de recursos con 5 templates.

**Usuarios Beta:**
- 20-30 creadores.
- 10-15 marcas.

**Validación:**
- Test A/B de flujos.
- Medir satisfacción >80%.
- Verificar métricas de conversión.

### 11.3 Fase 3: Soft Launch (Weeks 9-12)

**Preparación:**
- Integración IA OpenAI para briefs (COULD).
- Polish UI/UX.
- Documentación técnica.
- Lanzamiento en redes (TikTok, Instagram).

**Usuarios:**
- 50-100 usuarios.
- Invited beta (referral + prensa).

**Validación:**
- Cobertura en medios especializados.
- Organically grown community.

---

## 12. ROADMAP POST-MVP (INDICATIVO)

### 12.1 V2 (Meses 3-6)
- IA avanzada para matching (embeddings, ML).
- Integración de pagos reales (Stripe, PayPal).
- Sistema de reputación mejorado (badges, niveles).
- Notificaciones push.
- Analytics avanzados (cohortes, funnel).

### 12.2 V3 (Meses 6-12)
- App móvil nativa (iOS/Android).
- Viralización automática (generación de content snippets).
- Marketplace de templates/servicios.
- Affiliate program.
- Expansión a otros países.

---

## 13. REQUISITOS TÉCNICOS MÍNIMOS PARA PROTOTIPO

### 13.1 Backend
- [ ] NestJS configurado con GraphQL (@nestjs/graphql).
- [ ] MongoDB Atlas conectado.
- [ ] Módulo de autenticación JWT básico.
- [ ] Resolvers para: usuarios, campañas, matching, reseñas.
- [ ] Validación de entrada con class-validator.

### 13.2 Frontend
- [ ] React app con Vite o Create React App.
- [ ] Apollo Client para consumo GraphQL.
- [ ] Componentes básicos: Forms, Cards, Buttons, Modal.
- [ ] Enrutamiento con React Router.
- [ ] Estilos con Tailwind CSS o Material UI.

### 13.3 Infraestructura
- [ ] GitHub repo configurado (main, develop, feature branches).
- [ ] Docker compose para dev local (NestJS + MongoDB).
- [ ] Variables de entorno (.env).
- [ ] Documentación README básica.

---

## 14. DEFINICIONES CLAVE

- **UGC:** User Generated Content - contenido creado por usuarios/creadores.
- **Matching:** Algoritmo que empareja creadores con marcas según afinidad.
- **Brief:** Documento que especifica requisitos y objetivos de una campaña.
- **Deliverable:** Entrega concreta del creador (video, foto, etc.).
- **MVP:** Minimum Viable Product - versión más simple con funcionalidades core.
- **KPI:** Key Performance Indicator - métrica clave de éxito.

---

## 15. CONTACTO Y VERSIONING

| Item              | Detalle                    |
|-------------------|--------------------------|
| Propietario PRD   | Product Team              |
| Versión Actual    | 1.0                       |
| Última Actualización | Diciembre 2024         |
| Próxima Revisión  | Enero 2025 (Post-MVP v1)  |
| Revisor Técnico   | CTO / Tech Lead           |

---

## 16. APÉNDICE: HISTORIAS DE USUARIO (USER STORIES)

### US-001: Registro Creador
**Como** creador  
**Quiero** registrarme en la plataforma  
**Para** acceder a oportunidades de colaboración  

**Criterios de aceptación:**
- ✓ Email y password requeridos.
- ✓ Verificación de email obligatoria.
- ✓ Validar password strength.

---

### US-002: Crear Perfil Creador
**Como** creador  
**Quiero** completar mi perfil profesional  
**Para** que las marcas vean mi experiencia y decidan colaborar  

**Criterios de aceptación:**
- ✓ Subir foto de perfil.
- ✓ Describir nicho (multi-select).
- ✓ Conectar redes sociales.
- ✓ Mostrar estado de completitud.

---

### US-003: Ver Recomendaciones
**Como** marca  
**Quiero** recibir recomendaciones de creadores afines  
**Para** encontrar talento rápidamente  

**Criterios de aceptación:**
- ✓ Completar formulario de preferencias.
- ✓ Ver top 5 recomendaciones con score.
- ✓ Ver perfil detallado de cada creador.

---

### US-004: Proponer Campaña
**Como** marca  
**Quiero** crear una propuesta de campaña  
**Para** iniciar una colaboración con un creador  

**Criterios de aceptación:**
- ✓ Seleccionar creador.
- ✓ Ingresar descripción, presupuesto, deadline.
- ✓ Generar contrato automático.
- ✓ Enviar propuesta al creador.

---

### US-005: Aceptar/Rechazar Propuesta
**Como** creador  
**Quiero** revisar y aceptar o rechazar propuestas  
**Para** controlar qué trabajos acepto  

**Criterios de aceptación:**
- ✓ Notificación de nueva propuesta.
- ✓ Ver detalles: descripción, presupuesto, deadline.
- ✓ Botones Aceptar/Rechazar.
- ✓ Agregar comentarios opcionales.

---

### US-006: Ver Métricas de Campaña
**Como** marca/creador  
**Quiero** ver resultados y métricas de mi campaña  
**Para** medir éxito y optimizar futuros trabajos  

**Criterios de aceptación:**
- ✓ Dashboard con alcance, engagement, conversiones.
- ✓ Gráficos visuales (líneas, barras).
- ✓ Comparativa vs. meta.
- ✓ Exportar reporte en PDF.

---

### US-007: Calificar y Reseñar
**Como** usuario  
**Quiero** calificar mi colaboración  
**Para** ayudar a otros usuarios y mejorar confianza  

**Criterios de aceptación:**
- ✓ Escala 1-5 estrellas.
- ✓ Campo de comentario (max 500 chars).
- ✓ Reseña no editable tras envío.
- ✓ Visible en perfil del otro usuario.

---

### US-008: Contactar Soporte
**Como** usuario  
**Quiero** resolver mis dudas vía chat de soporte  
**Para** usar la plataforma sin fricción  

**Criterios de aceptación:**
- ✓ Chat disponible 24/7 (bot o equipo).
- ✓ FAQs auto-servicio.
- ✓ Escalación a agente si necesario.
- ✓ Historial de conversación guardado.

---

**FIN DEL PRD**