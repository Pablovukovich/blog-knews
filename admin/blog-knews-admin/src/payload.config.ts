// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Articulos } from './collections/Articulos'
import { Comentarios } from './collections/Comentarios'
import spanishTranslations from './../i18n/es'
import { Categorias } from './collections/Categorias'
import { Mensajes } from './collections/Mensajes'
import { Destacados } from './collections/Destacados'
import Logo from 'components/Logo'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
     css: path.resolve(__dirname, './styles/admin.css'),
     branding: {
      logo: Logo,
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: {
    
    translations: {
      es: spanishTranslations,
    },
  },
  collections: [Users, Media,Articulos, Comentarios,Categorias,Mensajes, Destacados],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
