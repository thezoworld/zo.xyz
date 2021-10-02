import Link from "next/link";
import React from "react";
import { Zo } from "../../../assets/icons";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full max-w-5xl mx-auto fixed z-10 top-0 left-0 right-0 flex items-center p-4 justify-between text-white">
      <Link href="/" passHref>
        <a>
          <Zo className="w-10 h-10" fill="white" />
        </a>
      </Link>
      <nav className="flex items-center flex-grow justify-end">
        <Link href="/about">
          <a className="font-semibold ml-4 md:ml-12 text-base">About</a>
        </Link>
        <Link href="/blog">
          <a className="font-semibold ml-4 md:ml-12 text-base">Blog</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
