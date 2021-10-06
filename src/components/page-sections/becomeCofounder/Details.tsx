import Image from "next/image";
import React from "react";
import CountryCards from "../../../../public/assets/country-cards.png";
import { SocialMediaAnnouncement } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface StoryProps {}

const Story: React.FC<StoryProps> = () => {
  return (
    <section>
      <Container className="h-auto">
        <Flex
          items="start"
          className="h-full md:pt-32 pt-16 md:pb-24 pb-12 md:pr-84 md:mx-0 mx-3 md:flex-row flex-col md:text-left text-center "
        >
          <div className=" md:order-1 order-2 md:pt-0 pt-10">
            <Image src={CountryCards} alt="" className="md:w-1/3" />
          </div>
          <div className="md:text-2xl text-lg md:pt-6 pt-8 md:w-2/3 md:ml-20 md:order-2 order-1">
            <p className="pb-10">
              We are launching Zo World Genesis Country set comprising 11,111
              NFTs. Five thousand five hundred fifty-five of these will be
              available for public minting at the price of 0.1 Ether. The Zo
              community will earn the rest of the genesis cards through their
              contributions. We will forever acknowledge for decades to come to
              these founders through our discussions, services and other
              developments.
            </p>
            <p>
              We will forever acknowledge for decades to come to these founders
              through our discussions, services and other developments.
            </p>
          </div>
        </Flex>
      </Container>
      <Container
        className="md:text-2xl md:pt-24 pt-10 md:pb-24 pb-10 text-lg md:text-left text-center text-white"
        style={{ background: "#A3C550" }}
      >
        <Flex className="md:flex-row flex-col md:mx-0 mx-3">
          <p className="md:w-2/3">
            Meanwhile, over the quarter, we expect to launch version 1 of our Zo
            app, enabling everyone in the world to lay the first steps towards
            becoming a destination manager, a local host for the community in
            their region.
          </p>
          <SocialMediaAnnouncement className="md:absolute md:-right-108 md:ml-0 md:mt-0 mt-16 ml-2 md:-bottom-24 md:w-3/5 w-full" />
        </Flex>
      </Container>
    </section>
  );
};

export default Story;
