import Head from "next/head";
import React from "react";
import { useWindowSize } from "../components/hooks";
import {
  Allocation,
  Conclusion,
  Distribution,
  Introduction,
} from "../components/page-sections/build-zo";

interface BuildZoProps {}

const BuildZo: React.FC<BuildZoProps> = () => {
  const { width } = useWindowSize();

  return (
    <section className="bg-white w-full">
      <Head>
        <meta name="title" content="Zo World | Build Zo World" />
        <meta
          name="description"
          content="Help us build Zo World using any of your skills from being a community manager, coder to local host, experience provider, transport vendor and many more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zo.xyz/build-zo" />
        <meta property="og:title" content="Zo World | Build Zo World" />
        <meta
          property="og:description"
          content="Help us build Zo World using any of your skills from being a community manager, coder to local host, experience provider, transport vendor and many more."
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zo.xyz/build-zo" />
        <meta property="twitter:title" content="Zo World | Build Zo World" />
        <meta
          property="twitter:description"
          content="Help us build Zo World using any of your skills from being a community manager, coder to local host, experience provider, transport vendor and many more."
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#8ed1da" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | Build Zo World</title>
      </Head>

      <Introduction />
      <Allocation />
      <Distribution />
      <Conclusion />
    </section>
  );
};

export default BuildZo;
