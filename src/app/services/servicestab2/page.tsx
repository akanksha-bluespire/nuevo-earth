
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
            <div className='w-full h-full bg-cover' >
                  <div className="flex justify-center items-center flex-col">
                        <div className="w-full h-screen bg-[url('https://realitysolutions.co.uk/wp-content/uploads/2020/03/shutterstock_71639383-scaled.jpg')] bg-cover bg-center">
                              <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 ">
                                    <p className="text-white text-6xl text-center font-bold ml-[25%] mr-[25%] pt-5" >Environmental software Consulting Services</p>
                                    <p className="text-white text-center ml-[6%] mr-[6%] mt-5 mb-10  text-lg">
                                          Our Environmental Software Consulting Services offer expert guidance and strategic insights to environmental organizations seeking to enhance their software systems, streamline environmental data management, and address regulatory requirements. We leverage our deep understanding of both environmental science and technology to help you make informed decisions.                             </p>


                                    <Getstartedbutton scrollToRef={consultRef} />
                              </div>
                        </div>
                  </div>
                  <div ref={consultRef} className='mt-[5%]'>
                        <Consultinfo />
                  </div>
            </div>

      )
}
export default Servicepage2
