// Tree.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface TreeProps {
  totalScrolls: number;
}

const Tree: React.FC<TreeProps> = ({ totalScrolls }) => {
  const images = Array.from({ length: 95 }, (_, index) => index + 1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight / 1.6; // Assuming the page is divided into 3 sections

      const currentPage = Math.floor(scrollPosition / pageHeight) + 1;
      const relativeScroll = scrollPosition % pageHeight;

      const scrollsPerPage = pageHeight / images.length;

      const imageIndex = Math.floor(relativeScroll / scrollsPerPage) + (currentPage - 1) * (images.length / 3);
      setCurrentImageIndex(Math.min(images.length - 1, Math.max(0, imageIndex)));
    };

    handleScroll(); // Call initially to set initial image based on scroll position

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=''>
      <div className='relative flex justify-center items-center'>
        {images.map((imageIndex, index) => (
          <Image
            key={index}
            src={`/images/${imageIndex}.png`}
            alt={`image${imageIndex}`}
            width={700}
            height={700}
            className={`absolute ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Tree;
