import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Headroom from "react-headroom";
import { BurgerMenu } from ".";
import { Menu, Zo } from "../../../assets/icons";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useRouter();

  const isHome = pathname === "/" ? true : false;

  return (
    <section>
      <Headroom>
        <header className="w-full mx-auto text-white flex items-center p-4 md:px-8 justify-between">
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
      </Headroom>
      {menuOpen && <BurgerMenu closeMenu={() => setMenuOpen(false)} />}
    </section>
  );
};

export default Header;
