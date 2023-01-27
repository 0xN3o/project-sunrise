import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo+Mono&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />

        {/* Web3 */}
        <script
          src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"
          async
        ></script>
      </Head>
      <body className="antialiased text-gray-50 font-chivomono">
        <div className="absolute inset-0 z-0 bg-[url(/assets/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
