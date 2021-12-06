import React, { useCallback, useState } from "react";
import { Button } from "../../ui";

const REQUEST_PENDING = -32002;

interface SwitchChainProps {
  chainName: string;
  message?: string;
  switchingFn: () => Promise<void>;
}

const SwitchChain: React.FC<SwitchChainProps> = ({
  chainName,
  message = "",
  switchingFn,
}) => {
  const [requestPending, setRequestPending] = useState(false);

  const switchChains = useCallback(async () => {
    try {
      await switchingFn();
      setRequestPending(false);
    } catch (error: any) {
      error.code === REQUEST_PENDING && setRequestPending(true);
    }
  }, []);

  return (
    <section className="flex flex-col items-center space-y-6">
      <span className="text-justify">
        {message ||
          `This token lives on the ${chainName}. You need to switch chains before
        you can continue.`}
      </span>
      <Button onClick={switchChains}>Switch To {chainName}</Button>
      {requestPending && (
        <span className="text-sm text-justify">
          *You have a pending request in MetaMask. Resolve it to switch chains.
        </span>
      )}
    </section>
  );
};

export default SwitchChain;
