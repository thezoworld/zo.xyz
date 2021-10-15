import React from "react";
import Image from "next/image";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import founderCards1 from "./../../../../public/assets/founder-cards-1.png";

interface AllocationProps {}

const Allocation: React.FC<AllocationProps> = () => {
  return (
    <Container style={{ backgroundColor: "#B3E1E7" }} className="px-4">
      <Flex
        items="center"
        className="md:flex-row flex-col py-16"
        justify="between"
      >
        <div className="max-w-2xl w-full">
          <h2 className="font-semibold text-2xl mb-6 text-center md:text-left">
            Allocation
          </h2>
          <p className="text-center md:text-left pb-6 md:pb-0">
            As the minting of first 5555 NFTs is ongoing we have started
            allocation of the rest of the (5555) NFTs via separate contract
            which will reserve your spot and be allocated post minting is
            complete.
            <br />
            If any of you have any suggestions/questions on the distribution we
            would love to have your inputs.
          </p>
        </div>
        <Image src={founderCards1} alt="" className="h-64" />
      </Flex>
    </Container>
  );
};

export default Allocation;
