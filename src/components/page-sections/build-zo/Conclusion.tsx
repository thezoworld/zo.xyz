import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Flex } from "../../structure";
import { Button } from "../../ui";
import multipleZobu from "./../../../../public/assets/multiple-zobu.png";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto pt-14 px-4 md:pt-24 pb-10 md:text-lg text-left md:text-center">
        <Flex col className="text-black md:items-center">
          <h1 className="text-2xl md:text-3xl font-bold md:px-0 px-8 ">
            Bounty Program
          </h1>
          <p className="md:text-center mt-4 md:px-0 px-8">
            Complete any bounty to become one of the only 11,111 founders of the
            Zo World and earn a Founder NFT worth 0.1 ETH each.
          </p>
          <Link href="/bounty-program" passHref>
            <Button className="mt-4">Check out our Bounty Program</Button>
          </Link>
        </Flex>
      </section>
      <section className="w-full overflow-hidden">
        <Flex justify="center" className="w-full">
          <Image src={multipleZobu} alt="" className="h-48 w-full" />
        </Flex>
        <div
          className="w-full h-16 relative -mt-24 z-1"
          style={{ backgroundColor: "#0B8040" }}
        ></div>
      </section>
    </div>
  );
};

export default Introduction;
