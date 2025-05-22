// components/ScrollVercelStyle.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pasos = [
    
  {
    title: 'La Experiencia',
    text: 'Nuestra única misión es iluminar tu sonrisa',
  },

  {
    img: '/images/pre_blanqueamiento.webp',
    title: 'Antes del blanqueamiento',
    text: 'Nuestro equipo te explicará detalladamente cada etapa del procedimiento y resolverá todas tus dudas sobre el tratamiento. Luego realizaremos una evaluación completa para verificar el estado de tus dientes y encías, detectando posibles caries u otros problemas que puedan afectar el procedimiento. Antes de iniciar el blanqueamiento, realizamos una profilaxis dental profesional con nuestra avanzada tecnología Airflow® de EMS, un método cómodo y efectivo para eliminar manchas superficiales y placa dental, asegurando resultados uniformes y potenciados.',
  },
  {
    img: '/images/kit_philips_zoom.webp',
    title: 'Preparación del Kit !Zoom',
    text: 'Una vez completada la limpieza dental, procederemos a aplicar cuidadosamente el kit de blanqueamiento Philips Zoom!, que incluye un protector para encías, gel desensibilizante y un agente blanqueador profesional de alta calidad. Al colocar adecuadamente cada elemento, activaremos el tratamiento utilizando una luz LED fría con la tecnología especializada de Philips para garantizar resultados óptimos.',
  },
  {
    img: '/images/Zoom.webp',
    title: 'Una sonrisa más blanca en una sesión',
    text: 'El tratamiento se realiza en ciclos cortos de 15 minutos cada uno, dependiendo de tus objetivos personales y el estado actual de tus dientes. La sesión completa generalmente dura entre 45 y 60 minutos (3 o 4 ciclos). Mientras tanto, puedes relajarte plenamente disfrutando de una experiencia estilo spa, utilizando audífonos con cancelación de ruido y ondas binaurales relajantes. También puedes complementar la experiencia con un masajeador ocular, creando un ambiente totalmente cómodo y placentero durante todo el procedimiento. Salir relajado y con tu sonrisa hasta 8 tonos más clara.',
  },

];





export default function ScrollVercelStyle() {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
  const checkScreen = () => {
    setIsDesktop(window.innerWidth >= 1024); // lg: Tailwind breakpoint
  };

  checkScreen(); // Run on mount
  window.addEventListener('resize', checkScreen);
  return () => window.removeEventListener('resize', checkScreen);
}, []);



  // Scroll controlado por la sección
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // empieza cuando llega, termina cuando termina
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]); // Mueve según pasos

   if (!isDesktop) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pasos.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {step.img && (
                <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                  <img src={step.img} alt={`Paso ${idx + 1}`} className="object-cover rounded-xl" />
                </div>
              )}
              <div>
                <h3 className="text-3xl font-semibold">{step.title}</h3>
                {step.title && <p className="text-lg text-gray-600 mt-2">{step.title}</p>}
                {step.text && <p className="text-gray-600 mt-4">{step.text}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white">
      {/* Sección sticky */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full items-stretch gap-8"
        >
          {pasos.map((step, idx) => (
            <div
              key={idx}
              className="w-screen flex items-center justify-center p-10 flex-shrink-0"
            >
              <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                {idx === 0 && step.text ? (
                  <>
                    <h2 className="text-5xl md:text-6xl font-light tracking-wider">{step.title}</h2>
                    <p className="text-xl text-gray-700 text-center">{step.text}</p>
                  </>
                ) : (
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2">
                      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                        <img src={step.img} alt={`Paso ${idx + 1}`} className="object-cover" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 border-t border-gray-300 pt-6">
                      <div className="flex items-start justify-between">
                        <h3 className="text-4xl">{step.title}</h3>
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 12h10v10l10-10H12z" />
                        </svg>
                      </div>
                      <p className="mt-4 text-gray-600 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
         

        </motion.div>
        
      </div>
    </section>
  );
}
