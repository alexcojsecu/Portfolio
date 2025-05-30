"use client"; // Required for using React hooks like useState

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black"> {/* Wrapper div to extend the background color */}
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        {/* Your Name */}
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold text-white pl-2 pt-[3px]">A C</h1>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-lg font-bold text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Language Link (Desktop) */}
        <div className="lg:flexCenter hidden gap-4">
          <Link
            href="#"
            className="text-lg font-bold text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-gray-300"
          >
 
          </Link>
        </div>

        {/* Mobile Menu Icon - Changed to white filter */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden invert" /* Added invert to make it white */
          onClick={toggleMenu}
        />

        {/* Mobile Dropdown Menu - Changed background to black */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black shadow-lg">
            <ul className="flex flex-col gap-4 p-6">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="text-lg font-bold text-white cursor-pointer pb-1.5 transition-all hover:text-gray-300" /* Changed text color to white */
                  onClick={toggleMenu} // Close menu when a link is clicked
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#"
                className="text-lg font-bold text-white cursor-pointer pb-1.5 transition-all hover:text-gray-300" /* Changed text color to white */
                onClick={toggleMenu} // Close menu when a link is clicked
              >
      
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;