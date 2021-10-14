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
      <Flex items="center" className="mx-auto text-black px-4" col>
        <h1 className="md:text-3xl text-2xl font-bold z-10 mt-12">
          Build Zo World
        </h1>
        <h1 className="md:text-xl text-md  leading-relaxed md:leading-relaxed mt-8 text-center md:mt-8 z-10">
          5,555 builders will become Zo World founders and earn country NFTs.
          <br />
          We are looking for passionate people who believe in a world where
          anyone
          <br />
          can travel anywhere fearlessly.
        </h1>
      </Flex>
    </section>
  );
};

export default Introduction;
