import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import {
  Wallet,
  SwitchChain,
  AlphaNFT,
} from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import { Button } from "../../components/ui";
import alphaContract from "../../data/mint/contracts/alpha.json";
import polygon from "../../data/mint/chains/polygon.json";
import { useRouter } from "next/router";

const POLYGON = 137;

const alpha: NextPage = () => {
  const router = useRouter();

  const wallet = useMetaMask();
  const web3 = useWeb3();

  const [tokenId, setTokenId] = useState(0);
  const [verified, setVerified] = useState<boolean | undefined>();

  const isConnectedToPolygon = wallet.chainId === POLYGON;

  const contract = useMemo(() => {
    if (web3)
      return new web3.eth.Contract(
        alphaContract.abi as any,
        alphaContract.address
      );
  }, [web3]);

  const verify = async () => {
    if (wallet.isConnected && tokenId) {
      try {
        const _balanceOf = +(await contract?.methods
          .balanceOf(wallet.address, tokenId)
          .call());
        setVerified(_balanceOf === 1);
        setVerified(true);
      } catch (error) {}
    }
  };

  const switchToPolygon = async () => {
    if (wallet.isConnected) {
      await wallet.addChain(polygon);
      await wallet.switchChain(POLYGON);
    }
  };

  const goBack = () => {
    setVerified(undefined);
    setTokenId(0);
  };

  useEffect(() => {
    setVerified(undefined);
  }, [tokenId, wallet.address]);

  useEffect(() => {
    verified && router.push("#ticket");
  }, [verified]);

  useEffect(() => {
    if (!router.asPath.includes("#ticket")) goBack();
  }, [router.asPath]);

  return (
    <Page headData={{ title: "Zo Mint | Zo World Alpha NFT", meta: {} }}>
      <section className="flex w-full h-auto min-h-screen">
        <section className="flex flex-col items-center w-full text-white bg-gray-500">
          <header className="w-full h-18" />
          <span className="flex justify-center w-full text-4xl font-bold text-white">
            Zo World Alpha NFT
          </span>
          {!verified && (
            <section className="flex justify-center w-full px-8 mt-12 mb-8 md:max-w-md xl:max-w-none xl:w-2/3">
              <Wallet
                {...wallet}
                className="bg-gray-600 rounded-lg shadow-lg"
              />
            </section>
          )}
          {wallet.isConnected &&
            (isConnectedToPolygon ? (
              verified ? (
                <section className="w-full h-full">
                  <AlphaNFT tokenId={tokenId} walletAddress={wallet.address} />
                </section>
              ) : (
                <>
                  <section className="w-full px-8 text-justify md:max-w-md xl:max-w-none xl:w-2/3">
                    Starting Nov 15, 2021, Zo World launched their Alpha NFT
                    campaign for 69 hours to grant free NFTs to people worldwide
                    via Twitter. During this campgain a total of 1245 Alpha NFTs
                    were minted by Zo World. If you own one of these, you can
                    view it down below!
                  </section>
                  <section className="flex flex-col justify-center px-8 mt-12 space-y-4">
                    <div className="flex flex-col items-start justify-between h-full sm:flex-row">
                      <input
                        id="token-id"
                        className="w-56 px-4 my-4 text-lg font-semibold bg-gray-600 rounded-lg shadow-inner h-18 sm:h-full focus:outline-none sm:my-0 sm:mx-8"
                        value={tokenId || ""}
                        onChange={(e) => setTokenId(+(e.target.value || 0))}
                        placeholder="Token Number"
                        type="text"
                        inputMode="numeric"
                        style={{ boxShadow: "-4px 4px #374151" }}
                        autoComplete="off"
                      />

                      <Button onClick={verify} disabled={!tokenId}>
                        View Your Alpha NFT
                      </Button>
                    </div>
                    {verified === false && (
                      <span className="text-sm">
                        *This token is not owned by your wallet.
                      </span>
                    )}
                  </section>
                </>
              )
            ) : (
              <section className="px-8 mt-4">
                <SwitchChain
                  chainName="Polygon Mainnet"
                  switchingFn={switchToPolygon}
                />
              </section>
            ))}
        </section>
      </section>
    </Page>
  );
};

export default alpha;
