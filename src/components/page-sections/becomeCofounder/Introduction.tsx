import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import { ZobuExcited1, ZobuExcited2 } from "../../../assets/props";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <section className="w-screen">
      <Container
        style={{
          background:
            "linear-gradient(360deg, #FCC521 -155.04%, #F6C526 -116.34%, #E6C433 -83.24%, #CAC34A -31.03%, #A4C269 19.88%, #88C180 43.67%, #0A7F3F 82.93%, #0A7F3F 95.59%)",
        }}
        className="md:h-144 "
      >
        <Flex className="md:flex-row flex-col md:mx-0 mx-3">
          <Flex>
            <ZobuExcited2 className="absolute md:top-24 top-108 md:-left-2/3 -left-1/3 md:w-1/2 w-4/5" />
          </Flex>
          <Flex
            col
            className="h-full md:pt-32 md:pb-32 pb-72 pt-44 items-center md:w-full text-white text-center z-50"
          >
            <h1 className="md:text-4xl text-2xl font-bold">Become a Founder</h1>
            <p className="md:text-2xl text-lg mt-8 md:leading-10 leading-7 md:mt-8">
              We realize that when we build something of our own, work is far
              superior. Ownership, responsibility and self-driven culture are at
              the core of Zo World philosophy. And Web3 enables us to have not
              just 2, 7 or 30 but thousands of co-founders for our vision.
            </p>
          </Flex>
          <Flex>
            <ZobuExcited1 className="absolute md:top-24 top-0 md:-right-2/3 -right-1/3 md:mr-12 md:w-1/2 w-4/5" />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Introduction;
