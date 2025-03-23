"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Add shadow when page scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Marketing", href: "/marketing" },
    { name: "Contact", href: "/inquire" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Cradlers Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#30D5C8]">Cradlers</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-[#30D5C8] transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buy Now Button (Desktop) */}
        <Link
          href="#"
          className="hidden md:inline-block bg-gradient-to-r from-[#28B7A6] to-[#1F9786] hover:from-[#1F9786] hover:to-[#28B7A6] text-white py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
        >
          Buy Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="block md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-8 h-8 text-gray-700" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 max-h-[500px] py-4"
            : "opacity-0 max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-5 p-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block text-lg text-center hover:text-[#30D5C8] transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="text-center">
            <Link
              href="#"
              className="inline-block bg-gradient-to-r from-[#28B7A6] to-[#1F9786] hover:from-[#1F9786] hover:to-[#28B7A6] text-white py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
