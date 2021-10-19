import Head from "next/head";
import React from "react";
import { useWindowSize } from "../components/hooks";
import {
  Allocation,
  Conclusion,
  Distribution,
  Introduction,
} from "../components/page-sections/build-zo";

interface BuildZoProps {}

const BuildZo: React.FC<BuildZoProps> = () => {
  const { width } = useWindowSize();

  return (
    <section className="bg-white w-full">
      <Head>
        <title>Build Zo World | The Zo World</title>
      </Head>

      <Introduction />
      <Allocation />
      <Distribution />
      <Conclusion />

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
    </section>
  );
};

export default BuildZo;
