import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import TeamCard from "./components/TeamCard";
import TeamMembers from "./data/TeamMembers";

const sorter = (a: any, b: any) => {
  if (a.alias.toLowerCase() < b.alias.toLowerCase()) {
    return -1;
  }
  if (a.alias.toLowerCase() > b.alias.toLowerCase()) {
    return 1;
  }
  return 0;
};

interface TeamProps {}

const Team: React.FC<TeamProps> = () => {
  return (
    <Container className="h-auto">
      <Flex items="center" col className="h-full pb-12 md:mx-0 mx-3 mt-16">
        <h1
          style={{ color: "#BE392C" }}
          className="md:text-5xl text-2xl font-bold"
        >
          Founders
        </h1>
        <Flex
          items="center"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mb-10 w-full"
        >
          {TeamMembers.sort(sorter).map((item, index: number) => (
            <TeamCard
              key={index}
              avatar={item.avatarUrl}
              name={item.alias}
              department={item.department}
              numberOfCards={item.numberOfCards}
              twitter={item.twitter}
              instagram={item.instagram}
              linkedin={item.linkedin}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Team;
