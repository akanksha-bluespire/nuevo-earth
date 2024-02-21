'use client';
import React from 'react'
import Image from 'next/image'
import Getstartedbutton from '@/app/components/getstartedbutton'
import { useRef } from 'react';
import App from '@/app/cards/page';
import { OurservicesFooter, getintouch } from '../../../utils/info';
import Getintouch from '@/app/components/getintouch';




const Servicesmainpage = () => {
      const cards = useRef<HTMLDivElement>(null);
      return (
            <div>

                        <title> Services-NUEVO EARTH</title>
                  <div className='w-full h-full bg-cover' >
                  <div className="flex justify-center items-center flex-col">
                              <div className="w-full h-1/2 bg-[url('/design/8.png')] bg-cover bg-center">
                                    <div className="w-full h-full backdrop-brightness-50  pt-[17%] pl-[7%] pb-[4%]">
                                          <h1 className="text-white text-6xl font-bold font-Lora" >Services We Provide</h1>
                                         {/*  <Getstartedbutton scrollToRef={cards} /> */}
                                    </div>
                              </div>
                        </div>
                        <div className='flex m-[4%] flex-row justify-center items-center'>
                        {/* <Image src='/design/3.png' alt="services main page image" width={600} height={600}></Image> */}
                        <p className=" text-center ml-[7%] mr-[7%] mt-5 text-xl font-semibold font-poppins">
                              Nuevo Earth Solutions aim to empower environmental organizations and agencies to embrace digital innovation, enhance environmental data management, ensure regulatory compliance, and advance sustainability efforts through tailored software solutions and expert guidance.                            </p>
                        </div>              
                        <div ref={cards} className='pt-[6%]'>
                              <App />
                        </div>
                        <div className='m-[7%] text-justify'>
                              <div className="mb-8">
                                    <p>{OurservicesFooter}</p>
                              </div>
                              <p className='mb-8'>{getintouch}</p>
                              {/* <Getintouch /> */}
                        </div>

                  </div>
            </div>
      )
}
export default Servicesmainpage
