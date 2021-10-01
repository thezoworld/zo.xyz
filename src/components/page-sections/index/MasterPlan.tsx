import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import {
  ConfusedMale1,
  FemaleFull2,
  GeekyMale1,
} from "../../../assets/avatars";
import { Fields1, MasterPlan as MS } from "../../../assets/backgrounds";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import { Button } from "../../ui";

interface MasterPlanProps {}

const MasterPlan: React.FC<MasterPlanProps> = () => {
  const { width } = useWindowSize();

  const female1 = useRef<SVGSVGElement>(null);
  const male1 = useRef<SVGSVGElement>(null);
  const male2 = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(male1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male1.current,
      },
      y: "10vh",
    });
    gsap.to(female1.current, {
      scrollTrigger: {
        scrub: true,
        trigger: female1.current,
      },
      y: "10vh",
    });
    gsap.to(male2.current, {
      scrollTrigger: {
        scrub: true,
        trigger: male2.current,
      },
      y: "10vh",
    });
  });
  return (
    <section
      className="h-screen relative px-4 flex flex-col items-center text-white justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(0.43deg, #C3FCF1 -29.45%, #C2FBF4 -14.79%, #BFF6E9 -3%, #BBEFD7 6.56%, #B5E5BC 19.63%, #ADD79B 29.83%, #A3C771 42.89%, #97B441 51.82%, #8BA00D 99.63%)",
      }}
    >
      <Flex col items="center" className="relative z-2">
        <h2 className="text-xl font-semibold text-center">Masterplan</h2>
        <span className="mt-6 text-center">
          How will we build a future where anyone can live, work, and travel
          fearlessly anywhere in the world? First, understand our world view,
          strategy, master plan, roadmap, economy and more.
        </span>
        <Button className="mt-8 mb-40">View our Secret Masterplan</Button>
      </Flex>
      {width <= 768 ? (
        <Fields1 className="absolute bottom-0 z-1 w-full" />
      ) : (
        <MS className="absolute inset-0 z-1 h-screen" />
      )}
      <Flex items="end" className="absolute bottom-0 z-2">
        <ConfusedMale1 ref={male1} style={{ height: "30vh" }} />
        <GeekyMale1 ref={male2} style={{ height: "30vh" }} />
        <FemaleFull2 ref={female1} style={{ height: "30vh" }} />
      </Flex>
    </section>
  );
};

export default MasterPlan;
