import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'nbby5yeo',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})