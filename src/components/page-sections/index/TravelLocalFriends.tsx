import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FemaleLeftFull1, MaleRightFull1 } from "../../../assets/avatars";
import { Globe, Sky } from "../../../assets/props";

interface TravelLocalFriendsProps {}

const TravelLocalFriends: React.FC<TravelLocalFriendsProps> = () => {
  const globe = useRef<SVGSVGElement>(null);
  const sky = useRef<SVGSVGElement>(null);
  const female1 = useRef<SVGSVGElement>(null);
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
      scale: 2,
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
      className="h-screen relative px-4 flex flex-col items-center justify-center w-full overflow-hidden"
      style={{
        background: "#DC5347",
      }}
    >
      <h2
        ref={text}
        className="text-white text-xl tracking-wide text-center flex flex-col"
        style={{ marginBottom: "30vh" }}
      >
        <span className="mb-2">Travel with the help of</span>
        <span className="font-semibold">local friends around the world.</span>
      </h2>
      <Sky ref={sky} className="absolute bottom-0" style={{}} />
      <Globe
        ref={globe}
        className="absolute"
        style={{
          height: "75vh",
          bottom: "-37.5vh",
        }}
      />
      <FemaleLeftFull1
        ref={female1}
        className="absolute left-0 z-1"
        style={{ width: "25vw", bottom: "10vh" }}
      />
      <MaleRightFull1
        ref={male1}
        className="absolute right-0 z-1"
        style={{ width: "35vw", bottom: "10vh" }}
      />
    </section>
  );
};

export default TravelLocalFriends;
