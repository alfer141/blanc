// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es-MX">
      <Head>
        {/* Font Awesome */}
        <script src="https://kit.fontawesome.com/28fbec338d.js" crossOrigin="anonymous" defer ></script>

        {/* Img Comparison Slider */}
        <script  defer src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js" ></script>

        {/* Adobe Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/itx4sae.css" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Analytics (solo script loader) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VPCJVQM752"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VPCJVQM752');
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
