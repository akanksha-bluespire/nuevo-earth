'use client';
import Link from 'next/link';
import {useState} from 'react'
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  
  return (
    <div className="text-white p-4 md:p-6">
      <div className="flex justify-between items-center">
        {/* Logo and Home Link */}
        <div className="cursor-pointer">
          <Link href="/home">
            
              <Image src="/Logo.png" alt="Logo" width={200} height={150} />
            
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <li className="font-medium cursor-pointer text-white font-serif text-lg hover:text-cyan-200 hover:overline">
            <Link href="/home">Home</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-serif text-lg hover:text-cyan-200 hover:overline">
            <Link href="/products">Products</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-serif text-lg hover:text-cyan-200 hover:overline">
            <Link href="/services">Services</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-serif text-lg hover:text-cyan-200 hover:overline">
            <Link href="/about">About</Link>
          </li>
          <li className="font-medium cursor-pointer text-white font-serif text-lg hover:text-cyan-200 hover:overline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
