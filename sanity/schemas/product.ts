import seo from './seo'
import editions from './editions'
import testimonialSchema from './testimonial'
import reviewSchema from './review'
import series from './series'
import collection from './collection'

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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'reference',
      to: [{type: 'genre'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.max(150).warning('Tagline should not exceed 150 characters.'),
    },
    {
      name: 'o_publishedAt',
      title: 'Originally Published',
      type: 'object',
      fields: [
        {
          name: 'dateType',
          title: 'Date Type',
          type: 'string',
          options: {
            list: [
              {title: 'Full Date (Year/Month/Day)', value: 'full'},
              {title: 'Year and Month', value: 'yearMonth'},
              {title: 'Year Only', value: 'year'},
            ],
            layout: 'radio', // Display as radio buttons
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'fullDate',
          title: 'Full Date',
          type: 'datetime',
          hidden: ({parent}) => !parent || parent.dateType !== 'full',
        },
        {
          name: 'yearMonth',
          title: 'Year and Month',
          type: 'object',
          hidden: ({parent}) => !parent || parent.dateType !== 'yearMonth',
          fields: [
            {name: 'year', type: 'number', title: 'Year', validation: (Rule) => Rule.required()},
            {name: 'month', type: 'number', title: 'Month', validation: (Rule) => Rule.required()},
          ],
        },
        {
          name: 'yearOnly',
          title: 'Year Only',
          type: 'number',
          hidden: ({parent}) => !parent || parent.dateType !== 'year',
          validation: (Rule) => Rule.min(1000).max(new Date().getFullYear()),
        },
      ],
    },
    {
      name: 'o_publishedBy',
      title: 'Originally Published By',
      type: 'text',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'editions',
      title: 'Available Editions',
      type: 'editions',
      of: [editions],
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'series'}],
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'collection'}]}],
    },
    {
      name: 'pageCount',
      title: 'Page Count',
      type: 'number',
    },
    {
      name: 'rights',
      title: 'Rights & Permissions',
      type: 'text',
    },
    {
      name: 'specialFeatures',
      title: 'Special Features',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'awards',
      title: 'Awards & Recognitions',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'testimonial'}], // Allow multiple testimonials
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{type: 'review'}],
    },
    {
      name: 'reviewCount',
      title: 'Review Count',
      type: 'number',
      readOnly: true, // This field is calculated, so it's read-only
      description: 'The number of reviews for this product',
    },
    {
      name: 'averageRating',
      title: 'Average Star Rating',
      type: 'number',
      readOnly: true, // This field is calculated, so it's read-only
      description: 'The average star rating for this product',
    },
  ],
}
