import Link from "next/link";
import React from "react";
import {
  Close,
  Discord,
  Instagram,
  LinkedIn,
  TwitterFilled,
  Zo,
} from "../../assets/icons";
import { Flex } from "../structure";

interface BurgerMenuProps {
  closeMenu: React.MouseEventHandler;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ closeMenu }) => {
  return (
    <Flex
      col
      className="fixed inset-y-0 right-0 w-screen px-4 pt-4 pb-10 overflow-y-auto text-white z-70 md:max-w-sm md:px-10 bg-orangy"
    >
      <Flex justify="end">
        <Close
          className="w-6 h-6 cursor-pointer"
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
          className="mx-auto my-5 text-xl font-bold no-underline cursor-pointer md:text-2xl hover:underline"
          onClick={closeMenu}
        >
          Become a founder
        </h1>
      </Link>
      <Link href="/build-zo" passHref>
        <h1
          className="mx-auto my-5 text-xl font-bold no-underline cursor-pointer md:text-2xl hover:underline"
          onClick={closeMenu}
        >
          Build Zo World
        </h1>
      </Link>
      <Link href="/travel-with-zo" passHref>
        <h1
          className="mx-auto my-5 text-xl font-bold no-underline cursor-pointer md:text-2xl hover:underline"
          onClick={closeMenu}
        >
          Travel with Zo
        </h1>
      </Link>
      <Link href="/masterplan" passHref>
        <h1
          className="mx-auto my-5 text-xl font-bold no-underline cursor-pointer md:text-2xl hover:underline"
          onClick={closeMenu}
        >
          Masterplan
        </h1>
      </Link>
      <Link href="/bounty-program" passHref>
        <h1
          className="mx-auto my-5 text-xl font-bold no-underline cursor-pointer md:text-2xl hover:underline"
          onClick={closeMenu}
        >
          Bounty Program
        </h1>
      </Link>
      <Link href="/zomad/generate" passHref>
        <h1
          className="mx-auto my-5 text-xl font-bold no-underline cursor-pointer md:text-2xl hover:underline"
          onClick={closeMenu}
        >
          Get your Zomad
        </h1>
      </Link>
      <Link href="/about" passHref>
        <h1
          className="mx-auto my-5 text-xl font-bold no-underline cursor-pointer md:text-2xl hover:underline"
          onClick={closeMenu}
        >
          About
        </h1>
      </Link>
      <Link href="/polygon" passHref>
        <div
          className="flex items-center justify-center px-6 py-3 mt-6 leading-none text-white border border-white cursor-pointer md:px-8 md:py-4 md:text-lg rounded-xl"
          onClick={closeMenu}
        >
          <span>Add Polygon To MetaMask</span>
        </div>
      </Link>
      <a
        href="https://discord.zo.xyz/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center px-6 py-2 mt-6 leading-none text-white border border-white md:px-8 md:py-4 md:text-lg rounded-xl"
        // style={{ backgroundColor: "#5865F2" }}
      >
        <Discord className="w-6 h-6 mr-3 md:w-8 md:h-8 md:mr-5" fill="white" />
        Join us on Discord
      </a>
      <Flex items="center" justify="center" className="mt-6">
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
  );
};

export default BurgerMenu;
