import React from "react";
import { TwitterCircle, TwitterFilled } from "../../../../../assets/icons";
import { Flex } from "../../../../structure";
import Avatar from "../../../../ui/Avatar";

interface TeamCardProps {
  avatar: string;
  name: string;
  department: string;
  twitter: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  avatar,
  name,
  department,
  twitter,
}) => {
  return (
    <div className="h-88 md:mx-0 mx-auto my-5">
      <Avatar
        svg={avatar}
        className="w-32 mx-auto"
        style={{ backgroundColor: "rgba(15, 122, 156, 0.13)" }}
      />
      <p className="font-bold text-xl pt-2 text-center">{name}</p>
      <Flex items="center" justify="center" className="mt-1">
        <p className="text-gray-600">{department}</p>
        {twitter && twitter !== "" && (
          <a href={twitter} target="_blank" rel="noreferrer">
            <TwitterCircle className="w-5 h-5 ml-2" />
          </a>
        )}
      </Flex>
    </div>
  );
};

export default TeamCard;
