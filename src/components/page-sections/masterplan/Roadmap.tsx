import React from "react";
import { ThreeZobuStanding1, ZobuRajasthan } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface RoadmapProps {}

const Roadmap: React.FC<RoadmapProps> = () => {
  return (
    <section className="pt-5 md:pt-14">
      <Flex
        items="center"
        justify="center"
        className="w-screen text-white z-10 h-16 text-center"
        style={{ background: "rgba(148, 174, 49, 1)" }}
      >
        <h1 className="md:text-2xl text-xl font-semibold">Roadmap Forward</h1>
      </Flex>
      <Container className="h-full">
        <Flex
          items="center"
          className="md:flex-row flex-col py-10 md:mx-0 mx-3"
        >
          <Flex
            col
            justify="center"
            className="h-full md:py-32 px-8 md:px-0 md:items-start items-center md:w-1/2 text-black"
          >
            <h1 className="md:text-2xl py-4 w-full text-left md:leading-10 leading-7 text-lg font-bold">
              Zomad Avatars
            </h1>
            <p className="text-left py-4">
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
            justify="center"
            className="h-full py-10 md:items-start items-center md:w-1/2 w-full px-8 relative"
          >
            <ThreeZobuStanding1 className="md:absolute md:-right-10 md:inset-x-20 md:w-4/5 w-full" />
          </Flex>
        </Flex>
        <Flex className="md:flex-row flex-col md:py-20 md:mx-0 mx-3">
          <Flex
            col
            justify="center"
            className="h-full md:items-start items-center md:w-1/2 overflow-hidden md:order-1 order-2"
          >
            <ZobuRajasthan className="md:absolute md:left-0 md:bottom-0 md:w-2/5 w-4/5" />
          </Flex>
          <Flex
            col
            justify="center"
            className="h-full md:py-10 px-8 md:px-0 md:items-start items-center md:w-1/2 text-black md:ml-10 md:order-2 order-1"
          >
            <h1 className="md:text-2xl py-4 w-full text-left md:leading-10 leading-7 text-lg font-bold">
              Country Adventures
            </h1>
            <p className="py-4 text-left">
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
