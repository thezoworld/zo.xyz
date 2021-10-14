import React from "react";
import { FourZobusWorking } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  const { width } = useWindowSize();

  return (
    <Container
      style={{
        background:
          "linear-gradient(356.51deg, #C3FCF1 -55.46%, #C2FBF4 -35.5%, #BFF6E9 -19.45%, #BBEFD7 -6.43%, #B5E5BC 11.36%, #ADD79B 25.24%, #A3C771 43.03%, #97B441 55.17%, #8BA00D 120.27%)",
      }}
    >
      <Flex
        items="center"
        className="md:flex-row flex-col md:mx-0 mx-3"
        style={{ height: width > 768 ? "70vh" : "100vh" }}
      >
        <Flex
          col
          justify="center"
          className="h-full md:items-start items-center text-white text-center md:text-left md:w-1/2 md:pt-0 pt-20"
        >
          <h1 className="md:text-3xl text-2xl font-bold">Masterplan</h1>
          <h1 className="mt-8 text-lg">
            We believe all you need are a group of friends to travel anywhere in
            the world. We have this insight after hosting more than 1 million
            travellers from over 150 countries in our past work with Zo, the
            world’s largest backpacker hostel chain.
          </h1>
        </Flex>
        <Flex
          col
          justify="center"
          className="h-full md:items-start items-center relative md:w-1/2 px-5"
        >
          <FourZobusWorking
            className="absolute bottom-0 md:py-0 py-10"
            style={{ width: width > 768 ? "60vh" : "40vh" }}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Introduction;
