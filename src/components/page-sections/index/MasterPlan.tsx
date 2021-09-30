import React from "react";
import { Fields1 } from "../../../assets/backgrounds";
import { Flex } from "../../structure";
import { Button } from "../../ui";

interface MasterPlanProps {}

const MasterPlan: React.FC<MasterPlanProps> = () => {
  return (
    <section
      className="h-screen relative px-4 flex flex-col items-center text-white justify-center"
      style={{
        background:
          "linear-gradient(0.43deg, #C3FCF1 -29.45%, #C2FBF4 -14.79%, #BFF6E9 -3%, #BBEFD7 6.56%, #B5E5BC 19.63%, #ADD79B 29.83%, #A3C771 42.89%, #97B441 51.82%, #8BA00D 99.63%)",
      }}
    >
      <Flex col items="center" className="relative z-1">
        <h2 className="text-xl font-semibold text-center">Masterplan</h2>
        <span className="mt-6 text-center">
          How will we build a future where anyone can live, work, and travel
          fearlessly anywhere in the world? First, understand our world view,
          strategy, master plan, roadmap, economy and more.
        </span>
        <Button className="mt-8 mb-40">View our Secret Masterplan</Button>
      </Flex>
      <Fields1 className="absolute bottom-0" />
    </section>
  );
};

export default MasterPlan;
