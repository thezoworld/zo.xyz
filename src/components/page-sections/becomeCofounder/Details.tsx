import Image from "next/image";
import React from "react";
import CountryCards from "../../../../public/assets/country-cards.png";
import ZoLove from "../../../../public/assets/zo-love.gif";
import { CheckCircle } from "../../../assets/icons";
import { SocialMediaAnnouncement } from "../../../assets/props";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface StoryProps {}

interface ListItemProps {}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <Flex items="start" className="mb-6">
      <CheckCircle className="text-green-500 flex-shrink-0 mr-2" />
      <span>{children}</span>
    </Flex>
  );
};

const Story: React.FC<StoryProps> = () => {
  return (
    <section>
      <Container className="h-auto">
        <Flex
          items="center"
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
              of 0.1 ETH starting 31<sup>st</sup> Oct 2021.
            </p>
          </div>
        </Flex>
      </Container>
      <Container
        id="founder-benefits"
        className="md:pt-24 pt-10 px-4 pb-0 text-left relative"
      >
        <Flex className="md:mx-0 px-8 flex-col md:items-start items-center flex-shrink mx-auto">
          <h2 className="md:text-2xl mb-8 w-full text-left md:leading-10 leading-7 text-lg font-bold">
            Benefits of being a founder
          </h2>
          <p className="w-full md:pb-10 pb-10">
            <ListItem>
              We will acknowledge founders of the Zo World forever and continue
              to add value in being part of this exclusive club within the Zo
              ecosystem.
            </ListItem>
            <ListItem>
              Founders will always have discounts on all services and products
              available in the Zo World.
            </ListItem>
            <ListItem>
              All founders will have Zo as their free trip designer for any trip
              around the world
            </ListItem>
            <ListItem>
              Option to get listed on Zo.xyz website as a founder and build
              business and social connections around the world.
            </ListItem>
            <ListItem>
              Priority Job application for any open role in HQ.
            </ListItem>
            <ListItem>Early beta access to app.</ListItem>
            <ListItem>
              Free Giveaways during the next Zomad avatar NFT set launch.
            </ListItem>
            <ListItem>
              Pre-Mint opportunity in all of the next Zo World NFT collections.
            </ListItem>
            And, many more as we continue to build \z/
          </p>
        </Flex>
        <div
          className="md:absolute right-0 z-10"
          style={{ right: "-250px", top: "40px" }}
        >
          <Image src={ZoLove} alt="" className="" width="800" height="800" />
        </div>
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
