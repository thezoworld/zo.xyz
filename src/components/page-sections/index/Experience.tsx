import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { MultipleFull1, MultipleFull2 } from "../../../assets/avatars";
import { Cuisines, Monuments } from "../../../assets/props";
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
          ref={culture}
          className="pin h-screen md:w-1/3 w-screen relative px-4 flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #317ED8 0%, #2162AE 47.92%, #063F82 100%)",
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
            <MultipleFull1 style={{ width: width <= 768 ? "80vw" : "20vw" }} />
            <span className="font-semibold mt-12 text-xl">Local Culture</span>
          </Flex>
        </section>
        <section
          ref={cuisines}
          className="pin h-screen md:w-1/3 w-screen relative px-4 flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(102.34% 102.34% at 50% 50%, #025F5F 0%, #014040 48.96%, #013434 100%)",
          }}
        >
          <span className="text-3xl md:block hidden -mt-8 relative -top-2 text-white">
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
            <Cuisines style={{ width: width <= 768 ? "80vw" : "20vw" }} />
            <span className="font-semibold mt-12 text-xl">Cuisines</span>
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
      {width <= 768 ? (
        <section
          ref={more}
          className="bg-white h-screen w-screen overflow-hidden relative px-4 flex flex-col items-center justify-start"
        >
          <section
            className="w-full relative flex flex-col justify-start items-center text-white overflow-hidden"
            style={{
              width: "180vw",
              height: "80vh",
              borderBottomLeftRadius: "40vh",
              borderBottomRightRadius: "40vh",
              background:
                "radial-gradient(34.57% 34.57% at 50% 68.22%, #EAC952 0%, #EFCE58 48.96%, #C7A324 100%)",
            }}
          >
            <span className="font-semibold text-xl relative z-1 mt-32">
              and much more...
            </span>
            <MultipleFull2
              className="absolute"
              style={{ height: "50vh", bottom: "-20vh" }}
            />
          </section>
          <span className="font-normal text-lg text-center mt-12">
            as you complete quests along with earning collectables as NFTs.
          </span>
        </section>
      ) : (
        <section
          ref={more}
          className="bg-white h-screen w-screen overflow-hidden relative px-4 flex items-center justify-start"
        >
          <section
            className="w-full relative flex flex-col justify-start items-center text-white overflow-hidden"
            style={{
              width: "50vw",
              height: "50vw",
              borderRadius: "100%",
              background:
                "radial-gradient(34.57% 34.57% at 50% 68.22%, #EAC952 0%, #EFCE58 48.96%, #C7A324 100%)",
            }}
          >
            <MultipleFull2
              className="absolute"
              style={{ height: "50vh", bottom: "-16vh" }}
            />
          </section>
          <Flex col items="center" className="ml-12">
            <span className="font-semibold text-2xl relative z-1">
              and much more...
            </span>
            <span className="font-normal text-xl text-center mt-12">
              as you complete quests along with earning collectables as NFTs.
            </span>
          </Flex>
        </section>
      )}
    </>
  );
};

export default Experience;
