import { defineField, defineType } from 'sanity';

export default defineType({
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
});
