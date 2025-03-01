"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 transition-all">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Cradlers Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#30D5C8] transition-all">
            Cradlers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {[
            { name: "Home", href: "/#home" },
            { name: "Features", href: "/#features" },
            { name: "Testimonials", href: "/#testimonials" },
            { name: "Contact", href: "/inquire" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="hover:text-[#30D5C8] transition duration-300"
              >
                {item.name}
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

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-gray-700" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu with Smooth Transition */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-[500px] py-4" : "opacity-0 max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-5 p-6 text-gray-700 font-medium">
          {[
            { name: "Home", href: "../#home" },
            { name: "Features", href: "/#features" },
            { name: "Testimonials", href: "/#testimonials" },
            { name: "Contact", href: "/inquire" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block text-lg text-center hover:text-[#30D5C8] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="text-center">
            <Link
              href="#"
              className="inline-block bg-gradient-to-r from-[#28B7A6] to-[#1F9786] hover:from-[#1F9786] hover:to-[#28B7A6] text-white py-3 px-8 rounded-lg shadow-md transition transform hover:scale-105"
              onClick={() => setIsOpen(false)}
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
