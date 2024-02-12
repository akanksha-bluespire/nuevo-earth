'use client';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const megaMenuData = {
    Products: [
      { name: 'E Permits', href: '/products/view' },
      { name: 'E-Compliance', href: '/products/view' },
      { name: 'Other Applications', href: '/products/view' },
    ],
    Services: [
      { name: 'Digital Transformation', href: '/services/servicestab1' },
      { name: 'Environmental Software Consulting Services', href: '/services/servicestab2' },
      { name: 'Environmental Software Assessment', href: '/services/servicestab3' },
    ],
  };

  return (
    <div className={`text-white font-bold fixed top-0 left-0 z-50 w-full p-3 md:p-4 transition duration-300 ${scrollY > 300 ? 'bg-sky-900' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center pr-3 pl-3">
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
            ? 'fixed top-10 right-5 p-4 flex-col items-center justify-center bg-slate-900 text-white'
            : 'hidden md:flex space-x-8'
            }`}
        >

          <li className={`font-medium cursor-pointer text-white font-poppins text-sm md:text-sm mb-2 md:mb-0 pb-0.5
          relative 
        hover:text-sky-400 
        transition-all 
        ease-in-out 
        before:transition-[width] 
        before:ease-in-out 
        before:duration-700
        before:absolute 
        before:bg-sky-400 
        before:origin-center 
        before:h-[1.5px] 
        before:w-0 
        hover:before:w-[50%] 
        before:bottom-0
        before:left-[50%] 
        after:transition-[width] 
        after:ease-in-out 
        after:duration-700
        after:absolute 
        after:bg-sky-400 
        after:origin-center 
        after:h-[1.5px] 
        after:w-0 
        hover:after:w-[50%] 
        after:bottom-0 
        after:right-[50%]`}>
            <Link href="/" >Home</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-sm md:text-sm  mb-2 md:mb-0 pb-0.5 group
          relative 
          hover:text-sky-400 
          transition-all 
          ease-in-out 
          before:transition-[width] 
          before:ease-in-out 
          before:duration-700 
          before:absolute 
          before:bg-sky-400 before:origin-center 
          before:h-[1.5px] 
          before:w-0 
          hover:before:w-[50%] 
          before:bottom-0 before:left-[50%] 
          after:transition-[width] 
          after:ease-in-out 
          after:duration-700 
          after:absolute 
          after:bg-sky-400 
          after:origin-center 
          after:h-[1.5px] 
          after:w-0 
          hover:after:w-[50%] 
          after:bottom-0 
          after:right-[50%]">
            <Link href="/products">Products</Link>
            <div className="absolute bg-white text-gray-800 rounded-lg shadow-lg py-2 w-44 mt-3 group-hover:flex left-[-100%] justify-center hidden">
              <div className="px-4 py-2 ">
                {megaMenuData.Products.map(({ name, href }) => (
                  <Link key={name} href={href} className="block py-1 hover:text-sky-500 mb-2">
                    {name}
                  </Link>
                ))}
              </div>
            </div>


          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-sm md:text-sm  mb-2 md:mb-0 pb-0.5 group
          relative 
          hover:text-sky-400 
          transition-all 
          ease-in-out 
          before:transition-[width] 
          before:ease-in-out 
          before:duration-700 
          before:absolute 
          before:bg-sky-400 before:origin-center 
          before:h-[1.5px] 
          before:w-0 
          hover:before:w-[50%] 
          before:bottom-0 before:left-[50%] 
          after:transition-[width] 
          after:ease-in-out 
          after:duration-700 
          after:absolute 
          after:bg-sky-400 
          after:origin-center 
          after:h-[1.5px] 
          after:w-0 
          hover:after:w-[50%] 
          after:bottom-0 
          after:right-[50%]">
            <Link href="/services">Services</Link>
            <div className="absolute bg-white text-gray-800 rounded-lg shadow-lg py-2 w-72 mt-3 group-hover:flex left-[-160%] justify-center hidden">
              <div className="px-4 py-2 ">
                {megaMenuData.Services.map(({ name, href }) => (
                  <Link key={name} href={href} className="block py-1 hover:text-sky-500 mb-2">
                    {name}
                  </Link>
                ))}
              </div>
            </div>

          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-sm md:text-sm  mb-2 md:mb-0 pb-0.5
          relative 
          hover:text-sky-400 
          transition-all 
          ease-in-out 
          before:transition-[width] 
          before:ease-in-out 
          before:duration-700 
          before:absolute 
          before:bg-sky-400 before:origin-center 
          before:h-[1.5px] 
          before:w-0 
          hover:before:w-[50%] 
          before:bottom-0 before:left-[50%] 
          after:transition-[width] 
          after:ease-in-out 
          after:duration-700 
          after:absolute 
          after:bg-sky-400 
          after:origin-center 
          after:h-[1.5px] 
          after:w-0 
          hover:after:w-[50%] 
          after:bottom-0 
          after:right-[50%]">
            <Link href="/about">About</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-poppins text-sm md:text-sm mb-2 md:mb-0 pb-0.5
          relative 
          hover:text-sky-400 
          transition-all 
          ease-in-out 
          before:transition-[width] 
          before:ease-in-out 
          before:duration-700 
          before:absolute 
          before:bg-sky-400 before:origin-center 
          before:h-[1.5px] 
          before:w-0 
          hover:before:w-[50%] 
          before:bottom-0 before:left-[50%] 
          after:transition-[width] 
          after:ease-in-out 
          after:duration-700 
          after:absolute 
          after:bg-sky-400 
          after:origin-center 
          after:h-[1.5px] 
          after:w-0 
          hover:after:w-[50%] 
          after:bottom-0 
          after:right-[50%]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div >


  );
};

export default Header;
