import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { Page } from "../components/structure";

gsap.registerPlugin(ScrollTrigger);

const TechPage: NextPage = () => {
  const first = useRef<any>(null);
  const firstText1 = useRef<any>(null);
  const firstText2 = useRef<any>(null);
  const firstText3 = useRef<any>(null);
  const second = useRef<any>(null);
  const secondText1 = useRef<any>(null);
  const third = useRef<any>(null);
  const thirdText1 = useRef<any>(null);

  useEffect(() => {
    // gsap.to(first.current, {
    //   scrollTrigger: {
    //     scrub: true,
    //   },
    //   x: 40,
    // });
    gsap.to(firstText1.current, {
      scrollTrigger: {
        scrub: true,
      },
      x: -40,
    });
    gsap.to(firstText2.current, {
      scrollTrigger: {
        scrub: true,
      },
      scale: -2,
    });
    gsap.to(firstText3.current, {
      scrollTrigger: {
        scrub: true,
      },
      y: -10,
      scale: 20,
    });
    gsap.to(second.current, {
      scrollTrigger: {
        trigger: second.current,
        scrub: true,
        start: "top top",
        end: "-=200px",
      },
      backgroundColor: "white",
      scale: 1,
    });
    gsap.to(secondText1.current, {
      scrollTrigger: {
        trigger: second.current,
        scrub: 2,
      },
      x: window.innerWidth,
    });
    gsap.to(third.current, {
      scrollTrigger: {
        trigger: third.current,
        scrub: true,
        start: "top top",
        end: "-=200px",
      },
      backgroundColor: "black",
      scale: 1,
    });
    gsap.to(thirdText1.current, {
      scrollTrigger: {
        trigger: third.current,
        scrub: 2,
      },
      x: -window.innerWidth,
    });
  }, []);

  return (
    <Page className="bg-black max-w-full overflow-hidden">
      <section
        className="h-screen w-full bg-black text-white flex flex-col items-center justify-center font-black text-6xl"
        style={{ marginBottom: "100vh" }}
        ref={first}
      >
        <div
          className="text-orangy relative -left-24"
          style={{ fontSize: "10vw" }}
          ref={firstText1}
        >
          Tech
        </div>
        <div
          className="text-gray-500"
          style={{ fontSize: "8vw" }}
          ref={firstText2}
        >
          @
        </div>
        <div style={{ fontSize: "20vw" }} ref={firstText3}>
          Zo World
        </div>
      </section>
      <section
        className="h-auto w-screen text-black flex flex-col items-start justify-center font-black"
        ref={second}
      >
        <div
          className="text-gray-500 relative"
          style={{ fontSize: "5vw", marginBottom: "20vh", marginTop: "30vh" }}
          ref={secondText1}
        >
          About us
        </div>

        <div
          className="relative"
          style={{ fontSize: "10vw", paddingBottom: "40vh" }}
        >
          We are a small team of passionate engineers trying to unlock the
          global travel.
        </div>
      </section>
      <section
        className="min-h-screen w-screen bg-white text-white flex flex-col items-start justify-center font-black"
        ref={third}
      >
        <span
          className="text-gray-500 self-end"
          style={{ fontSize: "5vw", paddingTop: "40vh" }}
          ref={thirdText1}
        >
          Technologies we are
          <br />
          working on
        </span>

        <span className="relative" style={{ fontSize: "10vw" }}>
          React
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          Python
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          Solidity
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          Typescript
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          React Native
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          Web3
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          AR
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          Metaverse
        </span>
        <span className="relative" style={{ fontSize: "10vw" }}>
          NX
        </span>
      </section>
      <section className="h-screen w-full bg-black text-white flex flex-col items-center justify-center font-black text-6xl">
        <span className="relative text-gray-500" style={{ fontSize: "10vw" }}>
          Are you excited?
        </span>
        <a href="#" style={{ fontSize: "20vw" }}>
          Join Us
        </a>
      </section>
    </Page>
  );
};

export default TechPage;
