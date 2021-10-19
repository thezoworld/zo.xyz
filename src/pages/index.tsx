import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import {
  BecomeCofounder,
  BuildZoWorld,
  Experience,
  MasterPlan,
  TravelLocalFriends,
  TravelWithZo,
  Welcome,
} from "../components/page-sections/index";

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  const female = useRef<any>(null);

  useEffect(() => {
    gsap.to(female.current, {
      scrollTrigger: {
        scrub: true,
      },
      x: "-40vw",
    });
  });

  return (
    <section className="overflow-x-hidden w-full h-full">
      <Head>
        <meta
          name="title"
          content="Zo World | Travel Freely with help of Local Friends"
        />
        <meta
          name="description"
          content="Travel fearlessly with local friends across the world, go on adventures, complete quests, collect NFTs, become a builder
and make new friends exploring the world. \z/."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zo.xyz/" />
        <meta
          property="og:title"
          content="Zo World | Travel Freely with help of Local Friends"
        />
        <meta
          property="og:description"
          content="Travel fearlessly with local friends across the world, go on adventures, complete quests, collect NFTs, become a builder
and make new friends exploring the world. \z/."
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zo.xyz/" />
        <meta
          property="twitter:title"
          content="Zo World | Travel Freely with help of Local Friends"
        />
        <meta
          property="twitter:description"
          content="Travel fearlessly with local friends across the world, go on adventures, complete quests, collect NFTs, become a builder
and make new friends exploring the world. \z/"
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#ff683c" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | Travel Freely with help of Local Friends</title>
      </Head>
      <Welcome />
      <TravelLocalFriends />
      <Experience />
      <BecomeCofounder />
      <BuildZoWorld />
      <TravelWithZo />
      <MasterPlan />
    </section>
  );
};

export default Home;
