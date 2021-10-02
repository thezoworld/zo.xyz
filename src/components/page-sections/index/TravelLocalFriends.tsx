import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  FemaleBottom1,
  FemaleLeftFull1,
  MaleRightFull1,
} from "../../../assets/avatars";
import { Globe, Sky } from "../../../assets/props";
import { useWindowSize } from "../../hooks";

interface TravelLocalFriendsProps {}

const TravelLocalFriends: React.FC<TravelLocalFriendsProps> = () => {
  const { width } = useWindowSize();

  const globe = useRef<SVGSVGElement>(null);
  const sky = useRef<SVGSVGElement>(null);
  const female1 = useRef<SVGSVGElement>(null);
  // const female2 = useRef<SVGSVGElement>(null);
  const male1 = useRef<SVGSVGElement>(null);
  const text = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(globe.current, {
      scrollTrigger: {
        trigger: globe.current,
        scrub: 1,
      },
      rotate: "540deg",
    });
    gsap.to(sky.current, {
      scrollTrigger: {
        trigger: sky.current,
        scrub: 1,
      },
      scale: width <= 768 ? 2 : 1.5,
    });
    gsap.to(text.current, {
      scrollTrigger: {
        trigger: globe.current,
        scrub: true,
      },
      y: "-20vh",
    });
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
  });

  return (
    <section
      className="h-screen relative px-4 flex flex-col md:flex-row items-center justify-center md:justify-start w-full overflow-hidden"
      style={{
        background: "#DC5347",
      }}
    >
      <div className="md:relative md:w-1/2 flex flex-col items-center justify-center">
        <Sky
          ref={sky}
          className="absolute bottom-0 md:bottom-auto"
          style={{
            height: width <= 768 ? "auto" : "30vw",
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
        style={{ marginBottom: width <= 768 ? "30vh" : "0" }}
      >
        <span className="mb-2">Travel with the help of</span>
        <span className="font-semibold">local friends around the world.</span>
      </h2>
      <FemaleLeftFull1
        ref={female1}
        className="absolute left-0 z-1 md:hidden block"
        style={{ width: "25vw", bottom: "10vh" }}
      />
      <FemaleBottom1
        className="absolute bottom-0 z-1 hidden md:block"
        style={{ height: "50vh", right: "10vh" }}
      />
      <MaleRightFull1
        ref={male1}
        className="absolute right-0 z-1"
        style={{
          width: width <= 768 ? "35vw" : "auto",
          height: width <= 768 ? "auto" : "50vh",
          bottom: width <= 768 ? "10vh" : "60vh",
        }}
      />
    </section>
  );
};

export default TravelLocalFriends;
