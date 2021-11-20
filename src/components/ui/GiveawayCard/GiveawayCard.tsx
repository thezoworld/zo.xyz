import Image from "next/image";
import React from "react";
import { ButtonSmall, Progressbar } from "..";
import { Lock, Trophy } from "../../../assets/icons";
import { openLink } from "../../../utils";
import { isValidString } from "../../../utils/string";
import { Flex } from "../../structure";
import founderCards from "./../../../../public/assets/founder-cards-1.png";

interface GiveawayCardProps {
  title: string;
  bounty_total: number;
  bounty_redeemed: number;
  bounty_winners: string[];
  description: string;
  status: string;
  icon: string;
  tags: string[];
  next_action_link: string;
  next_action_text: string;
}

const GiveawayCard: React.FC<GiveawayCardProps> = ({
  title,
  bounty_total,
  bounty_redeemed,
  bounty_winners,
  description,
  next_action_link,
  next_action_text,
  status,
  tags,
  icon,
}) => {
  return (
    <article className="rounded-xl shadow-md max-w-lg">
      <Flex className="bg-gray-300 rounded-t-xl p-2">
        {tags.map((t) => (
          <span className="px-3 pt-2 pb-1 bg-white rounded-2xl text-sm">
            {t}
          </span>
        ))}
      </Flex>
      <Flex items="start" className="bg-white p-4">
        <img
          src={icon}
          className="w-12 h-12 md:w-18 md:h-18 mr-4 pt-1 flex-shrink-0 object-cover object-center"
        />
        <Flex col items="start" className="flex-grow">
          <span className="font-semibold">{title}</span>
          <span className="text-sm mt-2">{description}</span>
          <Progressbar
            currentValue={bounty_redeemed}
            highestValue={bounty_total}
            text={`${bounty_redeemed} / ${bounty_total} redeemed`}
          />
        </Flex>
      </Flex>
      <Flex
        className="bg-gray-700 rounded-b-xl p-3"
        justify="between"
        items="center"
      >
        <div>
          {bounty_winners.length > 0 && (
            <button className="text-orangy font-semibold text-sm">
              View Winners
            </button>
          )}
        </div>
        {status === "Active" ? (
          isValidString(next_action_link) && isValidString(next_action_text) ? (
            <ButtonSmall onClick={openLink.bind(null, next_action_link)}>
              {next_action_text}
            </ButtonSmall>
          ) : (
            <ButtonSmall
              onClick={openLink.bind(null, "https://discord.gg/thezoworld")}
            >
              Join Discord
            </ButtonSmall>
          )
        ) : (
          <span className="px-3 pt-1 text-sm text-gray-300">
            Not started yet
          </span>
        )}
      </Flex>
    </article>
  );
};

export default GiveawayCard;
