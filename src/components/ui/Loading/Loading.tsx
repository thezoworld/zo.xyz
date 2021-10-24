import Lottie from "lottie-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logoLoadingAnimation from "../../../assets/lottie/zo-party.json";

interface LoadingProps {
  className?: string;
  style?: React.CSSProperties;
}

const Loading: React.FC<LoadingProps> = ({ className, style }) => {
  return (
    <Lottie
      animationData={logoLoadingAnimation}
      className={className}
      style={style}
    />
  );
};

export default Loading;
