import Lottie from "lottie-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logoLoadingAnimation from "./../../../assets/lottie/zo-party.json";

interface PageLoadingProps {
  isLoading: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const PageLoading: React.FC<PageLoadingProps> = ({ isLoading, style }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(!!process.browser);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? (
    <div className="fixed inset-0 z-70 bg-white flex flex-col overflow-hidden items-center justify-center">
      <Lottie
        animationData={logoLoadingAnimation}
        className="w-32"
        style={style}
      />
      <span className="font-semibold text-gray-600">Loading Zo World ...</span>
    </div>
  ) : null;
};

export default PageLoading;
