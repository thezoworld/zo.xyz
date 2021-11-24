import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import { ExternalLink } from "../../assets/icons";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import { SwitchChain, Wallet } from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import { Button } from "../../components/ui";
import founderContract from "../../data/mint/contracts/founder.json";

const WEI = 10 ** 18;
const RINKEBY = 4;

const founder: NextPage = () => {
  const wallet = useMetaMask();
  const web3 = useWeb3();

  const [allowedToMintCount, setAllowedToMintCount] = useState<number>();
  const [mintStatus, setMintStatus] = useState<
    "success" | "error" | "pending" | "not-started"
  >("not-started");

  const [mintedHash, setMintedHash] = useState("");
  const [ownedCount, setOwnedCount] = useState(0);

  const isConnectedToRinkeby = wallet.chainId === RINKEBY;

  const contract = useMemo(() => {
    if (web3)
      return new web3.eth.Contract(
        founderContract.abi as any,
        founderContract.address
      );
  }, [web3]);

  const hasSufficientBalance = useMemo(
    () => wallet.balance > 0.1 * WEI,
    [wallet.balance]
  );

  const checkAllowList = async () => {
    if (isConnectedToRinkeby) {
      const _isAllowListed = await contract?.methods
        .isAllowedToMint(wallet.address)
        .call();
      setAllowedToMintCount(+_isAllowListed);
    }
  };

  const mintPublic = async () => {
    if (isConnectedToRinkeby && allowedToMintCount && hasSufficientBalance) {
      setMintStatus("pending");
      try {
        const approxGas = await contract?.methods
          .mintPublic()
          .estimateGas({ from: wallet.address, value: 0.1 * WEI });

        const txn = await contract?.methods.mintPublic().send({
          from: wallet.address,
          value: 0.1 * WEI,
          gasLimit: +Math.round(approxGas * 1.2).toFixed(0),
        });
        console.log("Transaction", txn);
        setMintStatus("success");
        setMintedHash(txn.transactionHash);
      } catch (error) {
        setMintStatus("error");
        console.log("Error", error);
      }
    }
  };

  const prepareRemint = () => {
    setAllowedToMintCount(undefined);
    setMintedHash("");
    setMintStatus("not-started");
  };

  const openEtherscanTxn = () =>
    window.open(`https://rinkeby.etherscan.io/tx/${mintedHash}`);

  const switchToRinkeby = () => wallet.switchChain(RINKEBY);

  useEffect(() => {
    setAllowedToMintCount(undefined);
  }, [wallet.address]);

  useEffect(() => {
    isConnectedToRinkeby &&
      contract &&
      wallet.address &&
      (async () => {
        const _balanceOf = await contract?.methods
          .balanceOf(wallet.address)
          .call();
        setOwnedCount(_balanceOf);
      })();
  }, [isConnectedToRinkeby, mintStatus, contract, wallet.address]);

  return (
    <Page headData={{ title: "Zo Mint | Founders Of Zo World", meta: {} }}>
      <section className="flex flex-col items-center w-full min-h-screen text-white bg-green-500 md:h-screen">
        <header className="w-full h-18" />
        <span className="flex justify-center w-full mb-12 text-4xl font-bold text-white">
          Founders Of Zo World
        </span>
        <section className="flex justify-center w-full px-8 md:max-w-md xl:max-w-none xl:w-2/3">
          <Wallet
            {...wallet}
            tokensCount={ownedCount || undefined}
            tokenName="Zo World Founder NFTs"
            className="bg-green-600 rounded-lg shadow-lg"
          />
        </section>
        {wallet.isConnected && (
          <section className="flex flex-col items-center justify-center px-8 mt-12 space-y-4">
            {!isConnectedToRinkeby ? (
              <SwitchChain
                chainName="Rinkeby Testnet"
                switchingFn={switchToRinkeby}
              />
            ) : mintStatus === "success" ? (
              <div className="flex flex-col items-center w-full space-y-8 text-lg">
                <span
                  className="flex justify-center cursor-pointer"
                  onClick={openEtherscanTxn}
                >
                  <span className="mr-2">
                    Congratulations on minting your Founders Of Zo World NFT.
                  </span>
                  <ExternalLink />
                </span>
                <span className="mt-4">
                  <Button onClick={prepareRemint}>Mint Another</Button>
                </span>
              </div>
            ) : mintStatus === "error" ? (
              <div className="flex flex-col items-center space-y-8 text-lg">
                <span>
                  An error occured during minting of your NFT. Try minting
                  another or revisit after some time.
                </span>
                <Button onClick={prepareRemint}>Try Another Mint</Button>
              </div>
            ) : allowedToMintCount === undefined ? (
              <Button onClick={checkAllowList}>
                Check Allow List For Minting
              </Button>
            ) : allowedToMintCount ? (
              <>
                <span className="text-lg">
                  Your wallet is in our allowed list and you can mint upto{" "}
                  {allowedToMintCount} of our Founders Of Zo World NFT.
                </span>
                {hasSufficientBalance ? (
                  <Button
                    onClick={mintPublic}
                    disabled={mintStatus === "pending"}
                  >
                    {mintStatus === "pending"
                      ? "Minting, please wait!"
                      : "Mint"}
                  </Button>
                ) : (
                  <span className="text-lg">
                    However, you don't have sufficient funds in your wallet to
                    mint our Founders Of Zo NFT. Add some and try again later.
                  </span>
                )}
              </>
            ) : (
              <span>
                Your wallet is not in our allowed list and you can't mint our
                Founders Of Zo World NFT.
              </span>
            )}
          </section>
        )}
      </section>
    </Page>
  );
};

export default founder;
