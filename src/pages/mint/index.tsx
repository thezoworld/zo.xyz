import { NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "../../assets/icons";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import { Wallet } from "../../components/page-sections/mint";
import { Page } from "../../components/structure";

const NFTs = [
  {
    name: "Founders Of Zo World",
    path: "/mint/founder",
    color: "bg-green-400",
  },
  {
    name: "Zo World Alpha NFT",
    path: "/mint/alpha",
    color: "bg-gray-400",
  },
];

const index: NextPage = () => {
  const wallet = useMetaMask();

  return (
    <Page headData={{ title: "Zo Mint", meta: {} }}>
      <section className="flex flex-col items-center w-full min-h-screen text-white bg-blue-400 md:h-screen">
        <header className="w-full h-18" />
        <span className="flex justify-center w-full mb-8 text-5xl font-bold text-white">
          Zo Mint
        </span>
        <section className="flex justify-center w-full px-8 mb-12 md:max-w-md xl:max-w-none xl:w-2/3">
          <Wallet {...wallet} className="bg-blue-500 rounded-lg shadow-lg" />
        </section>
        <section className="w-full px-8">
          <span className="flex justify-center mb-4 text-3xl font-semibold text-white">
            Browse Collections
          </span>
          <div className="flex flex-wrap justify-center">
            {NFTs.map((n) => (
              <Link key={n.path} href={n.path}>
                <div
                  className={`flex flex-col justify-between w-64 h-64 p-8 m-8 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl ${n.color}`}
                >
                  <div className="text-2xl font-semibold break-words">
                    {n.name}
                  </div>
                  <div className="flex items-center justify-between text-base">
                    <span>View Collection</span>
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </Page>
  );
};

export default index;
