import React from "react";
import Image from "next/image";
import { Flex } from "../../structure";
import multipleZobu from "./../../../../public/assets/multiple-zobu.png";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 pt-14 md:pt-24 pb-10 md:text-lg text-center">
        We’ll soon open opportunties for even more community members across a
        range of challenges we come across towards building the Zo World.
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
