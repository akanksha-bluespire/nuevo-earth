import React from 'react';
import Image from 'next/image';
import Header from './Header';

const HomePage = () => {
  return (
    <div className='h-screen w-screen bg-no-repeat bg-cover bg-center relative' style={{
      backgroundImage: "url('homebg.jpg')",
      width: '100%'
    }}>
      <Header />
      <div className='absolute top-0 left-0 w-full h-full' style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
      }}>
        <div className='flex justify-center items-center h-screen w-full'>
          <h2 className='text-5xl text-white text-center font-bold font-Lato leading-normal'>
            Innovative Solutions for <br /> Environmental Compliance
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
