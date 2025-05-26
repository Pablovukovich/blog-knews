import type { CollectionConfig } from 'payload';

export const Mensajes: CollectionConfig = {
  slug: 'mensajes',
  admin: {
    useAsTitle: 'nombre',
  },
  access: {
    read: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
    create: () => true,
    delete: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
    update: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'mensaje',
      type: 'textarea',
      required: true,
    },
    {
      name: 'leido',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'fecha',
      type: 'date',
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
      },
    },
  ],
};
