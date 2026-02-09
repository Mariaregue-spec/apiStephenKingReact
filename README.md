# 📚 Stephen King API - React App

Una aplicación web desarrollada con **React + Vite** que consume una API sobre el universo literario de **Stephen King**, mostrando información detallada sobre sus obras, autores y personajes en una interfaz dinámica, moderna y lista para producción.

---

## 🎯 Descripción del proyecto

Este proyecto demuestra habilidades de **desarrollo frontend moderno** incluyendo:

- ✅ Consumo de APIs con Axios
- ✅ Arquitectura completa (Frontend + Backend)
- ✅ Componentización escalable en React
- ✅ Separación de responsabilidades
- ✅ Enrutamiento con React Router
- ✅ Animaciones fluidas con Framer Motion
- ✅ Estilos modernos con Tailwind CSS
- ✅ Servidor de desarrollo con JSON Server

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **React** | 19.2.0 | Framework principal |
| **Vite** | 7.2.4 | Build tool y servidor de desarrollo |
| **React Router** | 7.12.0 | Enrutamiento de la aplicación |
| **Axios** | 1.13.2 | Cliente HTTP para consumir API |
| **Tailwind CSS** | 4.1.18 | Framework CSS utilitario |
| **Framer Motion** | 12.34.0 | Animaciones e interacciones |
| **JSON Server** | 1.0.0-beta.3 | API mock / backend local |
| **ESLint** | 9.39.1 | Linter de código |

---

## 📂 Estructura del proyecto

```
apiStephenKingReact/
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes del sitio
│       ├── author/
│       ├── background/
│       └── bookCoversCards/
├── server/                 # Backend (JSON Server)
│   ├── db.json            # Base de datos JSON
│   └── stephenKingApi.js
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── bookCard/
│   │   ├── footer/
│   │   └── navbar/
│   ├── pages/            # Páginas de la aplicación
│   │   ├── home.jsx      # Página principal
│   │   ├── books.jsx     # Catálogo de libros
│   │   └── author.jsx    # Información del autor
│   ├── services/         # Llamadas a API
│   │   └── bookServices.jsx
│   ├── utils/            # Utilidades
│   │   └── bookImages.js
│   ├── assets/           # Recursos de la app
│   ├── app.jsx           # Componente principal
│   ├── main.jsx          # Punto de entrada
│   ├── app.css
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## ✨ Características principales

### 🏠 Página Principal
- Vista previa de obras destacadas
- Slider con películas/series adaptadas
- Información sobre Stephen King

### 📖 Catálogo de libros
- Listado completo de obras
- Tarjetas dinámicas con portadas
- Información detallada de cada libro

### 👤 Página del autor
- Biografía completa
- Galería de fotos
- Obras cronológicas

### 🎨 Interfaz moderna
- Diseño responsive
- Animaciones con Framer Motion
- Paleta de colores consistente con Tailwind

---

## 🚀 Instalación y uso

### Requisitos previos
- Node.js (v16 o superior)
- npm o yarn

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/Mariaregue-spec/apiStephenKingReact.git

# Entrar en el directorio
cd apiStephenKingReact

# Instalar dependencias
npm install
```

### Ejecutar en desarrollo

**Terminal 1 - Frontend (Vite)**
```bash
npm run dev
```
Se abrirá en `http://localhost:5173`

**Terminal 2 - Backend (JSON Server)**
```bash
npm run api
```
API disponible en `http://localhost:3000`

### Build para producción

```bash
npm run build
```

### Preview de producción

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🔌 API y integración

The application consumes data from a local JSON Server backend:

**Base URL**: `http://localhost:3000`

**Endpoints principales**:
- `GET /books` - Lista de libros
- `GET /books/:id` - Detalle de un libro
- `GET /author` - Información del autor

Ver [server/db.json](server/db.json) para esquema de datos.

---

## 📚 Componentes principales

### BookCard
Tarjeta reutilizable que muestra información de un libro con:
- Portada de imagen
- Título y autor
- Descripción resumida
- Enlaces de interacción

### Navbar
Barra de navegación con:
- Logo de la aplicación
- Enlaces al menú principal
- Responsive design

### Footer
Pie de página con:
- Enlaces útiles
- Información de copyright
- Redes sociales

---

## 🎯 Habilidades demostradas

✅ **React Avanzado**: Hooks (useState, useEffect, useContext), Componentes funcionales, Render condicional

✅ **Flujo de datos**: API → Services → Components → Render

✅ **Buenas prácticas**: Separación de responsabilidades, DRY, código limpio

✅ **Herramientas modernas**: Vite, ESLint, Tailwind CSS

✅ **Responsive Design**: Mobile-first approach con Tailwind

✅ **Animaciones**: Framer Motion para UX mejorada

---

## 🔮 Mejoras futuras

- [ ] Tests unitarios e integración (Jest, Vitest)
- [ ] Sistema de búsqueda y filtros avanzados
- [ ] Página de detalles de libros mejorada
- [ ] Carrito de compra / Wishlist
- [ ] Comentarios y ratings
- [ ] Autenticación de usuarios
- [ ] Dark mode
- [ ] Optimización de imágenes (Next Image)
- [ ] PWA (Progressive Web App)
- [ ] Análitica con Google Analytics

---

## 👩‍💻 Autora

**María Regueiro**  
Frontend Developer Junior

- 🔗 [GitHub](https://github.com/Mariaregue-spec)
- 💼 [LinkedIn]([www.linkedin.com/in/maríaregueiro](https://www.linkedin.com/in/mar%C3%ADaregueiro/))


---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver `LICENSE` para más detalles.

---

**Última actualización**: Febrero 2026

