import React, { useCallback, useMemo } from "react";
import { ExternalLink } from "../../../assets/icons";
import { useWindowSize } from "../../hooks";
import { Button } from "../../ui";
import supportedChains from "../../../data/mint/chains/supported.json";

interface WalletProps {
  address: string;
  balance: number;
  chainId: number;
  isConnected: boolean;
  isInstalled: boolean;
  connect: () => Promise<void>;
  className?: string;
  tokensCount?: number;
  tokenName?: string;
}

const shortenAddress = (address: string) => {
  const start = address.slice(0, 5);
  const end = address.slice(address.length - 3);
  return start + "..." + end;
};

const Wallet: React.FC<WalletProps> = ({
  address,
  balance,
  chainId,
  isConnected,
  isInstalled,
  connect,
  className,
  tokensCount,
  tokenName = "Tokens",
}) => {
  const { isMobile } = useWindowSize();
  const chain = useMemo(
    () => supportedChains.find((c) => c.chainId === chainId),
    [chainId]
  );

  const openExternalWallet = useCallback(
    () => chain && window.open(`${chain.blockExplorer}/address/${address}`),
    [chain, address]
  );

  return (
    <section className="flex items-center justify-center w-full h-full">
      {isConnected ? (
        <div className={`${className} w-full h-full relative`}>
          {chain && (
            <div className="top-0 right-0 flex flex-row-reverse p-3 sm:absolute">
              <div
                className="flex items-start justify-between p-3 border rounded-lg cursor-pointer"
                onClick={openExternalWallet}
              >
                <div className="mr-2 text-xs uppercase ">{chain.chainName}</div>
                <ExternalLink width={12} height={12} />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-between px-8 pb-8 space-y-8 sm:pt-12">
            <div className="">
              <span className="block text-sm uppercase">Wallet</span>
              <span className="block overflow-hidden font-semibold overflow-ellipsis">
                {!isMobile ? address : shortenAddress(address)}
              </span>
            </div>
            <div className="">
              <span className="block text-sm uppercase">Balance</span>
              <span className="block font-semibold">
                {(balance / 10 ** 18).toFixed(4)} {chain?.symbol || ""}
              </span>
            </div>
            {tokensCount !== undefined && (
              <div className="">
                <span className="block text-sm uppercase">
                  {tokenName} in wallet
                </span>
                <span className="block font-semibold">{tokensCount}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Button className="max-w-xs" onClick={connect}>
            {isInstalled ? "Connect Your MetaMask Wallet" : "Install MetaMask"}
          </Button>
        </div>
      )}
    </section>
  );
};

export default Wallet;
