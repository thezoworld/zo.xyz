import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import { useMetaMask, useWeb3 } from "../components/hooks";
import { SwitchChain, Wallet } from "../components/page-sections/mint";
import { Page } from "../components/structure";
import { Button } from "../components/ui";
import { parseWeb3Error } from "../utils/w3";
import grant from "../data/mint/contracts/grant.json";
import artefacts from "../data/mint/contracts/artefacts.json";
import supportedChains from "../data/mint/chains/supported.json";
import polygonTestnet from "../data/mint/chains/polygonTestnet.json";

const matic: NextPage = () => {
  const wallet = useMetaMask();
  const web3 = useWeb3();
  const [balanceOfArtefact, setBalanceOfArtefact] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [isProcessingTransaction, setIsProcessingTransaction] = useState(false);
  const [hasStartedMint, setHasStartedMint] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [lastBlock, setLastBlock] = useState("");
  const [poll, setPoll] = useState(1);
  const [grantEvents, setGrantEvents] = useState<any[]>([]);
  const [grantInputs, setGrantInputs] = useState<{
    tokenContract: string;
    to: string;
    burntId: string;
    id: string;
    amount: string;
  }>();
  const [error, setError] = useState<any>();

  const chain = useMemo(
    () => supportedChains.find((c) => c.chainId === wallet.chainId),
    [wallet.chainId]
  );

  const isConnectedToPolygon = useMemo(
    () => chain && chain.chainId === polygonTestnet.chainId,
    [chain]
  );

  const switchToPolygonTestnet = async () => {
    await wallet.addChain(polygonTestnet);
    await wallet.switchChain(polygonTestnet.chainId);
  };

  const grantContract = useMemo(() => {
    if (web3) return new web3.eth.Contract(grant.abi as any, grant.address);
  }, [web3]);

  const artefactsContract = useMemo(() => {
    if (web3)
      return new web3.eth.Contract(artefacts.abi as any, artefacts.address);
  }, [web3]);

  const setApprovalToBurn = async () => {
    if (artefactsContract) {
      setIsProcessingTransaction(true);
      try {
        const fnParams = {
          operator: grant.address,
          approved: true,
        };
        const approxGas = await artefactsContract.methods
          .setApprovalForAll(...Object.values(fnParams))
          .estimateGas({ from: wallet.address });

        const txn = await artefactsContract.methods
          .setApprovalForAll(...Object.values(fnParams))
          .send({
            from: wallet.address,
            gasLimit: +Math.round(approxGas * 1.2).toFixed(0),
          });
        setIsApproved(true);
      } catch (e: any) {
        if (e.code !== 4001) {
          console.log(e);
          setError(parseWeb3Error(e.message));
        }
      }
      setIsProcessingTransaction(false);
    }
  };

  const mintGrant = async () => {
    if (grantContract && isApproved) {
      setIsProcessingTransaction(true);
      try {
        const approxGas = await grantContract.methods
          .mintAndGrant()
          .estimateGas({ from: wallet.address });
        setHasStartedMint(true);
        const txn = await grantContract.methods.mintAndGrant().send({
          from: wallet.address,
          gasLimit: +Math.round(approxGas * 1.2).toFixed(0),
        });
        setTransactionHash(txn.transactionHash);
      } catch (e: any) {
        if (e.code !== 4001) {
          console.log(e);
          setError(parseWeb3Error(e.message));
        } else setHasStartedMint(false);
      }
      setIsProcessingTransaction(false);
    }
  };

  const updateLatestBlock = async () => {
    if (web3) {
      const _lastBlock = await web3.eth.getBlockNumber();
      setLastBlock(_lastBlock + "");
    }
  };

  const pollNewEvents = async () => {
    if (grantContract) {
      console.log(`Fetching Events from ${lastBlock} to latest.`);
      const _events = await grantContract.getPastEvents("GrantTwo", {
        fromBlock: lastBlock,
        toBlock: "latest",
      });
      setGrantEvents((g) => [...g, ..._events]);
      console.log("Events", _events);
      await updateLatestBlock();
    }
  };

  useEffect(() => {
    (async () => {
      if (isConnectedToPolygon && artefactsContract && wallet.address) {
        const _isApprovedForAll = await artefactsContract.methods
          .isApprovedForAll(wallet.address, grant.address)
          .call();
        setIsApproved(_isApprovedForAll);
      }
    })();
  }, [artefactsContract, wallet.address, isConnectedToPolygon]);

  useEffect(() => {
    (async () => {
      if (isConnectedToPolygon) {
        await updateLatestBlock();
      }
    })();
  }, [web3, isConnectedToPolygon]);

  useEffect(() => {
    (async () => {
      if (!grantInputs && hasStartedMint) {
        await pollNewEvents();
      }
    })();
  }, [poll, grantInputs, hasStartedMint]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPoll((p) => p + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (transactionHash) {
      const [_grant] = grantEvents.filter(
        (_e) => _e.transactionHash === transactionHash
      );
      if (_grant) {
        const { tokenContract, to, burntId, id, amount } = _grant.returnValues;
        setGrantInputs({ tokenContract, to, burntId, id, amount });
      }
    }
  }, [transactionHash, grantEvents]);

  useEffect(() => {
    (async () => {
      if (isConnectedToPolygon && artefactsContract) {
        const _balanceOfArtefact = await artefactsContract.methods
          .balanceOf(wallet.address, 69)
          .call();
        setBalanceOfArtefact(+_balanceOfArtefact);
      }
    })();
  }, [isConnectedToPolygon, artefactsContract, wallet.address]);

  return (
    <Page headData={{ title: "Zo World | Grant | MATIC", meta: {} }}>
      <section className="flex justify-center min-h-screen bg-purple-400">
        <section className="flex flex-col w-full text-white">
          <span className="w-full mt-24 mb-8 text-3xl font-bold text-center">
            Zo MATIC Giveaway
          </span>
          <section className="w-full mx-auto space-y-8 sm:max-w-md">
            <div className="">
              <Wallet
                {...wallet}
                className="bg-purple-500 rounded-lg shadow-lg"
              />
            </div>
            {wallet.isConnected &&
              (isConnectedToPolygon ? (
                <div className="flex flex-col items-center space-y-8">
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
                      {grantInputs ? (
                        <>
                          <span className="block font-semibold">
                            Minted token #{grantInputs.id} for you
                          </span>
                          <span className="block font-semibold">
                            {+grantInputs.amount / 10 ** 18} {chain?.symbol}{" "}
                            transferred to your account.
                          </span>
                        </>
                      ) : (
                        <span>
                          Please wait while we get your token details.
                        </span>
                      )}
                    </>
                  ) : balanceOfArtefact > 0 ? (
                    <>
                      <span className="block font-semibold">
                        Mint your NFT here and get complimentary MATIC on us.
                        One of your {balanceOfArtefact} artefacts of type 69
                        will be burned in the process.
                      </span>
                      {!isApproved && (
                        <span className="block font-semibold">
                          You will have to allow us to burn your tokens.
                        </span>
                      )}
                      {
                        <div className="flex flex-col items-center">
                          {isApproved ? (
                            <Button
                              onClick={mintGrant}
                              disabled={isProcessingTransaction}
                            >
                              {!isProcessingTransaction
                                ? "Mint NFT"
                                : "Processing..."}
                            </Button>
                          ) : (
                            <Button
                              onClick={setApprovalToBurn}
                              disabled={isProcessingTransaction}
                            >
                              {!isProcessingTransaction
                                ? "Allow Us To Burn And Mint"
                                : "Processing..."}
                            </Button>
                          )}
                        </div>
                      }
                    </>
                  ) : (
                    <span className="block font-semibold">
                      We cannot mint this for you as you do not possess the
                      Artefact 69 required to be burnt. Go, get yours now!
                    </span>
                  )}
                </div>
              ) : (
                <SwitchChain
                  chainName={polygonTestnet.chainName}
                  switchingFn={switchToPolygonTestnet}
                />
              ))}
          </section>
        </section>
      </section>
    </Page>
  );
};

export default matic;
