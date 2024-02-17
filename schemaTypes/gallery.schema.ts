import { SchemaTypeDefinition } from 'sanity';

export const gallerySchema: SchemaTypeDefinition = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'alt',
          type: 'string',
          validation: Rule => Rule.required()
        },
      ],
    },
    {
      name: 'alternateText',
      title: 'Alternate Text',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
      options: {
        rows: 4,
        columns: 20,
      },
    },
  ],
};
