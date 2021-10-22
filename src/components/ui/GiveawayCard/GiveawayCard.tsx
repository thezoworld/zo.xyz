import Image from "next/image";
import React from "react";
import { Lock, Trophy } from "../../../assets/icons";
import { Flex } from "../../structure";
import founderCards from "./../../../../public/assets/founder-cards-1.png";

interface GiveawayCardProps {
  title: string;
  numberOfCards: string;
  description: string;
  status: string;
}

const GiveawayCard: React.FC<GiveawayCardProps> = ({
  title,
  numberOfCards,
  description,
  status,
}) => {
  return (
    <article
      className={`flex flex-col items-center rounded-lg p-4 ${
        status === "Active"
          ? "bg-white border-orangy border"
          : status === "Upcoming"
          ? "bg-white border border-transparent"
          : "border border-transparent"
      }`}
    >
      <Flex col items="center" className="flex-1">
        <figure
          className="w-16 h-16 rounded-full flex items-center justify-center my-4"
          style={{
            background:
              status === "Active"
                ? "rgba(209, 200, 200, 0.13)"
                : status === "Upcoming"
                ? "#EA5F52"
                : " rgba(98, 98, 98, 0.13)",
          }}
        >
          {status === "Upcoming" ? (
            <Lock className="h-8" />
          ) : (
            <Trophy className="w-8 h-8" />
          )}
        </figure>
        <span className="font-semibold mt-4">{title}</span>
        <span className="text-sm text-center mt-4">{description}</span>
      </Flex>
      <Flex
        className="pt-4 pb-2 border-t-2 mt-4 w-full flex-shrink-0"
        items="center"
        justify="center"
      >
        <Image src={founderCards} width={16} height={16} />
        <span className="ml-4 text-sm">Earn {numberOfCards} Founder NFTs</span>
      </Flex>
    </article>
  );
};

export default GiveawayCard;
