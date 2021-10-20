import React from "react";
import { ZobuPLayingCards } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface BelieversProps {}

const Believers: React.FC<BelieversProps> = () => {
  return (
    <section className="max-w-full">
      <Container
        className="h-full bg-masterplanBackground transform skew-y-6"
        style={{ background: "#94AE31" }}
      >
        <Flex
          col
          justify="center"
          className="h-full md:py-32 py-5 md:items-start items-center md:w-2/3 w-screen text-white md:mx-0 mx-3 transform -skew-y-6"
        >
          <ZobuPLayingCards className="md:hidden block w-1/3 py-5 order-3" />
          <h1 className="md:text-2xl my-4 text-left w-full px-8 md:px-0 md:leading-10 leading-7 text-lg font-bold order-1">
            Believers
          </h1>
          <p className="my-4 md:text-left px-8 md:px-0 order-2">
            Those who believe in the Zo World vision will be able to showcase
            their support by minting a 'Founders of the Zo World' NFT.
            <br />
            <br />
            5,555 of the only 11,111 founders NFTs will be available for public
            minting, 31st Oct 2021 onwards.
          </p>
        </Flex>
      </Container>
    </section>
  );
};

export default Believers;
