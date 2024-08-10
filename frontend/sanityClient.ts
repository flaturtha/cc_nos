import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'joet3wd5',  // Replace with your Sanity project ID
  dataset: 'production',         // Replace with your dataset name (usually 'production')
  useCdn: true,                  // `false` if you want to ensure fresh data
  apiVersion: '2023-01-01',      // Use a specific API version if needed
})

export default sanityClient
