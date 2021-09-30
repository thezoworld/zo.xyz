import React from "react";
import { Fields2 } from "../../../assets/backgrounds";
import { Button } from "../../ui";

interface TravelWithZoProps {}

const TravelWithZo: React.FC<TravelWithZoProps> = () => {
  return (
    <section
      className="h-screen relative px-4 flex text-white flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(0.16deg, #29ABE2 -5.74%, #2CAADF 17.77%, #36A8D5 36.85%, #46A4C4 54.4%, #5E9EAC 71.02%, #D9C43F 86.99%, #D9C43F 102.66%, #D9C43F 117.12%)",
      }}
    >
      <Fields2 className="absolute inset-0 z-1 h-screen" />
      <h2 className="text-xl font-semibold text-center relative z-1">
        Travel with the Zo Club
      </h2>
      <span className="mt-6 text-center relative z-1">
        Are you one of the crazy ones who’s willing to work with early-stage
        teams with broken products, fire in the hole and soul? Then, buy a
        $6,000 month-long all you can adventure trip across India. Coming soon
        across the world
      </span>
      <Button className="mt-8 mb-40 relative z-1">Learn More</Button>
    </section>
  );
};

export default TravelWithZo;
