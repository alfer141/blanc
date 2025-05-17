import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* Font Awesome */}
      <script
        src="https://kit.fontawesome.com/28fbec338d.js"
        crossOrigin="anonymous"
        defer
    ></script>
        {/* Alpine.js (si lo necesitas realmente) */}
        <script
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
          defer
        ></script>
         {/* GSAP + ScrollTrigger */}
         <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          defer
        ></script>
         {/* GSAP + ScrollTrigger */}
         <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          defer
        ></script>
        <script defer src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"></script>
        {/* Font de Adobe */}
        <link rel="stylesheet" href="https://use.typekit.net/itx4sae.css" />
      <body className="antialiased">
        <Main />
        <NextScript />
                {/* Script de animación personalizado */}
                <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function () {
                if (window.gsap && window.ScrollTrigger) {
                  gsap.registerPlugin(ScrollTrigger);
                  ScrollTrigger.matchMedia({
                    "(min-width: 768px)": function () {
                      const sections = gsap.utils.toArray(".card");
                      gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                          trigger: ".scrolling-wrapper",
                          pin: true,
                          scrub: 1,
                          snap: 1 / (sections.length - 1),
                          end: () => "+=" + document.querySelector(".scrolling-wrapper").offsetWidth
                        }
                      });
                    }
                  });
                }
              });
            `,
          }}
        ></script>
      </body>
    </Html>
  );
}
