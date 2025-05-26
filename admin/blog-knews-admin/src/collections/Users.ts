import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === 'superadmin') return true
      return { id: { equals: user?.id } }
    },
    update: ({ req: { user } }) => {
      // El superadmin puede editar a todos, el resto solo su cuenta
      if (user?.role === 'superadmin') return true
      return { id: { equals: user?.id } }
    },
    create: () => true,
    delete: ({ req: { user } }) => user?.role === 'superadmin',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Usuario', value: 'user' },
        { label: 'Editor', value: 'editor' },
        { label: 'Administrador', value: 'admin' },
        { label: 'SuperAdmin', value: 'superadmin' },
      ],
      access: {
        // Solo el SuperAdmin puede cambiar el rol
        update: ({ req: { user } }) => user?.role === 'superadmin',
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
}