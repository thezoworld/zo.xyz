import React from "react";
import {
  BuildZoWorldDesktop,
  BuildZoWorldMob,
} from "../../../assets/backgrounds";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  const { width } = useWindowSize();
  return (
    <section
      className="w-full h-screen py-20 relative overflow-hidden"
      style={{
        background: "#8ed1da",
      }}
    >
      {width <= 768 ? (
        <BuildZoWorldMob className="absolute bottom-0 w-full z-5" />
      ) : (
        <BuildZoWorldDesktop className="absolute bottom-0 w-full z-5" />
      )}
      <Flex items="center" className="mx-auto text-black px-12" col>
        <h1 className="md:text-3xl text-2xl font-bold z-10 mt-12 text-left w-full md:text-center">
          Build Zo World
        </h1>
        <h1 className="md:text-xl max-w-2xl mx-auto text-md leading-relaxed md:leading-relaxed mt-8 text-left md:text-center md:mt-8 z-10">
          We are a community of local hosts, designers, coders, influencers,
          entrepreneurs and other passionate people following their heart.
          <br />
          <br />
          Billions of explorers will be served by millions of our community
          members.
          <br />
          <br />
        </h1>
      </Flex>
    </section>
  );
};

export default Introduction;
