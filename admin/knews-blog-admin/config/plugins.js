module.exports = () => ({
  'strapi-v5-http-only-auth': {
    enabled: true,
    config: {
      cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'lax',
        domain: process.env.CLIENT_DOMAIN || 'localhost', // Asegúrate de que este dominio coincida con tu frontend
        path: '/',
      },
      deleteJwtFromResponse: true,
    },
  },   

});

// Nota: Asegúrate de que la variable de entorno CLIENT_DOMAIN esté definida en tu .env.local
// y que coincida con el dominio de tu frontend para que las cookies se envíen correctamente.