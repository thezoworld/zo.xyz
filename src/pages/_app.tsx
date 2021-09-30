import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Footer, Header } from "../components/page-sections/common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="w-full h-full">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
export default MyApp;
