import React from "react";
import { BuildingZo } from "../../../assets/props";
import { Button } from "../../ui";

interface BuildZoWorldProps {}

const BuildZoWorld: React.FC<BuildZoWorldProps> = () => {
  return (
    <section
      className="h-screen relative px-4 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(359.84deg, #FFFFFF -66.78%, #F6FCFC -56.46%, #DFF2F5 -39.9%, #B9E2E8 -19.17%, #84CDD7 4.88%, #CEEBEF 57.8%, #FFFFFF 96.43%)",
      }}
    >
      <h2 className="text-xl font-semibold text-center">Build Zo World</h2>
      <span className="mt-6 text-center">
        Become an early builder in your region and help the Zomads explore your
        country, culture while empowering local communities.
      </span>
      <Button className="mt-8 mb-40">Watch Video</Button>
      <BuildingZo className="absolute bottom-0" />
    </section>
  );
};

export default BuildZoWorld;
