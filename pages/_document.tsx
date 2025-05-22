import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        {/* Font Awesome */}
        <script src="https://kit.fontawesome.com/28fbec338d.js" crossOrigin="anonymous" defer></script>
        <script defer src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"></script>
        {/* Font de Adobe */}
        <link rel="stylesheet" href="https://use.typekit.net/itx4sae.css" />
      <body className="antialiased">
        <Main />
        <NextScript />
                {/* Script de animación personalizado */}

      </body>
    </Html>
  );
}
