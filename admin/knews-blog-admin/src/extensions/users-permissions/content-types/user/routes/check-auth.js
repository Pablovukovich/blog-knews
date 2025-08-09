'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/auth/check-auth',
    handler: async (ctx) => {
      const user = ctx.state.user;

      if (!user) {
        ctx.status = 401;
        ctx.body = { error: 'No autorizado' };
        return;
      }

      ctx.body = {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };
    },
    config: {
      auth: false, // el plugin 'strapi-v5-http-only-auth' ya valida el JWT desde la cookie
    },
  },
];