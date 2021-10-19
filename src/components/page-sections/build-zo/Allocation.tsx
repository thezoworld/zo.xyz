import React from "react";
import Image from "next/image";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import founderCards1 from "./../../../../public/assets/founder-cards-1.png";

interface AllocationProps {}

const Allocation: React.FC<AllocationProps> = () => {
  return (
    <Container className="px-4">
      <Flex
        items="center"
        className="md:flex-row flex-col py-16 px-8 md:px-0"
        justify="between"
      >
        <div className="max-w-2xl w-full">
          <h2 className="font-semibold text-2xl mb-6 text-left">Allocation</h2>
          <p className="text-left pb-8 md:pb-0">
            We're recognizing these early crazy souls over the coming months
            with 'Founders of the Zo World' NFTs.
            <br />
            <br />
            The category wise distribution for these is below. We'll soon be
            adding quests in each category for individuals to complete and
            become a founder
          </p>
        </div>
        <Image src={founderCards1} alt="" className="h-64" />
      </Flex>
    </Container>
  );
};

export default Allocation;
