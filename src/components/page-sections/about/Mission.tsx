import Image from "next/image";
import React from "react";
import Background from "../../../../public/assets/about_us.png";
import { Flex } from "../../structure";
import { Container } from "../../ui";

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
          className="h-full md:pt-40 pt-24 pb-32 md:items-start items-center md:mx-0 mx-3 md:w-1/2"
        >
          <h1 className="text-white md:text-3xl text-2xl font-bold">
            About Zo World
          </h1>
          <h1 className="text-white md:text-xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
            We are building the Zo World as a community led travel ecosystem
            that enables everyone to travel anywhere in the world. We are using
            web3 network effects for working with individuals all across the
            world.
            <br />
            <br />
            We have launched Zo World genesis country set comprising of 11,111
            NFTs. Join our Discord, Twitter for further updates and detailed
            conversations.
          </h1>
        </Flex>
        <Flex
          col
          className="h-full md:pt-56 pb-32 md:items-start md:mx-0 mx-3 md:w-1/2"
        >
          <Image src={Background} alt="" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Mission;
