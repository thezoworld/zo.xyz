import detectEthereumProvider from "@metamask/detect-provider";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useEffect, useMemo, useRef, useState } from "react";

function useMetaMask() {
  const [ethereum, setEthereum] = useState<any>();
  const onboarding = useRef<MetaMaskOnboarding>();
  const [wallet, setWallet] = useState("");
  const [chainId, setChainId] = useState("");

  const isInstalled = useMemo(
    () => !!(ethereum && ethereum.isMetaMask),
    [ethereum]
  );
  const isConnected = useMemo(
    () => !!(isInstalled && wallet),
    [isInstalled, wallet]
  );

  const isListeningToAccounts = useRef(false);
  const isListeningToChain = useRef(false);

  const install = () => {
    onboarding.current && onboarding.current.startOnboarding();
  };

  const handleAccountsChanged = ([_wallet]: string[]) =>
    setWallet(_wallet || "");

  const connect = async () => {
    if (isInstalled) {
      const [_wallet] = await ethereum?.request({
        method: "eth_requestAccounts",
      });
      setWallet(_wallet);
    } else install();
  };

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    (async () => {
      const _ethereum = (await detectEthereumProvider()) as any;
      if (_ethereum && _ethereum.isMetaMask) {
        setEthereum(_ethereum);
        setWallet(_ethereum.selectedAddress || "");
        setChainId(_ethereum.chainId || "");
      }
    })();
  }, []);

  useEffect(() => {
    if (isInstalled && !isListeningToAccounts.current) {
      ethereum.on("accountsChanged", handleAccountsChanged);
      isListeningToAccounts.current = true;
    }

    return () => {
      if (isListeningToAccounts.current) {
        ethereum.removeListener("accountsChanged", handleAccountsChanged);
        isListeningToAccounts.current = false;
      }
    };
  }, [isInstalled]);

  useEffect(() => {
    if (isInstalled && !isListeningToChain.current) {
      ethereum.on("chainChanged", () => window.location.reload());
      isListeningToChain.current = true;
    }
  }, [isInstalled]);

  return { wallet, chainId, isInstalled, isConnected, connect };
}

export default useMetaMask;
