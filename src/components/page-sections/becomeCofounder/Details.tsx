import React from "react";
import { Flex } from "../../structure";
import { Button, Container } from "../../ui";

interface StoryProps {}

const Story: React.FC<StoryProps> = () => {
  return (
    <Container className="h-auto">
      <Flex
        items="start"
        col
        className="h-full md:pt-32 pt-16 pb-24 md:pr-84 md:mx-0 mx-3"
      >
        <p className="text-2xl md:pt-6 pt-8 font-bold">
          Earn the tag of co-founder in the Zo World.
        </p>
        <p className="text-2xl md:pt-6 pt-8">
          Suggest ideas and work directly for building the Zo World in exclusive
          channels.
        </p>
        <a
          href="https://opensea.io/collection/zoworld-el-salvador"
          target="_blank"
          className="mt-8 underline"
          rel="noreferrer"
        >
          Mint Now/SOLD OUT/Buy on OpenSea
        </a>
      </Flex>
    </Container>
  );
};

export default Story;
