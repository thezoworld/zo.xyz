import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import MetaMaskOnboarding from "@metamask/onboarding";
import Web3 from "web3";

type Chain = {
  chainId: number;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
};
const CHAIN_NOT_ADDED_ERROR = 4902;

const toNumber = (hex: string) => +new Web3().utils.hexToNumberString(hex);
const toHex = new Web3().utils.toHex;

function useMetaMask() {
  const [ethereum, setEthereum] = useState<any>();
  const onboarding = useRef<MetaMaskOnboarding>();

  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState(0);
  const [balance, setBalance] = useState(0);

  const isInstalled = useMemo(
    () => !!(ethereum && ethereum.isMetaMask),
    [ethereum]
  );
  const isConnected = useMemo(
    () => !!(isInstalled && address),
    [isInstalled, address]
  );

  const isListeningToAccounts = useRef(false);
  const isListeningToChain = useRef(false);

  const connect = useCallback(async () => {
    if (isInstalled) {
      const [_address] = await ethereum?.request({
        method: "eth_requestAccounts",
      });
      setAddress(_address);
      const _chainId = await ethereum?.request({
        method: "eth_chainId",
      });
      setChainId(toNumber(_chainId));
    } else if (onboarding.current) onboarding.current.startOnboarding();
  }, [isInstalled, ethereum]);

  const addChain = useCallback(
    async (chain: Chain) => {
      if (isConnected) {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{ ...chain, chainId: toHex(chain.chainId) }],
        });
      }
    },
    [isConnected, ethereum]
  );

  const switchChain = useCallback(
    async (chainId) => {
      if (isConnected) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: toHex(chainId) }],
        });
      }
    },
    [isConnected, ethereum]
  );

  const handleAccountsChanged = ([_address]: string[]) =>
    setAddress(_address || "");

  const handleChainChanged = () => window.location.reload();

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
        setAddress(_ethereum.selectedAddress || "");
        setChainId(toNumber(_ethereum.chainId || ""));
      }
    })();
  }, []);

  useEffect(() => {
    isConnected &&
      (async () => {
        const _balance = await ethereum.request({
          method: "eth_getBalance",
          params: [address],
        });
        setBalance(toNumber(_balance));
      })();
  }, [address, ethereum, isConnected]);

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
      ethereum.on("chainChanged", handleChainChanged);
      isListeningToChain.current = true;
    }

    return () => {
      if (isListeningToChain.current) {
        ethereum.removeListener("chainChanged", handleChainChanged);
        isListeningToChain.current = false;
      }
    };
  }, [isInstalled]);

  return {
    address,
    balance,
    chainId,
    isInstalled,
    isConnected,
    connect,
    addChain,
    switchChain,
  };
}

export default useMetaMask;
