import { useState } from 'react';
import { useRouter } from 'next/router';
import { crearReservaEnNotion } from '@/lib/notion';

export default function ReservarPage() {
    const router = useRouter();

    const [programa, setPrograma] = useState('');
    const [nitewhite, setNitewhite] = useState(false);
    const [metodoReserva, setMetodoReserva] = useState('');
    const [nombre, setNombre] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [sucursal, setSucursal] = useState('');
      // Submit temporal
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!programa || !metodoReserva) {
  alert('Por favor selecciona un programa y un método de reserva');
  return;
}

    try {
    const response = await fetch('/api/reservas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        whatsapp,
        correo: email,
        sucursal,
        programa,
        nitewhite,
        metodo: metodoReserva,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al enviar a la API');
    }
   
     if (metodoReserva === 'Whatsapp') {
     const mensaje = `Hola, acabo de reservar una cita y elegí la sucursal: ${sucursal}`;
     const url = `https://wa.me/5215617472259?text=${encodeURIComponent(mensaje)}`;
      window.location.href = url;
    } else {
      window.location.href = 'https://mpago.li/1GoLwXr';
    }

    console.log('Reserva enviada exitosamente a Notion');
  } catch (error) {
    console.error('Error detallado:', error);
    alert('Hubo un error al enviar tus datos. Intenta de nuevo.');
  }
};
const descripcionesPrograma: Record<string, string> = {
  'Air Blanc': 'Limpieza estética con EMS Airflow® y protocolo de confort Blanc. Ideal para una sensación de frescura inmediata.',
  'Essential Blanc': 'Blanqueamiento profesional con Philips Zoom + limpieza Airflow®. Resultados visibles en una sola sesión.',
  'Pure Blanc': 'Incluye todo el programa Essential + mantenimiento con Airflow® a los 6 meses.',
};
const pricingPrograma: Record<string, string> = {
    'Air Blanc': '$1,900 mxn',
    'Essential Blanc': '$6,200 mxn',
    'Pure Blanc': '$7,500 mxn',
};
const bookMethodLogo: Record<string, string> = {
    'Whatsapp': '/images/whatsapp-logo.svg',
    'Pago Onilne con Mercado Pago': '/images/mp-logo.svg',
};
  return (
    <div>
        <header className="w-full border-b border-gray-200 py-6 flex justify-center xl:mb-0 ">
            <img  src="/images/blanccco-logo-black.svg" alt="Blanc & Co" className="h-6" />
        </header>
            
        <section className="bg-white text-black py-16">
            
        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Columna izquierda */}
            <div>
            <a href="/"><i className="fa-regular fa-arrow-left text-gray-600"></i> Regresar</a>  
            <h2 className="text-3xl font-bold mb-2">Reservar cita</h2>
            <p className="text-gray-500 mb-8">Todas las citas deberán reservarse con un depósito de reserva de $500 mxn.</p>

            {/* Programa */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Elige el programa</h3>
                <div className="space-y-4">
                {['Air Blanc', 'Essential Blanc', 'Pure Blanc'].map((opcion) => (
                    <label key={opcion} className={`border rounded-xl p-4 block cursor-pointer ${programa === opcion ? 'ring-2 ring-green-500' : ''}`}>
                    <input
                        type="radio"
                        name="programa"
                        value={opcion}
                        checked={programa === opcion}
                        onChange={() => setPrograma(opcion)}
                        className="hidden"
                    />
                    <strong>{opcion} | {pricingPrograma[opcion]}</strong>
                    <p className="text-gray-600">{descripcionesPrograma[opcion]}</p>
                    </label>
                ))}
                </div>
            </div>

            {/* NiteWhite */}
            <div className="mb-8">
                <label className="flex items-center justify-between border rounded-xl p-4 cursor-pointer">
                <span>
                    Añade NiteWhite +$2,100 mxn
                    <p className="text-gray-500">No se cobrará en este paso</p>
                </span>
                <input
                    type="checkbox"
                    checked={nitewhite}
                    onChange={() => setNitewhite(!nitewhite)}
                    className="w-5 h-5 rounded-full accent-black"
                />
                </label>
            </div>

            {/* Método de reserva */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">2. Elige método de reserva *</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Whatsapp', 'Pago Onilne con Mercado Pago'].map((metodo) => (
                    <button
                    type="button"
                    key={metodo}
                    onClick={() => setMetodoReserva(metodo)}
                    className={`flex items-center gap-x-3 text-base/5 border rounded-xl p-4 text-left ${metodoReserva === metodo ? 'ring-2 ring-green-500' : ''}`}
                    >
                        <img
                        src={bookMethodLogo[metodo]}
                        alt={`${metodo} logo`}
                        className="h-8 w-8"
                        />
                    {metodo}
                    </button>
                ))}
                </div>
            </div>
            </div>

            {/* Columna derecha: datos del cliente */}
            <div className="bg-black bg-[url(/images/lines.svg)] bg-repeat  text-white rounded-xl p-8">
            <h3 className="text-3xl font-medium mb-6">Resumen de tu reserva</h3>
            <div className="border border-white/10 bg-linear-to-t from-zinc-700 to-white/0 p-4 rounded-lg mb-6">
                <p >Programa: <strong>{programa || 'No seleccionado'}</strong></p>
                <p >Método de reserva: <strong>{metodoReserva || 'No seleccionado'}</strong></p>
                <p >NiteWhite: <strong>{nitewhite ? 'Sí' : 'No'}</strong></p>
            </div>

            {/* Datos de contacto */}
            <div className="space-y-4">
                <div>
                <label className="block text-sm mb-1">Tu nombre <span className='text-rose-600'>*</span></label>
                <input
                    type="text"
                    value={nombre}
                    required
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full p-2 rounded bg-zinc-800 text-white border border-white/10"
                    placeholder="Escribe tu nombre"
                />
                </div>
                <div>
                <label className="block text-sm mb-1">WhatsApp*</label>
                <input
                    type="tel"
                    value={whatsapp}
                    required
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full p-2 rounded bg-zinc-800 text-white border border-white/10"
                    placeholder="550000000"
                />
                </div>
                <div>
                <label className="block text-sm mb-1">Correo electrónico *</label>
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 rounded bg-zinc-800 text-white border border-white/10"
                    placeholder="tucorreo@mail.com"
                />
                </div>
                <div>
                <label className="block text-sm mb-1">Sucursal</label>
                <select
                    value={sucursal}
                    onChange={(e) => setSucursal(e.target.value)}
                    required
                    className="w-full p-2 rounded bg-zinc-800 text-white border border-white/10"
                >
                    <option value="">Elige una sucursal</option>
                    <option>Ojo de Agua</option>
                    <option>Querétaro</option>
                </select>
                </div>
                <button type="submit" className="w-full mt-4 bg-gray-100 text-black rounded-full py-3 font-medium hover:bg-white transition">
                Confirmar datos
                </button>
            </div>
            </div>
        </form>
        </section>
    </div>
  );
}
