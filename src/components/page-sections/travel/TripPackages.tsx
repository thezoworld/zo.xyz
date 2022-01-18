import React from "react";
import ItemCard from "./ItemCard";

interface TripPackagesProps {
  title: string;
  packages: {
    id: number;
    category: string;
    title: string;
    prices: string;
  }[];
}

const TripPackages: React.FC<TripPackagesProps> = ({ title, packages }) => {
  return (
    <div className="space-y-4">
      <div>
        <span className="block text-gray-600 uppercase">Packages</span>
        <span className="block text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </span>
      </div>
      <div className="flex space-x-4 overflow-scroll">
        {packages.map((p) => (
          <div key={p.id}>
            <ItemCard
              footer={
                <div className="text-white ">
                  <span className="block text-xs font-bold uppercase">
                    {p.category}
                  </span>
                  <span className="block font-bold">{p.title}</span>
                  <span className="block text-sm">{p.prices}</span>
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

export default TripPackages;
