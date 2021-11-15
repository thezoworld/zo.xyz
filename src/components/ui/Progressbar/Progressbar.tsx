import React from "react";

interface ProgressbarProps {
  text: string;
  currentValue: number;
  highestValue: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({
  text,
  currentValue,
  highestValue,
}) => {
  const percentage = (currentValue / highestValue) * 100;

  return (
    <div className="relative w-full bg-gray-300 rounded-2xl h-6 mt-2">
      <div
        className="absolute z-1 rounded-2xl max-w-full left-0 inset-y-0 bg-green-600"
        style={{
          width: `${percentage}%`,
        }}
      />
      <span className="absolute z-2 text-white inset-0 flex items-center justify-center text-sm">
        {text}
      </span>
    </div>
  );
};

export default Progressbar;
