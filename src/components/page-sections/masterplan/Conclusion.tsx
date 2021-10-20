import React from "react";
import { Church } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface EarnCardsProps {}

const EarnCards: React.FC<EarnCardsProps> = () => {
  return (
    <section>
      <Container className="h-full relative px-4">
        <Flex
          col
          justify="center"
          className="h-full md:py-12 py-8 items-start md:items-center px-8 md:px-0 w-full text-black md:ml-10"
        >
          <h1 className="md:text-2xl mt-8 md:text-center text-left w-full md:leading-10 leading-7 text-lg md:mt-8 font-bold">
            Tokenomics
          </h1>
          <p className="my-8 md:text-center">
            As we learn to work deeper with partners and service providers,
            we’ll launch the first draft paper for Zoconomics of the Zo World.
            <br />
            <br />
            We’ll work with fellow founders as we build Decentralized Operations
            (DOPE). Incentives, feedbacks and penalties will help establish the
            Zo brand as symbol of trust.
            <br />
            <br />
            Web3 will enable individuals and businesses to easily trust, work
            and earn by building the Zo World.
          </p>
          {/* <Link href="https://discord.zo.xyz">
              <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 text-orangy cursor-pointer">
                Learn More
              </p>
            </Link> */}
        </Flex>
        <Flex className="md:flex-row flex-col md:py-2 px-8 md:px-0">
          <Flex
            col
            justify="center"
            className="h-full md:items-start items-center md:w-1/2 overflow-hidden order-2 md:order-1"
          >
            <Church className="md:absolute md:left-0 md:bottom-0 md:w-2/3 w-1/2" />
          </Flex>
          <Flex
            col
            justify="center"
            className="h-full md:py-10 items-start md:w-1/2 text-black md:ml-10 order-1 md:order-2"
          >
            <h1 className="md:text-2xl text-left py-4 md:leading-10 leading-7 text-lg font-bold">
              AR & much more
            </h1>
            <p className="py-4 text-left">
              We’re building our location and AR expertise for helping all NFT
              and Web3 projects make the most of the real world by creating
              experiences on the Zo ecosystem across the globe.
              <br />
              <br />
              We'll be building quests and real life challenges along the way
              for zomads to earn collectables and follow their heart.
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
        className="py-20 text-left px-12 md:text-center md:px-0 text-white"
        style={{ background: "#A3C550" }}
      >
        <h1 className="md:text-2xl md:text-center text-left w-full md:leading-10 leading-7 text-lg mb-8 font-bold">
          Follow your heart
        </h1>
        <p>
          If being a founder in unlocking the world for everyone to travel
          anywhere fearlessly might be the calling from your heart? <br />
          <br />
          Check us out right now. Be early. It’s easier.
        </p>
      </Container>
    </section>
  );
};

export default EarnCards;
