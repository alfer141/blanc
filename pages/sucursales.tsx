import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Head from 'next/head';

import Footer from "@/components/Footer"
import Header from "@/components/Header"

 export default function Sucursales() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleOnHover = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  }

  return (
    <>
      <Head>
        <title>Sucursales | Blanc & Co</title>
        <meta name="description" content="Ubica nuestras sucursales de Blanc & Co en Querétaro y CDMX. Blanqueamiento dental profesional cerca de ti." />
        <link rel="canonical" href="https://blancnco.mx/sucursales" />
      </Head>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DentalClinic",
            name: "BLANC & CO.",
            description: "Clínica dental especializada en tratamientos de sonrisa y estética dental",
            url: "https://blancco.mx",
            telephone: "+52-442-XXX-XXXX",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "Av. de las Ciencias 2058",
                addressLocality: "Juriquilla",
                addressRegion: "Querétaro",
                postalCode: "76226",
                addressCountry: "MX",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "Calzada de la hacienda S/N",
                addressLocality: "Ojo de Agua",
                addressRegion: "Estado de México",
                addressCountry: "MX",
              },
            ],
            openingHours: "Mo-Fr 09:00-18:00",
            priceRange: "$$",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Header with semantic nav */}
        <Header />

        {/* Main Content with semantic structure */}
        <main role="main">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="pt-12 max-w-7xl mx-auto px-6">
            <ol className="flex items-center space-x-2 text-base text-gray-500">
              <li><Link href="/" className="hover:text-gray-700">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900">Ubicaciones </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="pt-8 pb-8 max-w-7xl mx-auto mb-28 px-6" aria-labelledby="hero-heading">
            <motion.h1 {...fadeInUp} transition={{ delay: 0.5 }} className="text-base text-gray-600 uppercase tracking-wider">
              UBICACIONES
            </motion.h1>

            <motion.p id="hero-heading" {...fadeInUp} transition={{ delay: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight mb-8" >
              El lugar donde tu sonrisa es la protagonista
            </motion.p>
          </section>


            <div className="bg-black bg-[url('/images/locations/bg_locations.webp')] relative bg-auto bg-no-repeat bg-bottom bg-fixed bg-opacity-50">
                {/* Hero Image Section */}
                    <section className=" top-0 max-w-7xl mx-auto px-6" aria-labelledby="smile-influence-heading">
                        <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden -top-32 "
                        >
                        <Image
                            src="/images/locations/main_ubicaciones.webp"
                            alt="Dos mujeres jóvenes sonriendo felizmente con gafas de sol en un día soleado, representando la confianza y alegría que brinda una sonrisa saludable"
                            fill
                            className="object-cover z-10"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1800px"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0  bg-cover bg-opacity-20 z-20 ">
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                            <motion.h2
                                id="smile-influence-heading"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="text-3xl md:text-4xl font-light mb-4"
                            >
                                Tu sonrisa influye
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.4 }}
                                className="text-lg md:text-xl max-w-2xl leading-relaxed">
                                En cómo te perciben los demás en términos de inteligencia, éxito y simpatía; influye en la
                                autoestima y en las interacciones sociales.
                            </motion.p>
                            </div>
                        </div>
                        </motion.div>
                    </section>

                    {/* Locations Section */}
                    <section className="xl:pb-44 pb-28" aria-labelledby="locations-heading">
                        <h2 id="locations-heading" className="sr-only">
                        Nuestras ubicaciones y sucursales
                        </h2>

                        <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
                        >
                        {/* Juriquilla Location */}
                        <motion.article
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="text-white p-8 rounded-2xl relative overflow-hidden"
                            itemScope
                            itemType="https://schema.org/Place"
                        >
                            <div className="absolute inset-0 "></div>
                            <div className="relative z-10">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl font-light mb-2"
                                itemProp="name"
                            >
                                Juriquilla, Querétaro
                            </motion.h3>

                            <motion.address
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-300 mb-4 not-italic"
                                itemProp="address"
                                itemScope
                                itemType="https://schema.org/PostalAddress"
                            >
                                <span itemProp="streetAddress">Av. de las Ciencias 2058</span>,
                                <span itemProp="postalCode"> 76226</span>
                            </motion.address>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-300 mb-6"
                            >
                                <a href="mailto:citas@blancnco.mx" className="hover:text-white transition-colors" itemProp="email">
                                citas@blancnco.mx
                                </a>
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                href="/reservar"
                                className="bg-mint border-white text-zinc-900 py-2 hover:bg-white hover:text-black transition-all duration-300 rounded-full px-6"
                                {...scaleOnHover}
                                aria-label="Agendar cita en sucursal Juriquilla"
                                >
                                Agendar cita
                                </Link>
                            </motion.div>
                            </div>
                        </motion.article>

                        {/* Ojo de Agua Location */}
                        <motion.article
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="text-white p-8 rounded-2xl relative overflow-hidden"
                            itemScope
                            itemType="https://schema.org/Place"
                        >
                            <div className="absolute inset-0"></div>
                            <div className="relative z-10">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl font-light mb-2"
                                itemProp="name"
                            >
                                Ojo de Agua, Edo. Méx.
                            </motion.h3>

                            <motion.address
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-300 mb-4 not-italic"
                                itemProp="address"
                                itemScope
                                itemType="https://schema.org/PostalAddress"
                            >
                                <span itemProp="streetAddress">Calzada de la hacienda S/N</span>,
                                <span itemProp="addressLocality"> Tecámac</span>
                            </motion.address>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-300 mb-6">
                                <a href="mailto:citas@blancnco.mx" className="hover:text-white transition-colors" itemProp="email">
                                citas@blancnco.mx
                                </a>
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                href="/reservar"
                                className="bg-mint border-white text-zinc-900 py-2 hover:bg-white hover:text-black transition-all duration-300 rounded-full px-6"
                                {...scaleOnHover}
                                aria-label="Agendar cita en sucursal Ojo de Agua"
                                >
                                Agendar cita
                                </Link>
                            </motion.div>
                            </div>
                        </motion.article>
                        </motion.div>
                    </section>

            </div>
        
        </main>
      </div>
      <Footer />
    </>
  )
}