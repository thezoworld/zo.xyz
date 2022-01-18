import React from "react";
import { Search } from "../../../assets/icons";
import { useWindowSize } from "../../hooks";

interface SearchDestinationProps {}

const SearchDestination: React.FC<SearchDestinationProps> = () => {
  const { width } = useWindowSize();
  return (
    <div
      style={{
        height: 24,
      }}
      className="flex"
    >
      <Search className="mr-4" width={20} height={20} />
      {width >= 768 && (
        <span className="font-semibold text-gray-500">
          Search for a destination
        </span>
      )}
    </div>
  );
};

export default SearchDestination;
