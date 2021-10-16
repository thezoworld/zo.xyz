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
  console.log(percentage);
  return (
    <span>
      <div
        className="shadow w-full rounded-3xl h-6 mt-8"
        style={{ background: "rgba(226, 93, 29, 1)" }}
      >
        <div
          className="text-xs leading-none py-1 text-center text-white rounded-3xl h-6 my-auto"
          style={{
            width: `${percentage}`,
            background: "rgba(251, 117, 54, 1)",
          }}
        >
          {text} ({currentValue}/{highestValue})
        </div>
      </div>
      <span>{percentage}%</span>
    </span>
  );
};

export default Progressbar;
