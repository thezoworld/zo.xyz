import Link from "next/link";
import React from "react";
import { Zo } from "../../../assets/icons";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full max-w-5xl mx-auto fixed z-10 top-0 left-0 right-0 flex items-center p-4 justify-between text-white">
      <Zo className="w-10 h-10" fill="white" />
      <nav className="flex items-center flex-grow justify-end">
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
