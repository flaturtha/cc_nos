import seo from './seo';
import variant from './variant';

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',  // Reference the `seo` object type here
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{ type: 'variant' }],  // Reference the `variant` object type here
    },
    // Add other fields as needed
  ],
};
