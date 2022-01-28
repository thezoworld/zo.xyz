import React from "react";
import { Button } from "../../ui";

interface FounderMintInputProps {
  numTokens: number;
  setNumTokens: React.Dispatch<number>;
  maxAllowedTokens: number;
  canMintSelectedTokens?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
}

const FounderMintInput: React.FC<FounderMintInputProps> = ({
  numTokens,
  setNumTokens,
  maxAllowedTokens,
  canMintSelectedTokens = true,
  disabled = false,
  text = "Mint",
  onClick = () => {},
}) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-center space-x-4">
        <input
          type="number"
          value={numTokens}
          min={1}
          max={maxAllowedTokens}
          onChange={(e) => setNumTokens(+e.target.value)}
          className="px-4 py-2 font-bold text-white bg-purple-500 border-b-4 border-l-4 border-purple-600 rounded-lg focus:outline-none"
        />
        <Button disabled={disabled} onClick={onClick}>
          {text}
        </Button>
      </div>
      {!canMintSelectedTokens && (
        <span className="block text-sm font-semibold">
          Can't mint {numTokens}. Insufficent funds or invalid number of tokens.
        </span>
      )}
    </div>
  );
};

export default FounderMintInput;
