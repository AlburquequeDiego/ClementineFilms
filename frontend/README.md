# 🎬 ClementineFilms Frontend

Frontend de la plataforma de streaming nacional ClementineFilms, construido con Next.js, React y Tailwind CSS.

## 🚀 Características

- **Blog de Cine Nacional**: Página principal con artículos sobre cine independiente
- **Diseño Responsive**: Optimizado para móvil, tablet y desktop
- **Tema Oscuro**: Interfaz moderna con colores cinematográficos
- **Navegación Intuitiva**: Menú hamburguesa para móviles
- **SEO Optimizado**: Metadatos y estructura semántica
- **Performance**: Next.js con optimizaciones automáticas

## 🛠️ Tecnologías

- **Next.js 14**: Framework de React con App Router
- **React 18**: Biblioteca de UI
- **TypeScript**: Type safety
- **Tailwind CSS**: Framework de estilos
- **Lucide React**: Iconos modernos
- **Framer Motion**: Animaciones (opcional)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🎨 Estructura del Proyecto

```
frontend/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio (blog)
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Navegación principal
│   └── Footer.tsx         # Pie de página
├── lib/                   # Utilidades y helpers
├── types/                 # Definiciones de TypeScript
├── public/                # Archivos estáticos
└── tailwind.config.js     # Configuración de Tailwind
```

## 🎯 Páginas Principales

### **Página de Inicio (Blog)**
- Hero section con llamada a la acción
- Artículo destacado
- Grid de artículos recientes
- Sección CTA para streaming

### **Navegación**
- **Inicio**: Blog principal
- **Blog**: Lista de artículos
- **Películas**: Catálogo de películas
- **Cortos**: Catálogo de cortometrajes
- **Sobre Mí**: Información del creador
- **Streaming**: Plataforma de video

## 🎨 Paleta de Colores

### **Primarios**
- `primary-500`: #ed7519 (Naranja cinematográfico)
- `primary-600`: #de5a0f (Naranja oscuro)

### **Secundarios**
- `secondary-900`: #0f172a (Fondo principal)
- `secondary-800`: #1e293b (Cards y secciones)
- `secondary-700`: #334155 (Hover states)

### **Acentos**
- `accent-500`: #d946ef (Púrpura para highlights)

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navegación**: Menú hamburguesa en móviles
- **Grid**: Adaptativo según el tamaño de pantalla

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo local
npm run build        # Construir para producción
npm run start        # Ejecutar en producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos TypeScript
```

## 🌐 Despliegue

### **Vercel (Recomendado)**
```bash
# Conectar repositorio a Vercel
# Configurar variables de entorno
# Deploy automático en push
```

### **Netlify**
```bash
npm run build
# Subir carpeta .next a Netlify
```

## 📊 SEO y Performance

- **Meta Tags**: Optimizados para redes sociales
- **Open Graph**: Imágenes y descripciones para compartir
- **Twitter Cards**: Formato específico para Twitter
- **Lighthouse**: Score optimizado para Core Web Vitals

## 🔮 Próximas Características

- [ ] Página de blog individual
- [ ] Sistema de búsqueda
- [ ] Filtros por categoría
- [ ] Comentarios en artículos
- [ ] Newsletter signup
- [ ] Integración con CMS
- [ ] Analytics y tracking

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es propiedad del creador de contenido. Todos los derechos reservados.

---

**ClementineFilms** - Donde el cine independiente encuentra su audiencia. 