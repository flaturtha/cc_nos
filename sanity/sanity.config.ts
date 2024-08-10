import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';

import article from './schemas/article';
import author from './schemas/author';
import category from './schemas/category';
import product from './schemas/product';
import language from './schemas/language';
import blockContent from './schemas/blockContent';

export default defineConfig({
  name: 'default',
  title: 'Charlie Chan',

  projectId: 'joet3wd5',  // Replace with your actual project ID
  dataset: 'production',

  plugins: [visionTool()],

  schema: {
    types: [article, author, category, product, language, blockContent],
  },
});
