import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  FemaleLeftFull1,
  MaleRightFull1,
  MaleSittingWithCards,
} from "../../../assets/avatars";
import { Button } from "../../ui";

interface BecomeCofounderProps {}

const BecomeCofounder: React.FC<BecomeCofounderProps> = () => {
  const female1 = useRef<SVGSVGElement>(null);
  const male1 = useRef<SVGSVGElement>(null);
  const male2 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(female1.current, {
      scrollTrigger: {
        trigger: female1.current,
        scrub: true,
      },
      y: "8vh",
    });
    gsap.to(male1.current, {
      scrollTrigger: {
        trigger: male1.current,
        scrub: true,
      },
      y: "-10vh",
    });
    gsap.to(male2.current, {
      scrollTrigger: {
        trigger: male2.current,
        scrub: true,
      },
      y: "-10vh",
    });
  });

  return (
    <section
      className="h-screen relative px-4 flex flex-col items-center text-white justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(360deg, #FCC521 -63.02%, #F6C526 -37.85%, #E6C433 -16.32%, #CAC34A 17.64%, #A4C269 50.75%, #88C180 66.22%, #0A7F3F 91.76%, #0A7F3F 100%)",
      }}
    >
      <h2 className="text-xl font-semibold text-center">Become a Cofounder</h2>
      <span className="mt-6 text-center relative z-2">
        Mint or buy one of the only thousand genesis country cards of the Zo
        World.
      </span>
      <Button className="mt-8 mb-16">Learn Benefits and Buy now</Button>
      <FemaleLeftFull1
        ref={female1}
        className="absolute left-0 z-1"
        style={{ width: "25vw", top: "16vh" }}
      />
      <MaleRightFull1
        ref={male1}
        className="absolute right-0 z-1"
        style={{ width: "35vw", top: "8vh" }}
      />
      <MaleSittingWithCards
        ref={male2}
        className="absolute z-1"
        style={{ height: "30vh", bottom: "-6vh" }}
      />
    </section>
  );
};

export default BecomeCofounder;
