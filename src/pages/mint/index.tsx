import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "../../assets/icons";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import { Wallet } from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import { Button } from "../../components/ui";

const NFTs = [
  {
    name: "Zo World Alpha NFT",
    path: "/mint/alpha",
    color: "bg-purple-500",
  },
  {
    name: "Founders Of Zo World",
    path: "/mint/founder",
    color: "bg-green-500",
  },
];

const index: NextPage = () => {
  const metamask = useMetaMask();
  const web3 = useWeb3();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    metamask.wallet &&
      (async () => {
        const _balance = await web3?.eth.getBalance(metamask.wallet);
        setBalance(+(_balance || "0"));
      })();
  }, [metamask.wallet]);

  return (
    <Page headData={{ title: "Zo Mint", meta: {} }}>
      <section className="flex flex-col items-center w-full min-h-screen text-white bg-blue-300 md:h-screen">
        <header className="w-full h-18" />
        <span className="flex justify-center w-full mb-12 text-5xl font-bold text-white">
          Zo Mint
        </span>
        <section className="flex justify-center w-full px-8 md:max-w-md xl:max-w-none xl:w-2/3">
          <Wallet
            wallet={metamask.wallet}
            balance={balance}
            isConnected={metamask.isConnected}
            isInstalled={metamask.isInstalled}
            connect={metamask.connect}
            className="bg-blue-400 rounded-lg shadow-lg"
          />
        </section>
        <section className="w-full px-8 my-16">
          <span className="flex justify-center text-3xl font-semibold text-white">
            Browse Collections
          </span>
          <div className="flex flex-wrap justify-center">
            {NFTs.map((n) => (
              <Link key={n.path} href={n.path}>
                <div
                  className={`flex flex-col justify-between w-64 h-64 p-8 m-8 text-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl ${n.color}`}
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
