import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FemaleHalf1, MaleHalf1 } from "../assets/avatars";
import { BuildZoWorldDesktop, BuildZoWorldMob } from "../assets/backgrounds";
import { BuildingZo2 } from "../assets/props";
import { useWindowSize } from "../components/hooks";
import { Flex } from "../components/structure";
import { Container } from "../components/ui";
import distcommunity from "./../../public/assets/dist-community.png";
import distcreators from "./../../public/assets/dist-creators.png";
import distgiveaways from "./../../public/assets/dist-giveaways.png";
import disthq from "./../../public/assets/dist-hq.png";
import distinfluencer from "./../../public/assets/dist-influencer.png";
import distmarketing from "./../../public/assets/dist-marketing.png";
import distreserved from "./../../public/assets/dist-reserved.png";
import founderCards1 from "./../../public/assets/founder-cards-1.png";
import multipleZobu from "./../../public/assets/multiple-zobu.png";

interface BuildZoProps {}

const DISTRIBUTION = [
  {
    image: disthq,
    category: "HQ Team",
    count: "445",
  },
  {
    image: distinfluencer,
    category: "Travel Influencers",
    count: "500",
  },
  {
    image: distmarketing,
    category: "Influencers",
    count: "500",
  },
  {
    image: distgiveaways,
    category: "Online Community, Giveaways",
    count: "500",
  },
  {
    image: distcreators,
    category:
      "Creators (Developers, Designers, Musician, Architects, Photographer)",
    count: "500",
  },
  {
    image: distcommunity,
    category:
      "Travel Community (includes Trip Host, Destination Host, Property Owner, Experience Organisers, Early Explorers etc.)",
    count: "2,000",
  },
  {
    image: distreserved,
    category: "Reserved for future use",
    count: "1,111",
  },
];

const BuildZo: React.FC<BuildZoProps> = () => {
  const { width } = useWindowSize();

  return (
    <section className="bg-white w-full">
      <Head>
        <title>Build Zo World | The Zo World</title>
      </Head>
      <section
        className="w-full h-screen py-20 relative overflow-hidden"
        style={{
          background: "#8ed1da",
        }}
      >
        {width <= 768 ? (
          <BuildZoWorldMob className="absolute bottom-0 w-full z-5" />
        ) : (
          <BuildZoWorldDesktop className="absolute bottom-0 w-full z-5" />
        )}
        <Flex items="center" className="mx-auto text-black px-12" col>
          <h1 className="md:text-3xl text-2xl font-bold z-10 mt-12 text-left w-full md:text-center">
            Build Zo World
          </h1>
          <h1 className="md:text-xl max-w-2xl mx-auto text-md leading-relaxed md:leading-relaxed mt-8 text-left md:text-center md:mt-8 z-10">
            We are a community of local hosts, designers, coders, influencers,
            entrepreneurs and other passionate people following their heart.
            <br />
            <br />
            Billions of explorers will be served by millions of our community
            members.
            <br />
            <br />
          </h1>
        </Flex>
      </section>

      {/* <Flex
        items="end"
        justify="around"
        className="max-w-8xl px-4 mx-auto md:pt-0 pt-20 md:pb-0 pb-24"
      >
        <MaleHalf1 className="h-56 z-10 md:block hidden" />
        <div className="text-xl font-bold text-center my-auto">
          <p className="text-black pb-5">
            Five people to reach 100 invites on our Discord will have earned the
            first Zo-founder countries NFTs.
          </p>
          <p className="text-orangy">Rest coming soon!</p>
        </div>
        <FemaleHalf1 className="md:block hidden h-56" />
      </Flex>
      <Flex
        col
        items="center"
        className="w-full md:-mt-7 -mt-12 h-4 relative z-1"
        style={{
          background:
            "linear-gradient(90deg, #317ED8 0%, #2162AE 23.96%, #063F82 50%)",
        }}
      ></Flex> */}
      <Container className="px-4">
        <Flex
          items="center"
          className="md:flex-row flex-col py-16 px-8 md:px-0"
          justify="between"
        >
          <div className="max-w-2xl w-full">
            <h2 className="font-semibold text-2xl mb-6 text-left">
              Allocation
            </h2>
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
      <Container style={{ backgroundColor: "#B3E1E7" }} className="py-16">
        <h2 className="font-semibold text-2xl mb-6 text-center">
          Distribution
        </h2>
        <Flex col items="center" className="max-w-3xl w-full mx-auto px-4">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="text-left w-3/4 py-2 pl-14 md:pl-18">
                  Category
                </th>
                <th className="text-right w-1/4"># of Founder Cards</th>
              </tr>
            </thead>
            <tbody>
              {DISTRIBUTION.map((d) => (
                <tr key={d.category}>
                  <td className="w-3/4 py-2">
                    <Flex items="start">
                      <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-full mr-2 md:mr-6">
                        <Image width={48} height={48} src={d.image} alt="" />
                      </div>
                      <span className="pt-3">{d.category}</span>
                    </Flex>
                  </td>
                  <td className="text-right w-1/4 align-top pt-1">{d.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Flex>
      </Container>

      <section className="max-w-4xl mx-auto md:px-4 px-12 pt-14 md:pt-24 pb-10 md:text-lg text-left md:text-center">
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
    </section>
  );
};

export default BuildZo;
