// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next'
import { sanity } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'

type Post = {
  title: string
  body: any
  publishedAt: string
}

type Props = {
  post: Post
}

export default function BlogPostPage({ post }: Props) {
  if (!post) return <p>Post no encontrado</p>

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">
        {new Date(post.publishedAt).toLocaleDateString('es-MX')}
      </p>
      <div className="prose prose-lg">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}

// Generación estática de paths
export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`*[_type == "post"]{ slug }`
  const posts = await sanity.fetch(query)

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking', // o 'false' si no quieres fallback
  }
}

// Fetch de datos individuales
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt
  }`

  const post = await sanity.fetch(query, { slug: params?.slug })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
    revalidate: 60, // ISR: cada 1 min
  }
}
