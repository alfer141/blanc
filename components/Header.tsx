import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Cambia aquí los paths a tus logos si cambian en el futuro
const LOGO_DARK = "/images/blanccco-logo.svg";
const LOGO_LIGHT = "/images/blanccco-logo-black.svg";

const headerVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Resultados", href: "/#resultados" },
    { label: "Tratamientos", href: "/#tratamientos" },
    { label: "Sobre nosotros", href: "nosotros" },
 
];

type HeaderProps = {
  variant?: "light" | "dark";
};

export default function Header({ variant = "light" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  // Utilidades para clases según variante
  const isDark = variant === "dark";
  const headerBg = isDark ? "bg-black border-b border-gray-800" : "bg-white border-b border-gray-200";
  const textMain = isDark ? "text-white" : "text-gray-900";
  const textNav = isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900";
  const logoSrc = isDark ? LOGO_DARK : LOGO_LIGHT;
  const drawerBg = isDark ? "bg-black" : "bg-white";
  const drawerText = isDark ? "text-white" : "text-gray-800";
  const drawerLink = isDark ? "hover:text-mint" : "hover:text-black";
  const drawerBorder = isDark ? "border-b border-gray-800" : "";

  return (
    <>
      <motion.header
        className={`${headerBg} z-50 relative`}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div className={`text-xl font-bold ${textMain}`} whileHover={{ scale: 1.05 }}>
                <img src={logoSrc} alt="Blanc & Co" className="h-4" />
              </motion.div>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                    <Link
                    key={index}
                    href={item.href}
                    className={textNav}
                    >
                    {item.label}
                    </Link>
                ))}
                </nav>
            {/* Reservar + Hamburguesa */}
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/reservar"
                  className={`bg-mint text-black px-6 py-2 rounded-full hover:bg-gray-200 whitespace-nowrap transition-colors`}
                >
                  Reservar cita
                </Link>
              </motion.div>
              {/* Hamburger - sólo en mobile */}
              <button
                className="md:hidden p-2"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
              >
                <i className={`text-2xl fa-solid fa-bars ${isDark ? "text-white" : "text-gray-900"}`}></i>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 bg-black/60 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`${drawerBg} w-72 h-full p-6 flex flex-col`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className={`flex justify-between items-center mb-8 ${drawerBorder}`}>
                <img src={logoSrc} alt="Blanc & Co" className="h-4" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className={`${drawerText} p-2`}
                >
                  <i className="text-2xl fa-solid fa-xmark"></i>
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`${drawerText} text-lg font-medium ${drawerLink} transition-colors`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Reservar cita en menú mobile */}
                <Link
                  href="/reservar"
                  className="bg-mint text-black px-6 py-2 rounded-full text-center hover:bg-gray-200 mt-4 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Reservar cita
                </Link>
              </nav>
              <div className="flex-1" />
            </motion.div>
            {/* Fondo: cierra menú al click */}
            <div className="flex-1" onClick={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
