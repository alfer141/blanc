// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next'
import { sanity } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'


// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

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

    <>
      <Head>
        <title>{post.title} | Blanc & Co.</title>
        <meta name="description" content={post.excerpt || 'Descubre más sobre blanqueamiento dental y estética de la sonrisa en Blanc & Co.'} />
        <link rel="canonical" href={`https://blancnco.mx/blog/${post.slug?.current || ''}`} />
      </Head>

      <main className="bg-[#FAFAFA]px-6 lg:px-12 py-16 max-w-7xl mx-auto space-y-16">
        {/* Header y lead */}
        <section className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg">
            While traditional investment options have their place, they may not always be the best path...
          </p>

          {/* Autor y fecha */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400 border-t border-b border-gray-700 py-4">
            <span className="flex items-center gap-2">
              <img src="/author.png" alt="Author" className="w-6 h-6 rounded-full" />
              Blanca de Blanc
            </span>
            <span>Publicado: {format(new Date('2025-04-28'), "d 'de' MMMM 'de' yyyy", { locale: es })}</span>
          </div>
        </section>

        {/* Imagen principal */}
        <section className="rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <img src="/washington.jpg" alt="Imagen destacada del post" className="w-full object-cover" />
        </section>

        {/* Cuerpo + Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 max-w-6xl mx-auto">
          {/* Contenido principal */}
          <article className="prose prose-invert max-w-none">
                      <PortableText value={post.body} />
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white text-black rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">Somos Blanc & Co</h3>
              <p className="text-sm">
                Especialistas en blanqueamiento dental. Conoce nuestros protocolos y tecnología.
              </p>
              <a href="/nosotros" className="text-blue-600 text-sm font-medium">Conocer más →</a>
            </div>

            <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 space-y-4">
              <p className="text-sm text-gray-300">
                Join 1,000,000+ subscribers receiving tips on investing smarter.
              </p>
              <input
                type="email"
                placeholder="tucorreo@email.com"
                className="w-full px-4 py-2 bg-white text-black rounded-md"
              />
              <button className="w-full bg-white text-black py-2 rounded-md text-sm font-semibold">
                Unirme a la Blanc
              </button>
            </div>
          </aside>
        </section>

        {/* Navegación siguiente post */}
        <section className="text-center">
          <a
            href="/blog/siguiente-post"
            className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium"
          >
            Next Post →
          </a>
        </section>

        {/* Relacionados */}
        <section className="bg-white text-black px-6 py-12 rounded-2xl max-w-6xl mx-auto">
          <h3 className="text-xl font-bold mb-8">Related Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Reemplaza con cards reales */}
            <div className="border rounded-xl p-4 space-y-2">
              <img src="/related1.jpg" alt="" className="rounded-md" />
              <h4 className="font-semibold text-lg">Post relacionado 1</h4>
              <p className="text-sm text-gray-600">Publicado: 10 abril 2025</p>
            </div>
            <div className="border rounded-xl p-4 space-y-2">
              <img src="/related2.jpg" alt="" className="rounded-md" />
              <h4 className="font-semibold text-lg">Post relacionado 2</h4>
              <p className="text-sm text-gray-600">Publicado: 08 abril 2025</p>
            </div>
            <div className="border rounded-xl p-4 space-y-2">
              <img src="/related3.jpg" alt="" className="rounded-md" />
              <h4 className="font-semibold text-lg">Post relacionado 3</h4>
              <p className="text-sm text-gray-600">Publicado: 06 abril 2025</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>

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


    /**     <>
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">
        {new Date(post.publishedAt).toLocaleDateString('es-MX')}
      </p>
      <div className="prose prose-lg">
        <PortableText value={post.body} />
      </div>
    </article>
    <Footer />
    
    </>**/