import React from "react";
import {
  BecomeFounderDesktop,
  BecomeFounderMob,
} from "../../../assets/backgrounds";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  const { width } = useWindowSize();
  return (
    <section
      className="md:h-screen w-full relative h-screen"
      style={{ backgroundColor: "#a5daf3" }}
    >
      {width <= 768 ? (
        <BecomeFounderMob className="absolute bottom-0 z-5" />
      ) : (
        <BecomeFounderDesktop className="absolute bottom-0 z-5" />
      )}
      <Flex
        col
        className="text-black md:text-white md:items-center items-start text-center py-24 md:p-0 px-12 md:px-0 px-3"
        justify="center"
      >
        <h1 className="md:text-5xl text-xl font-bold z-10 md:pt-56 mt-10">
          Become a Founder
        </h1>
        <p className="md:text-lg pt-10 max-w-2xl md:leading-10 leading-7 z-10 text-left md:text-center w-full">
          We realize that when we build something of our own, work is far
          superior.
          <br />
          Ownership, responsibility and self-driven culture are at the core of
          Zo World philosophy. <br />
          <br />
          And Web3 enables us to have thousands of founders for our vision.
        </p>
      </Flex>
    </section>
  );
};

export default Introduction;
