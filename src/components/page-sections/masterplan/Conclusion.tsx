import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import { ThreeZobuStanding2, ZoAppOnPhone } from "../../../assets/props";

interface EarnCardsProps {}

const EarnCards: React.FC<EarnCardsProps> = () => {
  return (
    <section>
      <Container className="md:h-144 h-auto relative">
        <Flex className="md:flex-row flex-col pt-10 md:mx-0 mx-3">
          <Flex
            col
            className="h-full md:pt-40 pt-0 md:pb-32 pb-5 md:items-start items-center md:w-1/3 md:order-1 order-2"
          >
            <ThreeZobuStanding2 className="md:absolute md:-left-64 md:bottom-0 md:w-3/5 w-full" />
          </Flex>
          <Flex
            col
            className="h-full md:pt-12 pb-12 md:pl-8 pl-0 md:items-start items-center md:w-2/3 text-black md:order-2 order-1"
          >
            <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
              As we learn to work deeper with partners and service providers,
              we’ll launch a draft of our tokenomics. We’ll work with the
              community to take the best foot forward for building a future
              where Decentralized Operations, or as we like to call it, DOPE,
              enables individuals to efficiently work and contribute towards
              building a healthy travel and lifestyle ecosystem.
            </p>
            <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
              We’ve also finished more than 500 quests directed towards helping
              us travel and complete challenges in real life. In addition, we’re
              building our location and AR expertise for helping all projects
              make the most of the natural world by creating experiences on the
              Zo ecosystem across the globe, starting with Founders Country
              NFTs.
            </p>
          </Flex>
        </Flex>
      </Container>
      <Container
        className="md:text-2xl md:pt-40 pt-24 pb-24 text-lg text-center md:px-0 px-3 text-white"
        style={{ background: "#A3C550" }}
      >
        <p>
          Above all, we are having fun building our vision. Thanks to the
          possibilities enabled by current times. If you believe creating a
          future where anyone can travel anywhere fearlessly, is following your
          heart, please join us on our discord and let’s build the Zo World
          together \z/
        </p>
      </Container>
    </section>
  );
};

export default EarnCards;
