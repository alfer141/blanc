// pages/blog/index.tsx
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { sanity } from '@/lib/sanity'
import { postsQuery } from '@/lib/queries'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Head from 'next/head'

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';


type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
}

type BlogPageProps = {
  posts: Post[]
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Blog | Blanc & Co</title>
        <meta name="description" content="Descubre consejos, casos reales y novedades sobre blanqueamiento dental y estética de la sonrisa en el blog de Blanc & Co." />
        <link rel="canonical" href="https://blancnco.mx/blog" />
      </Head>
      <section className='bg-[#FAFAFA] '>
         
          <main className="max-w-7xl mx-auto px-4 py-16">
              <header className="mb-10">
                  <h1 className="text-4xl font-bold">Blog</h1>
                  <p className="mt-2 text-gray-700">
                  Hay muchas cosas sobre tu sonrisa que aún no sabes y aquí descubrirás
                  </p>

                  <nav className="mt-6 border-b border-gray-200 overflow-x-auto">
                  <ul className="flex gap-6 font-medium text-gray-600 whitespace-nowrap pb-5">
                      <li><a href="#" className="text-black border-b-2 border-black pb-5">Todo</a></li>
                      <li><a href="#">Historias y casos reales</a></li>
                      <li><a href="#">Consejos y autocuidado</a></li>
                      <li><a href="#">Noticias Blanc & Co.</a></li>
                      <li><a href="#">Estética dental</a></li>
                  </ul>
                  </nav>
              </header>

              <section className="space-y-12 max-w-4xl">
                  {posts.map((post) => (
                      <div  key={post.slug.current}>
                          <Link href={`/blog/${post.slug.current}`} passHref>
                              <article className="bg-white border-gray-200 flex flex-col md:flex-row gap-6 border-gray-100 rounded-xl p-6">
                                  <div className="flex-1 space-y-2">
                                  <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">Estética dental</span>
                                  <h2 className="text-3xl/8 font-medium mb-3">
                                      {post.title}
                                  </h2>
                                  <p className="text-base text-gray-600 line-clamp-2">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                  </p>
                                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200 mt-4">
                                      <span>Escrito por: <strong className="text-gray-700">Blanca de Blanc</strong></span>
                                      <time dateTime="2025-04-28">Publicado: {format(new Date(post.publishedAt), "d 'de' MMMM 'de' yyyy", { locale: es })}</time>
                                  </div>
                                  </div>
                                  <div className="w-full md:w-80 aspect-video bg-gray-200 rounded-xl"></div>
                              </article>
                          </Link>
                      </div>
                  ))}
              </section>
          </main>
          <Footer />
      </section>
      /** 
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug.current}`} className="text-2xl text-blue-600 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-500 text-sm">
                Publicado el {format(new Date(post.publishedAt), "d 'de' MMMM 'de' yyyy", { locale: es })}
                
              </p>
            </li>
          ))}
        </ul>
      </main>**/
    </>
  )
}

// ✅ Para SSG
export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await sanity.fetch(postsQuery)
  return {
    props: {
      posts,
    },
    revalidate: 60, // ISR: cada 60 segundos
  }
}
