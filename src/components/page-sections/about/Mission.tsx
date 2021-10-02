import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import Image from "next/image";
import Background from "../../../assets/backgrounds/about_us.png";

interface MissionProps {}

const Mission: React.FC<MissionProps> = () => {
  return (
    <Container
      style={{
        background: "linear-gradient(180deg, #88C180 0%, #2FABA9 109.84%)",
      }}
      className="md:h-144"
    >
      <Flex className="md:flex-row flex-col">
        <Flex
          col
          className="h-full md:pt-40 pt-32 pb-32 md:items-start md:mx-0 mx-3 md:w-1/2"
        >
          <h1 className="text-white md:text-4xl text-3xl font-bold">
            About Zo World
          </h1>
          <h1 className="text-white md:text-2xl text-xl md:mt-8">
            Go on adventures in real life, complete quests
            <br /> with the local Zo community, earn <br /> collectibles and
            follow your heart in the Zo World.
          </h1>
        </Flex>
        <Flex
          col
          className="h-full md:pt-40 pb-32 md:items-start md:mx-0 mx-3 md:w-1/2"
        >
          <Image src={Background} alt="" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Mission;
