import React from "react";
import { Flex } from "../../structure";
import { Button, Container } from "../../ui";
import { ZobuWithGlobe, ZobuWithGlobe2 } from "../../../assets/props";
import Link from "next/link";

interface EarnCardsProps {}

const EarnCards: React.FC<EarnCardsProps> = () => {
  return (
    <Container
      className="md:h-144 relative md:pt-56 pt-8 transform -skew-y-6"
      style={{ background: "#A1C468" }}
    >
      <Flex className="md:flex-row flex-col md:mx-0 mx-3 transform skew-y-6 ">
        <Flex
          col
          className="h-full md:pt-40 pt-0 md:pb-32 md:items-start items-center md:w-1/3 order-2 md:order-1"
        >
          <ZobuWithGlobe className="md:block hidden absolute w-screen right-0 -bottom-108 px-20 pb-32" />
          <ZobuWithGlobe2 className="block md:hidden w-screen" />
        </Flex>
        <Flex
          col
          className="h-full md:pt-20 md:pb-40 pb-10 pt-12 md:items-start items-center md:w-2/3 text-white order-1 md:order-2"
        >
          <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
            Zo community will build the Zo World with us and earn the rest of
            the 5555 cards.
          </p>
          <Link href="/co-founder" passHref>
            <Button className="mt-8">Read More</Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default EarnCards;
