"use client"

import Head from 'next/head';
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

import Link from 'next/link';
import Footer from "@/components/Footer"
import Header from "@/components/Header"


// Variantes de animación
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const headerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}
// Imágenes del carrusel
const images = [
  "/images/blanqueamiento-dental-queretaro.webp",
  "/images/insumos-blanqueamiento-zoom.webp",
  "/images/aclaramiento-dental-rapido.webp",
  "/images/gel-philips-zoom.webp",
  "/images/dientes-mas-blancos.webp",
    "/images/airflow-handy.webp",
  "/images/limpieza-y-blanqueamiento-dental.webp",
  "/images/paciente-blanqueamiento-zoom.webp",
  "/images/proceso-blanqueamiento-zoom.webp",
    "/images/limpieza-dental-airflow.webp",
  "/images/clinica-blanqueamiennto-dental.webp",
];
const repeatedImages = [...images, ...images];
const ITEM_WIDTH = 440; // w-60 = 240px aprox
const totalWidth = ITEM_WIDTH * images.length;

export default function HomePage() {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
    const [openVideo, setOpenVideo] = useState(false)
    const modalRef = useRef<HTMLDivElement | null>(null)


  const videoUrl =
    "https://customer-o3u27h8xl72n98rq.cloudflarestream.com/f311fe3d212682375a9c66c85524a66c/iframe?poster=https%3A%2F%2Fcustomer-o3u27h8xl72n98rq.cloudflarestream.com%2Ff311fe3d212682375a9c66c85524a66c%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"

  const handleAccordionChange = (value: string) => {
    setActiveAccordion(activeAccordion === value ? null : value)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenVideo(false)
      }
    }
    if (openVideo) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openVideo])


