import React from 'react'
import Image from 'next/image';
import Header from './Header';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';



const HomePage = () => {
    const bgStyle = {
        backgroundImage:"url('back1.jpg')",
        bacckgroundSize:'cover',
        backgroundPosition : 'center center',
        backgroundColor: 'black',
        opacity: 1
    };
  return (
    <div className='h-screen w-full bg-no-repeat bg-cover bg-center bg-black'
        
        style = {bgStyle} >
        
        
        <Header/>

        <div className='flex justify-center items-center h-[60%]'>
            <h2 className='text-5xl text-white text-center font-bold font-serif leading-normal'>Innovative Solutions for <br/> Environmental Compliance</h2>
        </div>

        
      
    </div>
  )
}

export default HomePage
