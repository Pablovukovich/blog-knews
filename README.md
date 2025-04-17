# Knews

**Knews** es una plataforma de noticias centrada en Blackpink y temas relacionados. Ofrece una experiencia minimalista y elegante con navegación fluida y funcionalidades interactivas como comentarios y calificaciones.

## 📌 Características
- Noticias organizadas por categorías de integrantes.
- Carrusel con noticias destacadas.
- Comentarios y calificaciones.
- Dashboard de administración para gestionar contenido.

## 🛠 Tecnologías Utilizadas
- **Frontend:** Next.js, TailwindCSS
- **Backend:** Node.js, Express, MongoDB
- **Autenticación:** JSON Web Tokens (JWT)
- **Hosting:** (A definir: Vercel, Railway, Render)

## 📂 Estructura del Proyecto
```
knews/
│── client/        # Frontend con Next.js
│── server/        # Backend con Express.js
│   ├── models/    # Modelos de MongoDB
│   ├── controllers/  # Controladores de autenticación, noticias y comentarios
│   ├── routes/    # Rutas de la API
│   ├── middleware/  # Middleware de autenticación
│   ├── config/    # Configuraciones generales
│── admin/         # Dashboard de administración con panel para gestión de noticias y usuarios
```

## 🚀 Instalación y Configuración
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/knews.git
   cd knews
   ```
2. Instalar dependencias:
   ```sh
   cd server && npm install
   cd ../client && npm install
   cd ../admin && npm install
   ```
3. Configurar variables de entorno en `server/.env`:
   ```sh
   MONGO_URI=tu_conexion_mongo
   JWT_SECRET=clave_secreta
   ```
4. Ejecutar la aplicación:
   ```sh
   cd server && npm start
   cd ../client && npm run dev
   cd ../admin && npm run dev
   ```

## 📜 Licencia
Este proyecto se encuentra bajo la licencia MIT.

## 📩 Contacto
Si tienes preguntas o sugerencias, contáctame en [pablovukovich@gmail.com).

