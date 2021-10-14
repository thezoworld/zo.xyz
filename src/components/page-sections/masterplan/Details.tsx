import React from "react";
import { BitcoinZobu, GandhiJiStanding } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => {
  return (
    <Container className="md:h-144 h-auto relative">
      <Flex className="md:flex-row flex-col pt-10 md:mx-0 mx-3">
        <Flex
          col
          justify="center"
          className="h-full items-start px-8 md:px-0 md:w-2/3 text-black order-1"
        >
          <h1 className="md:text-2xl mt-8 text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
            Decentralized Operations
          </h1>
          <p className="mt-8 text-left md:mt-8 pb-8 md:pb-0 max-w-xl">
            With web3, we are building a community-led travel ecosystem across
            the world.
            <br />
            <br />
            With the right incentives, penalties, risks and rewards, we see a
            future where anyone can travel anywhere in the world with the help
            of local friends.
          </p>
        </Flex>
        <Flex
          col
          justify="center"
          className="h-full md:items-start items-center md:w-1/3 order-2 relative"
        >
          <BitcoinZobu className="md:absolute md:bottom-0 md:top-0 md:w-full w-2/3" />
        </Flex>
      </Flex>
      <Flex className="md:flex-row flex-col md:pt-64 pt-10 md:pb-40 md:mx-0 mx-3">
        <Flex
          col
          justify="center"
          // className="h-full md:pt-32 pt-0 md:pb-40 md:items-start items-center md:w-1/3"
          className="h-full md:items-start items-center md:w-1/3 relative order-2 md:order-1"
        >
          <GandhiJiStanding className="md:absolute md:left-0 md:inset-y-0 md:w-40 w-32" />
        </Flex>
        <Flex
          col
          justify="center"
          className="h-full items-start md:pt-0 pt-10 px-8 md:px-0 md:pb-0 pb-10 md:w-2/3 text-black order-1 md:order-2"
        >
          <h1 className="md:text-2xl text-left md:leading-10 leading-7 text-lg font-bold">
            Community Led
          </h1>
          <p className="mt-8 text-left md:mt-8">
            We revealed our website on 2nd October 2021, paying ode to one of
            humanity’s most outstanding modern leaders, Mahatama Gandhi 🙏
            <br />
            <br />
            Taking forward his vision of building ground-up economies empowering
            local communities, we open our arms for 11,111 founders of the Zo
            World.
          </p>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Details;
