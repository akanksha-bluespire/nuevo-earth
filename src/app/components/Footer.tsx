import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-auto bg-green-700 text-white">
      <div className="py-6 pl-6">
        NUEVO EARTH
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="mb-4 md:mb-0">
          <p>
            <Link href="/products">
              Products
            </Link>
          </p>
          <p>
            <Link href="/services">
              Services
            </Link>
          </p>
          <p>
            <Link href="/about">
              About
            </Link>
          </p>
          <p>
            <Link href="/contact">
              Contact
            </Link>
          </p>
        </div>

        <div className="mb-4 md:mb-0 text-center">
          <p>MBDA Business Center 13 Fifth Avenue, New York, NY 10160</p>
          <p>847-345-3255</p>
          <p>contact@example.com</p>
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
          <p className="container mx-auto text-sm">&copy; {new Date().getFullYear()} Nuevo Earth. All rights reserved.</p>
        </div>
        <div className="flex">
          <p className="mb-4 md:mb-0 mr-4">Privacy policy</p>
          <p className="mb-4 md:mb-0">Terms of use</p>
        </div>

      </div>
    </footer>

  );
};

export default Footer;

