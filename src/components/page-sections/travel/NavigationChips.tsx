import React from "react";

interface NavigationChipsProps {
  chips: {
    id: number;
    title: string;
    onClick?: () => void;
  }[];
  className?: string;
}

const NavigationChips: React.FC<NavigationChipsProps> = ({
  chips,
  className = "",
}) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {chips.map((c) => (
        <div
          className="p-2 border border-gray-900 rounded-lg"
          key={c.id}
          onClick={c.onClick}
        >
          {c.title}
        </div>
      ))}
    </div>
  );
};

export default NavigationChips;
