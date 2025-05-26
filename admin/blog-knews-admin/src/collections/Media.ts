import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
 access: {
  read: () => true,
  create: ({ req: { user } }) =>
    user?.role === 'editor' || user?.role === 'admin' || user?.role === 'superadmin',
  update: ({ req: { user } }) =>
    user?.role === 'admin' || user?.role === 'superadmin',
  delete: ({ req: { user } }) =>
    user?.role === 'admin' || user?.role === 'superadmin',
},
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
