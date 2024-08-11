import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import article from './schemas/article';
import author from './schemas/author';
import category from './schemas/category';
import product from './schemas/product';
import language from './schemas/language';
import blockContent from './schemas/blockContent';
import seo from './schemas/seo';
import variant from './schemas/variant';

export default defineConfig({
  name: 'default',
  title: 'Charlie Chan',

  projectId: 'joet3wd5',  // Replace with your actual project ID
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [article, author, category, product, language, blockContent, seo, variant],
  },
});