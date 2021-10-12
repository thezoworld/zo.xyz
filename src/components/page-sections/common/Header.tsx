import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BurgerMenu } from ".";
import { Menu, Zo } from "../../../assets/icons";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useRouter();

  const isHome = pathname === "/" ? true : false;

  return (
    <section>
      <header className="w-full mx-auto absolute text-white z-10 top-0 left-0 right-0 flex items-center p-4 md:px-8 justify-between">
        <Link href="/" passHref>
          <a>
            <Zo className="w-10 h-10" fill="white" />
          </a>
        </Link>
        <nav className="flex items-center flex-grow justify-end">
          <Menu
            className="h-6 w-6 cursor-pointer"
            stroke="white"
            onClick={() => setMenuOpen(true)}
          />
        </nav>
      </header>
      {menuOpen && <BurgerMenu closeMenu={() => setMenuOpen(false)} />}
    </section>
  );
};

export default Header;
