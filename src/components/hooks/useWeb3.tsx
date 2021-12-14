import { useEffect, useRef } from "react";
import Web3 from "web3";

function useWeb3() {
  const web3Ref = useRef<Web3>();

  useEffect(() => {
    if (!web3Ref.current) {
      web3Ref.current = new Web3(window.ethereum as any);
    }
  }, []);

  return web3Ref.current;
}

export default useWeb3;
