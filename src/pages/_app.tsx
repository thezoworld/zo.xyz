import type { AppProps } from "next/app";
import Script from "next/script";
import "tailwindcss/tailwind.css";
import { Footer, Header } from "../components/page-sections/common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="gtm"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PWPM6Z8');`,
        }}
      ></Script>
      <main className="w-full h-full">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
export default MyApp;
