import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fields3 } from "../../assets/backgrounds";
import {
  Discord,
  Instagram,
  LinkedIn,
  TwitterFilled,
} from "../../assets/icons";
import { TreesLeft, TreesRight } from "../../assets/props";
import { Flex } from "../structure";

interface FooterProps {}

const MISS_TEXT = [
  "the latest updates",
  "free giveaways",
  "being a founder",
  "sharing ideas",
  "Zo community \\z/",
];

const Footer: React.FC<FooterProps> = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const nextIndex = (index + 1) % MISS_TEXT.length;

    setTimeout(() => {
      setIndex(nextIndex);
    }, 2000);
  }, [index]);

  return (
    <section
      className="flex flex-col items-center w-full text-white"
      style={{
        background:
          "linear-gradient(27.19deg, #F5D928 -42.53%, #F6D129 -19.69%, #F8B92D 16.73%, #FB9434 62.15%, #FF663C 108.47%)",
      }}
    >
      <Flex col items="center" className="w-full mx-4 mt-12">
        <h3 className="text-2xl font-semibold">Don't miss out</h3>
        <h4 className="mt-2 text-xl font-semibold">on {MISS_TEXT[index]}</h4>
        <Link href="/polygon" passHref>
          <div className="flex items-center justify-center px-6 py-3 mt-6 leading-none text-white border border-white md:px-8 md:py-4 md:text-lg rounded-xl">
            Add Polygon To MetaMask
          </div>
        </Link>
        <a
          href="https://discord.zo.xyz/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center px-6 py-2 mt-6 leading-none text-white border border-white md:px-8 md:py-4 md:text-lg rounded-xl"
          // style={{ backgroundColor: "#5865F2" }}
        >
          <Discord
            className="w-6 h-6 mr-3 md:w-8 md:h-8 md:mr-5"
            fill="white"
          />
          Join us on Discord
        </a>
        <Flex items="center" className="mt-6">
          <a
            href="https://twitter.zo.xyz/"
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <TwitterFilled className="w-6 h-6" fill="white" />
          </a>
          <a
            href="https://instagram.zo.xyz/"
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.zo.xyz/"
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <LinkedIn className="w-6 h-6" fill="white" />
          </a>
        </Flex>
      </Flex>
      <Fields3 className="w-full md:hidden" />
      <Flex items="end" justify="between" className="hidden w-full md:flex">
        <TreesLeft style={{ width: "20vw" }} />
        <TreesRight
          className="relative"
          style={{ width: "20vw", bottom: "-2vh" }}
        />
      </Flex>
      <Flex
        items="center"
        justify="center"
        className="relative w-full p-6 -mt-1 text-sm font-semibold text-white z-1"
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
