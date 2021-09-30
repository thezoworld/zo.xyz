import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  FemaleBoarding,
  FemaleFull1,
  MaleFull1,
  MaleFull2,
  MaleWithMap,
} from "../../../assets/avatars";
import { ClifSunset } from "../../../assets/backgrounds";
import { OrangeCircle } from "../../../assets/props";
import { Flex } from "../../structure";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const female1 = useRef<SVGSVGElement>(null);
  const female2 = useRef<SVGSVGElement>(null);
  const male1 = useRef<SVGSVGElement>(null);
  const male2 = useRef<SVGSVGElement>(null);
  const male3 = useRef<SVGSVGElement>(null);
  const circle = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(female1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: female1.current,
      },
      x: "-20vw",
    });
    gsap.to(female2.current, {
      scrollTrigger: {
        scrub: true,
        trigger: female2.current,
      },
      x: "15vw",
    });
    gsap.to(male2.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male2.current,
      },
      x: "20vw",
    });
    gsap.to(male3.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male3.current,
      },
      x: "-15vw",
    });
    gsap.to(male1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male1.current,
      },
      y: "-20vh",
    });
    gsap.to(circle.current, {
      scrollTrigger: {
        scrub: true,
      },
      scale: 100,
    });
  }, []);

  return (
    <section
      className="h-screen relative flex flex-col items-center justify-between overflow-hidden w-full"
      style={{
        background:
          "linear-gradient(23.45deg, #F5D928 0.53%, #F6D129 15.58%, #F8B92D 39.57%, #FB9434 69.49%, #FF663C 100%)",
      }}
    >
      <ClifSunset className="absolute inset-0 z-0 h-screen" />
      <div />
      <Flex col items="center" className="relative z-3">
        <span className="font-semibold text-2xl" style={{ color: "#D32328" }}>
          Welcome to
        </span>
        <h1 className="font-bold mt-2 text-white text-4xl">The Zo World</h1>
      </Flex>
      <Flex className="mb-12 md:px-32 px-0 justify-around w-full items-end">
        <MaleWithMap
          ref={male3}
          className="relative z-1 md:block hidden mb-8"
          style={{ height: "40vh" }}
        />
        <FemaleFull1
          ref={female1}
          className="relative z-1"
          style={{ height: "40vh" }}
        />
        <MaleFull1
          ref={male1}
          className="relative z-2 mb-12"
          style={{ height: "40vh" }}
        />
        <MaleFull2
          ref={male2}
          className="relative z-1"
          style={{ height: "40vh" }}
        />
        <FemaleBoarding
          ref={female2}
          className="relative z-1 md:block mb-10 hidden"
          style={{ height: "40vh" }}
        />
      </Flex>
      <OrangeCircle
        ref={circle}
        className="absolute bottom-0 z-3"
        style={{ height: "8vh" }}
      />
    </section>
  );
};

export default Welcome;
