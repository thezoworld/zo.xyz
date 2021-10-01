import React from "react";
import { Flex } from "../../structure";
import { Button, Container } from "../../ui";

interface HiringProps {}

const Hiring: React.FC<HiringProps> = () => {
  return (
    <Container className="bg-indigo-200 md:h-144">
      <Flex
        items="start"
        className="h-full md:pt-56 pt-32 pb-32 md:flex-row flex-col md:mx-0 mx-3"
      >
        <h1 className="text-red-600 md:text-5xl text-xl font-bold">
          Zo World is building the smart workspace that transforms the way
          people work
        </h1>
        <Button className="mt-4 md:ml-10 md:w-64">We&apos;re hiring!</Button>
      </Flex>
    </Container>
  );
};

export default Hiring;
