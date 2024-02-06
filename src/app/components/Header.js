'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="text-white font-bold p-2 md:p-3 fixed top-0 left-0 z-50 w-full bg-sky-900">
      <div className="flex justify-between items-center">
        {/* Logo and Home Link */}
        <div className="cursor-pointer">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={150} height={100} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex  ${mobileMenuOpen
            ? 'fixed top-10 right-5 p-4 flex-col items-center justify-center'
            : 'hidden md:flex space-x-5 mr-[1%]'
            }`}
        >
          <li className="font-medium cursor-pointer text-white text-xs md:text-sm hover:text-cyan-200 hover:overline mb-2 md:mb-0 font-poppins">
            <Link href="/">Home</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-xs md:text-sm hover:text-cyan-200 hover:overline mb-2 md:mb-0">
            <Link href="/products">Products</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-xs md:text-sm hover:text-cyan-200 hover:overline mb-2 md:mb-0">
            <Link href="/services">Services</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-xs md:text-sm hover:text-cyan-200 hover:overline mb-2 md:mb-0">
            <Link href="/about">About</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-xs md:text-sm hover:text-cyan-200 hover:overline mb-2 md:mb-0">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
