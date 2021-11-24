import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import { Wallet } from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import { Button } from "../../components/ui";
import alphaContract from "../../data/mint/contracts/alpha.json";

const alpha: NextPage = () => {
  const metamask = useMetaMask();
  const web3 = useWeb3();
  const [balance, setBalance] = useState(0);
  const [tokenId, setTokenId] = useState<number>();
  const [balanceOf, setBalanceOf] = useState<number>();

  const contract = useMemo(() => {
    if (web3)
      return new web3.eth.Contract(
        alphaContract.abi as any,
        alphaContract.address
      );
  }, [web3]);

  const getBalanceOf = async () => {
    if (metamask.isConnected && tokenId) {
      try {
        const _balanceOf = await contract?.methods
          .balanceOf(metamask.wallet, tokenId)
          .call();
        setBalanceOf(+_balanceOf);
        console.log("Balance", _balanceOf);
      } catch (error) {
        setBalanceOf(0);
      }
    }
  };

  useEffect(() => {
    metamask.wallet &&
      (async () => {
        const _balance = await web3?.eth.getBalance(metamask.wallet);
        setBalance(+(_balance || "0"));
      })();
  }, [metamask.wallet]);

  useEffect(() => {
    setBalanceOf(undefined);
  }, [tokenId]);

  return (
    <Page headData={{ title: "Zo Mint | Zo World Alpha NFT", meta: {} }}>
      <section className="flex flex-col items-center w-full min-h-screen text-white bg-purple-500 md:h-screen">
        <header className="w-full h-18" />
        <span className="flex justify-center w-full mb-12 text-4xl font-bold text-white">
          Zo World Alpha NFT
        </span>
        <section className="flex justify-center w-full px-8 md:max-w-md xl:max-w-none xl:w-2/3">
          <Wallet
            wallet={metamask.wallet}
            balance={balance}
            isConnected={metamask.isConnected}
            isInstalled={metamask.isInstalled}
            connect={metamask.connect}
            className="bg-purple-600 rounded-lg shadow-lg"
          />
        </section>
        {metamask.isConnected && (
          <>
            <section className="w-full px-8 mt-12 sm:max-w-2xl">
              Starting Nov 15, 2021, Zo World launched their Alpha NFT campaign
              for 69 hours to grant free NFTs to people worldwide via Twitter.
              During this campgain a total of 1245 Alpha NFTs were minted by Zo
              World. If you own one of these, you can verify it down below!
            </section>
            <section className="flex flex-col justify-center px-8 mt-12 space-y-4">
              <div className="flex justify-between h-full space-x-8">
                <span className="flex flex-col items-center h-full sm:flex-row">
                  <label htmlFor="token-id" className="mb-4 sm:mr-4 sm:mb-0">
                    Token Number
                  </label>
                  <input
                    id="token-id"
                    className="w-32 px-4 text-lg font-semibold bg-purple-400 rounded-lg shadow-inner h-18 sm:h-full focus:outline-none"
                    value={tokenId || ""}
                    onChange={(e) => setTokenId(+(e.target.value || 0))}
                    type="number"
                    disabled={metamask.chainId !== "0x89"}
                  />
                </span>
                <Button
                  onClick={getBalanceOf}
                  disabled={metamask.chainId !== "0x89"}
                >
                  Verify Your Alpha NFT
                </Button>
              </div>
              {metamask.chainId !== "0x89" && (
                <span className="block">
                  *Switch chain to Polygon in MetaMask to be able to verify
                  this.
                </span>
              )}
              {balanceOf === 1 ? (
                <span className="block">
                  Verified: This NFT belongs to your wallet.
                </span>
              ) : (
                balanceOf === 0 && (
                  <span>This NFT doesn't not belong to your wallet.</span>
                )
              )}
            </section>
          </>
        )}
      </section>
    </Page>
  );
};

export default alpha;
