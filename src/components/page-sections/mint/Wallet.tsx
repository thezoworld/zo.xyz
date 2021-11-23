import React, { useMemo } from "react";
import { ExternalLink } from "../../../assets/icons";
import { useWindowSize } from "../../hooks";
import { Button } from "../../ui";

interface WalletProps {
  wallet: string;
  balance: number;
  isConnected: boolean;
  isInstalled: boolean;
  connect: () => void;
  className?: string;
}

const WEI = 1000000000000000000;
const shortenAddress = (address: string) => {
  const start = address.slice(0, 5);
  const end = address.slice(address.length - 3);
  return start + "..." + end;
};

const Wallet: React.FC<WalletProps> = ({
  wallet,
  balance,
  isConnected,
  isInstalled,
  connect,
  className,
}) => {
  const { isMobile } = useWindowSize();
  const formattedWallet = useMemo(() => shortenAddress(wallet), [wallet]);

  const openWalletInNewTab = () =>
    window.open(`https://rinkeby.etherscan.io/address/${wallet}`);

  return (
    <section className="w-full">
      {isConnected ? (
        <div className={`${className}`}>
          <div className="px-8 pt-8 pb-4">
            <div className="flex items-center justify-between text-sm uppercase">
              <span>Wallet</span>
              <span className="cursor-pointer" onClick={openWalletInNewTab}>
                <ExternalLink />
              </span>
            </div>
            <span className="block overflow-hidden font-semibold overflow-ellipsis">
              {!isMobile ? wallet : formattedWallet}
            </span>
          </div>
          <div className="px-8 pt-4 pb-8">
            <span className="block text-sm uppercase">Balance</span>
            <span className="block font-semibold">
              {(balance / WEI).toFixed(4)} ETH
            </span>
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
