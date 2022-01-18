import React from "react";
import { ArrowRight } from "../../../assets/icons";
import { useWindowSize } from "../../hooks";
import { Button, ButtonSmall } from "../../ui";

interface StartTravelBannerProps {
  className?: string;
}

const StartTravelBanner: React.FC<StartTravelBannerProps> = ({
  className = "",
}) => {
  const { width, height } = useWindowSize();
  return (
    <div
      className={`${className} flex w-full items-center justify-between bg-gray-600`}
      style={{
        height: width <= 768 ? 94 : 115,
        paddingLeft: width <= 768 ? 24 : 116,
        paddingRight: width <= 768 ? 24 : 116,
      }}
    >
      <div className="w-full text-white">
        <span className="block font-bold sm:text-2xl">
          Start Travelling The Zo Way
        </span>
        <span className="block text-sm">Get a dedicated Travel Concierge!</span>
      </div>
      <div>
        <button className="flex items-center justify-between p-2 text-white sm:p-3 rounded-2xl bg-orangy">
          <div className="w-full mr-4 text-xs leading-none sm:text-base whitespace-nowrap">
            Get Started
          </div>
          <ArrowRight width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default StartTravelBanner;
