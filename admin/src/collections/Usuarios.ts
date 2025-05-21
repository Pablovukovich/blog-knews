// admin/src/collections/Usuarios.ts
import type { CollectionConfig } from 'payload';

export const Usuarios: CollectionConfig = {
  slug: 'usuarios',
  auth: {
    tokenExpiration: 86400, // 1 día en segundos
    cookies: {
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    },
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<p>Por favor verifica tu email con este token: ${token}</p>`;
      },
    },
  },
  admin: {
    useAsTitle: 'email',
    group: 'Administración',
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Usuario', value: 'user' },
        { label: 'Administrador', value: 'admin' },
        { label: 'Super Admin', value: 'superAdmin' },
      ],
      defaultValue: 'user',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isVerified',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'lastLogin',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
    timestamps: true,

};