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
        items="center"
        className="text-center flex-grow md:mx-0 mx-3 md:text-white text-black md:justify-between"
      >
        <h1
          className="md:text-7xl text-xl font-extrabold z-10"
          style={{ paddingTop: width <= 768 ? "10vh" : "14vh" }}
        >
          About Zo World
        </h1>
        <p
          className="md:text-xl max-w-3xl mx-auto text-md leading-relaxed z-10 pt-8 md:pt-0"
          style={{ paddingBottom: width > 768 ? "12vh" : "" }}
        >
          We are building the Zo World as a community led travel ecosystem that
          enables everyone to travel anywhere in the world. We are using web3
          network effects for working with individuals all across the world.
          <br />
          <br />
          We have launched Zo World genesis country set comprising of 11,111
          NFTs. Join our Discord, Twitter for further updates and detailed
          conversations.
        </p>
      </Flex>
    </section>
  );
};

export default Mission;
