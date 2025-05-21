'use client';
export default function Main() {
    return (
        <section className="bg-black text-white relative" id="inicio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="z-10">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4">
                    Vive una experiencia personalizada, cómoda y sensorial, donde tu sonrisa es la protagonista
                    </h1>
                    <p className="mb-4 text-gray-300 text-xl mt-4">
                    Utilizamos la más alta tecnología del mercado, incluyendo el reconocido sistema Philips Zoom, para garantizar resultados visibles desde la primera sesión y una blancura que realmente se nota.
                    </p>
                    <a
                    href="http://wa.me/525531743044?text=Hola,%20quiero%20reservar%20una%20cita%20de%20blanqueamiento"
                    target="_blank"
                    className="bg-mint text-black px-4 py-2 rounded-full hover:bg-gray-200 transition text-xl"
                    >
                    Reservar cita <i className="fa-light fa-arrow-up-right"></i>
                    </a>
                </div>
                <div className="relative hidden md:block">
                    <div className="aspect-[3/4] bg-gray-700 rounded-lg overflow-hidden relative">
                    <div className="absolute bottom-4 right-4 flex flex-col items-end">
                        <div className="bg-white rounded-md max-w-fit mb-4 px-5">
                        <img className="w-32" src="/images/google_reviews_logo.webp" alt="Google Reviews Testimonials" />
                        </div>
                        <div className="bg-black/10 backdrop-blur-md p-6 rounded-md max-w-3xs">
                        <div>
                            <div className="flex items-center text-white">
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            </div>
                            <p className="leading-none mt-4">
                            La verdad nunca pensé que un blanqueamiento dental pudiera sentirse como una experiencia tan relajante. El tratamiento no dolió nada y se sintió cómodo todo el tiempo, Los resultados… wow. Definitivamente vale la pena
                            </p>
                            <span className="block text-xl mt-3">- Raúl Soto</span>
                        </div>
                        </div>
                    </div>
                    <img src="/images/blanqueamiento_main.webp" alt="Sonrisa perfecta" className="w-full h-full object-cover" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}