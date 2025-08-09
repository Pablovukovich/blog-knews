import axios from 'axios';
// Configuración de Axios para la API de Strapi
// Asegúrate de tener la variable de entorno NEXT_PUBLIC_API_URL definida en tu .env.local


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api', // Ajusta esto a la URL de tu API de Strapi
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;