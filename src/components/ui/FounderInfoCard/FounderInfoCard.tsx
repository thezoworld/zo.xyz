import React from "react";
import {
  Instagram,
  LinkedIn,
  TwitterCircle,
  TwitterFilled,
} from "../../../assets/icons";
import { Flex } from "../../structure";
import Avatar from "../Avatar";

interface FounderInfoCardProps {
  avatar: string;
  name: string;
  department: string;
  numberOfCards: number;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

const FounderInfoCard: React.FC<FounderInfoCardProps> = ({
  avatar,
  name,
  department,
  twitter,
  numberOfCards,
  linkedin,
  instagram,
}) => {
  return (
    <div className="md:h-64 my-2 md:my-4 rounded-lg p-4 bg-gray-100 flex md:flex-col items-center">
      <Avatar svg={avatar} className="md:w-32 w-24 bg-gray-200" />
      <Flex col className="ml-2 md:ml-0 md:mt-2">
        <p className="md:text-center font-semibold ml-2 md:ml-0">{name}</p>
        <p className="md:text-center text-gray-600 text-sm ml-2 md:ml-0">
          {department}
        </p>
        {numberOfCards > 0 && (
          <p className="md:text-center ml-2 md:ml-0 text-gray-800">
            3 founder cards
          </p>
        )}
        <Flex items="center" className="md:justify-center">
          {twitter && twitter !== "" && (
            <a href={twitter} target="_blank" rel="noreferrer">
              <TwitterFilled className="w-5 h-5 m-2" />
            </a>
          )}
          {instagram && instagram !== "" && (
            <a href={instagram} target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 m-2" />
            </a>
          )}
          {linkedin && linkedin !== "" && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <LinkedIn className="w-5 h-5 m-2" />
            </a>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default FounderInfoCard;
