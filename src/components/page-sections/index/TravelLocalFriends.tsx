import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import {
  FemaleBottom1,
  FemaleLeftFull1,
  MaleRightFull1,
} from "../../../assets/avatars";
import { PlayCircle } from "../../../assets/icons";
import { Globe, Sky } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import { Button } from "../../ui";

interface TravelLocalFriendsProps {}

const TravelLocalFriends: React.FC<TravelLocalFriendsProps> = () => {
  const { isMobile } = useWindowSize();

  const [showLaunchVideo, setshowLaunchVideo] = useState<boolean>(false);

  const globe = useRef<SVGSVGElement>(null);
  const sky = useRef<SVGSVGElement>(null);
  const female1 = useRef<SVGSVGElement>(null);
  // const female2 = useRef<SVGSVGElement>(null);
  const male1 = useRef<SVGSVGElement>(null);
  const text = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!isMobile) {
      gsap.to(globe.current, {
        scrollTrigger: {
          trigger: globe.current,
          scrub: true,
        },
        rotate: "540deg",
      });
      gsap.to(sky.current, {
        scrollTrigger: {
          trigger: sky.current,
          scrub: true,
        },
        scale: isMobile ? 2 : 1.5,
      });
      gsap.to(text.current, {
        scrollTrigger: {
          trigger: globe.current,
          scrub: true,
        },
        y: "-20vh",
      });
    }
    gsap.to(female1.current, {
      scrollTrigger: {
        trigger: female1.current,
        scrub: true,
      },
      y: "20vh",
    });
    // gsap.to(female2.current, {
    //   scrollTrigger: {
    //     trigger: female2.current,
    //     scrub: true,
    //   },
    //   y: "5vh",
    // });
    gsap.to(male1.current, {
      scrollTrigger: {
        trigger: male1.current,
        scrub: true,
      },
      y: "20vh",
    });
  }, [isMobile]);

  return (
    <section
      className="h-screen relative px-4 flex flex-col md:flex-row items-center justify-center md:justify-start w-full overflow-hidden"
      style={{
        background: "#28735D",
      }}
    >
      {showLaunchVideo && (
        <Flex col className="fixed inset-0 p-4 z-70 md:pt-5 items-end bg-black">
          <Button
            onClick={() => setshowLaunchVideo(false)}
            className="md:mr-10"
          >
            Close
          </Button>
          <Flex
            items="center"
            className="self-center w-screen h-screen md:px-10 px-0 md:pt-4 md:pb-10"
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
      <div className="md:relative md:w-1/2 flex flex-col items-center justify-center">
        <Sky
          ref={sky}
          className="absolute bottom-0 md:bottom-auto"
          style={{
            height: isMobile ? "auto" : "30vw",
          }}
        />
        <Globe
          ref={globe}
          className="absolute"
          style={{
            height: "75vh",
            bottom: "-37.5vh",
          }}
        />
      </div>
      <h2
        ref={text}
        className="text-white text-xl md:text-2xl md:ml-12 tracking-wide text-center flex flex-col"
        style={{ marginBottom: isMobile ? "30vh" : "0" }}
      >
        <span className="mb-2">Travel fearlessly with the help of</span>
        <span className="font-semibold">local friends around the world.</span>
        <button
          className="mt-6 flex items-center justify-center px-6 py-4 text-sm md:text-base leading-none rounded-xl border border-white text-white"
          onClick={() => setshowLaunchVideo(true)}
        >
          <PlayCircle className="w-6 h-6 mr-3 md:w-8 md:h-8 md:mr-5" />
          Watch our video
        </button>
      </h2>
      <FemaleLeftFull1
        ref={female1}
        className="absolute left-0 z-1 md:hidden block"
        style={{ width: "25vw", bottom: "10vh" }}
      />
      <FemaleBottom1
        className="absolute bottom-0 z-1 hidden md:block"
        style={{ height: "40vh", right: "10vh" }}
      />
      <MaleRightFull1
        ref={male1}
        className="absolute right-0 z-1"
        style={{
          width: isMobile ? "35vw" : "auto",
          height: isMobile ? "auto" : "50vh",
          bottom: isMobile ? "10vh" : "60vh",
        }}
      />
    </section>
  );
};

export default TravelLocalFriends;
