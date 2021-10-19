import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Details,
  Introduction,
} from "../components/page-sections/becomeCofounder";

const becomeCofounder: NextPage = () => {
  return (
    <section className="bg-white max-w-full overflow-hidden">
      <Head>
        <meta name="title" content="Zo World | Become a Founder of Zo World" />
        <meta
          name="description"
          content="Join early and mint NFTs from 'Founders of the Zo World' collection and become one of the only 11,111 founders of the Zo World."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zo.xyz/become-a-founder" />
        <meta
          property="og:title"
          content="Zo World | Become a Founder of Zo World"
        />
        <meta
          property="og:description"
          content="Join early and mint NFTs from 'Founders of the Zo World' collection and become one of the only 11,111 founders of the Zo World."
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://zo.xyz/become-a-founder"
        />
        <meta
          property="twitter:title"
          content="Zo World | Become a Founder of Zo World"
        />
        <meta
          property="twitter:description"
          content="Join early and mint NFTs from 'Founders of the Zo World' collection and become one of the only 11,111 founders of the Zo World."
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#9bd6f1" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | Become a Founder of Zo World</title>
      </Head>
      <Introduction />
      <Details />
    </section>
  );
};

export default becomeCofounder;
