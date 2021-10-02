import React from "react";
import { Flex } from "../../structure";
import { Button, Container } from "../../ui";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <Container className="bg-indigo-200 md:h-144">
      <Flex
        col
        className="h-full md:pt-56 pt-32 pb-32 md:pr-48 md:items-start md:mx-0 mx-3"
      >
        <h1 className="text-red-600 md:text-2xl text-3xl font-bold">
          Build Zo World
        </h1>
        <h1 className="text-red-600 md:text-5xl text-xl font-bold">
          Become an early builder in your region and help the Zomads explore
          your country, culture while empowering local communities.
        </h1>
        <Button className="mt-8">Tell me more</Button>
      </Flex>
    </Container>
  );
};

export default Introduction;
