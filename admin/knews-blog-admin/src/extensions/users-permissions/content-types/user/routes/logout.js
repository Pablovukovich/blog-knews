'use strict';

module.exports = [
  {
    method: 'POST',
    path: '/auth/logout',
    handler: async (ctx) => {
      // Elimina la cookie del JWT
      ctx.cookies.set('jwt', null, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 0,
      });

      ctx.status = 200;
      ctx.body = { message: 'Sesión cerrada con éxito' };
    },
    config: {
      auth: false,
    },
  },
];
// Nota: Este endpoint no requiere autenticación ya que simplemente elimina la cookie del JWT
// y no realiza ninguna acción que dependa de un usuario autenticado.