import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Discord, TwitterFilled, Zo } from "../../../assets/icons";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { pathname } = useRouter();

  const isHome = pathname === "/" ? true : false;

  return (
    <header
      className={`w-full mx-auto ${
        isHome ? "fixed text-white" : ""
      } z-10 top-0 left-0 right-0 flex items-center p-4 md:px-8 justify-between`}
    >
      <Link href="/" passHref>
        <a>
          <Zo className="w-10 h-10" fill={isHome ? "white" : "#f15824"} />
        </a>
      </Link>
      <nav className="flex items-center flex-grow justify-end">
        <a href="https://discord.zo.xyz/" target="_blank" rel="noreferrer">
          <Discord className="w-6 h-6 mr-3 md:w-6 md:h-6 md:mr-5 fill-current" />
        </a>
        <a href="https://twitter.zo.xyz/" target="_blank" rel="noreferrer">
          <TwitterFilled className="w-6 h-6 mr-3 md:w-6 md:h-6 md:mr-5 fill-current" />
        </a>
        <Link href="/about">
          <a className="font-bold text-base">About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
