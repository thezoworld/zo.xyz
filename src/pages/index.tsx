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
        <title>Zo World</title>
      </Head>
      <Welcome />
      <TravelLocalFriends />
      <Experience />
      <BuildZoWorld />
      <BecomeCofounder />
      <TravelWithZo />
      <MasterPlan />
    </section>
  );
};

export default Home;
