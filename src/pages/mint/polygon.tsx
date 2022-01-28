import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

import { useMetaMask } from "../../components/hooks";
import { SwitchChain, Wallet } from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import polygonMainnet from "../../data/mint/chains/polygon.json";

const polygon: NextPage = () => {
  const wallet = useMetaMask();
  const switchToPolygon = async () => {
    await wallet.addChain(polygonMainnet);
    await wallet.switchChain(polygonMainnet.chainId);
  };

  useEffect(() => {
    console.log("Wallet updated", wallet);
  }, [wallet]);

  return (
    <Page headData={{ title: "Zo World | Add Polygon To MetaMask", meta: {} }}>
      <section className="flex flex-col items-center w-full min-h-screen text-white bg-purple-500 md:h-screen">
        <header className="w-full h-18" />
        <span className="flex justify-center w-full text-5xl font-bold text-white">
          Polygon
        </span>
        <section className="flex flex-col justify-center w-full px-8 my-16 space-y-8 md:max-w-md xl:max-w-none xl:w-2/3">
          {!wallet.isInstalled && (
            <span className="text-center">
              Install MetaMask as the first step of your journey into Web3.
            </span>
          )}
          <Wallet {...wallet} className="bg-purple-600 rounded-lg shadow-lg" />
          {wallet.isConnected &&
            (wallet.chainId !== polygonMainnet.chainId ? (
              <SwitchChain
                chainName="Polygon Network"
                message="You are not connected to Polygon Mainnet. Allow us to do the heavy lifting for you."
                switchingFn={switchToPolygon}
              />
            ) : (
              <span className="p-4 text-center">
                You are connected to Polygon Mainnet.
              </span>
            ))}
        </section>
      </section>
    </Page>
  );
};

export default polygon;
