import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  FemaleLeftFull1,
  MaleRightFull1,
  MaleSittingWithCards,
} from "../../../assets/avatars";
import { CardBack } from "../../../assets/props";
import { Button } from "../../ui";

interface BecomeCofounderProps {}

const BecomeCofounder: React.FC<BecomeCofounderProps> = () => {
  const female1 = useRef<SVGSVGElement>(null);
  const male1 = useRef<SVGSVGElement>(null);
  const male2 = useRef<SVGSVGElement>(null);
  const cardLeft1 = useRef<SVGSVGElement>(null);
  const cardLeft2 = useRef<SVGSVGElement>(null);
  const cardLeft3 = useRef<SVGSVGElement>(null);
  const cardRight1 = useRef<SVGSVGElement>(null);
  const cardRight2 = useRef<SVGSVGElement>(null);
  const cardRight3 = useRef<SVGSVGElement>(null);

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
    gsap.to(cardLeft1.current, {
      scrollTrigger: {
        trigger: cardLeft1.current,
        scrub: true,
      },
      y: "-5vh",
      x: "-5vw",
      rotation: "-60deg",
    });
    gsap.to(cardLeft2.current, {
      scrollTrigger: {
        trigger: cardLeft2.current,
        scrub: true,
      },
      y: "-5vh",
      x: "-3vw",
      rotation: "-55deg",
    });
    gsap.to(cardLeft3.current, {
      scrollTrigger: {
        trigger: cardLeft3.current,
        scrub: true,
      },
      y: "-5vh",
      x: "-1vw",
      rotation: "-50deg",
    });
    gsap.to(cardRight1.current, {
      scrollTrigger: {
        trigger: cardRight1.current,
        scrub: true,
      },
      y: "-5vh",
      x: "5vw",
      rotation: "60deg",
    });
    gsap.to(cardRight2.current, {
      scrollTrigger: {
        trigger: cardRight2.current,
        scrub: true,
      },
      y: "-5vh",
      x: "3vw",
      rotation: "55deg",
    });
    gsap.to(cardRight3.current, {
      scrollTrigger: {
        trigger: cardRight3.current,
        scrub: true,
      },
      y: "-5vh",
      x: "1vw",
      rotation: "50deg",
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
      <CardBack
        ref={cardLeft1}
        className="absolute z-1 shadow-md"
        style={{
          height: "5vh",
          transform: "rotate(-45deg)",
          bottom: "10vh",
          left: "20vw",
        }}
      />
      <CardBack
        ref={cardLeft2}
        className="absolute z-1 shadow-md"
        style={{
          height: "5vh",
          transform: "rotate(-45deg)",
          bottom: "20vh",
          left: "18vw",
        }}
      />
      <CardBack
        ref={cardLeft3}
        className="absolute z-1 shadow-md"
        style={{
          height: "5vh",
          transform: "rotate(-35deg)",
          bottom: "30vh",
          left: "24vw",
        }}
      />
      <CardBack
        ref={cardRight1}
        className="absolute z-1 shadow-md"
        style={{
          height: "5vh",
          transform: "rotate(45deg)",
          bottom: "10vh",
          right: "24vw",
        }}
      />
      <CardBack
        ref={cardRight2}
        className="absolute z-1 shadow-md"
        style={{
          height: "5vh",
          transform: "rotate(45deg)",
          bottom: "20vh",
          right: "22vw",
        }}
      />
      <CardBack
        ref={cardRight3}
        className="absolute z-1 shadow-md"
        style={{
          height: "5vh",
          transform: "rotate(35deg)",
          bottom: "30vh",
          right: "28vw",
        }}
      />
    </section>
  );
};

export default BecomeCofounder;
