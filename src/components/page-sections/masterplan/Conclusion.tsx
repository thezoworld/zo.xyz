import React from "react";
import {
  Church,
  ThreeZobuStanding2,
  ZoAppOnPhone,
} from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface EarnCardsProps {}

const EarnCards: React.FC<EarnCardsProps> = () => {
  return (
    <section>
      <Container className="md:h-144 h-auto relative">
        <Flex
          col
          items="center"
          justify="center"
          className="h-full md:pt-24 md:pb-12 pb-0 pt-0 w-full text-black md:ml-10"
        >
          <h1 className="md:text-2xl mt-8 text-center md:leading-10 leading-7 text-lg md:mt-8 font-bold">
            Tokenomics
          </h1>
          <p className="mt-8 text-center md:mt-8">
            As we learn to work deeper with partners and service providers,
            we’ll launch a draft of our tokenomics. We’ll work with the
            community to take the best foot forward for building a future where
            Decentralized Operations, or as we like to call it, DOPE, enables
            individuals to efficiently work and contribute towards building a
            healthy travel and lifestyle ecosystem.
          </p>
          {/* <Link href="https://discord.zo.xyz">
              <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 text-orangy cursor-pointer">
                Learn More
              </p>
            </Link> */}
        </Flex>
        <Flex className="md:flex-row flex-col md:pt-12 pt-32 md:mx-0 mx-3">
          <Flex
            col
            className="h-full md:pt-20 pt-0 md:pb-24 md:items-start items-center md:w-1/2 overflow-hidden"
          >
            <Church className="md:absolute md:-left-0 md:-bottom-0 md:w-2/3 w-1/2" />
          </Flex>
          <Flex
            col
            className="h-full md:pt-0 pb-10 pt-0 md:items-start items-center md:w-1/2 text-black md:ml-10"
          >
            <h1 className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
              AR & Collectables
            </h1>
            <p className="mt-8 text-center md:text-left  md:mt-8">
              We’ve also finished more than 500 quests directed towards helping
              us travel and complete challenges in real life. In addition, we’re
              building our location and AR expertise for helping all projects
              make the most of the natural world by creating experiences on the
              Zo ecosystem across the globe, starting with Zo-founders Country
              NFTs.
            </p>
            {/* <Link href="https://discord.zo.xyz">
              <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 text-orangy cursor-pointer">
                Learn More
              </p>
            </Link> */}
          </Flex>
        </Flex>
      </Container>
      <Container
        className="pt-24 pb-24 text-center md:px-0 px-3 text-white"
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
