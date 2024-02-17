import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'hotspot',
          type: 'hotspot',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alternateText',
          title: 'Alternate Text',
          type: 'string',
        },
      ],
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