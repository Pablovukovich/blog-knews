import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'usuarios',
  admin: {
    useAsTitle: 'email',
  },
  auth: false,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
