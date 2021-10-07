import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { MaleSittingWithCards } from "../../../assets/avatars";
import { CardBack } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import { Button } from "../../ui";
import CountryCardIndia from "../../../../public/assets/Country-card_India.gif";
import CountryCardSpain from "../../../../public/assets/Country-Cards_Spain.gif";
import CountryCardRussia from "../../../../public/assets/Country-Cards_Russia.gif";
import CountryCardJapan from "../../../../public/assets/Country-Cards_Japan.gif";
import CountryCardFrance from "../../../../public/assets/Country-Cards_France.gif";
import CountryCardElSalvador from "../../../../public/assets/Country-Cards_El-Salvador.gif";

interface BecomeCofounderProps {}

const BecomeCofounder: React.FC<BecomeCofounderProps> = () => {
  const { width } = useWindowSize();
  // const female1 = useRef<SVGSVGElement>(null);
  // const male1 = useRef<SVGSVGElement>(null);
  const male2 = useRef<SVGSVGElement>(null);
  const cardLeft1 = useRef<SVGSVGElement>(null);
  const cardLeft2 = useRef<SVGSVGElement>(null);
  const cardLeft3 = useRef<SVGSVGElement>(null);
  const cardRight1 = useRef<SVGSVGElement>(null);
  const cardRight2 = useRef<SVGSVGElement>(null);
  const cardRight3 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to(female1.current, {
    //   scrollTrigger: {
    //     trigger: female1.current,
    //     scrub: true,
    //   },
    //   y: "8vh",
    // });
    // gsap.to(male1.current, {
    //   scrollTrigger: {
    //     trigger: male1.current,
    //     scrub: true,
    //   },
    //   y: "-10vh",
    // });

    gsap.to(male2.current, {
      scrollTrigger: {
        trigger: male2.current,
        scrub: true,
      },
      y: "-10vh",
    });
    // gsap.to(cardLeft1.current, {
    //   scrollTrigger: {
    //     trigger: cardLeft1.current,
    //     scrub: true,
    //   },
    //   y: "-5vh",
    //   x: "-5vw",
    //   rotation: "-60deg",
    // });
    // gsap.to(cardLeft2.current, {
    //   scrollTrigger: {
    //     trigger: cardLeft2.current,
    //     scrub: true,
    //   },
    //   y: "-5vh",
    //   x: "-3vw",
    //   rotation: "-55deg",
    // });
    // gsap.to(cardLeft3.current, {
    //   scrollTrigger: {
    //     trigger: cardLeft3.current,
    //     scrub: true,
    //   },
    //   y: "-5vh",
    //   x: "-1vw",
    //   rotation: "-50deg",
    // });
    // gsap.to(cardRight1.current, {
    //   scrollTrigger: {
    //     trigger: cardRight1.current,
    //     scrub: true,
    //   },
    //   y: "-5vh",
    //   x: "5vw",
    //   rotation: "60deg",
    // });
    // gsap.to(cardRight2.current, {
    //   scrollTrigger: {
    //     trigger: cardRight2.current,
    //     scrub: true,
    //   },
    //   y: "-5vh",
    //   x: "3vw",
    //   rotation: "55deg",
    // });
    // gsap.to(cardRight3.current, {
    //   scrollTrigger: {
    //     trigger: cardRight3.current,
    //     scrub: true,
    //   },
    //   y: "-5vh",
    //   x: "1vw",
    //   rotation: "50deg",
    // });
  });

  return (
    <section
      className="h-screen relative px-4 flex flex-col md:flex-row items-center text-black justify-center overflow-hidden md:-mt-0 -mt-20"
      style={{
        background:
          "linear-gradient(359.84deg, #FFFFFF -66.78%, #F6FCFC -56.46%, #DFF2F5 -39.9%, #B9E2E8 -19.17%, #84CDD7 4.88%, #CEEBEF 57.8%, #FFFFFF 96.43%)",
      }}
    >
      <Flex
        items="center"
        className="max-w-5xl md:flex-row flex-col w-full mx-auto"
      >
        <Flex col className="items-center md:items-start max-w-lg">
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Become a founder
          </h2>
          <span className="mt-6 md:text-lg text-center md:text-left relative z-2">
            Mint or buy one of the only thousand genesis country cards of the Zo
            World.
          </span>
          <Link href="/become-a-founder" passHref>
            <Button className="mt-8 mb-16">Learn Benefits and Buy now</Button>
          </Link>
        </Flex>
        <Flex
          col
          items="center"
          className="absolute bottom-0 w-full md:w-auto md:-right-12 md:relative"
        >
          <MaleSittingWithCards
            ref={male2}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "30vh" : "50vh",
              bottom: width <= 768 ? "-6vh" : "",
              right: width <= 768 ? "" : "-24vw",
            }}
          />
          <CardBack
            ref={cardLeft1}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "5vh" : "10vh",
              // transform: "rotate(-45deg)",
              bottom: width <= 768 ? "10vh" : "-25vh",
              left: width <= 768 ? "20vw" : "10vw",
            }}
          />
          {/* <Image
            ref={cardLeft1}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "5vh" : "10vh",
              // transform: "rotate(-45deg)",
              bottom: width <= 768 ? "10vh" : "-25vh",
              left: width <= 768 ? "20vw" : "10vw",
            }}
            src={CountryCardIndia}
            alt=""
            className="absolute z-1"
          /> */}
          <CardBack
            ref={cardLeft2}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "5vh" : "10vh",
              // transform: "rotate(-45deg)",
              bottom: width <= 768 ? "20vh" : "-10vh",
              left: width <= 768 ? "18vw" : "8vw",
            }}
          />
          <CardBack
            ref={cardLeft3}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "5vh" : "10vh",
              // transform: "rotate(-35deg)",
              bottom: width <= 768 ? "30vh" : "5vh",
              left: width <= 768 ? "24vw" : "8vw",
            }}
          />
          <CardBack
            ref={cardRight1}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "5vh" : "10vh",
              // transform: "rotate(-45deg)",
              bottom: width <= 768 ? "10vh" : "-25vh",
              right: width <= 768 ? "24vw" : "-26vw",
            }}
          />
          <CardBack
            ref={cardRight2}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "5vh" : "10vh",
              // transform: "rotate(-45deg)",
              bottom: width <= 768 ? "20vh" : "-10vh",
              right: width <= 768 ? "22vw" : "-28vw",
            }}
          />
          <CardBack
            ref={cardRight3}
            className="absolute z-1"
            style={{
              height: width <= 768 ? "5vh" : "10vh",
              // transform: "rotate(-35deg)",
              bottom: width <= 768 ? "30vh" : "5vh",
              right: width <= 768 ? "28vw" : "-28vw",
            }}
          />
        </Flex>
      </Flex>
      {/* <FemaleLeftFull1
        ref={female1}
        className="absolute left-0 z-1"
        style={{
          width: width < 768 ? "25vw" : "10vw",
          top: width < 768 ? "16vh" : "24vh",
        }}
      />
      <MaleRightFull1
        ref={male1}
        className="absolute right-0 z-1"
        style={{
          width: width < 768 ? "35vw" : "10vw",
          top: width < 768 ? "8vh" : "20vh",
        }}
      /> */}
    </section>
  );
};

export default BecomeCofounder;
