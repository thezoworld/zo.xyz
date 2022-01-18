import React from "react";
import { useWindowSize } from "../../hooks";

interface CommunityImagesProps {}

const CommunityImages = ({ className = "" }) => {
  const { width } = useWindowSize();
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row">
      <div
        style={{
          width: width <= 768 ? 358 : 740,
          height: width <= 768 ? 249 : 514,
        }}
        className="mb-4 bg-gray-500 rounded-lg sm:mb-0 sm:mr-4"
      ></div>
      <div className="flex space-x-4 sm:mt-0 sm:flex-col sm:space-x-0 sm:space-y-4">
        <div
          style={{
            width: width <= 768 ? 170 : 524,
            height: 249,
          }}
          className="bg-gray-500 rounded-lg"
        ></div>
        <div
          style={{
            width: width <= 768 ? 170 : 524,
            height: 249,
          }}
          className="bg-gray-500 rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default CommunityImages;
