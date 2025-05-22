'use client';

import Head from 'next/head';
import { useState, useRef } from 'react';
import Link from 'next/link';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../home/Main';
import PricingSection from '../home/PricingSection';
import ScrollVercelStyle from '../home/ScrollExperience';
import dynamic from 'next/dynamic';

// Hooks 
import { useClickOutside } from '../hooks/useClickOutside';


const videoUrl =
  'https://customer-o3u27h8xl72n98rq.cloudflarestream.com/de2771e0919776353fc1ebdd85582d45/iframe?poster=https%3A%2F%2Fcustomer-o3u27h8xl72n98rq.cloudflarestream.com%2Fde2771e0919776353fc1ebdd85582d45%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600';



export default function Home() {
  const [openVideo, setOpenVideo] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);


  useClickOutside(modalRef, () => setOpenVideo(false));


  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Blanqueamiento dental Profesional | Blanc & Co</title>
        <meta
          name="description"
          content="Una nueva experiencia en blanqueamiento dental, cómodo y sensorial. Usamos tecnología Philips Zoom y EMS Airflow. ¡Reserva hoy!"
        />
        <meta property="og:title" content="Blanc & Co. | Profesionales en Blanqueamiento Dental" />
        <meta
          property="og:description"
          content="Una nueva experiencia en blanqueamiento dental, cómodo y sensorial. Usamos tecnología Philips Zoom y EMS Airflow. ¡Reserva hoy!"
        />
        <meta property="og:image" content="/images/blanc_thumb.png" />
        <meta property="og:url" content="https://blancnco.mx" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Blanc & Co." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blanc & Co. | Profesionales en Blanqueamiento Dental" />
        <meta name="twitter:description"
          content="Una nueva experiencia en blanqueamiento dental, cómodo y sensorial. Usamos tecnología Philips Zoom y EMS Airflow. ¡Reserva hoy!"
        />
        <meta name="twitter:image" content="/images/blanc_thumb.png" />
        <link rel="canonical" href="https://blancnco.mx" />
        <link rel="icon" href="/images/favi256.ico" type="image/x-icon" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VPCJVQM752"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VPCJVQM752');
            `,
          }}
        />
      </Head>

      <Header />
      <Main />

        <section className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-lg text-gray-500 mb-6">
                Sólo trabajamos con tecnología y marcas de primera
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div>
                    <img src="/images/Logos/biofilm-therapy.webp" alt="Biofilm Therapy" />
                </div>
                <div>
                    <img src="/images/Logos/ems-airflow.webp" alt="Limpieza dental con EMS® Airflow" />
                </div>
                <div>
                    <img src="/images/Logos/ivoclar-vivadent.webp" alt="Utilizamos IVOCLAR como insumos dentales" />
                </div>
                <div>
                    <img src="/images/Logos/philips-zoom.webp" alt="Blanqueamiento dental con Philips Zoom" />
                </div>
                <div>
                    <img src="/images/Logos/relief-acp-logo.webp" alt="Relief des sensibilizante" />
                </div>
                </div>
            </div>
        </section>

        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="inline-block bg-black rounded-full text-white px-4">Acerca del tratamiento</span>
                <h2 className="text-2xl md:text-3xl my-4">Descubre el poder detrás de tu sonrisa</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <p className="text-gray-600">
                    En BLANC & CO, nos dedicamos a transformar sonrisas y vidas. Nuestro enfoque personalizado garantiza que cada
                    tratamiento se adapte perfectamente a tus necesidades y deseos. Utilizamos tecnología de vanguardia y técnicas
                    innovadoras para ofrecerte resultados excepcionales con la máxima comodidad.
                </p>
                <p className="text-gray-600">
                    Nuestro equipo de profesionales altamente capacitados está comprometido con tu bienestar y satisfacción. Te
                    acompañamos en cada paso del camino, asegurándonos de que te sientas cómodo y confiado durante todo el proceso.
                </p>
                </div>

                <div className="flex flex-nowrap gap-x-2 overflow-x-scroll justify-start py-8"
            id="resultados"
            dangerouslySetInnerHTML={{
                __html: `
                <div class="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden min-w-[200px] max-w-xs h-xs">
                    <img-comparison-slider>
                    <img slot="first" src="/images/pacientes/px_georgina_blanqueamiento_antes.webp" alt="Antes del tratamiento de Georgina" />
                    <img slot="second" src="/images/pacientes/px_georgina_blanqueamiento_despues.webp" alt="Después del tratamiento de Georgina" />
                    </img-comparison-slider>
                </div>

                <div class="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden min-w-[200px] max-w-xs h-xs">
                    <img-comparison-slider>
                    <img slot="first" src="/images/pacientes/px_william_blanqueamiento_antes.webp" alt="Antes del tratamiento de William" />
                    <img slot="second" src="/images/pacientes/px_william_blanqueamiento_desp.webp" alt="Después del tratamiento de William" />
                    </img-comparison-slider>
                </div>

                <div class="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden min-w-[200px] max-w-xs h-xs">
                    <img-comparison-slider>
                    <img slot="first" src="/images/pacientes/px_denisse_blanqueamiento_antes.webp" alt="Antes del tratamiento de Denisse" />
                    <img slot="second" src="/images/pacientes/px_denisse_blanqueamiento_despues.webp" alt="Después del tratamiento de Denisse" />
                    </img-comparison-slider>
                </div>

                <div class="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden min-w-[200px] max-w-xs h-xs">
                    <img-comparison-slider>
                    <img slot="first" src="/images/pacientes/px_mujer1_blanqueamientot_antes.webp" alt="Antes del tratamiento de Paciente Mujer" />
                    <img slot="second" src="/images/pacientes/px_mujer1_blanqueamientot_desspues.webp" alt="Después del tratamiento de Paciente Mujer" />
                    </img-comparison-slider>
                </div>

                <div class="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden min-w-[200px] max-w-xs h-xs">
                    <img-comparison-slider>
                    <img slot="first" src="/images/pacientes/px_pao_blanqueamiento_antes.webp" alt="Antes del tratamiento de Pao" />
                    <img slot="second" src="/images/pacientes/px_pao_blanqueamiento_despues.webp" alt="Después del tratamiento de Pao" />
                    </img-comparison-slider>
                </div>
                `,
            }}
            />


                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                <div>
                    <h3 className="text-xl mb-2">Resultados excepcionales</h3>
                    <p className="text-gray-600 text-sm">
                    Obtén resultados visibles de blanqueamiento dental en tan solo una sesión de 45 minutos. Aclara hasta 8 tonos
                    en la escala VITA con tecnología profesional aprobada.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl mb-2">Protege y respeta tu esmalte.</h3>
                    <p className="text-gray-600 text-sm">
                    Nuestro tratamiento de blanqueamiento dental es seguro, no invasivo y preserva el esmalte, cuidando la salud
                    bucal mientras mejora la estética de tu sonrisa.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl mb-2">Sensibilidad mínima o nula.</h3>
                    <p className="text-gray-600 text-sm">
                    Cada sonrisa es única, por eso diseñamos planes de tratamiento adaptados a tus necesidades específicas y
                    objetivos estéticos.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl mb-2">Experiencia confortable</h3>
                    <p className="text-gray-600 text-sm">
                    Priorizamos tu comodidad en cada visita, creando un ambiente relajante y utilizando técnicas que minimizan
                    las molestias durante los tratamientos.
                    </p>
                </div>
                </div>
            </div>
        </section>

        {/* Modal */}
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
        
        <section className="bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="relative aspect-video bg-[url('/images/blanc_clean.webp')] bg-cover bg-center rounded-lg mb-8 flex items-center justify-center">
                <button
                onClick={() => setOpenVideo(true)}
                className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                <i className="text-4xl fa-solid fa-play cursor-pointer"></i>
                </button>
            </div>

            <p className="text-center text-2xl max-w-3xl mx-auto">
                Conoce más sobre nuestra clínica dental y cómo transformamos sonrisas a diario. En este video, te mostramos nuestras instalaciones, el equipo de profesionales y los tratamientos que ofrecemos. Descubre por qué somos la mejor opción para el cuidado de tu sonrisa y cómo podemos ayudarte a lograr la sonrisa que siempre has deseado.
            </p>

            <div className="flex justify-center mt-8">
                <Link href="/reservar" className="text-xl border border-white rounded-full px-6 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition">
                Reservar cita ahora <i className="fa-light fa-arrow-right text-white"></i>
                </Link>
            </div>
            </div>
        </section>

       
    <ScrollVercelStyle />
            

      <PricingSection /> 

        {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-2">Preguntas frecuentes</h2>
            <p className="text-gray-600">Respondemos las preguntas más comunes de nuestros pacientes acerca de nuestro servicio</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[{
              id: 1,
              question: '¿Qué utilizamos en Blanc & Co para realizar el blanqueamiento dental?',
              answer: 'En Blanc & Co utilizamos la avanzada tecnología de Philips Zoom! y EMS con Biofilm Guided, garantizando resultados superiores y una limpieza profunda, efectiva y cómoda para nuestros pacientes.',
            }, {
              id: 2,
              question: '¿Por qué confiar en nuestro servicio de blanqueamiento dental?',
              answer: 'Nuestro equipo de odontólogos e higienistas altamente capacitados se enfoca en brindar comodidad, seguridad y resultados excepcionales. Además, usamos tecnología innovadora que asegura tratamientos eficaces y satisfactorios.',
            }, {
              id: 3,
              question: '¿Es seguro el blanqueamiento dental con láser y puede dañar el esmalte dental?',
              answer: 'Sí, el blanqueamiento dental con láser es un procedimiento seguro cuando lo realiza un profesional capacitado. Nuestros especialistas cumplen estrictos protocolos para garantizar la comodidad, seguridad y satisfacción de cada paciente durante todo el proceso.',
            }, {
              id: 4,
              question: '¿Puede dañar el esmalte dental el blanqueamiento con láser?',
              answer: 'No, el procedimiento está diseñado para ser cuidadoso y respetuoso con el esmalte dental. Nuestros expertos utilizan equipos avanzados que protegen la integridad del esmalte, asegurando una salud dental óptima durante y después del tratamiento.',
            }, {
              id: 5,
              question: '¿Es doloroso el blanqueamiento dental con láser?',
              answer: 'El procedimiento es prácticamente indoloro, aunque algunas personas podrían experimentar una leve sensibilidad temporal que desaparece rápidamente.',
            }, {
              id: 6,
              question: '¿Quién es candidato al blanqueamiento dental con láser y qué sucede si tengo restauraciones dentales o carillas?',
              answer: 'Este tratamiento es ideal para adultos con buena salud bucal y sin enfermedades periodontales. Las restauraciones dentales o carillas no se blanquean con el procedimiento, por lo que podría ser necesario ajustarlas posteriormente para igualar el tono.',
            }, {
              id: 8,
              question: '¿Cuáles son los cuidados posteriores al Blanqueamiento dental?',
              answer: 'Para mantener los resultados óptimos, recomendamos evitar alimentos y bebidas con alto contenido de pigmentos, como café, té oscuro y vino, durante al menos 3 días después del procedimiento.',
            }].map(({ id, question, answer }) => (
              <div key={id} className="mb-4">
                <button
                  onClick={() => setSelected(selected !== id ? id : null)}
                  className="flex justify-between items-center w-full p-4 border-b border-gray-200 text-left"
                >
                  <span className="text-2xl">{question}</span>
                  <i className={`fa-solid ${selected === id ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                {selected === id && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-xl text-gray-600">{answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
