import Link from "next/link";
import React from "react";
import { ZobuPLayingCards } from "../../../assets/props";
import { Flex } from "../../structure";
import { Button, Container } from "../../ui";

interface JoinDiscordProps {}

const JoinDiscord: React.FC<JoinDiscordProps> = () => {
  return (
    <section className="max-w-full">
      <Container
        className="md:h-144 bg-masterplanBackground transform skew-y-6"
        style={{ background: "#94AE31" }}
      >
        <Flex col={false} className="md:mx-0 mx-3 transform -skew-y-6">
          <Flex
            col
            className="h-full md:pb-32 pb-20 md:pt-20 pt-10 md:items-start items-center md:w-2/3 w-screen text-white"
          >
            <ZobuPLayingCards className="md:hidden block w-1/2 pt-5" />
            <h1 className="md:text-2xl mt-8 md:text-left text-center md:leading-10 leading-7 text-lg md:mt-0 font-bold">
              Believers
            </h1>
            <p className="mt-8 md:text-left text-center md:mt-8">
              Half of the 11K founder NFTs will be available for public minting
              after reaching 5000 Discord members.
            </p>
            <div
              className="shadow w-full rounded-3xl h-6 mt-8"
              style={{ background: "rgba(226, 93, 29, 1)" }}
            >
              <div
                className="text-xs leading-none py-1 text-center text-white rounded-3xl h-6 my-auto"
                style={{ width: "45%", background: "rgba(251, 117, 54, 1)" }}
              >
                Goal Reached (420/5000)
              </div>
            </div>
            <Link href="https://discord.zo.xyz/" passHref>
              <p className="mt-8 text-orangy cursor-pointer">Know More</p>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default JoinDiscord;
