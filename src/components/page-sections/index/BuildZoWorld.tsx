import Link from "next/link";
import React from "react";
import { BuildZoWorldDesktop } from "../../../assets/backgrounds";
import { BuildingZo } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Button } from "../../ui";

interface BuildZoWorldProps {}

const BuildZoWorld: React.FC<BuildZoWorldProps> = () => {
  const { width } = useWindowSize();

  return (
    <section
      className="h-screen relative px-4 flex flex-col items-center justify-center pb-10"
      style={{
        background: "#8ED1DA",
      }}
    >
      <h2 className="text-xl md:text-3xl font-semibold text-center -mt-56 md:-mt-108">
        Build Zo World
      </h2>
      <span className="mt-6 text-center md:text-lg md:max-w-3xl w-full">
        Help us build Zo World using any of your skills from being a community
        manager, coder to local host and many more.
      </span>
      <Link href="/build-zo" passHref>
        <Button className="mt-8 md:mb-40 relative z-2">Learn more</Button>
      </Link>
      {width <= 768 ? (
        <BuildingZo className="absolute bottom-0 w-full" />
      ) : (
        <BuildZoWorldDesktop className="absolute bottom-0 w-full" />
      )}
    </section>
  );
};

export default BuildZoWorld;
