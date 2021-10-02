import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import LeadershipCard from "./components/LeadershipCard";
import TeamMembers, { Avatars } from "./data/TeamMembers";

interface TeamProps {}

const Team: React.FC<TeamProps> = () => {
  return (
    <Container className="h-auto">
      <Flex items="start" col className="h-full pb-24 md:mx-0 mx-3">
        <h1 className="md:text-5xl text-3xl font-bold">Our team</h1>
        <Flex
          items="center"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10 w-full"
        >
          {TeamMembers.map((item, index: number) => {
            return (
              <LeadershipCard
                key={index}
                picture={item.picture}
                name={item.name}
                subHeadline={item.subHeadline}
                twitter={item.twitter}
              />
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Team;
