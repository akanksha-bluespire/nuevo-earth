
'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Getstartedbutton from '@/app/components/getstartedbutton'
import { useRef } from 'react';
import Consultinfo from '@/app/components/consult';

const Servicepage2 = () => {
      const consultRef = useRef<HTMLDivElement>(null);
      return (
            <div>
                  <div className="flex justify-center items-center flex-col">
                              <div className="w-full h-1/2 bg-[url('/design/17.png')] bg-cover bg-center">
                                    <div className="w-full h-full backdrop-brightness-50  pt-[17%] pl-[7%] pb-[4%]">
                                          <h1 className="text-white text-6xl font-bold font-Lora" >Environmental software Consulting Services</h1>
                                         

                                          {/* <Getstartedbutton scrollToRef={keypointsRef} /> */}
                                    </div>
                                    
                              </div>
                              <p className=" text-center  text-xl font-semibold mt-[5%] mr-[7%] ml-[7%] font-poppins ">
                              Our Environmental Software Consulting Services offer expert guidance and strategic insights to environmental organizations seeking to enhance their software systems, streamline environmental data management, and address regulatory requirements. We leverage our deep understanding of both environmental science and technology to help you make informed decisions.                                          </p>
                                         
                        </div>
                        
                  <div className='w-full h-full bg-cover' >
                        
                        <div ref={consultRef} className=''>
                              <Consultinfo />
                        </div>
                        <div>
                              
                        </div>
                  </div>
            </div>
      )
}
export default Servicepage2
