import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Articulos: CollectionConfig = {
  slug: 'articulos',
  admin: {
    useAsTitle: 'titulo',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => ['editor', 'admin', 'superadmin'].includes(user?.role),
    update: ({ req: { user } }) => ['editor', 'admin', 'superadmin'].includes(user?.role),
    delete: ({ req: { user } }) => ['admin', 'superadmin'].includes(user?.role),
  },
  hooks: {
    beforeValidate: [
      async ({ data, req }) => {
        if (data.titulo) {
          const baseSlug = slugify(data.titulo, { lower: true, strict: true })
          let slug = baseSlug
          let count = 1

          const collection = req.payload.db.collections.articulos

          // Evita conflicto con otros artículos
          let existing = await collection.findOne({
            slug,
            _id: { $ne: data.id }, // Evita comparar consigo mismo al editar
          })

          while (existing) {
            slug = `${baseSlug}-${count}`
            count++
            existing = await collection.findOne({
              slug,
              _id: { $ne: data.id },
            })
          }

          data.slug = slug
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: false, // Lo completamos automáticamente
      admin: {
        position: 'sidebar',
        readOnly: true, // Para evitar que lo editen manualmente
      },
    },
    {
      name: 'fechaPublicacion',
      type: 'date',
      defaultValue: () => new Date(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categoria',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Jennie',
          value: 'jennie',
        },
        {
          label: 'Lisa',
          value: 'lisa',
        },
        {
          label: 'Rose',
          value: 'rose',
        },
        {
          label: 'Jisoo',
          value: 'jisoo',
        },
        {
          label: 'Blackpink (General)',
          value: 'blackpink',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media', // Asegúrate de tener una colección 'media' configurada
      required: false,
    },
    {
      name: 'contenido',
      type: 'richText',
      required: true,
    },
    {
      name: 'fuente',
      type: 'text',
      required: false,
    },
    {
      name: 'autor',
      type: 'text',
      required: true,
      defaultValue: ({ user }) => user?.email || 'Knews',
      admin: {
        readOnly: true,
      },
    },

    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'popularidad',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
  ],
}
