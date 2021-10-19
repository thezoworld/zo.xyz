import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Believers,
  Builders,
  Conclusion,
  Details,
  Introduction,
  Roadmap,
  ZoApp,
} from "../components/page-sections/masterplan";

const MasterplanPage: NextPage = () => {
  return (
    <section className="bg-white max-w-full overflow-hidden">
      <Head>
        <meta name="title" content="Zo World | Masterplan" />
        <meta
          name="description"
          content="How will we build a future where anyone can live, work, and travel fearlessly anywhere in the world?"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zo.xyz/masterplan" />
        <meta property="og:title" content="Zo World | Masterplan" />
        <meta
          property="og:description"
          content="How will we build a future where anyone can live, work, and travel fearlessly anywhere in the world?"
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zo.xyz/masterplan" />
        <meta property="twitter:title" content="Zo World | Masterplan" />
        <meta
          property="twitter:description"
          content="How will we build a future where anyone can live, work, and travel fearlessly anywhere in the world?"
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#90aa2a" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | Masterplan</title>
      </Head>
      <Introduction />
      <Details />
      <Believers />
      <Builders />
      <Roadmap />
      <ZoApp />
      <Conclusion />
    </section>
  );
};

export default MasterplanPage;
