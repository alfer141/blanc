export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <header className="w-full border-b border-gray-200 py-6 flex justify-center xl:mb-0 ">
       
        <img  src="/images/blanccco-logo-black.svg" alt="Blanc & Co" className="h-6" />
      </header>
        <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-sm p-8 text-center">
          {/* Aquí puedes insertar la imagen del check más adelante */}
          <div className="mb-6">
            
            <img className="mx-auto" src="/images/success_icon.svg" alt="Pago exitoso" />
          </div>

          <h1 className="text-xl font-bold text-black mb-2">
            El pago de tu reserva ha sido exitoso
          </h1>
          <p className=" text-gray-600 mb-6">
            Por favor envíanos un mensaje para que confirmemos el pago de tu reserva y acordemos los detalles de tu cita
          </p>

          <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded mb-6">
            Pagaste: $500 de tarifa de reserva
          </div>

          <a
            href="https://wa.me/5215555555555?text=Hola, acabo de completar el pago de mi reserva. ¿Podrían confirmarlo?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-black text-white font-medium py-3 rounded-md hover:bg-gray-900 transition"
          >
            Confirmar el pago de mi reserva
          </a>
        </div>
      </main>
    </div>
  );
}