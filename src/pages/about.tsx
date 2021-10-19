import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Mission, Team } from "../components/page-sections/about";

const About: NextPage = () => {
  return (
    <section className="bg-white w-full">
      <Head>
        <meta name="title" content="Zo World | About" />
        <meta
          name="description"
          content="Meet the team and the 11,111 Founders building the Zo World"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zo.xyz/about" />
        <meta property="og:title" content="Zo World | About" />
        <meta
          property="og:description"
          content="Meet the team and the 11,111 Founders building the Zo World"
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zo.xyz/about" />
        <meta property="twitter:title" content="Zo World | About" />
        <meta
          property="twitter:description"
          content="Meet the team and the 11,111 Founders building the Zo World"
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#F15824" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | About</title>
      </Head>
      <Mission />
      <Team />
    </section>
  );
};

export default About;
