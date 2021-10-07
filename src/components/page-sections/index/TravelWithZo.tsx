import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  FemaleSittingLog,
  FemaleWithMarshmellow,
  MaleSittingLog,
} from "../../../assets/avatars";
import { Fields2, Fields2Desktop } from "../../../assets/backgrounds";
import { Bonfire1 } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import { Button } from "../../ui";

interface TravelWithZoProps {}

const TravelWithZo: React.FC<TravelWithZoProps> = () => {
  const { width } = useWindowSize();

  const male1 = useRef<SVGSVGElement>(null);
  const female1 = useRef<SVGSVGElement>(null);
  const female2 = useRef<SVGSVGElement>(null);
  const fire = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(male1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male1.current,
      },
      x: "-5vw",
    });
    gsap.to(female1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: female1.current,
      },
      x: "5vw",
    });
    gsap.to(female2.current, {
      scrollTrigger: {
        scrub: true,
        trigger: female2.current,
      },
      y: "-5vh",
    });

    gsap.to(fire.current, {
      scrollTrigger: {
        scrub: true,
        trigger: fire.current,
      },
      scale: 1.2,
      y: "5vh",
    });
  });

  return (
    <section
      className="h-screen relative px-4 flex md:flex-row text-white flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(360deg, #FCC521 -63.02%, #F6C526 -37.85%, #E6C433 -16.32%, #CAC34A 17.64%, #A4C269 50.75%, #88C180 66.22%, #0A7F3F 91.76%, #0A7F3F 100%)",
      }}
    >
      {width <= 768 ? (
        <Fields2 className="absolute inset-0 z-1 h-screen w-full" />
      ) : (
        <Fields2Desktop className="absolute bottom-0 z-1 w-full" />
      )}
      <Flex
        className="w-full max-w-5xl mx-auto"
        style={{ marginTop: width <= 768 ? "" : "40vh" }}
      >
        <div className="absolute bottom-0 w-full md:flex-grow flex justify-center md:-left-12 md:relative">
          <Bonfire1
            ref={fire}
            className="absolute bottom-0 z-3"
            style={{ height: width <= 768 ? "16vh" : "24vh" }}
          />
          <Flex items="end" className="absolute bottom-0 z-2">
            <FemaleSittingLog
              ref={female1}
              style={{ height: width <= 768 ? "30vh" : "40vh" }}
            />
            <FemaleWithMarshmellow
              ref={female2}
              className="relative"
              style={{ height: width <= 768 ? "30vh" : "40vh", bottom: "10vh" }}
            />
            <MaleSittingLog
              ref={male1}
              style={{ height: width <= 768 ? "30vh" : "40vh" }}
            />
          </Flex>
        </div>
        <Flex col className="items-center md:items-start max-w-lg">
          <h2 className="text-xl md:text-3xl font-semibold text-center relative z-1">
            Experience India with Zo
          </h2>
          <span className="mt-6 text-center md:text-left md:text-lg relative z-1">
            Backpacking or Digital Zomad lifestyle? Travel and live across India
            like never before, anywhere, anytime and we’ll be there for you.
          </span>
          <Link href="/travel-with-zo" passHref>
            <Button className="mt-8 mb-40 relative z-4">Start Traveling</Button>
          </Link>
        </Flex>
      </Flex>
    </section>
  );
};

export default TravelWithZo;
