import React from "react";
import { Flex } from "../../structure";
import { Button, Container } from "../../ui";
import { ZobuPLayingCards } from "../../../assets/props";
import Link from "next/link";

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
            className="h-full md:pb-32 pb-10 md:pt-20 pt-10 md:items-start items-center md:w-2/3 w-screen text-white"
          >
            <p className="md:text-2xl mt-8 md:text-left text-center md:leading-10 leading-7 text-lg md:mt-8">
              Five thousand five hundred fifty-five of these will be available
              for public minting after reaching 5,555 Discord members. So,
              please help us begin.
            </p>
            <Link href="https://discord.zo.xyz/" passHref>
              <Button className="mt-8">Read More</Button>
            </Link>
            <ZobuPLayingCards className="md:hidden block w-1/2 pt-12" />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default JoinDiscord;
