/* eslint-disable @next/next/no-img-element */
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { MultipleFull2, MultipleFull3 } from "../../../assets/avatars";
import { Cuisines, DoubleArrowDown, Monuments } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  const cuisines = useRef<HTMLElement>(null);
  const culture = useRef<HTMLElement>(null);
  const history = useRef<HTMLElement>(null);
  const more = useRef<HTMLElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: cuisines.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: culture.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: history.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });

  return (
    <>
      <Flex className="md:flex-row flex-col w-full">
        <section
          ref={cuisines}
          className="pin h-screen md:w-1/3 w-screen relative px-4 flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(102.34% 102.34% at 50% 50%, #025F5F 0%, #014040 48.96%, #013434 100%)",
          }}
        >
          <Flex
            col
            items="center"
            className="w-full text-white justify-between md:justify-end"
            style={{ height: width <= 768 ? "auto" : "50vh" }}
          >
            <span className="mb-12 font-normal text-lg md:hidden block">
              Experience
            </span>
            <Cuisines style={{ width: width <= 768 ? "80vw" : "20vw" }} />
            <span className="font-semibold mt-12 text-xl">Cuisines</span>
          </Flex>
        </section>
        <section
          ref={culture}
          className="pin h-screen md:w-1/3 w-screen relative px-4 flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #317ED8 0%, #2162AE 47.92%, #063F82 100%)",
          }}
        >
          <span className="text-3xl md:block hidden -mt-8 relative -top-12 text-white">
            Experience
          </span>
          <Flex
            col
            items="center"
            className="w-full text-white justify-between md:justify-end"
            style={{ height: width <= 768 ? "auto" : "50vh" }}
          >
            <span className="mb-12 font-normal text-lg md:hidden block">
              Experience
            </span>
            <MultipleFull3 style={{ width: width <= 768 ? "80vw" : "20vw" }} />
            <span className="font-semibold mt-12 text-xl">Local Culture</span>
          </Flex>
        </section>
        <section
          ref={history}
          className="h-screen md:w-1/3 w-screen relative px-4 flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(57.89% 57.89% at 50% 61.09%, #EA5F52 0%, #BF372A 58.85%, #911C11 100%)",
          }}
        >
          <Flex
            col
            items="center"
            className="w-full text-white justify-between md:justify-end"
            style={{ height: width <= 768 ? "auto" : "50vh" }}
          >
            <span className="mb-12 font-normal text-lg md:hidden block">
              Experience
            </span>
            <Monuments style={{ width: width <= 768 ? "80vw" : "20vw" }} />
            <span className="font-semibold mt-12 text-xl">History</span>
          </Flex>
        </section>
      </Flex>
      <section
        ref={more}
        className="bg-white h-screen w-screen overflow-hidden relative px-4 flex flex-col items-center justify-start"
      >
        <section
          className="w-full relative flex flex-col justify-start items-center text-white overflow-hidden"
          style={{
            width: width <= 768 ? "180vw" : "100vw",
            height: "70vh",
            borderBottomLeftRadius: "88vw",
            borderBottomRightRadius: "88vw",
            background:
              "radial-gradient(34.57% 34.57% at 50% 68.22%, #EAC952 0%, #EFCE58 48.96%, #C7A324 100%)",
          }}
        >
          <span className="font-semibold text-2xl relative z-1 mt-32">
            and much more...
          </span>
          <MultipleFull2
            className="absolute w-full"
            style={{ height: width <= 768 ? "50vh" : "60vh", bottom: "-20vh" }}
          />
        </section>
        <span className="font-normal text-lg text-center mt-12">
          as you complete quests along with earning collectables as NFTs.
        </span>
        <DoubleArrowDown className="h-8 mt-6" />
      </section>
    </>
  );
};

export default Experience;
