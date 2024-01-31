"use client"
import React, { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
          backgroundColor: 'blue',
          color: '#fff',
          padding: '10px',
          borderRadius: '80%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={scrollToTop}
      >
        <span><FaAngleUp/></span>
      </div>
    )
  );
};

export default ScrollToTopButton;
