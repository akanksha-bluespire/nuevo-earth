import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="mt-auto  bg-sky-950 text-white">
      <div className="py-6 pl-6">
        <Image src="/Nuevoearthlogo.png" alt="Logo" width={150} height={100} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="mb-4 md:mb-0">
          <p className='font-poppins'>
            <Link href="/products">
              Products
            </Link>
          </p>
          <p className='font-poppins'>
            <Link href="/services">
              Services
            </Link>
          </p>
          <p className='font-poppins'>
            <Link href="/about">
              About
            </Link>
          </p>
          <p className='font-poppins'>
            <Link href="/contact">
              Contact
            </Link>
          </p>
        </div>

        <div className="mb-4 md:mb-0 text-center">
          <p className='font-poppins'>MBDA Business Center 13 Fifth Avenue, New York, NY 10160</p>
          <p className='font-poppins'>847-345-3255</p>
          <p className='font-poppins'>contact@example.com</p>
        </div>

        <div className="flex items-center justify-around mb-4 md:mb-0">
          <a href="https://www.instagram.com">
            <FaInstagram size="2em" style={{ marginRight: '10px' }} />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook size="2em" style={{ marginRight: '10px' }} />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin size="2em" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-around py-5">
        <div className="">
          <p className="container mx-auto text-sm font-poppins">&copy; {new Date().getFullYear()} Nuevo Earth. All rights reserved.</p>
        </div>
        <div className="flex">
          <p className="mb-4 md:mb-0 mr-4 font-poppins">Privacy policy</p>
          <p className="mb-4 md:mb-0 font-poppins">Terms of use</p>
        </div>

      </div>
    </footer>

  );
};

export default Footer;

