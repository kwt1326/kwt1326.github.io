import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

if (!projectId) {
  throw Error('The Project ID is not set. Check your environment variables.')
}

export const client = projectId ? createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
}) : null