const repeatedImages = [...images, ...images];

  return (
    <div className="min-h-screen bg-white">
        <Head>
            <title>Blanc & Co | Especialistas en Sonrisas Más Blancas y Sanas</title>
            <meta name="description" content="Somos Blanc & Co. La única clínica especializada en blanqueamiento dental con tecnología de vanguardia. Ofrecemos una experiencia cómoda y sensorial con resultados excepcionales. ¡Reserva tu cita hoy!" />
    
            <meta property="og:title" content="Blanc & Co | Especialistas en Sonrisas Más Blancas y Sanas" />
            <meta property="og:description" content="Somos Blanc & Co. La única clínica especializada en blanqueamiento dental con tecnología de vanguardia. Ofrecemos una experiencia cómoda y sensorial con resultados excepcionales. ¡Reserva tu cita hoy!"/>
            <meta property="og:image" content="/images/blanc_thumb.png" />
            <meta property="og:url" content="https://blancnco.mx" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Blanc & Co." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Blanc & Co | Especialistas en Sonrisas Más Blancas y Sana" />
            <meta name="twitter:description" content="Somos Blanc & Co. La única clínica especializada en blanqueamiento dental con tecnología de vanguardia. Ofrecemos una experiencia cómoda y sensorial con resultados excepcionales. ¡Reserva tu cita hoy!"
            />
            <meta name="twitter:image" content="/images/blanc_thumb.png" />
            <link rel="canonical" href="https://blancnco.mx/nosotros" />

        </Head>

        <Header />


        {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn} >
        <div >
          <motion.div variants={fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center xl:mt-12 mt-8" >
            <div>
                <motion.h1
                className="text-base text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                SOBRE NOSOTROS
                </motion.h1>
                <motion.h2 className="text-4xl lg:text-5xl/12 font-medium text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}>
                    Tu sonrisa más blanca y brillante: nuestra especialidad absoluta
                </motion.h2>
            </div>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}>
              En Blanc & Co nos especializamos en tratamientos de blanqueamiento dental, tanto como el hogar como en
              nuestro consultorio. Somos una clínica especializada exclusivamente en blanqueamiento dental y
              tratamientos dentales estéticos. Nuestro equipo de profesionales altamente capacitados se dedica a brindar
              los mejores resultados en el menor tiempo posible de sus visitas.
            </motion.p>
          </motion.div>
          
        </div>

        <motion.div
            className="w-full bg-gray-300 mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/about/aboutUs_image_1.webp"
              alt="Consulta dental profesional"
              width={1200}
              height={600}
              className="object-cover w-full rounded-lg shadow-lg"
            />
        </motion.div>
      </motion.section>

        {/* Philosophy Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div >
          <motion.p className="text-green-600 font-medium text-3xl mb-4 leading-tight" variants={fadeIn}>
            Nuestra filosofía es simple pero firme:{" "}
            <span className="text-gray-900">
              concentramos toda nuestra experiencia y tecnología en ofrecerte una sonrisa más blanca y segura en menos
              de una hora. Siempre serás atendido con honestidad, resolviendo tus dudas con claridad y evaluando con
              responsabilidad si el tratamiento es ideal para ti. Nuestro compromiso es brindarte un servicio eficaz,
              ético y confiable.
            </span>
          </motion.p>
        </div>
      </motion.section>

    {/* Features Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer} >
        <motion.div className="text-center mb-12" variants={fadeIn}>
          <motion.h3 className="text-3xl font-bold text-gray-900 mb-4" variants={fadeIn}>
            Más que un blanqueamiento es una experiencia
          </motion.h3>
          <motion.p className="text-gray-600" variants={fadeIn}>
            Conoce nuestros servicios especializados en tratamientos
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={staggerContainer}>
          {[
            {
              title: "Especialización",
              description:
                "Desarrollamos nuestro servicio al detalle todo nuestro conocimiento está enfocado en el blanqueamiento dental.",
                icon:"fa-regular fa-bullseye"
            },
            {
              title: "Innovación",
              description:
                "Incorporamos tecnología avanzada y métodos actualizados para transformar tu visita en una experiencia única.",
                icon:"fa-regular fa-atom-simple"
            },
            {
              title: "Transparencia",
              description:
                "Evaluamos tu caso de manera responsable y te explicamos todo el proceso para que tengas absoluta claridad sobre nuestros métodos.",
                icon:"fa-regular fa-layer-group"
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-left "
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.h4 className="text-2xl font-semibold text-gray-900 mb-3" variants={fadeIn}>
                <i className={` ${feature.icon} text-mint mr-2`}></i>
                <span>{feature.title}</span>
              </motion.h4>
              <motion.p className="text-gray-600" variants={fadeIn}>
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>


      </motion.section>


        {/* Carrusel infinito */}
        <div className="overflow-hidden w-full xl:mb-12" role="region" aria-label="Galería de servicios de Blanc & Co">
            <motion.div
                className="flex"
                style={{ width: totalWidth * 2 }}
                animate={{ x: [-0, -totalWidth] }}
                transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 78, // Ajusta para velocidad
                }}
            >
                {repeatedImages.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt={`Blanqueamiento dental Blanc & Co imagen ${idx + 1}`}
                    className="aspect-[4/5] w-96 rounded-lg object-cover mx-2 shadow transition-transform duration-300"
                    loading="lazy"
                    draggable={false}
                />
                ))}
            </motion.div>
        </div>

    

       {openVideo && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
                <div
                    ref={modalRef}
                    className="relative bg-black rounded-lg overflow-hidden w-[400px] h-[710px]"
                >
                    <iframe
                    src={videoUrl}
                    loading="lazy"
                    className="w-full h-full"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Video Blanc & Co"
                    />
                </div>
                </div>
            )}

        {/* Video Section */}
        <motion.section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeIn}>
                    <motion.h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight" variants={fadeIn}>
                    Una sonrisa brillante es sinónimo de seguridad, felicidad y confianza.
                    </motion.h3>
                    <motion.p className="text-gray-600 mb-6" variants={fadeIn}>
                    Transformamos tu visita en una experiencia relajante, acogedora y muy cómoda para ti. Cada detalle ha sido
                    diseñado cuidadosamente para que te sientas a gusto desde el momento en que ingresas a nuestras
                    instalaciones.
                    </motion.p>
                    <motion.p className="text-gray-600" variants={fadeIn}>
                    Blanc & Co profesionales de lujo en una clínica donde nuestras especialistas son expertas en
                    blanqueamiento dental y tratamientos estéticos. Nuestro equipo está conformado por un grupo de
                    profesionales que se mantienen en constante actualización para brindarte los mejores resultados con los
                    mejores y más modernos equipos y técnicas.
                    </motion.p>
                </motion.div>
                <motion.div className="relative w-6/12 mx-auto" variants={fadeIn}>
                    <motion.div
                    className="bg-gray-200 aspect-[9/16] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onClick={() => setOpenVideo(true)} >
                    <Image
                        src="/images/about/about_video_cover.webp"
                        alt="Video Blanc & Co"
                        width={450}
                        height={801}
                        className="object-cover w-full h-full"/>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>

        {/* FAQ Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <motion.div className="text-center mb-12" variants={fadeIn}>
          <motion.h3 className="text-2xl font-bold text-gray-900 mb-4" variants={fadeIn}>
            Preguntas frecuentes
          </motion.h3>
          <motion.p className="text-gray-600" variants={fadeIn}>
            Respondemos las preguntas más comunes que nuestros pacientes tienen acerca de nuestro servicio.
          </motion.p>
        </motion.div>

        <motion.div className="space-y-4" variants={staggerContainer}>
          {[
            {
              question: "¿Qué utilizamos en Blanc & Co para realizar el blanqueamiento dental?",
              answer:
                "Utilizamos productos profesionales de alta calidad y tecnología LED para garantizar resultados seguros y efectivos.",
            },
            {
              question: "¿Por qué confiar en nuestro servicio de blanqueamiento dental?",
              answer:
                "Somos especialistas exclusivos en blanqueamiento dental con años de experiencia y tecnología de vanguardia.",
            },
            {
              question: "¿Es seguro el blanqueamiento dental con láser y puede dañar el esmalte dental?",
              answer:
                "Nuestros tratamientos son completamente seguros y no dañan el esmalte dental cuando se realizan correctamente.",
            },
            {
              question: "¿Puede dañar el esmalte dental blanqueamiento con láser?",
              answer: "No, nuestro tratamiento con láser es seguro y está diseñado para proteger el esmalte dental.",
            },
            {
              question: "¿Es doloroso el blanqueamiento dental con láser?",
              answer:
                "El procedimiento es prácticamente indoloro. Algunos pacientes pueden experimentar sensibilidad mínima temporal.",
            },
            {
              question:
                "¿Quién es candidato al blanqueamiento dental con láser y qué sucede en el largo plazo con las restauraciones dentales existentes?",
              answer:
                "La mayoría de personas son candidatas. Las restauraciones existentes no se blanquean, pero evaluamos cada caso individualmente.",
            },
            {
              question: "¿Cuáles son los cuidados posteriores al blanqueamiento dental?",
              answer:
                "Te proporcionamos una guía completa de cuidados post-tratamiento para mantener los resultados por más tiempo.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              variants={fadeIn}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="px-6 py-4 cursor-pointer flex justify-between items-center"
                onClick={() => handleAccordionChange(`item-${index + 1}`)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <h4 className="text-left font-medium">{faq.question}</h4>
                <motion.div
                  animate={{ rotate: activeAccordion === `item-${index + 1}` ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 5L7 10L12 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  height: activeAccordion === `item-${index + 1}` ? "auto" : 0,
                  opacity: activeAccordion === `item-${index + 1}` ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

        {/* CTA Section */}
      <motion.section
        className="bg-black text-mint py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <motion.div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" variants={fadeIn}>
          <motion.h3
            className="text-3xl font-bold mb-4"
            variants={fadeIn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Renueva el aspecto de tu sonrisa hoy
          </motion.h3>
          <motion.p
            className="text-gray-300 mb-8"
            variants={fadeIn}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Agenda tu cita y dale vida a tu sonrisa en 60 minutos.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/reservar" className="bg-mint text-black px-4 py-2 rounded-full hover:bg-gray-200 transition text-xl">
                    Reservar cita <i className="fa-light fa-arrow-up-right"></i>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
}
