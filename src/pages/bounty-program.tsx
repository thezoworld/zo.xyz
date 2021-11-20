import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  BecomeFounderDesktop,
  BecomeFounderMob,
  BountyBG1,
  BountyBG2,
  BountyBG3,
  BountyBG4,
  BountyBG5,
  BountyBG6,
  BountyBG7,
  BountyZ,
} from "../assets/backgrounds";
import { DoubleArrowDown } from "../assets/props";
import { useWindowSize } from "../components/hooks";
import { Flex } from "../components/structure";
import { Button, Container } from "../components/ui";
import GiveawayCard from "../components/ui/GiveawayCard";
import bountyProgramData from "../data/bounties.json";

interface bountyProgramProps {}

const bountyProgram: React.FC<bountyProgramProps> = () => {
  const { isMobile } = useWindowSize();
  const z = useRef<SVGSVGElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const bg1 = useRef<SVGSVGElement>(null);
  const bg2 = useRef<SVGSVGElement>(null);
  const bg3 = useRef<SVGSVGElement>(null);
  const bg4 = useRef<SVGSVGElement>(null);
  const bg5 = useRef<SVGSVGElement>(null);
  const bg6 = useRef<SVGSVGElement>(null);
  const bg7 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(bg1.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg1.current,
      },
      y: "0vh",
    });
    gsap.to(bg2.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg2.current,
      },
      y: "75vh",
    });
    gsap.to(bg3.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg3.current,
      },
      y: "95vh",
    });
    gsap.to(bg4.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg4.current,
      },
      y: "100vh",
    });
    gsap.to(bg5.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg5.current,
      },
      y: "110vh",
    });
    gsap.to(bg6.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg6.current,
      },
      y: "110vh",
    });
    gsap.to(bg7.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg7.current,
      },
      y: "110vh",
    });
    gsap.to(content.current, {
      scrollTrigger: {
        scrub: true,
        // trigger: bg7.current,
      },
      y: "110vh",
    });
    gsap.to(z.current, {
      scrollTrigger: {
        scrub: true,
      },
      y: "110vh",
    });
  });

  return (
    <section
      className="h-full w-full min-h-screen relative"
      style={{ backgroundColor: "#5a9b4c" }}
    >
      <Head>
        <meta name="title" content="Zo World | Bounty Program" />
        <meta
          name="description"
          content="Complete any bounty to become one of the only 11,111 founders of the
            Zo World and earn a Founder NFT worth 0.1 ETH each."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zo.xyz/bounty-program" />
        <meta property="og:title" content="Zo World | Bounty Program" />
        <meta
          property="og:description"
          content="Complete any bounty to become one of the only 11,111 founders of the
            Zo World and earn a Founder NFT worth 0.1 ETH each."
        />
        <meta
          property="og:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zo.xyz/bounty-program" />
        <meta property="twitter:title" content="Zo World | Bounty Program" />
        <meta
          property="twitter:description"
          content="Complete any bounty to become one of the only 11,111 founders of the
            Zo World and earn a Founder NFT worth 0.1 ETH each."
        />
        <meta
          property="twitter:image"
          content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
        />
        <meta name="theme-color" content="#F15824" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@The_Zo_World" />
        <title>Zo World | Bounty Program</title>
      </Head>
      <section
        className="w-full relative overflow-hidden"
        style={{
          height: isMobile ? "90vh" : "110vh",
          background: "linear-gradient(180deg, #80EE9E 0%, #FFF8AE 100%)",
        }}
      >
        <div
          className="absolute inset-0 px-4 flex flex-col md:items-center"
          ref={content}
        >
          <h1 className="text-2xl md:text-4xl font-semibold md:text-center mt-32">
            Bounty Program
          </h1>
          <span className="mt-6 md:text-center md:text-lg md:max-w-3xl w-full">
            Complete any bounty to become one of the only 11,111 founders of the
            Zo World and earn a Founder NFT worth 0.1 ETH each.
          </span>
          <DoubleArrowDown
            className="mt-8 w-6 h-6 md:w-12 md:h-12"
            stroke="black"
          />
          {/* <Link href="/build-zo" passHref>
            <Button className="mt-8 md:mb-40 relative z-2">
              View Founder Benefits
            </Button>
          </Link> */}
        </div>
        <BountyBG7
          ref={bg7}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
        <BountyBG6
          ref={bg6}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
        <BountyBG5
          ref={bg5}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
        <BountyZ
          ref={z}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
        <BountyBG4
          ref={bg4}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
        <BountyBG3
          ref={bg3}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
        <BountyBG2
          ref={bg2}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
        <BountyBG1
          ref={bg1}
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ transformOrigin: "bottom" }}
        />
      </section>
      <Container
        className="px-4 relative -mt-2 z-2"
        style={{
          background: "linear-gradient(0deg, #00181B 0%, #002e30 100%)",
        }}
      >
        <div className="py-16 flex-shrink-0 grid grid-col-1 md:grid-cols-2 gap-8">
          {bountyProgramData.map((d, i) => (
            <GiveawayCard {...d} key={i} />
          ))}
          <div className="h-8 w-full" />
        </div>
      </Container>
    </section>
  );
};

export default bountyProgram;
