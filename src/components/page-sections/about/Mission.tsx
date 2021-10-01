import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface MissionProps {}

const Mission: React.FC<MissionProps> = () => {
  return (
    <Container className="bg-indigo-200 md:h-144">
      <Flex
        col
        className="h-full md:pt-56 pt-32 pb-32 md:pr-48 md:items-start md:mx-0 mx-3"
      >
        <h1 className="text-red-600 md:text-2xl text-3xl font-bold">
          About Zo World
        </h1>
        <h1 className="text-red-600 md:text-5xl text-xl font-bold">
          Go on adventures in real life, complete quests with the local Zo
          community, earn collectibles and follow your heart in the Zo World.
        </h1>
      </Flex>
    </Container>
  );
};

export default Mission;
