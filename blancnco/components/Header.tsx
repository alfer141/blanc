import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 text-white z-[99] bg-black">
      <div className="rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <div className="text-xl font-bold">
            <img src="/images/blanccco-logo.svg" alt="Blanc & Co Logo SVG" />
          </div>
          <nav className="hidden md:flex space-x-8 text-lg">
            <a href="#inicio" className="text-white hover:text-gray-300">Inicio</a>
            <a href="#resultados" className="text-white hover:text-gray-300">Resultados</a>
            <a href="#proceso" className="text-white hover:text-gray-300">Tratamiento</a>
            <a href="#programas" className="text-white hover:text-gray-300">Programas</a>
            <a href="#contacto" className="text-white hover:text-gray-300">Contacto</a>
          </nav>
          <a
            href="http://wa.me/525531743044?text=Hola,%20quiero%20reservar%20una%20cita%20de%20blanqueamiento"
            target="_blank"
            className="md:hidden bg-mint text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            <i className="fa-brands fa-whatsapp" /> Reservar cita <i className="fa-light fa-arrow-up-right" />
          </a>
        </div>
      </div>
    </header>
  );
}
