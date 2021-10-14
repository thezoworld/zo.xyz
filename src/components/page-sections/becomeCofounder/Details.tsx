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
          className="h-full md:pt-32 pt-10 md:pb-24 pb-12 md:pr-84 md:mx-0 mx-3 md:flex-row flex-col text-left"
        >
          <div className=" md:order-1 order-2">
            <Image src={CountryCards} alt="" className="md:w-1/3 md:text-2xl" />
          </div>
          <div className="md:pt-6 pt-8 md:w-2/3 md:ml-20 md:order-2 order-1 px-12 md:px-0">
            <p className="pb-10">
              We are launching "Founder of the Zo World" collection comprising
              11,111 NFTs.
              <br />
              <br />
              5,555 of these will be available for public minting at the price
              of 0.1 ETH, 31<sup>st</sup> Oct onwards.
            </p>
          </div>
        </Flex>
      </Container>
      <Container className="md:pt-24 pt-10 md:pb-24 px-4 pb-0 text-left">
        <Flex className="md:mx-0 px-8 flex-col md:items-start items-center">
          <h2 className="md:text-2xl mb-8 w-full text-left md:leading-10 leading-7 text-lg font-bold">
            Benefits of being a founder
          </h2>
          <p className="max-w-3xl w-full md:pb-0 pb-10 ">
            We will acknowledge founders of the Zo World forever and continue to
            add value in being part of this exclusive club within the Zo
            ecosystem.
            <br />
            <br />
            Founders will always have discounts on all services and products
            available in the Zo World.
            <br />
            <br />
            All founders will have Zo as their free trip designer for any trip
            around the world
            <br />
            <br />
            Option to get listed on Zo.xyz website as a founder and build
            business and social connections around the world.
            <br />
            <br />
            Priority Job application for any open role in HQ.
            <br />
            <br />
            Early beta access to app.
            <br />
            <br />
            Free Giveaways during the next Zomad avatar NFT set launch.
            <br />
            <br />
            Pre-Mint opportunity in all of the next Zo World NFT collections.
            <br />
            <br />
            And, many more as we continue to build \z/
          </p>
        </Flex>
      </Container>
      {/* <Container
        className="md:pt-24 pt-10 md:pb-24 pb-40 text-left text-white"
        style={{ background: "#A3C550" }}
      >
        <Flex className="md:flex-row flex-col md:mx-0 mx-3">
          <p className="md:w-2/3 px-12">
            We will begin minting 48 hours after we have reached 5,555 Discord
            members.
            <br />
            <br />
            And, the first five people to invite 100 members to our Discord
            community will be among the first few ones to earn country NFTs.
            <br />
            <br />
            So, hurry up!
          </p>
          <SocialMediaAnnouncement className="absolute md:-right-108 -right-10 -bottom-40 md:ml-0 md:mt-0 ml-2 md:-bottom-24 md:w-3/5 w-2/3" />
        </Flex>
      </Container> */}
    </section>
  );
};

export default Story;
