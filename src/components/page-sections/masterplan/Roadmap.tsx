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
        <h1 className="md:text-2xl text-xl font-semibold">Roadmap Forward</h1>
      </Flex>
      <Container className="md:h-144 h-auto relative">
        <Flex className="md:flex-row flex-col items-center pt-10 md:mx-0 mx-3">
          <Flex
            col
            className="h-full md:pt-32 pb-8 md:pb-0 px-8 md:px-0 pt-0 md:items-start items-center md:w-1/2 text-black"
          >
            <h1 className="md:text-2xl mt-8 w-full text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
              Zomad Avatars
            </h1>
            <p className="mt-8 text-left md:mt-8">
              We’ll next launch Zomads avatar set.
              <br />
              <br />
              We have exciting things planned with Display Pictures, Cover
              images, Emojis, Stickers and several things cool and personalized.
              <br />
              <br />
              We'll be able to flex our Zo identity everywhere across the world.
            </p>
            {/* <Link href="https://discord.zo.xyz">
              <p className="md:text-2xl mt-8 text-left md:leading-10 leading-7 text-lg md:mt-8 text-orangy cursor-pointer">
                Learn More
              </p>
            </Link> */}
          </Flex>
          <Flex
            col
            className="h-full md:pt-40 pt-0 md:pb-32 md:items-start items-center md:w-1/2 w-full px-8"
          >
            <ThreeZobuStanding1 className="md:absolute md:-right-10 md:top-20 md:w-1/2 w-full" />
          </Flex>
        </Flex>
        <Flex className="md:flex-row flex-col md:pt-32 pt-8 md:mx-0 mx-3">
          <Flex
            col
            className="h-full md:pt-40 pt-0 md:pb-32 md:items-start items-center md:w-1/2 overflow-hidden md:order-1 order-2"
          >
            <ZobuRajasthan className="md:absolute md:-left-10 md:-bottom-0 md:w-2/5 w-64" />
          </Flex>
          <Flex
            col
            className="h-full md:pt-20 md:pb-40 mb-10 px-8 md:px-0 pt-0 md:items-start items-center md:w-1/2 text-black md:ml-10 md:order-2 order-1"
          >
            <h1 className="md:text-2xl mt-8 w-full text-left md:leading-10 leading-7 text-lg md:mt-8 font-bold">
              Country Adventures
            </h1>
            <p className="mt-8 text-left md:mt-8">
              In parallel, we’re launching complete India trips, the way we love
              it.
              <br />
              <br />
              Designed safely with the locals, led by cultural experiences.
            </p>
            {/* <Link href="https://discord.zo.xyz">
              <p className="md:text-2xl mt-8 text-left md:leading-10 leading-7 text-lg md:mt-8 text-orangy cursor-pointer">
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
