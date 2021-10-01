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
        <h1 className="md:text-5xl text-3xl font-bold">Our story</h1>
        <p className="text-2xl md:pt-6 pt-8 font-bold">
          Dropbox is building the world’s first smart workspace.
        </p>
        <p className="text-xl md:pt-12 pt-8">
          Back in 2007, making work better for people meant designing a simpler
          way to keep files in sync. Today, it means designing products that
          reduce busywork so you can focus on the work that matters.
        </p>
        <p className="text-xl pt-6">
          Most “productivity tools” get in your way. They constantly ping,
          distract, and disrupt your team’s flow, so you spend your days
          switching between apps and tracking down feedback. It’s busywork, not
          the meaningful stuff. We want to change this.
        </p>
        <p className="text-xl pt-6">
          We believe there’s a more enlightened way to work. Dropbox helps
          people be organized, stay focused, and get in sync with their teams.
        </p>
        <Button className="mt-8">Learn more</Button>
      </Flex>
    </Container>
  );
};

export default Story;
