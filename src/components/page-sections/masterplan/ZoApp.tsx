import React from "react";
import { ZoAppOnPhone } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface EarnCardsProps {}

const EarnCards: React.FC<EarnCardsProps> = () => {
  return (
    <Container
      className="md:pt-24 pt-10 md:pb-24 pb-0 text-left text-white"
      style={{ background: "#A3C550" }}
    >
      <Flex col={false} className=" md:mx-0 mx-3" items="end">
        <p className="w-2/3 md:pb-0 pb-10 ">
          Meanwhile, over the quarter, we expect to launch version 1 of our Zo
          app, enabling everyone in the world to lay the first steps towards
          becoming a destination manager, a local host for the community in
          their region.
        </p>
        <ZoAppOnPhone className="md:absolute md:right-0 md:ml-0 ml-2 md:-bottom-24 w-32" />
      </Flex>
    </Container>
  );
};

export default EarnCards;
