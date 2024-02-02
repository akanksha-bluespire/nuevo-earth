'use client';
import React from 'react'
import Image from 'next/image'  
import Keypoints from '@/app/components/keypoints'
import Link from 'next/link'
import Getstartedbutton from '@/app/components/getstartedbutton'
import { useRef } from 'react';
import App from '@/app/cards/page';
import { OurservicesFooter, getintouch } from '../../../../utils/info';
import Getintouch from '@/app/components/getintouch';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';



const servicesmainpage = () => {
  const cards = useRef<HTMLDivElement>(null);
  return (
    <div className='w-full h-full bg-cover' >
      <Header/>
          <div className="flex justify-center items-center flex-col">
                <div className="w-full h-screen bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg')] bg-cover bg-center">
                      <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 opa">
                            <p className="text-white text-6xl text-center font-bold ml-[25%] mr-[25%] transition-transform transform hover:scale-125" >Services We Provide</p>
                            <p className="text-white text-center ml-[7%] mr-[7%] mt-5 mb-5 text-lg">
                            Nuevo Earth Solutions aim to empower environmental organizations and agencies to embrace digital innovation, enhance environmental data management, ensure regulatory compliance, and advance sustainability efforts through tailored software solutions and expert guidance.                            </p>
                            <Getstartedbutton scrollToRef={cards} />
                      </div>
                </div>
          </div>
          <div ref={cards}>
            <App/>
          </div>
            <div className='m-[7%] text-justify'>
                  <div className="mb-8">
                        <p>{OurservicesFooter}</p>
                  </div>
            <p className='mb-8'>{getintouch}</p>
            <Getintouch/>
            </div>
            <Footer/>
    </div>
    
  )
}
export default servicesmainpage
