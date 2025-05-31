// lib/queries.ts
import groq from 'groq'

export const postsQuery = groq`*[_type == "post"]{
  _id,
  title,
  slug,
  body,
  publishedAt
} | order(publishedAt desc)`
