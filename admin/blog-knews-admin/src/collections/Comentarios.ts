import type { CollectionConfig } from 'payload'



export const Comentarios: CollectionConfig = {
  slug: 'comentarios',
  admin: {
    useAsTitle: 'contenido',
  },
  auth: false,
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'superadmin',
    delete: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'superadmin',
  },
  fields: [
    {
      name: 'contenido',
      type: 'textarea',
      required: true,
    },
    {
      name: 'usuario',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      access: {
        update: () => false, // No editable una vez creado
      },
    },
    {
      name: 'articulo',
      type: 'relationship',
      relationTo: 'articulos',
      required: true,
      access: {
        update: () => false, // No editable una vez creado
      },
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
}
