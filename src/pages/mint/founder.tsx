import { NextPage } from "next";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import {
  FounderMintInput,
  SwitchChain,
  Wallet,
} from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import { Button } from "../../components/ui";
import { parseWeb3Error } from "../../utils/w3";
import founder from "../../data/mint/contracts/founder.json";
import supportedChains from "../../data/mint/chains/supported.json";
import axios from "axios";

// TODO: PRESALE HASN'T STARTED BANNER TILL BLOCK - 1, AND PUBLIC SALE AFTER THAT
// TODO: LIVE STATS OF MINTED TOKENS IN CONTRACT

const Founder: NextPage = () => {
  const wallet = useMetaMask();
  const web3 = useWeb3();

  const [numTokens, setNumTokens] = useState(1);
  const [priceToken, setPriceToken] = useState(0);

  const [isPreSale, setIsPreSale] = useState(false);
  const [isPreSaleAllowed, setIsPreSaleAllowed] = useState(false);

  const [balanceOf, setBalanceOf] = useState(0);
  const [allowedToMint, setAllowedToMint] = useState(0);

  const [ownedTokens, setOwnedTokens] = useState<number[]>([]);

  const [isProcessingTransaction, setIsProcessingTransaction] = useState(false);
  const [hasStartedMint, setHasStartedMint] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const [lastBlock, setLastBlock] = useState("");
  const [poll, setPoll] = useState(1);

  const [transferEvents, setTransferEvents] = useState<any[]>([]);
  const [transferInputs, setTransferInputs] = useState<
    {
      from: string;
      to: string;
      tokenId: number;
    }[]
  >([]);

  const [error, setError] = useState<any>();

  const chain = useMemo(
    () => supportedChains.find((c) => c.chainId === wallet.chainId),
    [wallet.chainId]
  );

  const isConnectedToRinkeby = useMemo(
    () => chain && chain.chainId === 4,
    [chain]
  );

  const switchToRinkebyTestnet = async () => {
    await wallet.switchChain(4);
  };

  const founderContract = useMemo(() => {
    if (web3) return new web3.eth.Contract(founder.abi as any, founder.address);
  }, [web3]);

  const canMintTokens = useMemo(
    () => numTokens <= allowedToMint && wallet.balance > numTokens * priceToken,
    [numTokens, allowedToMint, wallet.balance, priceToken]
  );

  useEffect(() => {
    (async () => {
      if (isConnectedToRinkeby && founderContract && wallet.address) {
        const _allowedToMint = await founderContract.methods
          .isAllowedToMint(wallet.address)
          .call();
        setAllowedToMint(+_allowedToMint);

        const _balanceOf = await founderContract.methods
          .balanceOf(wallet.address)
          .call();
        setBalanceOf(+_balanceOf);

        const _priceToken = await founderContract.methods.pricePerMint().call();
        setPriceToken(+_priceToken);
      }
    })();
  }, [isConnectedToRinkeby, founderContract, wallet.address]);

  useEffect(() => {
    (async () => {
      if (founderContract && balanceOf && wallet.address) {
        const _indexes = Array.from(Array(balanceOf).keys());
        const _tokens = await Promise.all(
          _indexes.map(
            async (_i) =>
              +(await founderContract.methods
                .tokenOfOwnerByIndex(wallet.address, _i)
                .call())
          )
        );
        setOwnedTokens(_tokens);
        console.log("Tokens", _tokens);
      }
    })();
  }, [founderContract, balanceOf, wallet.address]);

  useEffect(() => {
    (async () => {
      if (web3 && isConnectedToRinkeby && founderContract) {
        const _currentBlock = await web3.eth.getBlockNumber();
        const _preSaleBlock = await founderContract.methods
          .earlyAccessStart()
          .call();
        setIsPreSale(_currentBlock > +_preSaleBlock);
        console.log(_currentBlock > +_preSaleBlock);
      }
    })();
  }, [isConnectedToRinkeby, founderContract]);

  useEffect(() => {
    (async () => {
      if (wallet.address && isPreSale) {
        const _isPreSaleAllowed: { allowed: boolean } = (
          await axios.get(
            `http://127.0.0.1:8000/allowed?address=${wallet.address}`
          )
        ).data;
        setIsPreSaleAllowed(_isPreSaleAllowed.allowed);
      }
    })();
  }, [wallet.address, isPreSale]);

  const handleMint = useCallback(async () => {
    if (founderContract) {
      setIsProcessingTransaction(true);
      let mintFn: any = null;

      if (isPreSale) {
        if (isPreSaleAllowed) {
          const _proof: { proof: string[] } = (
            await axios.get(
              `http://127.0.0.1:8000/proof?address=${wallet.address}`
            )
          ).data;
          mintFn = founderContract.methods.mintEarly(numTokens, _proof.proof);
        } else return;
      } else mintFn = founderContract.methods.mint(numTokens);

      try {
        const approxGas = await mintFn.estimateGas({
          from: wallet.address,
          value: priceToken * numTokens,
        });

        setHasStartedMint(true);
        const txn = await mintFn.send({
          from: wallet.address,
          value: priceToken * numTokens,
          gasLimit: +Math.round(approxGas * 1.2).toFixed(0),
        });

        setTransactionHash(txn.transactionHash);
        console.log("Transaction Hash", txn.transactionHash);
      } catch (e: any) {
        if (e.code !== 4001) {
          console.log(e);
          setError(parseWeb3Error(e.message));
        } else setHasStartedMint(false);
      }
      setIsProcessingTransaction(false);
    }
  }, [
    wallet.address,
    founderContract,
    isPreSale,
    isPreSaleAllowed,
    numTokens,
    priceToken,
  ]);

  const updateLatestBlock = async () => {
    if (web3) {
      const _lastBlock = await web3.eth.getBlockNumber();
      setLastBlock(_lastBlock + "");
    }
  };

  const pollNewEvents = async () => {
    if (founderContract) {
      console.log(`Fetching Events from ${lastBlock} to latest.`);
      const _events = await founderContract.getPastEvents("Transfer", {
        fromBlock: lastBlock,
        toBlock: "latest",
      });

      setTransferEvents((oldEvents) => [
        ...oldEvents,
        ..._events.filter((_e) => !oldEvents.map((o) => o.id).includes(_e.id)),
      ]);
      console.log("Events", _events);
      await updateLatestBlock();
    }
  };

  useEffect(() => {
    (async () => {
      if (hasStartedMint && transferInputs.length !== numTokens) {
        await pollNewEvents();
      }
    })();
  }, [poll, hasStartedMint, transferInputs]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPoll((p) => p + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (transactionHash) {
      const _transfers = transferEvents
        .filter((_e) => _e.transactionHash === transactionHash)
        .map((_e) => _e.returnValues);
      _transfers.length &&
        setTransferInputs(
          _transfers.map((_t) => ({
            from: _t.from,
            to: _t.to,
            tokenId: _t.tokenId,
          }))
        );
    }
  }, [transactionHash, transferEvents]);

  return (
    <Page headData={{ title: "Zo World | Founder NFT", meta: {} }}>
      <section className="flex justify-center min-h-screen bg-purple-400">
        <section className="flex flex-col w-full text-white">
          <span className="w-full mt-24 mb-8 text-3xl font-bold text-center">
            Zo Founder NFT
          </span>
          <section className="w-full mx-auto space-y-8 sm:max-w-md">
            <div className="">
              <Wallet
                {...wallet}
                className="bg-purple-500 rounded-lg shadow-lg"
              />
            </div>
            {wallet.isConnected &&
              (isConnectedToRinkeby ? (
                <>
                  {error ? (
                    <>
                      <span className="block font-semibold">
                        An error occured while processing your transaction.
                      </span>
                      <span className="block font-semibold">
                        Error: {error.message}
                      </span>
                    </>
                  ) : transactionHash ? (
                    <>
                      <span className="block font-semibold">
                        Congratulations! Your transaction is successfull.
                      </span>
                      <span className="block font-semibold">
                        <a
                          target="_blank"
                          href={`${chain?.blockExplorer}/tx/${transactionHash}`}
                        >
                          Click here to view your transaction.
                        </a>
                      </span>
                      {transferInputs.length > 0 ? (
                        <>
                          <span className="block font-semibold">
                            Minted{" "}
                            {transferInputs
                              .map((t) => `#${t.tokenId}`)
                              .join(", ")}{" "}
                            for you!
                          </span>
                        </>
                      ) : (
                        <span className="block font-semibold">
                          Please wait while we get your token details.
                        </span>
                      )}
                    </>
                  ) : allowedToMint > 0 ? (
                    <>
                      {isPreSale && (
                        <span className="block font-semibold text-center">
                          PRE SALE: HURRY LIMITED TIME SALE!
                        </span>
                      )}
                      {ownedTokens.length ? (
                        <span className="block font-semibold text-center">
                          You currently own {ownedTokens.join(", ")} of Zo World
                          Founder NFTs.
                        </span>
                      ) : null}
                      <span className="block font-semibold text-center">
                        You are allowed to mint {allowedToMint} of Zo World
                        Founder NFTs. {priceToken / 10 ** 18} ETH for each mint.
                      </span>
                      <div className="flex justify-center space-x-4">
                        {isPreSale ? (
                          isPreSaleAllowed ? (
                            <FounderMintInput
                              numTokens={numTokens}
                              setNumTokens={setNumTokens}
                              maxAllowedTokens={allowedToMint}
                              canMintSelectedTokens={canMintTokens}
                              text="PRESALE MINT"
                              disabled={
                                isProcessingTransaction || !canMintTokens
                              }
                              onClick={handleMint}
                            />
                          ) : (
                            <span className="block font-semibold text-center">
                              You are not allowed to participate in the Pre Sale
                              Mint. Come back for the regular sale.
                            </span>
                          )
                        ) : (
                          <FounderMintInput
                            numTokens={numTokens}
                            setNumTokens={setNumTokens}
                            maxAllowedTokens={allowedToMint}
                            canMintSelectedTokens={canMintTokens}
                            text="MINT"
                            disabled={isProcessingTransaction || !canMintTokens}
                            onClick={handleMint}
                          />
                        )}
                      </div>
                    </>
                  ) : (
                    <span className="block font-semibold">
                      You cannot mint any more Founder NFTs.
                    </span>
                  )}
                </>
              ) : (
                <SwitchChain
                  chainName={"Rinkeby Testnet"}
                  switchingFn={switchToRinkebyTestnet}
                />
              ))}
          </section>
        </section>
      </section>
    </Page>
  );
};

export default Founder;
