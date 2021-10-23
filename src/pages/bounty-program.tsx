import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BecomeFounderDesktop, BecomeFounderMob } from "../assets/backgrounds";
import { useWindowSize } from "../components/hooks";
import { Flex } from "../components/structure";
import { Container } from "../components/ui";
import GiveawayCard from "../components/ui/GiveawayCard";
import bountyProgramData from "../data/bounties.json";

interface bountyProgramProps {}

const bountyProgram: React.FC<bountyProgramProps> = () => {
  const { isMobile } = useWindowSize();

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
      {isMobile ? (
        <BecomeFounderMob className="absolute top-0" />
      ) : (
        <BecomeFounderDesktop className="absolute top-0" />
      )}
      <Container className="px-4">
        <Flex col items="center" className="pt-24 text-black">
          <h1 className="text-2xl md:text-3xl font-bold">Bounty Program</h1>
          {/* <h2 className="text-lg font-semibold my-4 text-center">
            15 ETH worth of giveways up for grabs!
          </h2> */}
          <p className="text-center mt-4">
            Complete any bounty to become one of the only 11,111 founders of the
            Zo World and earn a Founder NFT worth 0.1 ETH each.
          </p>
          <Link href="/become-a-founder#founder-benefits" passHref>
            <button className="mt-6 flex items-center justify-center px-6 py-4 text-sm md:text-base leading-none rounded-xl border border-black text-black">
              Check out our Founder benefits
            </button>
          </Link>
        </Flex>
      </Container>
      <Container className="py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
          {bountyProgramData.map((d, i) => (
            <GiveawayCard {...d} key={i} />
          ))}
        </div>
      </Container>
      <Container></Container>
    </section>
  );
};

export default bountyProgram;
