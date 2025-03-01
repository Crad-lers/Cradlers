"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Cradlers Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#30D5C8]">Cradlers</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li>
            <Link href="/" className="hover:text-[#30D5C8] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-[#30D5C8] transition">
              Features
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:text-[#30D5C8] transition">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/inquire" className="hover:text-[#30D5C8] transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Buy Now Button (Desktop) */}
        <Link
          href="#"
          className="hidden md:inline-block bg-[#28B7A6] hover:bg-[#1F9786] text-white py-2 px-6 rounded-lg shadow-lg transition"
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
        className={`md:hidden absolute top-[64px] left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-6 text-gray-700">
          <li>
            <Link
              href="/"
              className="block hover:text-[#30D5C8] transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="block hover:text-[#30D5C8] transition"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              className="block hover:text-[#30D5C8] transition"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/inquire"
              className="block hover:text-[#30D5C8] transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block bg-[#28B7A6] hover:bg-[#1F9786] text-white text-center py-2 px-6 rounded-lg shadow-lg transition"
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
