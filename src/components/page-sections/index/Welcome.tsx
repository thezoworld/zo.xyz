import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FemaleBoarding,
  FemaleFull1,
  MaleFull1,
  MaleFull2,
  MaleWithMap,
} from "../../../assets/avatars";
import { ClifSunset, SunsetDesktop } from "../../../assets/backgrounds";
import { LeavesLeft2, LeavesRight2, OrangeCircle } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import { Button } from "../../ui";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const [showLaunchVideo, setshowLaunchVideo] = useState<boolean>(false);

  const { width } = useWindowSize();

  const female1 = useRef<SVGSVGElement>(null);
  const female2 = useRef<SVGSVGElement>(null);
  const male1 = useRef<SVGSVGElement>(null);
  const male2 = useRef<SVGSVGElement>(null);
  const male3 = useRef<SVGSVGElement>(null);
  const circle = useRef<SVGSVGElement>(null);
  const leavesLeft = useRef<SVGSVGElement>(null);
  const leavesRight = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(female1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: female1.current,
        start: 10,
      },
      x: "-20vw",
    });
    gsap.to(female2.current, {
      scrollTrigger: {
        scrub: true,
        trigger: female2.current,
        start: 10,
      },
      x: "15vw",
    });
    gsap.to(male2.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male2.current,
        start: 10,
      },
      x: "20vw",
    });
    gsap.to(male3.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male3.current,
        start: 10,
      },
      x: "-15vw",
    });
    gsap.to(male1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male1.current,
        start: 10,
      },
      y: "-20vh",
    });
    gsap.to(circle.current, {
      scrollTrigger: {
        scrub: true,
      },
      scale: 100,
    });
    gsap.to(leavesLeft.current, {
      scrollTrigger: {
        scrub: true,
        trigger: leavesLeft.current,
        start: 10,
      },
      scale: 1.5,
    });
    gsap.to(leavesRight.current, {
      scrollTrigger: {
        scrub: true,
        trigger: leavesRight.current,
        start: 10,
      },
      scale: 1.5,
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
      {width > 0 ? (
        width <= 768 ? (
          <ClifSunset className="absolute inset-0 z-0 h-screen w-full" />
        ) : (
          <SunsetDesktop className="absolute inset-0 w-full z-0 h-screen" />
        )
      ) : null}
      {showLaunchVideo && (
        <Flex
          col
          className="fixed w-screen md:h-full overflow-auto md:max-h-screen z-50 md:pt-5 md:items-end items-center md:bg-gray-100 bg-black md:bg-opacity-70"
        >
          <Button
            onClick={() => setshowLaunchVideo(false)}
            className="md:mr-10"
          >
            Close
          </Button>
          <Flex
            items="center"
            className="self-center w-screen h-screen md:px-10 px-0 pt-4 pb-10"
          >
            <iframe
              src="https://www.youtube.com/embed/0gijEkpRdAU"
              title="Zo World | Launch Video"
              frameBorder="0"
              className="md:w-full md:h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Flex>
        </Flex>
      )}
      <LeavesLeft2
        ref={leavesLeft}
        className="absolute left-0 z-3 bottom-0"
        style={{
          width: width <= 768 ? "auto" : "20vw",
          height: width <= 768 ? "12vh" : "auto",
        }}
      />
      <LeavesRight2
        ref={leavesRight}
        className="absolute right-0 z-3 bottom-0"
        style={{
          width: width <= 768 ? "auto" : "20vw",
          height: width <= 768 ? "12vh" : "auto",
        }}
      />
      <div />
      <Flex col items="center" className="relative z-3">
        <span
          className="font-semibold text-2xl md:text-4xl"
          style={{ color: "#D32328" }}
        >
          Welcome to
        </span>
        <h1 className="mt-2 text-white text-4xl md:text-5xl md:mt-6 font-extrabold">
          The Zo World
        </h1>
        <Button className="mt-8" onClick={() => setshowLaunchVideo(true)}>
          Watch our video
        </Button>
      </Flex>
      <Flex items="end" justify="around" className="mb-12 md:px-32 px-0 w-full">
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
          className="relative z-2 mb-12 md:pl-24"
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
