import Link from "next/link";
import React from "react";
import { ZobuPLayingCards } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface BelieversProps {}

const Believers: React.FC<BelieversProps> = () => {
  return (
    <section className="max-w-full">
      <Container
        className="md:h-144 bg-masterplanBackground transform skew-y-6"
        style={{ background: "#94AE31" }}
      >
        <Flex col={false} className="md:mx-0 mx-3 transform -skew-y-6">
          <Flex
            col
            className="h-full md:pb-32 pb-20 md:pt-20 pt-10 md:items-start items-center md:w-2/3 w-screen text-white"
          >
            <ZobuPLayingCards className="md:hidden block w-1/2 pt-5 order-2 md:order-1" />
            <h1 className="md:text-2xl mt-8 text-left w-full px-8 md:px-0 md:leading-10 leading-7 text-lg md:mt-0 font-bold order-1 md:order-2">
              Believers
            </h1>
            <p className="mt-8 md:text-left md:mt-8 px-8 md:px-0 mb-8 md:mb-0 order-1 md:order-2">
              Those who believe in the Zo World vision will be able to showcase
              their support by minting a 'Founders of the Zo World' NFT.
              <br />
              <br />
              5,555 of the only 11,111 founders NFTs will be available for
              public minting very soon.
            </p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Believers;
