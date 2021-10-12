import React from "react";
import { ThreeZobuStanding1, ZobuRajasthan } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface RoadmapProps {}

const Roadmap: React.FC<RoadmapProps> = () => {
  return (
    <section className="md:pt-20 pt-5">
      <Flex
        items="center"
        justify="center"
        className="w-full text-white z-10 h-20 text-center"
        style={{ background: "rgba(148, 174, 49, 1)" }}
      >
        <h1 className="md:text-2xl text-xl">Roadmap Forward</h1>
      </Flex>
      <Container className="md:h-144 h-auto relative">
        <Flex className="md:flex-row flex-col pt-10 md:mx-0 mx-3">
          <Flex
            col
            className="h-full md:pt-32 pb-0 md:pb-0 pt-0 md:items-start items-center md:w-1/2 text-black md:order-1 order-2"
          >
            <h1 className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
              Zomad Avatars
            </h1>
            <p className="mt-8 text-center md:text-left md:mt-8">
              We’ll launch our work with the OG Zomads avatar set. We have
              exciting things planned with animations, custom stickers, Display
              Pictures, Cover images, and all things cool to flex your Zo
              identity anywhere in the metaverse.
            </p>
            {/* <Link href="https://discord.zo.xyz">
              <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 text-orangy cursor-pointer">
                Learn More
              </p>
            </Link> */}
          </Flex>
          <Flex
            col
            className="h-full md:pt-40 pt-0 md:pb-32 md:items-start items-center md:w-1/2 md:order-2 order-1"
          >
            <ThreeZobuStanding1 className="md:absolute md:-right-10 md:top-20 md:w-1/2 w-full" />
          </Flex>
        </Flex>
        <Flex className="md:flex-row flex-col pt-32 md:mx-0 mx-3">
          <Flex
            col
            className="h-full md:pt-40 pt-0 md:pb-32 md:items-start items-center md:w-1/2 overflow-hidden"
          >
            <ZobuRajasthan className="md:absolute md:-left-10 md:-bottom-0 md:w-2/5 w-full" />
          </Flex>
          <Flex
            col
            className="h-full md:pt-20 md:pb-40 mb-10 pt-0 md:items-start items-center md:w-1/2 text-black md:ml-10"
          >
            <h1 className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
              Country Adventures
            </h1>
            <p className="mt-8 text-center md:text-left md:mt-8">
              In parallel, we’re launching complete India trips, the way we love
              it, with the locals, safe and serendipitous. All things taken care
              of
            </p>
            {/* <Link href="https://discord.zo.xyz">
              <p className="md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8 text-orangy cursor-pointer">
                Learn More
              </p>
            </Link> */}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Roadmap;
