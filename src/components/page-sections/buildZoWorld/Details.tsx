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
          Start sharing hangout spaces, things to do in your region and take the
          first steps for unlocking your corner of the world for the Zo
          community.
        </p>
        <a href="https://discord.zo.xyz/">
          <p className="text-xl md:pt-6 pt-8 underline">Join Discord</p>
        </a>
        <p className="text-2xl md:pt-12 pt-8 font-bold">Early Tasks</p>
        <p className="text-xl md:pt-6 pt-8">
          - Start suggesting ‘Z’ locations as hangout places for the Zo
          Community across the world. <br />- Video coming soon via the app.
          <br />- Become a Destination Manager <br />- Join Discord and start
          contributing with experiences in your region.
        </p>
      </Flex>
    </Container>
  );
};

export default Story;
