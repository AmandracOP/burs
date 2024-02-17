import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'burssite',

  projectId: 't58icfcc',
  dataset: 'cms',

  plugins: [structureTool(), visionTool(),medialibrary()],

  schema: {
    types: schemaTypes,
  },
})
