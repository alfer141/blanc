import Link from 'next/link';
export default function PricingSection() {
    return (
        <section id="tratamientos" className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl mb-4">Blanc & Co.</h2>
                <h3 className="text-2xl font-semibold mb-8">Centro de Blanqueamiento dental profesional</h3>
                <p className="mb-10 max-w-3xl">Nos especializamos en tratamientos de blanqueamiento dental de alta calidad. Nuestro equipo de 
                odontólogos higienistas están comprometido con brindarte la mejor experiencia y resultados excepcionales. 
                Visítanos y descubre cómo podemos transformar tu sonrisa.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Air Blanc */}
                <div className="bg-zinc-900 rounded-lg p-10">
                    <h4 className="text-2xl">Air Blanc</h4>
                    <span className="text-2xl">$1,900 MXN</span>
                    <p className="mb-4 mb-4 text-base/5 mt-4 text-white/70">
                    Limpieza estética y sensación de frescura inmediata con tecnología Suiza.
                    </p>
                    <p className="font-medium mb-4 border-b-1 border-white/50 pb-4">Duración: <span className="font-bold">40 minutos</span></p>
                    <ul className="mb-4">
                        <li className="mb-4 text-base/5">Profilaxis profesional con tecnología suiza EMS Airflow® (GBT Lounge)</li>
                        <li className="mb-4 text-base/5">Protocolo de confort Blanc (ambiente sensorial, aromas, aromaterapia)</li>
                        <li className="mb-4 text-base/5">Kit de cuidados posteriores</li>
                    </ul>
                     <Link href="/reservar" className="bg-mint text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition">
                        Reservar cita
                    </Link>
                </div>

                {/* Essential Blanc (Recomendado) */}
                <div className="bg-rich-black rounded-lg p-10 border border-slate-green relative">
                    <span className="absolute top-0 right-0 bg-black px-4 py-1 rounded-bl-lg text-slate-green-100">Recomendado</span>
                    <h4 className="text-2xl">Essential Blanc</h4>
                    <span className="text-2xl">$6,200 MXN</span>
                    <p className=" text-white/70 mb-4 text-base/5 mt-4">Diseñado para quienes buscan transformar su sonrisa en una sola sesión, con resultados visibles, duraderos y una experiencia de confort sin precedentes.
                    </p>
                    <p className="font-medium mb-4 border-b-1 border-slate-green pb-4">Duración: <span className="font-bold">90 minutos</span></p>
                    <ul className="mb-4">
                        <li className="mb-4 text-base/5">Sesión de Blanqueamiento dental clínico con tecnología Philips Zoom®</li>
                        <li className="mb-4 text-base/5">Profilaxis profesional con tecnología suiza EMS Airflow® (GBT Lounge)</li>
                        <li className="mb-4 text-base/5">Protocolo de confort Blanc (ambiente sensorial, aromas, aromaterapia)</li>
                        <li className="mb-4 text-base/5">Kit de cuidados posteriores</li>
                    </ul>
                     <Link href="/reservar" className="bg-mint text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition">
                        Reservar cita
                    </Link>
                </div>

                {/* Pure Blanc */}
                <div className="bg-zinc-900	rounded-lg p-6">
                    <h4 className="text-2xl ">Pure Blanc</h4>
                    <span className="text-2xl">$7,500 MXN</span>
                    <p className="mb-4 mb-4 text-base/5 mt-4 text-white/70">
                    Diseñado para quienes buscan transformar su sonrisa en una sola sesión, con resultados visibles, duraderos y una experiencia de confort sin precedentes.
                    </p>
                    <p className="font-medium mb-4 border-b border-white/50 pb-4">Duración: <span className="font-bold">90 minutos</span></p>
                    <ul className="mb-4">
                    <li className="mb-4 text-base/6">Todo lo que contiene el programa Essential Blanc + mantenimiento programado a los 6 meses con tecnología EMS Airflow®</li>
                    </ul>
                     <Link href="/reservar" className="bg-mint text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition">
                        Reservar cita
                    </Link>
                    
                </div>
                </div>

                {/* Adicional */}
                <div className="mt-8 bg-rich-black p-12 rounded-lg flex flex-wrap justify-between items-center">
                    <div>
                        <h3 className="text-slate-green text-2xl"> Añade blanqueamiento en casa <span className="font-bold text-white">NiteWhite</span><br /></h3>
                        <p className="text-white">Al reservar tu cita podrás añadir un kit de blanqueamiento en 
                        casa para mejorar y prolongar los resultados</p>
                    </div>           
                    <Link href="/reservar" className="bg-mint text-black px-4 py-2 rounded-full font-medium hover:bg-gray-300 transition">
                        Reservar cita
                    </Link>
                </div>

                <div className="text-center text-xl mt-8 py-12">
                    <span className="block">Visítanos en Instagram</span>
                    <a className="inline-block hover:opacity-50 underline" href="https://instagram.com/blancnco.mx" target="_blank">
                    @blanc_andco.mx
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4">
                    {["glossier", "new_form _to smile", "ready", "shine_bright"].map((img, idx) => (
                    <a
                        key={idx}
                        href="https://instagram.com/blancnco.mx"
                        target="_blank"
                        className="aspect-square bg-zinc-900 overflow-hidden cursor-pointer"
                    >
                        <img
                        src={`/images/instagram/${img}.webp`}
                        alt={`Instagram Blanc & Co - ${img}`}
                        className="w-full h-full object-cover hover:opacity-50"
                        />
                    </a>
                    ))}
                </div>
            </div>
        </section>
    );
}