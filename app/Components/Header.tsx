// components/Header.tsx

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Cradlers Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#30D5C8]">Cradlers</span>
        </div>
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
        <Link
          href="#"
          className="hidden md:inline-block bg-[#28B7A6] hover:bg-[#1F9786] text-white py-2 px-6 rounded-lg shadow-lg transition"
        >
          Buy Now
        </Link>
      </nav>
    </header>
  );
};

export default Header;
