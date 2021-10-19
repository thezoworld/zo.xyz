import { Widget } from "@typeform/embed-react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const TravelWithZoClub: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <meta name="title" content="Zo World | Experience India with Zo" />
        <meta
          name="description"
          content="Backpacking or Digital Nomad lifestyle? Travel and live across India like never before, anywhere, anytime and we’ll be there for you."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://zo.xyz/experience-india-with-zo"
        />
        <meta
          property="og:title"
          content="Zo World | Experience India with Zo"
        />
        <meta
          property="og:description"
          content="Help us build Zo World using any of your skills from being a community manager, coder to local host, experience provider, transport vendor and many more."
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://zo.xyz/experience-india-with-zo"
        />
        <meta
          property="twitter:title"
          content="Zo World | Experience India with Zo"
        />
        <meta
          property="twitter:description"
          content="Help us build Zo World using any of your skills from being a community manager, coder to local host, experience provider, transport vendor and many more."
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#F15824" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | Experience India with Zo</title>
      </Head>
      <header className="bg-orangy absolute top-0 inset-x-0 h-18 w-full" />
      <Widget id="fctEvmR6" className="w-full h-screen pt-18" />
    </section>
  );
};

export default TravelWithZoClub;
