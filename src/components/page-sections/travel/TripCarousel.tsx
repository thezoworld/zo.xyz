import React, { useMemo, useState } from "react";
import { ItemCard } from ".";

interface TripCarouselProps {
  title: string;
  items: { id: number; name: string; desc: string }[];
  className?: string;
}

const TripCarousel: React.FC<TripCarouselProps> = ({
  title,
  items,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <span className="block text-gray-600 uppercase">Trips</span>
        <span className="block text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </span>
      </div>
      <div className="relative flex overflow-scroll rounded-lg">
        {items.map((i) => (
          <div key={i.id} className="sticky -left-2">
            <ItemCard
              height={420}
              width={281}
              className="bg-gray-600 border border-gray-300"
              footer={
                <div className="text-white">
                  <span className="block font-bold">{i.name}</span>
                  <span className="block">{i.desc}</span>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripCarousel;
