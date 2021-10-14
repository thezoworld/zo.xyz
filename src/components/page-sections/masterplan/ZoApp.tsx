import React from "react";
import { ZoAppOnPhone } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface EarnCardsProps {}

const EarnCards: React.FC<EarnCardsProps> = () => {
  return (
    <Container
      className="md:pt-24 pt-10 md:pb-24 px-4 pb-0 text-left text-white"
      style={{ background: "#A3C550" }}
    >
      <Flex className="md:mx-0 px-8 flex-col md:items-start items-center">
        <h2 className="md:text-2xl mb-8 w-full text-left md:leading-10 leading-7 text-lg font-bold">
          Zo App
        </h2>
        <p className="max-w-3xl w-full md:pb-0 pb-10 ">
          Over the quarter of Oct-Dec'21, we'll launch version 1 of our Zo app.
          <br />
          <br />
          Our app will enable everyone in the world to lay the first steps
          towards becoming a local Zo community member from anywhere in the
          world.
          <br />
          <br />
          Soon Zomads will be able to complete quests along with minting NFTs at
          specific locations.
        </p>
        <ZoAppOnPhone className="md:absolute md:right-0 md:ml-0 ml-2 md:-bottom-24 w-32" />
      </Flex>
    </Container>
  );
};

export default EarnCards;
