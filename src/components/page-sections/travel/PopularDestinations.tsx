import React from "react";
import ItemCard from "./ItemCard";

interface PopularDestinationsProps {
  title: string;
  destinations: { id: number; name: string; distance: string }[];
  className?: string;
}

const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  title,
  destinations,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <span className="block text-gray-600 uppercase">Destinations</span>
        <span className="block text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </span>
      </div>
      <div className="flex space-x-4 overflow-scroll">
        {destinations.map((d) => (
          <div key={d.id}>
            <ItemCard
              footer={
                <div className="text-white">
                  <span className="block font-bold">{d.name}</span>
                  <span className="block">{d.distance}</span>
                  <span></span>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
