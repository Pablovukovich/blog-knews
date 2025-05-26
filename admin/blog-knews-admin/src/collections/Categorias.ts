import type { CollectionConfig } from 'payload';

export const Categorias: CollectionConfig = {
  slug: 'categorias',
  admin: {
    useAsTitle: 'nombre',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
    update: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
    delete: ({ req: { user } }) => ['superadmin'].includes(user?.role),
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'descripcion',
      type: 'textarea',
    },
    {
      name: 'color',
      type: 'text',
      admin: {
        description: 'Código HEX para personalizar el color (ej: #ff69b4)',
      },
    },
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
