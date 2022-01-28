import { NextPage } from "next";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useMetaMask, useWeb3 } from "../../components/hooks";
import { SwitchChain, Wallet } from "../../components/page-sections/mint";
import { Page } from "../../components/structure";
import { Button } from "../../components/ui";
import { parseWeb3Error } from "../../utils/w3";
import founder from "../../data/mint/contracts/founder.json";
import supportedChains from "../../data/mint/chains/supported.json";
import axios from "axios";

const Founder: NextPage = () => {
  const wallet = useMetaMask();
  const web3 = useWeb3();

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
  const [transferInputs, setTransferInputs] = useState<{
    from: string;
    to: string;
    tokenId: number;
  }>();

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
          mintFn = founderContract.methods.mintEarly(1, _proof.proof);
        } else return;
      } else mintFn = founderContract.methods.mint(1);

      try {
        const approxGas = await mintFn.estimateGas({
          from: wallet.address,
          value: 0,
        });

        setHasStartedMint(true);
        const txn = await mintFn.send({
          from: wallet.address,
          value: 0,
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
  }, [wallet.address, founderContract, isPreSale, isPreSaleAllowed]);

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
      setTransferEvents((e) => [...e, ..._events]);
      console.log("Events", _events);
      await updateLatestBlock();
    }
  };

  useEffect(() => {
    (async () => {
      if (!transferInputs && hasStartedMint) {
        await pollNewEvents();
      }
    })();
  }, [poll, transferInputs, hasStartedMint]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPoll((p) => p + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (transactionHash) {
      const [_transfer] = transferEvents.filter(
        (_e) => _e.transactionHash === transactionHash
      );
      if (_transfer) {
        console.log("Transfer event", _transfer.returnValues);
        const { from, to, tokenId } = _transfer.returnValues;
        setTransferInputs({ from, to, tokenId });
      }
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
                      {transferInputs ? (
                        <>
                          <span className="block font-semibold">
                            Minted token #{transferInputs.tokenId} for you!
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
                      <span className="block font-semibold text-center">
                        You currently own {ownedTokens.join(", ")} of Zo World
                        Founder NFTs.
                      </span>
                      <span className="block font-semibold text-center">
                        You are allowed to mint {allowedToMint} of Zo World
                        Founder NFTs.
                      </span>
                      <div className="flex justify-center">
                        {isPreSale ? (
                          isPreSaleAllowed ? (
                            <Button
                              disabled={isProcessingTransaction}
                              onClick={handleMint}
                            >
                              PRESALE MINT
                            </Button>
                          ) : (
                            <span className="block font-semibold text-center">
                              You are allowed to participate in the Pre Sale
                              Mint. Come back for the regular sale.
                            </span>
                          )
                        ) : (
                          <Button
                            disabled={isProcessingTransaction}
                            onClick={handleMint}
                          >
                            MINT
                          </Button>
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
