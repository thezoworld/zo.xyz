import Link from "next/link";
import React from "react";
import { ZobuPLayingCards, ZobuWithGlobe2 } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface BuildersProps {}

const Builders: React.FC<BuildersProps> = () => {
  return (
    <Container
      className="md:h-144 relative md:pt-32 pt-8 transform -skew-y-6"
      style={{ background: "#A1C468" }}
    >
      <Flex className="md:flex-row flex-col md:mx-0 mx-3 transform skew-y-6 ">
        <Flex
          col
          className="h-full md:pt-40 pt-5 md:pb-32 md:items-start items-center md:w-1/3 order-2 md:order-1"
        >
          <ZobuPLayingCards className="md:block hidden md:absolute md:w-1/4 md:-top-full md:right-0 md:-mt-20" />
          <ZobuWithGlobe2 className="w-screen md:w-3/4 md:absolute md:-left-3/4 md:-bottom-48 mr-8" />
        </Flex>
        <Flex
          col
          className="h-full md:pt-20 md:pb-40 pt-8 items-start md:w-2/3 text-white order-1 md:order-2"
        >
          <h1 className="md:text-2xl text-left md:leading-10 md:px-0 px-8 leading-7 font-bold text-lg md:mt-8">
            Builders
          </h1>
          <p className="text-left mt-8 md:px-0 px-8">
            Travel hosts, designers, coders, HQ, Influencers and many other ways
            you can help build the global Zo travel ecosystem and become a
            founder of the Zo World.
            <br />
            <br />
            5,555 of the Zo World founder NFTs will be earned by the community
            building the Zo World.
          </p>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Builders;
