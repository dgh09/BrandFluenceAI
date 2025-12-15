# 📋 Historias de Usuario - BrandFluenceAI

## Product Requirements Document - User Stories
**Versión:** 1.0  
**Fecha:** Diciembre 2024  
**Proyecto:** BrandFluenceAI MVP  

---

## 📚 Índice de Épicas

1. [Autenticación y Onboarding](#1-autenticación-y-onboarding)
2. [Perfil de Usuario](#2-perfil-de-usuario)
3. [Matching Inteligente](#3-matching-inteligente)
4. [Gestión de Campañas](#4-gestión-de-campañas)
5. [Pagos y Contratos](#5-pagos-y-contratos)
6. [Analytics y Métricas](#6-analytics-y-métricas)
7. [Comunicación](#7-comunicación)
8. [Sistema de Reseñas](#8-sistema-de-reseñas)
9. [Soporte y Ayuda](#9-soporte-y-ayuda)
10. [Administración](#10-administración)

---

## 1. Autenticación y Onboarding

### US-001: Registro como Creador
**Como** visitante  
**Quiero** registrarme en la plataforma como creador de contenido  
**Para** acceder a oportunidades de colaboración con marcas

**Criterios de Aceptación:**
- [ ] El sistema muestra dos opciones claras: "Soy Creador" y "Soy Marca"
- [ ] Al seleccionar "Soy Creador", se muestra formulario de registro con:
  - Email (validación de formato)
  - Password (mínimo 8 caracteres, 1 mayúscula, 1 número)
  - Confirmación de password
  - Checkbox de términos y condiciones
- [ ] El email no puede estar duplicado en el sistema
- [ ] Se envía email de verificación automáticamente
- [ ] El usuario recibe mensaje de confirmación con instrucciones
- [ ] El sistema muestra validaciones en tiempo real
- [ ] Tiempo de carga del formulario < 2 segundos

**Pantalla:** Landing Page (brandfluence-landing.html)  
**Prioridad:** MUST  
**Estimación:** 5 puntos  
**Dependencias:** Ninguna

---

### US-002: Registro como Marca
**Como** representante de una marca  
**Quiero** registrarme en la plataforma como empresa  
**Para** encontrar y contratar creadores de contenido

**Criterios de Aceptación:**
- [ ] Al seleccionar "Soy Marca", se muestra formulario de registro con:
  - Email corporativo
  - Password (mismas validaciones que creador)
  - Nombre de la empresa
  - Cargo del usuario
  - Checkbox de términos y condiciones
- [ ] El email no puede estar duplicado en el sistema
- [ ] Se envía email de verificación automáticamente
- [ ] El usuario recibe mensaje de confirmación
- [ ] El sistema valida que el email sea corporativo (opcional)
- [ ] Tiempo de respuesta < 2 segundos

**Pantalla:** Landing Page  
**Prioridad:** MUST  
**Estimación:** 5 puntos  
**Dependencias:** Ninguna

---

### US-003: Verificación de Email
**Como** usuario registrado  
**Quiero** verificar mi dirección de email  
**Para** activar mi cuenta y acceder a la plataforma

**Criterios de Aceptación:**
- [ ] El usuario recibe email con link de verificación en < 1 minuto
- [ ] El link de verificación expira en 24 horas
- [ ] Al hacer click, el sistema valida el token
- [ ] Si es válido, la cuenta se activa automáticamente
- [ ] El usuario es redirigido al login con mensaje de éxito
- [ ] Si el link expiró, se ofrece opción de reenviar
- [ ] El email incluye diseño de marca de BrandFluenceAI

**Prioridad:** MUST  
**Estimación:** 3 puntos  
**Dependencias:** US-001, US-002

---

### US-004: Login
**Como** usuario registrado  
**Quiero** iniciar sesión en la plataforma  
**Para** acceder a mi cuenta y funcionalidades

**Criterios de Aceptación:**
- [ ] El sistema muestra formulario con email y password
- [ ] Validación de credenciales en < 1 segundo
- [ ] Si las credenciales son correctas, genera JWT token
- [ ] Redirección según tipo de usuario (Creador → Dashboard Creador, Marca → Dashboard Marca)
- [ ] Opción "Recordarme" guarda sesión por 7 días
- [ ] Opción "Olvidé mi contraseña" disponible
- [ ] Después de 3 intentos fallidos, bloqueo temporal de 15 minutos
- [ ] Mensaje de error claro si las credenciales son incorrectas

**Prioridad:** MUST  
**Estimación:** 3 puntos  
**Dependencias:** US-003

---

### US-005: Recuperación de Contraseña
**Como** usuario que olvidó su contraseña  
**Quiero** poder resetearla  
**Para** recuperar el acceso a mi cuenta

**Criterios de Aceptación:**
- [ ] El usuario ingresa su email
- [ ] El sistema envía link de recuperación en < 1 minuto
- [ ] El link expira en 1 hora
- [ ] Al hacer click, se muestra formulario de nueva contraseña
- [ ] Validación de password (mínimo 8 caracteres, etc.)
- [ ] Confirmación de password requerida
- [ ] Al guardar, la contraseña se actualiza y se invalida el token
- [ ] El usuario recibe confirmación por email
- [ ] Redirección automática al login

**Prioridad:** MUST  
**Estimación:** 3 puntos  
**Dependencias:** US-004

---

### US-006: Onboarding de Creador - Completar Perfil
**Como** creador recién registrado  
**Quiero** completar mi perfil profesional paso a paso  
**Para** que las marcas conozcan mi trabajo y me contacten

**Criterios de Aceptación:**
- [ ] Wizard de onboarding con 4 pasos visibles
- [ ] **Paso 1 - Información Básica:**
  - Subir foto de perfil (validación: mínimo 500x500px, máximo 5MB)
  - Nombre completo
  - Username/Handle (único en la plataforma)
  - Biografía (máximo 500 caracteres)
- [ ] **Paso 2 - Especialización:**
  - Selección de nichos (mínimo 1, máximo 5)
  - Tags personalizados (opcional)
- [ ] **Paso 3 - Redes Sociales:**
  - Links a TikTok, Instagram, YouTube
  - Validación de URLs
  - Al menos 1 red social requerida
  - Auto-fetch de seguidores (si API disponible)
- [ ] **Paso 4 - Portfolio y Tarifas:**
  - Mínimo 3 ejemplos de contenido (links o uploads)
  - Tarifa sugerida por deliverable
  - Disponibilidad (calendario opcional)
- [ ] Barra de progreso visible en todo momento
- [ ] Opción de "Guardar y continuar después"
- [ ] Al completar, el perfil se marca como "Completo"
- [ ] Tiempo total estimado: 5-7 minutos

**Pantalla:** Onboarding Wizard  
**Prioridad:** MUST  
**Estimación:** 13 puntos  
**Dependencias:** US-001, US-004

---

### US-007: Onboarding de Marca - Completar Perfil
**Como** marca recién registrada  
**Quiero** configurar mi perfil corporativo  
**Para** empezar a buscar creadores adecuados

**Criterios de Aceptación:**
- [ ] Wizard de onboarding con 3 pasos
- [ ] **Paso 1 - Información de la Empresa:**
  - Logo de la empresa (validación: mínimo 300x300px, máximo 5MB)
  - Nombre de la empresa
  - Industria/Sector (dropdown)
  - Descripción de la empresa (máximo 500 caracteres)
  - Website URL (opcional)
- [ ] **Paso 2 - Preferencias de Campaña:**
  - Presupuesto habitual (rango)
  - Nichos de interés (mínimo 1, máximo 5)
  - Tipo de contenido preferido (video, foto, etc.)
  - Frecuencia de campañas estimada
- [ ] **Paso 3 - Configuración de Cuenta:**
  - País/región de operación
  - Moneda preferida
  - Métodos de pago aceptados
- [ ] Barra de progreso visible
- [ ] Opción de "Guardar y continuar después"
- [ ] Al completar, acceso al dashboard de matching
- [ ] Tiempo total estimado: 3-5 minutos

**Pantalla:** Onboarding Wizard  
**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-002, US-004

---

## 2. Perfil de Usuario

### US-008: Ver Perfil Propio (Creador)
**Como** creador  
**Quiero** visualizar mi perfil completo  
**Para** verificar cómo me ven las marcas

**Criterios de Aceptación:**
- [ ] El perfil muestra toda la información ingresada en onboarding
- [ ] Indicador de completitud del perfil (porcentaje)
- [ ] Foto de perfil, nombre, handle y bio visible
- [ ] Tags de nichos con estilo visual de marca
- [ ] Links a redes sociales clickeables con iconos
- [ ] Métricas principales: seguidores, engagement rate
- [ ] Portfolio de contenido con thumbnails
- [ ] Tarifa por deliverable
- [ ] Badge de verificación (si aplica)
- [ ] Estadísticas de perfil: vistas, contactos recibidos
- [ ] Botón "Editar Perfil" siempre visible
- [ ] Carga de página < 2 segundos

**Pantalla:** Perfil de Creador  
**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-006

---

### US-009: Editar Perfil (Creador)
**Como** creador  
**Quiero** actualizar la información de mi perfil  
**Para** mantener mi perfil relevante y actualizado

**Criterios de Aceptación:**
- [ ] Todos los campos del onboarding son editables
- [ ] Cambios se guardan individualmente o por secciones
- [ ] Validaciones en tiempo real
- [ ] Opción de "Guardar cambios" o "Cancelar"
- [ ] Confirmación visual al guardar exitosamente
- [ ] Si hay errores, se muestran claramente junto al campo
- [ ] Cambios reflejados inmediatamente en la vista de perfil
- [ ] Histórico de cambios guardado (para auditoría)
- [ ] Opción de previsualizar cómo ven las marcas el perfil

**Pantalla:** Edición de Perfil  
**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-008

---

### US-010: Ver Perfil Propio (Marca)
**Como** marca  
**Quiero** ver mi perfil corporativo  
**Para** verificar mi información pública

**Criterios de Aceptación:**
- [ ] Logo, nombre y descripción de empresa visible
- [ ] Industria/sector
- [ ] Website clickeable
- [ ] Estadísticas: campañas activas, creadores contratados
- [ ] Historial de colaboraciones (resumen)
- [ ] Rating promedio de creadores
- [ ] Botón "Editar Perfil" accesible
- [ ] Información de facturación (solo visible para la marca)

**Pantalla:** Perfil de Marca  
**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-007

---

### US-011: Ver Perfil de Creador (Vista de Marca)
**Como** marca  
**Quiero** ver el perfil completo de un creador  
**Para** evaluar si es adecuado para mi campaña

**Criterios de Aceptación:**
- [ ] Acceso desde card de matching o búsqueda
- [ ] Información completa del creador visible
- [ ] Portfolio de contenido con visualización ampliada
- [ ] Métricas detalladas de redes sociales
- [ ] Historial de reseñas de otras marcas
- [ ] Rating promedio con estrellas
- [ ] Indicador de "responde en X horas"
- [ ] Botón "Contactar" prominente
- [ ] Botón "Guardar en favoritos"
- [ ] Links a redes sociales externos abren en nueva pestaña
- [ ] Vista responsive y optimizada
- [ ] Carga < 2 segundos

**Pantalla:** Vista detallada de perfil creador (desde matching)  
**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-008

---

## 3. Matching Inteligente

### US-012: Definir Preferencias de Campaña
**Como** marca  
**Quiero** especificar mis preferencias para una campaña  
**Para** recibir recomendaciones de creadores relevantes

**Criterios de Aceptación:**
- [ ] Formulario de preferencias con campos:
  - Nicho/categoría (dropdown multi-select)
  - Presupuesto (rango slider)
  - Número de seguidores mínimo (rango)
  - Engagement rate mínimo (%)
  - Tipo de contenido (checkbox: video, foto, story, etc.)
  - Audiencia objetivo (edad, género, ubicación)
  - Género del creador (opcional)
  - Ubicación del creador (país/ciudad)
- [ ] Todos los campos con valores por defecto razonables
- [ ] Opción de "Guardar preferencias" para usar después
- [ ] Validación de rango de presupuesto coherente
- [ ] Vista previa de "Creadores estimados" según filtros
- [ ] Botón "Buscar Matches con IA" prominente
- [ ] Tiempo de procesamiento < 3 segundos

**Pantalla:** Panel de filtros (brandfluence-matching.html)  
**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-007

---

### US-013: Ver Recomendaciones de Matching
**Como** marca  
**Quiero** ver una lista de creadores recomendados con score de match  
**Para** seleccionar los mejores candidatos para mi campaña

**Criterios de Aceptación:**
- [ ] Después de aplicar filtros, se muestran resultados en < 3 segundos
- [ ] Mínimo 3, máximo 15 creadores recomendados
- [ ] Cada card de creador muestra:
  - Match score (0-100) prominente con color según nivel
  - Avatar y badge de verificación
  - Nombre y handle
  - Tags de nicho
  - Seguidores, engagement rate, precio
  - 2-3 razones principales del match
- [ ] Cards ordenadas por match score (descendente)
- [ ] Opción de cambiar ordenamiento (seguidores, engagement, precio)
- [ ] Filtros aplicados visibles en la parte superior
- [ ] Opción de "Limpiar filtros"
- [ ] Vista de grid (por defecto) o lista
- [ ] Paginación si hay más de 15 resultados
- [ ] Botones en cada card: "Contactar" y "Ver Perfil"
- [ ] Match score con código de colores:
  - 90-100: Verde (Excelente)
  - 75-89: Azul (Muy Bueno)
  - 60-74: Naranja (Bueno)
  - <60: No se muestra

**Pantalla:** Grid de resultados (brandfluence-matching.html)  
**Prioridad:** MUST  
**Estimación:** 13 puntos  
**Dependencias:** US-012

---

### US-014: AI Insights Panel
**Como** marca  
**Quiero** recibir recomendaciones inteligentes de IA  
**Para** optimizar mi estrategia de campaña

**Criterios de Aceptación:**
- [ ] Panel visible arriba de los resultados de matching
- [ ] Icono de IA (🤖) claramente identificable
- [ ] Muestra 2-4 insights relevantes:
  - Mejor momento para lanzar (basado en tendencias)
  - Estilo de contenido trending en el nicho
  - Optimización de presupuesto
  - Recomendaciones de combinación de creadores
- [ ] Cada insight con icono representativo
- [ ] Texto claro y accionable (100-150 caracteres por insight)
- [ ] Se actualiza cuando cambian los filtros
- [ ] Opción de "Aplicar recomendación" si es accionable
- [ ] Puede colapsar/expandir el panel

**Pantalla:** AI Insights (brandfluence-matching.html)  
**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-013

---

### US-015: Guardar Creador en Favoritos
**Como** marca  
**Quiero** guardar creadores de mi interés  
**Para** contactarlos más adelante o compararlos

**Criterios de Aceptación:**
- [ ] Icono de "estrella" o "corazón" en cada card de creador
- [ ] Click en el icono guarda/quita de favoritos
- [ ] Feedback visual inmediato (animación + cambio de color)
- [ ] Contador de favoritos visible en algún lugar del dashboard
- [ ] Sección "Mis Favoritos" accesible desde navegación
- [ ] En "Mis Favoritos", todos los creadores guardados con opción de eliminar
- [ ] Se mantiene el match score original
- [ ] Posibilidad de agregar notas privadas a cada favorito
- [ ] Límite de 50 favoritos activos

**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-013

---

### US-016: Filtros Avanzados en Tiempo Real
**Como** marca  
**Quiero** refinar mis filtros de búsqueda en tiempo real  
**Para** encontrar exactamente el tipo de creador que necesito

**Criterios de Aceptación:**
- [ ] Al modificar cualquier filtro, los resultados se actualizan automáticamente
- [ ] Debounce de 500ms para evitar múltiples requests
- [ ] Indicador de "Actualizando..." mientras carga
- [ ] Número de resultados encontrados visible en todo momento
- [ ] Si no hay resultados, mensaje claro con sugerencias:
  - "Intenta ampliar el rango de presupuesto"
  - "Considera otros nichos relacionados"
  - "Elimina algunos filtros"
- [ ] Historial de búsquedas recientes (últimas 5)
- [ ] Opción de guardar combinación de filtros como "preset"
- [ ] Performance: respuesta < 1 segundo

**Pantalla:** Panel de filtros (brandfluence-matching.html)  
**Prioridad:** SHOULD  
**Estimación:** 8 pontos  
**Dependencias:** US-012, US-013

---

## 4. Gestión de Campañas

### US-017: Crear Propuesta de Campaña
**Como** marca  
**Quiero** crear una propuesta de campaña para un creador  
**Para** iniciar una colaboración formal

**Criterios de Aceptación:**
- [ ] Formulario accesible desde card de creador ("Contactar")
- [ ] Campos del formulario:
  - Nombre de la campaña
  - Descripción/brief (con ayuda de IA opcional)
  - Objetivos de la campaña
  - Deliverables esperados (cantidad y tipo)
  - Presupuesto ofrecido
  - Fecha de inicio
  - Deadline de entrega
  - Requisitos especiales (opcional)
  - Hashtags/menciones requeridas
- [ ] Opción "Generar Brief con IA" que sugiere contenido basado en:
  - Nicho del creador
  - Tipo de producto/servicio
  - Objetivos seleccionados
- [ ] Vista previa del brief antes de enviar
- [ ] Validaciones:
  - Presupuesto debe estar en rango razonable
  - Deadline debe ser al menos 3 días en el futuro
  - Todos los campos requeridos completos
- [ ] Al enviar, genera contrato automático
- [ ] Creador recibe notificación inmediata
- [ ] Estado inicial: "Propuesta Enviada"

**Pantalla:** Modal/Página de creación de campaña  
**Prioridad:** MUST  
**Estimación:** 13 puntos  
**Dependencias:** US-013, US-011

---

### US-018: Ver Mis Campañas (Marca)
**Como** marca  
**Quiero** ver todas mis campañas activas y pasadas  
**Para** hacer seguimiento de mis colaboraciones

**Criterios de Aceptación:**
- [ ] Dashboard con tabs:
  - Activas (en progreso)
  - Propuestas Enviadas (pendientes de respuesta)
  - Completadas
  - Canceladas
- [ ] Cada campaña muestra:
  - Nombre y descripción breve
  - Creador asignado (avatar + nombre)
  - Estado actual con badge de color
  - Fechas (inicio, deadline)
  - Presupuesto
  - Progreso (barra visual si aplica)
  - Botones de acción según estado
- [ ] Búsqueda por nombre de campaña o creador
- [ ] Filtro por fecha, presupuesto, estado
- [ ] Ordenamiento configurable
- [ ] Click en campaña abre vista detallada
- [ ] Indicador de campañas que requieren atención

**Pantalla:** Dashboard de Campañas (Marca)  
**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-017

---

### US-019: Ver Propuesta de Campaña (Creador)
**Como** creador  
**Quiero** ver los detalles de una propuesta recibida  
**Para** decidir si acepto o rechazo la colaboración

**Criterios de Aceptación:**
- [ ] Notificación en dashboard al recibir propuesta
- [ ] Badge de "nueva" en propuestas sin revisar
- [ ] Vista detallada muestra:
  - Información de la marca (logo, nombre, rating)
  - Nombre de la campaña
  - Brief completo
  - Deliverables esperados
  - Presupuesto ofrecido
  - Timeline (fecha inicio, deadline)
  - Términos adicionales
  - Contrato generado automáticamente (PDF descargable)
- [ ] Botones de acción visibles:
  - "Aceptar Propuesta"
  - "Rechazar"
  - "Negociar" (abrir chat)
- [ ] Campo de comentarios opcional antes de aceptar/rechazar
- [ ] Indicador de tiempo de respuesta esperado
- [ ] Links a perfil de la marca
- [ ] Si rechaza, debe dar razón (dropdown)

**Pantalla:** Vista de Propuesta  
**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-017

---

### US-020: Aceptar Propuesta (Creador)
**Como** creador  
**Quiero** aceptar una propuesta de campaña  
**Para** formalizar la colaboración con la marca

**Criterios de Aceptación:**
- [ ] Al hacer click en "Aceptar", modal de confirmación
- [ ] Resumen de términos principales visible
- [ ] Checkbox "He leído y acepto los términos del contrato"
- [ ] Al confirmar:
  - Estado de campaña cambia a "Aceptada"
  - Ambas partes reciben notificación
  - Contrato se firma digitalmente (timestamp + firma electrónica)
  - PDF del contrato se envía por email a ambos
  - Se activa timeline de la campaña
- [ ] Creador es redirigido a vista de campaña activa
- [ ] Marca recibe notificación push/email inmediata

**Prioridad:** MUST  
**Estimación:** 5 puntos  
**Dependencias:** US-019

---

### US-021: Rechazar Propuesta (Creador)
**Como** creador  
**Quiero** rechazar una propuesta que no me interesa  
**Para** mantener mi listado de campañas organizado

**Criterios de Aceptación:**
- [ ] Al hacer click en "Rechazar", modal de confirmación
- [ ] Dropdown con razones comunes:
  - Presupuesto no adecuado
  - No encaja con mi contenido
  - Timeline muy ajustado
  - Otros compromisos
  - Otro (especificar)
- [ ] Campo de texto opcional para detalles
- [ ] Al confirmar:
  - Estado cambia a "Rechazada"
  - Marca recibe notificación con razón (si se proporcionó)
  - Propuesta se archiva
- [ ] La marca puede ver la razón del rechazo
- [ ] El creador puede deshacer en los próximos 5 minutos

**Prioridad:** MUST  
**Estimación:** 5 puntos  
**Dependencias:** US-019

---

### US-022: Ver Campaña Activa (Creador)
**Como** creador  
**Quiero** ver el detalle de mi campaña en progreso  
**Para** hacer seguimiento de entregables y deadlines

**Criterios de Aceptación:**
- [ ] Vista de campaña muestra:
  - Información de la marca
  - Brief y objetivos
  - Timeline con hitos
  - Deliverables pendientes (checklist)
  - Deadline con contador regresivo
  - Chat con la marca integrado
  - Sección de uploads de contenido
  - Historial de actividad
- [ ] Indicador de progreso visual (0-100%)
- [ ] Notificaciones de deadlines próximos
- [ ] Botón "Subir Entregable" prominente
- [ ] Opción de marcar deliverables como completados
- [ ] Vista responsive

**Pantalla:** Vista detallada de campaña (Creador)  
**Prioridad:** MUST  
**Estimación:** 13 puntos  
**Dependencias:** US-020

---

### US-023: Subir Entregable
**Como** creador  
**Quiero** subir el contenido creado para la campaña  
**Para** cumplir con mi parte del acuerdo

**Criterios de Aceptación:**
- [ ] Sección de upload con drag & drop
- [ ] Tipos de archivo aceptados: video (mp4, mov), imagen (jpg, png), documento (pdf)
- [ ] Tamaño máximo: 500MB por archivo
- [ ] Barra de progreso durante upload
- [ ] Opción de agregar múltiples archivos
- [ ] Campo de descripción/notas para cada entregable
- [ ] Vista previa antes de enviar
- [ ] Opción de "Guardar borrador" o "Enviar para revisión"
- [ ] Al enviar:
  - Marca recibe notificación
  - Estado cambia a "En Revisión"
  - Archivo se guarda en S3
- [ ] Opción de descargar archivo subido
- [ ] Historial de versiones si se sube más de una vez

**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-022

---

### US-024: Revisar Entregable (Marca)
**Como** marca  
**Quiero** revisar el contenido que envió el creador  
**Para** aprobarlo o solicitar cambios

**Criterios de Aceptación:**
- [ ] Notificación cuando hay nuevo entregable
- [ ] Vista de revisión muestra:
  - Archivo con preview (video player, image viewer)
  - Descripción del creador
  - Fecha de upload
  - Requisitos originales del brief
- [ ] Botones de acción:
  - "Aprobar"
  - "Solicitar Cambios"
  - "Rechazar"
- [ ] Al aprobar:
  - Estado cambia a "Aprobado"
  - Creador recibe notificación
  - Se desbloquea el pago (si es escrow)
  - Deliverable se marca como completado
- [ ] Al solicitar cambios:
  - Modal para especificar qué cambiar
  - Estado cambia a "Revisión Solicitada"
  - Creador recibe feedback detallado
- [ ] Opción de dejar comentarios
- [ ] Historial de revisiones visible

**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-023

---

### US-025: Registrar Publicación
**Como** creador  
**Quiero** registrar el link y métricas de mi publicación  
**Para** que la marca vea los resultados

**Criterios de Aceptación:**
- [ ] Después de aprobación, opción de "Registrar Publicación"
- [ ] Formulario con campos:
  - URL de publicación (TikTok, Instagram, YouTube, etc.)
  - Fecha de publicación
  - Vistas/impresiones
  - Likes
  - Comentarios
  - Shares
  - Otros (guardados, etc.)
- [ ] Validación de URL (debe ser de red social real)
- [ ] Opción de auto-fetch de métricas (si API disponible)
- [ ] Screenshot opcional de analytics
- [ ] Se puede editar/actualizar métricas después
- [ ] Marca recibe notificación con el link
- [ ] Métricas se muestran en dashboard de analytics

**Prioridad:** COULD  
**Estimación:** 8 puntos  
**Dependencias:** US-024

---

### US-026: Completar Campaña
**Como** marca o creador  
**Quiero** marcar una campaña como completada  
**Para** cerrar formalmente la colaboración

**Criterios de Aceptación:**
- [ ] Botón "Completar Campaña" disponible cuando:
  - Todos los deliverables están aprobados
  - El pago está procesado
- [ ] Modal de confirmación con resumen
- [ ] Al completar:
  - Estado cambia a "Completada"
  - Ambas partes pueden dejar reseña
  - Métricas finales se congelan
  - La campaña se archiva
- [ ] Opción de descargar reporte final (PDF)
- [ ] Se desbloquean fondos finales si hay escrow
- [ ] Certificado de colaboración generado (opcional)

**Prioridad:** MUST  
**Estimación:** 5 puntos  
**Dependencias:** US-024

---

## 5. Pagos y Contratos

### US-027: Generar Contrato Automático
**Como** marca  
**Quiero** que se genere un contrato automáticamente al crear una propuesta  
**Para** tener un acuerdo legal claro desde el inicio

**Criterios de Aceptación:**
- [ ] Al crear propuesta, se genera contrato en background
- [ ] Plantilla de contrato incluye:
  - Datos de ambas partes
  - Descripción de la campaña
  - Deliverables específicos
  - Cronograma de entregas
  - Monto total y forma de pago
  - Derechos de uso del contenido
  - Términos de cancelación
  - Cláusulas legales estándar
- [ ] Se genera PDF descargable
- [ ] Ambas partes pueden ver el contrato antes de aceptar
- [ ] Versión firmada se genera al aceptar propuesta
- [ ] Timestamp de firma digital
- [ ] Se almacena en base de datos y S3
- [ ] Ambas partes reciben copia por email

**Prioridad:** MUST  
**Estimación:** 13 puntos  
**Dependencias:** US-017

---

### US-028: Ver Historial de Contratos
**Como** usuario (marca o creador)  
**Quiero** ver todos mis contratos firmados  
**Para** tener un registro de mis acuerdos

**Criterios de Aceptación:**
- [ ] Sección "Contratos" en navegación
- [ ] Lista de todos los contratos con:
  - Fecha de firma
  - Campaña asociada
  - Contraparte (marca o creador)
  - Monto
  - Estado (activo, completado, cancelado)
  - Link de descarga PDF
- [ ] Búsqueda por nombre de campaña o fecha
- [ ] Filtro por estado
- [ ] Ordenamiento por fecha (desc por defecto)
- [ ] Vista previa del contrato en modal
- [ ] Opción de descargar individual o múltiple (ZIP)

**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-027

---

### US-029: Configurar Método de Pago (Marca)
**Como** marca  
**Quiero** configurar mi método de pago  
**Para** poder pagar a los creadores

**Criterios de Aceptación:**
- [ ] Sección "Métodos de Pago" en configuración
- [ ] Opciones disponibles:
  - Tarjeta de crédito/débito (Stripe)
  - PayPal
  - Transferencia bancaria (info manual)
- [ ] Formulario seguro (PCI compliant)
- [ ] Opción de guardar múltiples métodos
- [ ] Uno marcado como "predeterminado"
- [ ] Posibilidad de editar o eliminar
- [ ] Validación de tarjeta en tiempo real
- [ ] Información encriptada
- [ ] No se almacenan números completos (solo últimos 4 dígitos)

**Prioridad:** MUST (MVP simulado)  
**Estimación:** 8 puntos  
**Dependencias:** US-007

---

### US-030: Configurar Información de Pago (Creador)
**Como** creador  
**Quiero** configurar cómo recibir mis pagos  
**Para** cobrar por mi trabajo

**Criterios de Aceptación:**
- [ ] Sección "Información de Pago" en configuración
- [ ] Opciones:
  - PayPal (email)
  - Transferencia bancaria (datos completos)
  - Stripe Connect
- [ ] Campos requeridos según método elegido
- [ ] Validación de información
- [ ] Información fiscal (para reportes):
  - RFC/Tax ID
  - Dirección fiscal
- [ ] Información encriptada y segura
- [ ] Opción de verificar cuenta (micro-depósitos)
- [ ] Status de verificación visible

**Prioridad:** MUST (MVP simulado)  
**Estimación:** 8 puntos  
**Dependencias:** US-006

---

### US-031: Procesar Pago (Simulado para MVP)
**Como** sistema  
**Quiero** simular el proceso de pago  
**Para** validar el flujo completo sin dinero real

**Criterios de Aceptación:**
- [ ] Al aprobar último entregable, se activa flujo de pago
- [ ] Marca recibe notificación de pago pendiente
- [ ] Vista de pago muestra:
  - Monto total
  - Desglose (servicios + comisión plataforma)
  - Método de pago seleccionado
  - Términos de pago
- [ ] Botón "Procesar Pago" (simulado)
- [ ] Al confirmar:
  - Se registra transacción (estado: simulado)
  - Ambas partes reciben confirmación
  - Estado de campaña actualizado
  - Recibo generado (PDF)
- [ ] Historial de transacciones accesible
- [ ] Para MVP: **no se procesa dinero real**, solo simulación

**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-024, US-029, US-030

---

### US-032: Ver Historial de Pagos
**Como** usuario  
**Quiero** ver mi historial de pagos y cobros  
**Para** llevar control de mis finanzas

**Criterios de Aceptación:**
- [ ] Sección "Pagos" en navegación
- [ ] Vista diferente para marca vs creador:
  - **Marca:** Pagos realizados
  - **Creador:** Cobros recibidos
- [ ] Cada transacción muestra:
  - Fecha
  - Campaña asociada
  - Contraparte
  - Monto
  - Estado (pendiente, procesado, completado, fallido)
  - Método de pago
  - Recibo (descargable)
- [ ] Filtros: fecha, campaña, estado
- [ ] Búsqueda por nombre de campaña
- [ ] Estadísticas: total pagado/cobrado, promedio, etc.
- [ ] Gráfico de pagos por mes
- [ ] Exportar a Excel/CSV

**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-031

---

## 6. Analytics y Métricas

### US-033: Dashboard de Analytics (Marca)
**Como** marca  
**Quiero** ver métricas consolidadas de mis campañas  
**Para** evaluar el ROI y rendimiento

**Criterios de Aceptación:**
- [ ] Vista de analytics accesible desde navegación principal
- [ ] Selector de rango de fechas (últimos 7, 30, 90 días, custom)
- [ ] **Overview cards (4 principales):**
  - Total de vistas
  - Engagement total
  - Comentarios totales
  - Engagement rate promedio
- [ ] Cada card muestra:
  - Valor principal (grande y prominente)
  - Comparación vs periodo anterior (% con flecha)
  - Código de color (verde = positivo, rojo = negativo)
- [ ] **Gráfico de vistas por día** (línea o barras)
  - Últimos 7 días visible por defecto
  - Tabs: Vistas, Likes, Comentarios, Shares
  - Interactivo (hover muestra valor exacto)
- [ ] **Top Content section:**
  - 3 publicaciones con mejor rendimiento
  - Thumbnail, título, métricas principales
  - Click abre detalle o link externo
- [ ] Todo estilo TikTok (como en mockup)
- [ ] Carga < 2 segundos
- [ ] Exportar reporte en PDF

**Pantalla:** brandfluence-analytics.html  
**Prioridad:** SHOULD  
**Estimación:** 13 puntos  
**Dependencias:** US-025

---

### US-034: Desglose de Engagement
**Como** marca  
**Quiero** ver la distribución de mi engagement  
**Para** entender qué tipo de interacción recibo más

**Criterios de Aceptación:**
- [ ] Donut chart con distribución:
  - Likes (%)
  - Comentarios (%)
  - Shares (%)
  - Guardados (%)
- [ ] Valores absolutos y porcentajes visibles
- [ ] Total en el centro del donut
- [ ] Colores diferenciados según marca
- [ ] Leyenda interactiva (click oculta/muestra segmento)
- [ ] Tooltip con detalles al hover

**Pantalla:** brandfluence-analytics.html  
**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-033

---

### US-035: Métricas de Audiencia
**Como** marca  
**Quiero** ver insights demográficos de la audiencia alcanzada  
**Para** validar que estoy llegando a mi target

**Criterios de Aceptación:**
- [ ] Tres secciones principales:
  - **Por Edad:** Barras horizontales con porcentajes (18-24, 25-34, 35-44, 45+)
  - **Por Género:** Barras horizontales (Femenino, Masculino, Otro)
  - **Por Ubicación:** Top 4 países/ciudades con banderas
- [ ] Cada barra con:
  - Label a la izquierda
  - Barra de progreso con gradiente
  - Porcentaje a la derecha
- [ ] Colores consistentes con marca
- [ ] Datos agregados de todas las campañas en el periodo
- [ ] Opción de filtrar por campaña específica

**Pantalla:** brandfluence-analytics.html  
**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-033

---

### US-036: Tasa de Conversión
**Como** marca  
**Quiero** ver el funnel de conversión de mis campañas  
**Para** optimizar mi estrategia

**Criterios de Aceptación:**
- [ ] Card con tasas de conversión en cada etapa:
  - Vistas → Engagement (%)
  - Engagement → Shares (%)
  - Shares → Conversiones (%) [si hay tracking]
  - CTR total (%)
- [ ] Cada tasa con:
  - Progress bar visual
  - Porcentaje exacto
  - Comparación vs promedio de la plataforma (opcional)
- [ ] Colores según rendimiento (verde = bueno, naranja = medio, rojo = bajo)
- [ ] Tooltip con sugerencias de mejora

**Pantalla:** brandfluence-analytics.html  
**Prioridad:** COULD  
**Estimación:** 5 puntos  
**Dependencias:** US-033

---

### US-037: Exportar Reporte de Campaña
**Como** marca  
**Quiero** exportar un reporte completo de una campaña  
**Para** compartirlo con mi equipo o stakeholders

**Criterios de Aceptación:**
- [ ] Botón "Exportar Reporte" en vista de analytics
- [ ] Opciones de formato:
  - PDF (con branding de BrandFluenceAI)
  - Excel/CSV (datos raw)
- [ ] El reporte PDF incluye:
  - Logo de la marca
  - Nombre y resumen de campaña
  - Overview de métricas principales
  - Gráficos principales (charts como imágenes)
  - Top content con thumbnails
  - Insights de audiencia
  - Conclusiones y recomendaciones (texto)
  - Footer con fecha de generación
- [ ] Generación del PDF < 5 segundos
- [ ] Descarga automática al completar
- [ ] Opción de enviar por email

**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-033

---

### US-038: Dashboard de Creador
**Como** creador  
**Quiero** ver mis estadísticas personales  
**Para** hacer seguimiento de mi rendimiento

**Criterios de Aceptación:**
- [ ] Dashboard con métricas personales:
  - Campañas completadas (total)
  - Ingresos totales (simulados en MVP)
  - Rating promedio
  - Tasa de aceptación de propuestas (%)
- [ ] Gráfico de ingresos por mes (últimos 6 meses)
- [ ] Lista de mejores campañas (por métricas)
- [ ] Promedio de engagement rate de mis publicaciones
- [ ] Tendencia de crecimiento de seguidores
- [ ] Comparación con otros creadores en mi nicho (percentil)

**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-022

---

## 7. Comunicación

### US-039: Chat Interno entre Marca y Creador
**Como** usuario  
**Quiero** chatear con mi contraparte dentro de la plataforma  
**Para** coordinar detalles de la campaña

**Criterios de Aceptación:**
- [ ] Chat accesible desde vista de campaña
- [ ] Interfaz de mensajería en tiempo real
- [ ] Mensajes con:
  - Timestamp
  - Avatar del remitente
  - Indicador de "leído"
  - Indicador de "escribiendo..."
- [ ] Opción de adjuntar archivos (imágenes, docs, max 10MB)
- [ ] Emojis disponibles
- [ ] Notificación push cuando llega nuevo mensaje
- [ ] Badge de mensajes no leídos
- [ ] Historial completo de conversación
- [ ] Búsqueda dentro del chat
- [ ] Se guarda automáticamente
- [ ] Responsive para móvil

**Prioridad:** MUST  
**Estimación:** 13 puntos  
**Dependencias:** US-022

---

### US-040: Notificaciones del Sistema
**Como** usuario  
**Quiero** recibir notificaciones de eventos importantes  
**Para** estar al tanto de mi actividad

**Criterios de Aceptación:**
- [ ] Centro de notificaciones accesible desde icono de campana
- [ ] Badge con número de notificaciones no leídas
- [ ] Tipos de notificaciones:
  - Nueva propuesta recibida
  - Propuesta aceptada/rechazada
  - Nuevo mensaje en chat
  - Entregable subido
  - Entregable aprobado/rechazado
  - Pago procesado
  - Nueva reseña recibida
  - Deadline próximo (48h antes)
- [ ] Cada notificación con:
  - Icono representativo
  - Título y descripción breve
  - Timestamp relativo (hace 2h, hace 1 día)
  - Link a la acción relacionada
- [ ] Click marca como leída
- [ ] Opción "Marcar todas como leídas"
- [ ] Configuración de preferencias de notificaciones
- [ ] Notificaciones push (si permisos otorgados)
- [ ] Email opcional para ciertos eventos

**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** US-017, US-039

---

### US-041: Configuración de Notificaciones
**Como** usuario  
**Quiero** personalizar qué notificaciones recibir  
**Para** evitar spam y mantener control

**Criterios de Aceptación:**
- [ ] Sección en configuración "Notificaciones"
- [ ] Toggle switches para cada tipo de notificación:
  - En plataforma (in-app)
  - Email
  - Push notifications
- [ ] Frecuencia de resumen por email:
  - Tiempo real
  - Diario
  - Semanal
  - Nunca
- [ ] Opción de "No molestar" con horarios
- [ ] Opción de silenciar notificaciones de campaña específica
- [ ] Cambios se guardan automáticamente
- [ ] Feedback visual al guardar

**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-040

---

## 8. Sistema de Reseñas

### US-042: Dejar Reseña (Marca califica Creador)
**Como** marca  
**Quiero** calificar al creador después de una campaña  
**Para** ayudar a otros a tomar decisiones

**Criterios de Aceptación:**
- [ ] Después de completar campaña, prompt para dejar reseña
- [ ] Formulario con:
  - Rating general (1-5 estrellas)
  - Criterios específicos (1-5 estrellas cada uno):
    - Calidad del contenido
    - Cumplimiento de tiempos
    - Comunicación
    - Profesionalismo
  - Comentario escrito (opcional, máximo 500 caracteres)
  - Opción de "Recomendar este creador"
- [ ] Validación: rating general es requerido
- [ ] Vista previa antes de enviar
- [ ] Al enviar:
  - Reseña se publica en perfil del creador
  - Creador recibe notificación
  - No puede editarse después (solo eliminarse en casos especiales)
- [ ] Opción de "Dejar reseña después" (recordatorio en 7 días)

**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-026

---

### US-043: Dejar Reseña (Creador califica Marca)
**Como** creador  
**Quiero** calificar a la marca después de una campaña  
**Para** ayudar a otros creadores

**Criterios de Aceptación:**
- [ ] Similar a US-042 pero adaptado para creadores
- [ ] Criterios específicos:
  - Claridad del brief
  - Comunicación
  - Puntualidad del pago
  - Profesionalismo
  - Expectativas vs realidad
- [ ] Comentario opcional
- [ ] Opción de "Trabajaría de nuevo con esta marca"
- [ ] Reseña se publica en perfil de la marca
- [ ] Marca recibe notificación

**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-026

---

### US-044: Ver Reseñas en Perfil (Creador)
**Como** marca  
**Quiero** ver las reseñas de un creador  
**Para** evaluar su reputación

**Criterios de Aceptación:**
- [ ] Sección de reseñas en perfil del creador
- [ ] Rating promedio visible prominentemente (estrellas grandes + número)
- [ ] Desglose de rating por criterio (barras)
- [ ] Número total de reseñas
- [ ] Distribución de estrellas (gráfico de barras: cuántas de 5, 4, 3, 2, 1)
- [ ] Lista de reseñas más recientes (3-5 visibles)
- [ ] Cada reseña muestra:
  - Avatar y nombre de la marca
  - Rating con estrellas
  - Comentario
  - Fecha
  - Campaña relacionada (opcional)
- [ ] Opción de "Ver todas las reseñas"
- [ ] Filtro por rating (solo 5 estrellas, etc.)
- [ ] Ordenamiento (más recientes, mejor calificadas)

**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-042, US-011

---

### US-045: Responder a Reseña
**Como** creador  
**Quiero** responder a una reseña que me dejaron  
**Para** dar contexto o agradecer

**Criterios de Aceptación:**
- [ ] Opción de "Responder" en cada reseña recibida
- [ ] Solo el creador puede responder a sus propias reseñas
- [ ] Máximo 300 caracteres
- [ ] Solo una respuesta permitida
- [ ] La respuesta se muestra indentada debajo de la reseña
- [ ] La marca recibe notificación de la respuesta
- [ ] Opción de editar respuesta dentro de 24 horas
- [ ] Timestamp de la respuesta visible

**Prioridad:** COULD  
**Estimación:** 5 puntos  
**Dependencias:** US-044

---

### US-046: Reportar Reseña Inapropiada
**Como** usuario  
**Quiero** reportar una reseña que considero inapropiada  
**Para** mantener la calidad de la plataforma

**Criterios de Aceptación:**
- [ ] Opción de "Reportar" en cada reseña
- [ ] Modal con razones:
  - Lenguaje ofensivo
  - Información falsa
  - Spam
  - Acoso
  - Otro (especificar)
- [ ] Campo de descripción opcional
- [ ] Al enviar:
  - Reporte se envía a administradores
  - Usuario recibe confirmación
  - Reseña se marca como "en revisión" (no se oculta automáticamente)
- [ ] Admin puede aprobar o eliminar la reseña
- [ ] Si se elimina, ambas partes son notificadas

**Prioridad:** COULD  
**Estimación:** 5 puntos  
**Dependencias:** US-044

---

## 9. Soporte y Ayuda

### US-047: Centro de Ayuda / FAQ
**Como** usuario  
**Quiero** acceder a preguntas frecuentes  
**Para** resolver mis dudas sin contactar soporte

**Criterios de Aceptación:**
- [ ] Sección "Ayuda" o "FAQ" accesible desde footer/menú
- [ ] Categorías organizadas:
  - Primeros pasos
  - Creadores
  - Marcas
  - Pagos y facturación
  - Campañas
  - Cuenta y configuración
- [ ] Mínimo 20 preguntas frecuentes
- [ ] Cada pregunta con:
  - Título claro
  - Respuesta detallada
  - Capturas de pantalla (si aplica)
  - Links a artículos relacionados
- [ ] Búsqueda de artículos
- [ ] Votación de utilidad (¿Te fue útil este artículo? Sí/No)
- [ ] Opción de "¿No encontraste lo que buscabas? Contacta soporte"
- [ ] Responsive

**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** Ninguna

---

### US-048: Chat de Soporte (WhatsApp/Bot)
**Como** usuario  
**Quiero** contactar al equipo de soporte vía chat  
**Para** resolver problemas o dudas específicas

**Criterios de Aceptación:**
- [ ] Widget de chat visible en esquina inferior derecha
- [ ] Click abre chat (puede ser WhatsApp Business o chat interno)
- [ ] Para MVP: WhatsApp Business
- [ ] Mensaje de bienvenida automático con horarios de atención
- [ ] FAQs rápidas con botones (respuestas automáticas)
- [ ] Si es fuera de horario, formulario de contacto
- [ ] Tiempo de respuesta esperado: < 24 horas
- [ ] Historial de conversaciones guardado
- [ ] Opción de adjuntar screenshots
- [ ] Rating de satisfacción al finalizar conversación

**Prioridad:** MUST  
**Estimación:** 8 puntos  
**Dependencias:** Ninguna

---

### US-049: Reportar Problema Técnico
**Como** usuario  
**Quiero** reportar un bug o problema técnico  
**Para** que el equipo lo solucione

**Criterios de Aceptación:**
- [ ] Formulario de reporte accesible desde menú de ayuda
- [ ] Campos:
  - Tipo de problema (dropdown)
  - Título del problema
  - Descripción detallada
  - Pasos para reproducir
  - Screenshot (opcional, max 3)
  - URL donde ocurrió
  - Navegador y versión
  - Dispositivo (desktop/móvil)
- [ ] Información técnica auto-capturada (user agent, etc.)
- [ ] Al enviar:
  - Ticket generado con ID único
  - Usuario recibe confirmación por email
  - Equipo técnico recibe notificación
- [ ] Opción de hacer seguimiento del ticket
- [ ] Status del reporte (Abierto, En progreso, Resuelto)

**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** Ninguna

---

### US-050: Recursos y Plantillas Descargables
**Como** usuario  
**Quiero** acceder a recursos útiles para optimizar mis campañas  
**Para** mejorar mis resultados

**Criterios de Aceptación:**
- [ ] Sección "Recursos" en navegación
- [ ] Mínimo 5 recursos disponibles:
  - Template de brief creativo (PDF)
  - Guía de mejores prácticas UGC (PDF)
  - Checklist de entrega (PDF)
  - Ejemplos de campañas exitosas (galería)
  - Guía de métricas (PDF)
- [ ] Cada recurso con:
  - Thumbnail/preview
  - Título y descripción
  - Tipo y tamaño de archivo
  - Botón de descarga
  - Número de descargas (contador)
- [ ] Categorías: Para Creadores, Para Marcas, General
- [ ] Analytics de qué recursos se descargan más
- [ ] Se pueden agregar más recursos sin cambios de código

**Prioridad:** COULD  
**Estimación:** 5 puntos  
**Dependencias:** Ninguna

---

## 10. Administración

### US-051: Panel de Administración
**Como** administrador  
**Quiero** acceder a un panel de control  
**Para** gestionar la plataforma

**Criterios de Aceptación:**
- [ ] URL dedicada: /admin (protegida con autenticación especial)
- [ ] Dashboard con métricas generales:
  - Total de usuarios (creadores vs marcas)
  - Usuarios nuevos (última semana)
  - Campañas activas
  - Transacciones totales
  - Ingresos de la plataforma (comisiones)
- [ ] Gráficos de crecimiento (usuarios, campañas, ingresos)
- [ ] Alertas de actividad sospechosa
- [ ] Acceso rápido a secciones principales

**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-004

---

### US-052: Gestión de Usuarios (Admin)
**Como** administrador  
**Quiero** administrar cuentas de usuarios  
**Para** moderar la plataforma

**Criterios de Aceptación:**
- [ ] Lista de todos los usuarios con:
  - Nombre, email, tipo (creador/marca)
  - Fecha de registro
  - Status (activo, suspendido, bloqueado)
  - Nivel de completitud de perfil
  - Número de campañas
- [ ] Búsqueda por nombre, email
- [ ] Filtros: tipo, status, fecha de registro
- [ ] Acciones disponibles:
  - Ver perfil completo
  - Suspender cuenta (temporal)
  - Bloquear cuenta (permanente)
  - Enviar mensaje
  - Ver historial de actividad
- [ ] Log de todas las acciones administrativas
- [ ] Opción de exportar lista de usuarios

**Prioridad:** SHOULD  
**Estimación:** 8 puntos  
**Dependencias:** US-051

---

### US-053: Validación Anti-Fraude (Admin)
**Como** administrador  
**Quiero** revisar usuarios sospechosos de fraude  
**Para** mantener la calidad de la plataforma

**Criterios de Aceptación:**
- [ ] Dashboard de "Usuarios Sospechosos"
- [ ] Algoritmo básico detecta:
  - Perfiles con URLs de redes inválidas
  - Métricas inconsistentes (engagement muy alto con pocos seguidores)
  - Múltiples cuentas desde misma IP
  - Contenido reportado múltiples veces
- [ ] Cada caso sospechoso muestra:
  - Información del usuario
  - Razones de sospecha
  - Evidencia (screenshots, links)
- [ ] Acciones:
  - Marcar como "falso positivo"
  - Solicitar verificación adicional al usuario
  - Suspender cuenta
  - Bloquear definitivamente
- [ ] Historial de revisiones

**Prioridad:** MUST  
**Estimación:** 13 puntos  
**Dependencias:** US-052

---

### US-054: Moderación de Reseñas Reportadas
**Como** administrador  
**Quiero** revisar reseñas que fueron reportadas  
**Para** tomar acción cuando sea necesario

**Criterios de Aceptación:**
- [ ] Lista de reseñas reportadas
- [ ] Cada reporte muestra:
  - Reseña completa
  - Usuario que reportó
  - Razón del reporte
  - Fecha del reporte
- [ ] Acciones disponibles:
  - Aprobar (mantener la reseña)
  - Eliminar reseña
  - Contactar al usuario que dejó la reseña
  - Bloquear al usuario si es reincidente
- [ ] Al tomar acción, se notifica a ambas partes
- [ ] Historial de decisiones

**Prioridad:** SHOULD  
**Estimación:** 5 puntos  
**Dependencias:** US-046, US-051

---

### US-055: Monitoreo de Métricas de Plataforma
**Como** administrador  
**Quiero** ver métricas agregadas de la plataforma  
**Para** tomar decisiones estratégicas

**Criterios de Aceptación:**
- [ ] Dashboard con:
  - DAU/MAU (usuarios activos diarios/mensuales)
  - Tasa de conversión (registro → perfil completo)
  - Tasa de match (propuestas enviadas → aceptadas)
  - Tiempo promedio de cierre de campaña
  - Satisfaction score (NPS)
  - Churn rate
  - Ingresos por comisiones
  - GMV (Gross Merchandise Value)
- [ ] Gráficos de tendencia temporal
- [ ] Comparación mes a mes
- [ ] Exportar reportes ejecutivos
- [ ] Alertas si alguna métrica cae debajo del umbral

**Prioridad:** SHOULD  
**Estimación:** 13 puntos  
**Dependencias:** US-051

---

## 📊 Resumen de Estimaciones

### Por Épica

| Épica | # Historias | Puntos Totales | Prioridad |
|-------|-------------|----------------|-----------|
| 1. Autenticación y Onboarding | 7 | 45 | MUST |
| 2. Perfil de Usuario | 4 | 26 | SHOULD |
| 3. Matching Inteligente | 5 | 50 | MUST |
| 4. Gestión de Campañas | 10 | 93 | MUST |
| 5. Pagos y Contratos | 6 | 55 | MUST |
| 6. Analytics y Métricas | 6 | 55 | SHOULD |
| 7. Comunicación | 3 | 26 | MUST |
| 8. Sistema de Reseñas | 5 | 31 | SHOULD |
| 9. Soporte y Ayuda | 4 | 26 | MUST |
| 10. Administración | 5 | 47 | SHOULD |

**TOTAL: 55 Historias de Usuario | 454 Puntos**

### Por Prioridad

| Prioridad | # Historias | Puntos | % del Total |
|-----------|-------------|--------|-------------|
| MUST | 30 | 267 | 59% |
| SHOULD | 19 | 152 | 33% |
| COULD | 6 | 35 | 8% |

---

## 🎯 Roadmap Sugerido

### Sprint 1-2 (MVP Core) - 80 puntos
- US-001 a US-007 (Autenticación y Onboarding completo)
- US-012, US-013 (Matching básico)
- US-017, US-019, US-020, US-021 (Gestión básica de campañas)

### Sprint 3-4 (MVP Extended) - 100 puntos
- US-008, US-009, US-011 (Perfiles)
- US-014, US-015, US-016 (Matching avanzado)
- US-022, US-023, US-024 (Workflow de campaña completo)
- US-027, US-031 (Contratos y pagos simulados)
- US-039, US-040 (Comunicación básica)

### Sprint 5-6 (Features Clave) - 100 puntos
- US-018, US-025, US-026 (Completar gestión de campañas)
- US-033, US-034, US-035 (Analytics principal)
- US-042, US-043, US-044 (Sistema de reseñas)
- US-047, US-048 (Soporte)

### Sprint 7-8 (Pulido y Admin) - 80 puntos
- US-029, US-030, US-032 (Configuración de pagos completa)
- US-036, US-037, US-038 (Analytics avanzado)
- US-051, US-052, US-053 (Panel admin)
- Features COULD restantes

---

## 📝 Notas de Implementación

### Consideraciones Técnicas
- Todas las historias asumen GraphQL como API
- JWT para autenticación
- MongoDB para persistencia
- OpenAI para features de IA (US-014, US-017)
- AWS S3 para almacenamiento de archivos
- WebSockets para chat en tiempo real (US-039)

### Testing
Cada historia de usuario debe incluir:
- Unit tests (componentes React)
- Integration tests (GraphQL resolvers)
- E2E tests para flujos críticos (US-001, US-013, US-017, US-020, US-024)

### Documentación
- Cada feature debe documentarse en Storybook
- GraphQL schema actualizado por cada historia
- README actualizado con nuevas funcionalidades

---

**Versión:** 1.0  
**Última Actualización:** Diciembre 2024  
**Próxima Revisión:** Post Sprint 2  

**Preparado por:** Equipo de Producto BrandFluenceAI  
**Stakeholders:** CTO, Product Manager, Tech Leads
