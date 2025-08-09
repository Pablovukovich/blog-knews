const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export function getStrapiMediaUrl(relativeUrl) {
  if (!relativeUrl) {
    return ''; // O una URL de imagen de placeholder por defecto
  }
    // Asegúrate de que la URL relativa comience con '/'
    if (relativeUrl.startsWith('/')) {
        return `${STRAPI_BASE_URL}${relativeUrl}`;
        }
    // Si no comienza con '/', lo concatenamos directamente
    return `${STRAPI_BASE_URL}/${relativeUrl}`;     
}