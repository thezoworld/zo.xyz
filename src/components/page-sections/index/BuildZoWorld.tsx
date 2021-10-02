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
      className="h-screen relative px-4 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(359.84deg, #FFFFFF -66.78%, #F6FCFC -56.46%, #DFF2F5 -39.9%, #B9E2E8 -19.17%, #84CDD7 4.88%, #CEEBEF 57.8%, #FFFFFF 96.43%)",
      }}
    >
      <h2 className="text-xl md:text-3xl font-semibold text-center md:-mt-72">
        Build Zo World
      </h2>
      <span className="mt-6 text-center md:text-lg md:w-108">
        Become an early builder in your region and help the Zomads explore your
        country, culture while empowering local communities.
      </span>
      <Link href="/build-zo" passHref>
        <Button className="mt-8 mb-40 relative z-2">Learn more</Button>
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
