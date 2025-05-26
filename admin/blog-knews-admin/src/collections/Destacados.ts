import type { CollectionConfig } from 'payload';

export const Destacados: CollectionConfig = {
  slug: 'destacados',
  admin: {
    useAsTitle: 'articulo',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
    update: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
    delete: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
  },
  fields: [
    {
      name: 'articulo',
      type: 'relationship',
      relationTo: 'articulos',
      required: true,
    },
    {
      name: 'desde',
      type: 'date',
      required: true,
    },
    {
      name: 'hasta',
      type: 'date',
      required: true,
    },
  ],
};
