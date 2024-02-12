import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='h-screen w-full bg-no-repeat bg-cover bg-center relative' style={{
      backgroundImage: "url('bg.jpg')",
    }}>
      <div className='absolute top-0 left-0 w-full h-full' style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
      }}>
        <div className='flex flex-col justify-center items-center h-[95%] w-100%'>
          <h2 className='text-xl text-white text-center font-bold font-Lora leading-normal mb-5 sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug lg:text-5xl lg:leading-normal'>
            Innovative Solutions for <br /> Environmental Compliance
          </h2>
          <Link href="/about">
            <div className='flex border border-white p-3 rounded-md space-x-3 justify-center items-center hover:bg-cyan-700 hover:border-transparent cursor-pointer'>
              <button className='text-white font-poppins font-semibold'>Know more</button>
              <Image src="./arrow.svg" alt="arrow" width={20} height={20}></Image>
            </div>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default HomePage;
