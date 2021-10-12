import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FemaleHalf1, MaleHalf1 } from "../assets/avatars";
import { BuildZoWorldDesktop, BuildZoWorldMob } from "../assets/backgrounds";
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
        className="w-full h-screen py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180.57deg, #FFFFFF -20.51%, #FBFDFE -4.28%, #EEF8FA 12.85%, #D9F0F3 30.41%, #BBE4E9 48.26%, #95D4DD 66.34%, #81DFED 84.59%, #3FD1E6 102.66%, #2BE0FA 116.66%)",
        }}
      >
        {width <= 768 ? (
          <BuildZoWorldMob className="absolute bottom-0 w-full z-5" />
        ) : (
          <BuildZoWorldDesktop className="absolute bottom-0 w-full z-5" />
        )}
        <Flex items="center" className="mx-auto text-black md:px-0 px-4" col>
          <h1 className="md:text-5xl text-xl font-bold z-10">Build Zo World</h1>
          <h1 className="md:text-2xl text-md mt-8 text-center font-bold md:leading-10 leading-7 md:mt-8 z-10">
            5,555 builders will become Zo World founders and earn country NFTs.
            <br />
            We are looking for passionate people who believe in a world where
            anyone
            <br />
            can travel anywhere fearlessly.
          </h1>
        </Flex>
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
      <Flex
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
      ></Flex>
    </section>
  );
};

export default BuildZo;
