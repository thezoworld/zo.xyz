import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  FemaleSittingLog,
  FemaleWithMarshmellow,
  MaleSittingLog,
} from "../../../assets/avatars";
import { Fields2 } from "../../../assets/backgrounds";
import { Bonfire1 } from "../../../assets/props";
import { Flex } from "../../structure";
import { Button } from "../../ui";

interface TravelWithZoProps {}

const TravelWithZo: React.FC<TravelWithZoProps> = () => {
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
      className="h-screen relative px-4 flex text-white flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(0.16deg, #29ABE2 -5.74%, #2CAADF 17.77%, #36A8D5 36.85%, #46A4C4 54.4%, #5E9EAC 71.02%, #D9C43F 86.99%, #D9C43F 102.66%, #D9C43F 117.12%)",
      }}
    >
      <Fields2 className="absolute inset-0 z-1 h-screen" />
      <h2 className="text-xl font-semibold text-center relative z-1">
        Travel with the Zo Club
      </h2>
      <span className="mt-6 text-center relative z-1">
        Are you one of the crazy ones who’s willing to work with early-stage
        teams with broken products, fire in the hole and soul? Then, buy a
        $6,000 month-long all you can adventure trip across India. Coming soon
        across the world
      </span>
      <Button className="mt-8 mb-40 relative z-4">Learn More</Button>
      <Bonfire1
        ref={fire}
        className="absolute bottom-0 z-3"
        style={{ height: "16vh" }}
      />
      <Flex items="end" className="absolute bottom-0 z-2">
        <FemaleSittingLog ref={female1} style={{ height: "30vh" }} />
        <FemaleWithMarshmellow
          ref={female2}
          className="relative"
          style={{ height: "30vh", bottom: "10vh" }}
        />
        <MaleSittingLog ref={male1} style={{ height: "30vh" }} />
      </Flex>
    </section>
  );
};

export default TravelWithZo;
