import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import { FourZobusWorking } from "../../../assets/props";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <Container
      style={{
        background:
          "linear-gradient(356.51deg, #C3FCF1 -55.46%, #C2FBF4 -35.5%, #BFF6E9 -19.45%, #BBEFD7 -6.43%, #B5E5BC 11.36%, #ADD79B 25.24%, #A3C771 43.03%, #97B441 55.17%, #8BA00D 120.27%)",
      }}
      className="md:h-144 relative"
    >
      <Flex className="md:flex-row flex-col md:mx-0 mx-3">
        <Flex
          col
          className="h-full md:pt-32 pb-32 pt-24 md:items-start items-center md:w-2/3 text-white"
        >
          <h1 className="md:text-4xl text-2xl font-bold">Masterplan</h1>
          <h1 className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
            We believe all you need are a group of friends to travel anywhere in
            the world. We have this insight after hosting more than 1 million
            travellers from over 150 countries in our past work with Zo, the
            world’s largest backpacker hostel chain.
          </h1>
        </Flex>
        <Flex
          col
          className="h-full md:pt-40 pt-8 pb-32 md:items-start items-center md:w-1/3"
        >
          <FourZobusWorking className="absolute md:-right-48 bottom-0 md:w-1/2 w-4/5" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Introduction;
