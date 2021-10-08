import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "tailwindcss/tailwind.css";
import { Footer, Header } from "../components/page-sections/common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async={true}
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PWPM6Z8"
          dangerouslySetInnerHTML={{
            __html: `
          window['dataLayer'] = window['dataLayer'] || [];
          window['dataLayer'].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js',
          });
          `,
          }}
        ></script>
      </Head>
      <main className="w-full h-full">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
export default MyApp;
