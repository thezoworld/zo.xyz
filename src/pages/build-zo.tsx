import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FemaleHalf1, MaleHalf1 } from "../assets/avatars";
import { BuildingZo2 } from "../assets/props";
import { useWindowSize } from "../components/hooks";
import { Flex } from "../components/structure";
import multipleZobu from "./../../public/assets/multiple-zobu.png";

interface BuildZoProps {}

const BuildZo: React.FC<BuildZoProps> = () => {
  const { width } = useWindowSize();

  return (
    <section className="bg-white w-full">
      <Head>
        <title>Build Zo World | The Zo World</title>
      </Head>
      <section
        className="w-full h-screen md:h-auto pt-12 md:py-40 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(359.93deg, #FCC521 -163.6%, #F6C526 -122.91%, #E6C433 -88.11%, #CAC34A -33.2%, #A4C269 20.33%, #0A7F3F 86.22%, #0A7F3F 99.94%)",
        }}
      >
        <Flex
          className="max-w-5xl mx-auto items-center md:items-start text-white"
          col
        >
          <h1 className="text-white md:text-4xl text-2xl font-bold">
            Build Zo World
          </h1>
          <h1 className="text-white md:text-2xl mt-8 text-center max-w-lg md:text-left md:leading-10 leading-7 text-lg md:mt-8">
            5,555 builders will become Zo World Co-founders and earn Zo-founders
            country NFTs. We are looking for passionate people who follow their
            hearts.
          </h1>
        </Flex>
        <BuildingZo2
          className="absolute right-0 bottom-5"
          style={{ height: width <= 768 ? "50vh" : "60vh" }}
        />
      </section>
      <section className="max-w-4xl mx-auto px-4 pt-24 pb-12 text-lg text-center">
        We’ll soon open opportunties for everyone from community managers,
        designers, destination managers, trip managers, influencers, artists, HQ
        team, accommodation & transport providers, experience hosts and everyone
        who would help us build a world where anyone can travel and live
        anywhere.
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
      <Flex items="end" justify="around" className="max-w-8xl px-4 mx-auto">
        <MaleHalf1 className="h-56" />
        <FemaleHalf1 className="h-56" />
      </Flex>
      <Flex
        col
        items="center"
        className="w-full md:-mt-7 -mt-12 h-4 relative z-1"
        style={{
          background:
            "linear-gradient(90deg, #317ED8 0%, #2162AE 23.96%, #063F82 50%)",
        }}
      ></Flex>
    </section>
  );
};

export default BuildZo;
