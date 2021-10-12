import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import { BitcoinZobu, GandhiJiStanding } from "../../../assets/props";

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => {
  return (
    <Container className="md:h-144 h-auto relative">
      <Flex className="md:flex-row flex-col pt-10 md:mx-0 mx-3">
        <Flex
          col
          className="h-full md:pt-32 pb-12 md:pb-32 pt-6 md:items-start items-center md:w-2/3 text-black md:order-1 order-2"
        >
          <h1 className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
            Decentralized Operations
          </h1>
          <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
            With web3, we are confident we can build a community-led travel
            ecosystem across the world. With the right incentives, penalties,
            risks and rewards, we see a future where anyone can travel anywhere
            in the world with the help of local friends.
          </p>
        </Flex>
        <Flex
          col
          className="h-full md:pt-40 pt-0 md:pb-32 md:items-start items-center md:w-1/3 md:order-2 order-1"
        >
          <BitcoinZobu className="md:absolute md:-right-0 md:top-20 md:w-1/3 w-2/3" />
        </Flex>
      </Flex>
      <Flex className="md:flex-row flex-col pt-10 md:mx-0 mx-3">
        <Flex
          col
          className="h-full md:pt-40 pt-0 md:pb-32 md:items-start items-center md:w-1/3"
        >
          <GandhiJiStanding className="md:absolute md:-left-0 md:bottom-0 md:w-1/5 w-1/2" />
        </Flex>
        <Flex
          col
          className="h-full md:pt-32 pb-12 pt-0 md:items-start items-center md:w-2/3 text-black"
        >
          <h1 className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
            Community Led
          </h1>
          <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
            On 2nd October 2021, we pay ode to one of humanity’s most
            outstanding modern leaders, Mahatama Gandhi. Taking forward his
            vision of building ground-up economies empowering local communities,
            we open our arms for 11,111 founders of the Zo World.
          </p>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Details;
