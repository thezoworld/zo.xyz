import React from "react";
import { AboutZoDesktop, AboutZoMob } from "../../../assets/backgrounds";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";

interface MissionProps {}

const Mission: React.FC<MissionProps> = () => {
  const { width } = useWindowSize();
  return (
    <section
      className="h-screen w-full flex flex-col items-center relative"
      style={{ backgroundColor: "#b7e2e8" }}
    >
      {width <= 768 ? (
        <AboutZoMob className="absolute bottom-0 w-full z-5" />
      ) : (
        <AboutZoDesktop className="absolute bottom-0 w-full z-5" />
      )}
      <Flex
        col
        className="text-left items-start md:items-center md:text-center flex-grow md:mx-0 mx-12 md:text-white text-black md:justify-between"
      >
        <h1
          className="md:text-5xl text-2xl font-extrabold z-10"
          style={{ paddingTop: width <= 768 ? "10vh" : "20vh" }}
        >
          About Zo World
        </h1>
        <p
          className="max-w-2xl mx-auto leading-relaxed z-10 pt-8 md:pt-0"
          style={{ paddingBottom: width > 768 ? "8vh" : "" }}
        >
          We are building the Zo World as a community led travel ecosystem that
          enables everyone to travel anywhere in the world.
          <br />
          <br />
          We are using web3 technologies for collaborating with individuals and
          businesses all across the world.
          <br />
          <br />
          Starting with "Founders of the Zo World" collection comprising of
          11,111 NFTs. Upto half to be minted by believers starting on 31st
          October and rest to be earned by the Zo community.
        </p>
      </Flex>
    </section>
  );
};

export default Mission;
