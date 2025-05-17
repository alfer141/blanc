export default function Footer() {
    return (
      <footer className="bg-black text-white pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">BLANC & CO</div>
              <p className="text-gray-400 mb-4">
                Centro especializado en blanqueamiento dental y cuidado de la sonrisa en el corazón de Querétaro
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/blancnco.mx" target="_blank" className="text-gray-400 hover:text-white">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Servicios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fa-solid fa-location-dot mt-1 mr-2"></i>
                  <span className="text-gray-400">Av. de las Ciencias 2058, 76226 Juriquilla, Qro.</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-phone mt-1 mr-2"></i>
                  <span className="text-gray-400">+52 55 3174 3044</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-envelope mt-1 mr-2"></i>
                  <span className="text-gray-400">hola@blancnco.mx</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 BLANC & CO. Todos los derechos reservados.</p>
          </div>
        </div>
        <img className="pt-12 mx-auto" src="/images/half_logo.svg" alt="Blanc & Co" />
      </footer>
    );
  }
  