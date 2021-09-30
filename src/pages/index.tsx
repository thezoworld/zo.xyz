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
import {
  FemaleFull1,
  FemaleLeftFull1,
  MaleFull1,
  MaleFull2,
  MaleRightFull1,
  MultipleFull1,
} from "./../assets/avatars";
import { ClifSunset, DayCampfire } from "./../assets/backgrounds";
import { BuildingZo, Cuisines, Globe, Monuments, Sky } from "./../assets/props";
import Flex from "./../components/structure/Flex";
import { Button } from "./../components/ui";

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
