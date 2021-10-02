import React from "react";
import { Flex } from "../../structure";
import { Button, Container } from "../../ui";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <Container className="bg-indigo-200 md:h-144">
      <Flex
        col
        className="h-full md:pt-56 pt-32 pb-32 md:pr-40 md:items-start md:mx-0 mx-3"
      >
        <h1 className="text-red-600 md:text-2xl text-3xl font-bold">
          Travel With the Zo Club
        </h1>
        <h1 className="text-red-600 md:text-5xl text-xl font-bold">
          Are you one of the crazy ones who’s willing to work with early-stage
          teams with broken products, fire in the hole and soul?
          <br />
          Then, buy a $6,000 month-long all you can adventure trip across India.
          Coming soon across the world.
        </h1>
        <Button className="mt-8">Learn more</Button>
      </Flex>
    </Container>
  );
};

export default Introduction;
