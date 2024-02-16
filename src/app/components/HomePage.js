import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='h-screen w-full bg-no-repeat bg-cover bg-center relative' style={{
      backgroundImage: "url('../design/16.png')",
    }}>
      <div className='absolute top-0 left-0 w-full h-full' style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
      }}>
        <div className='flex flex-row h-[96%] w-full'>
          <div className='flex flex-1 flex-col justify-center items-start pl-12 md:pl-20 '>
            <h2 className=' text-justify text-white font-bold font-Lora leading-normal mb-5 text-4xl sm:leading-snug md:text-4xl md:leading-snug lg:text-5xl lg:leading-normal mt-[25%]'>
              Innovative Solutions for <br /> Environmental Compliance
            </h2>
            <Link href="/about">
              <div className='flex items-center border text-white border-white p-2 md:p-3 rounded-md space-x-3 justify-center hover:bg-white hover:text-lime-800 hover:border-transparent cursor-pointer '>
                <button className=' font-poppins font-semibold '>Know more</button>
                <Image src="./arrow.svg" alt="arrow" width={20} height={20}></Image>
              </div>
            </Link>
          </div>
          {/* <div className='flex-1 items-center justify-center mt-3 brightness-[0.8] pl-5 hidden md:block'>
            <Image src='/earthtree.png' alt="earth" height={420} width={320} layout="responsive" ></Image>
          </div> */}
        </div>

      </div>
      </div>
  );
};

export default HomePage;
