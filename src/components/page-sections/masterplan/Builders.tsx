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
          className="h-full md:pt-40 pt-5 md:pb-32 md:items-start items-center md:w-1/3"
        >
          <ZobuPLayingCards className="md:block hidden md:absolute md:w-1/4 md:-top-full md:right-0 md:-mt-20" />
          <ZobuWithGlobe2 className="w-screen md:w-3/4 md:absolute md:-left-3/4 md:-bottom-48 mr-8" />
        </Flex>
        <Flex
          col
          className="h-full md:pt-20 md:pb-40 pb-20 pt-0 md:items-start items-center md:w-2/3 text-white"
        >
          <h1 className="md:text-2xl text-center md:text-left md:leading-10 leading-7 font-bold text-lg md:mt-8">
            Builders
          </h1>
          <p className="text-center md:text-left md:mt-8">
            Zo community will build the Zo World with us and earn the rest of
            the cards.
          </p>
          <Link href="/build-zo" passHref>
            <p className="mt-8 cursor-pointer" style={{ color: "#D32328" }}>
              Know More
            </p>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Builders;
