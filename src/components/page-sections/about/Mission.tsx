import React from "react";
import { AboutZoDesktop, AboutZoMob } from "../../../assets/backgrounds";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";

interface MissionProps {}

const Mission: React.FC<MissionProps> = () => {
  const { width } = useWindowSize();
  return (
    <section className="h-screen w-full">
      {width <= 768 ? (
        <AboutZoMob className="absolute top-0 w-full z-5" />
      ) : (
        <AboutZoDesktop className="absolute top-0 w-full z-5" />
      )}
      <Flex
        col
        items="center"
        className="text-center md:pt-56 pt-40 md:mx-0 mx-3 md:text-white text-black "
      >
        <h1 className="md:text-7xl text-xl font-extrabold z-10">
          About Zo World
        </h1>
        <h1 className="md:text-2xl text-md font-bold z-10 md:mt-20 md:pt-108 pt-5">
          Go on adventures in real life, complete quests with the local Zo
          community,
          <br /> earn collectibles and follow your heart in the Zo World.
        </h1>
      </Flex>
    </section>
  );
};

export default Mission;
