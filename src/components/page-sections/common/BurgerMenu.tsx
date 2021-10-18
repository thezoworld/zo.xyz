import Link from "next/link";
import React from "react";
import { Close, Discord, TwitterFilled, Zo } from "../../../assets/icons";
import { Flex } from "../../structure";

interface BurgerMenuProps {
  closeMenu: React.MouseEventHandler;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ closeMenu }) => {
  return (
    <Flex
      col
      className="fixed top-0 w-screen md:h-full overflow-auto md:max-h-screen z-70 items-end md:bg-gray-100 bg-black md:bg-opacity-80"
    >
      <Flex
        col
        className="md:max-w-sm w-screen h-screen md:px-10 px-4 pt-4 md:pb-10 bg-orangy text-white"
      >
        <Flex justify="end">
          <Close
            className="h-6 w-6 cursor-pointer"
            stroke="white"
            onClick={closeMenu}
          />
        </Flex>
        <Link href="/" passHref>
          <Zo
            className="w-16 h-16 mx-auto my-5 cursor-pointer"
            fill="white"
            onClick={closeMenu}
          />
        </Link>
        <Link href="/become-a-founder" passHref>
          <h1
            className="md:text-3xl text-2xl my-5 font-bold mx-auto no-underline hover:underline cursor-pointer"
            onClick={closeMenu}
          >
            Become a founder
          </h1>
        </Link>
        <Link href="/build-zo" passHref>
          <h1
            className="md:text-3xl text-2xl my-5 font-bold mx-auto no-underline hover:underline cursor-pointer"
            onClick={closeMenu}
          >
            Build Zo World
          </h1>
        </Link>
        <Link href="/travel-with-zo" passHref>
          <h1
            className="md:text-3xl text-2xl my-5 font-bold mx-auto no-underline hover:underline cursor-pointer"
            onClick={closeMenu}
          >
            Travel with Zo
          </h1>
        </Link>
        <Link href="/masterplan" passHref>
          <h1
            className="md:text-3xl text-2xl my-5 font-bold mx-auto no-underline hover:underline cursor-pointer"
            onClick={closeMenu}
          >
            Masterplan
          </h1>
        </Link>
        <Link href="/about" passHref>
          <h1
            className="md:text-3xl text-2xl my-5 font-bold mx-auto no-underline hover:underline cursor-pointer"
            onClick={closeMenu}
          >
            About
          </h1>
        </Link>
        <a
          href="https://discord.zo.xyz/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-8 mb-5 flex items-center justify-center px-6 py-2 md:px-8 md:py-4 md:text-lg leading-none rounded-xl border-white border text-white"
          onClick={closeMenu}
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
          className="mx-auto flex items-center justify-center px-6 py-2 md:px-8 md:py-4 md:text-lg leading-none rounded-xl border-white border text-white"
          onClick={closeMenu}
        >
          <TwitterFilled
            className="w-6 h-6 mr-3 md:w-8 md:h-8 md:mr-5"
            fill="white"
          />
          Twitter
        </a>
      </Flex>
    </Flex>
  );
};

export default BurgerMenu;
