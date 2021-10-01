import React from "react";
import { Fields3 } from "../../../assets/backgrounds";
import { Discord, TwitterFilled } from "../../../assets/icons";
import { TreesLeft, TreesRight } from "../../../assets/props";
import { Flex } from "../../structure";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section
      className="w-full flex flex-col items-center text-white"
      style={{
        background:
          "linear-gradient(27.19deg, #F5D928 -42.53%, #F6D129 -19.69%, #F8B92D 16.73%, #FB9434 62.15%, #FF663C 108.47%)",
      }}
    >
      <Flex col items="center" className="mx-4 w-full mt-12">
        <h3 className="font-semibold text-lg md:text-xl md:mb-4">
          Join our community
        </h3>
        <Flex items="center" className="mt-4 mb-8 md:mb-0">
          <a
            href="https://discord.zo.xyz/"
            target="_blank"
            rel="noreferrer"
            className="mx-4 flex items-center justify-center px-6 py-2 md:px-8 md:py-4 md:text-lg leading-none rounded-xl border-white border text-white"
          >
            <Discord
              className="w-6 h-6 mr-3 md:w-8 md:h-8 md:mr-5"
              fill="white"
            />
            Discord
          </a>
          <a
            href="https://twitter.zo.xyz/"
            target="_blank"
            rel="noreferrer"
            className="mx-4 flex items-center justify-center px-6 py-2 md:px-8 md:py-4 md:text-lg leading-none rounded-xl border-white border text-white"
          >
            <TwitterFilled
              className="w-6 h-6 mr-3 md:w-8 md:h-8 md:mr-5"
              fill="white"
            />
            Twitter
          </a>
        </Flex>
      </Flex>
      <Fields3 className="w-full md:hidden" />
      <Flex items="end" justify="between" className="w-full hidden md:block">
        <TreesLeft style={{ width: "20vw" }} />
        <TreesRight
          className="relative"
          style={{ width: "20vw", bottom: "-2vh" }}
        />
      </Flex>
      <Flex
        items="center"
        justify="center"
        className="p-6 font-semibold text-sm w-full text-white -mt-1"
        style={{
          background:
            "linear-gradient(321.24deg, #47C14A -9.98%, #46BF49 -9.98%, #36A03E 22.01%, #2A8735 53.96%, #21762F 87.34%, #1C6B2B 123.09%, #1A682A 165.32%)",
        }}
      >
        &copy; ZOWORLD LIMITED
      </Flex>
    </section>
  );
};

export default Footer;
