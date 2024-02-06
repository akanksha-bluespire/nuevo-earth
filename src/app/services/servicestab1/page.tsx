
'use client';
import React from 'react'
import Image from 'next/image'  
import Keypoints from '@/app/components/keypoints'
import Link from 'next/link'
import Getstartedbutton from '@/app/components/getstartedbutton'
import { useRef } from 'react';
const servicepage1 = () => {
  const keypointsRef = useRef<HTMLDivElement>(null);
  return (
      <div>
    <div className='w-full h-full bg-cover' >
          <div className="flex justify-center items-center flex-col">
                <div className="w-full h-screen bg-[url('https://wallpaperaccess.com/full/4818793.jpg')] bg-cover bg-center">
                      <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 ">
                            <p className="text-white text-6xl text-center font-bold ml-[25%] mr-[25%] pt-5" >Digital Transformation</p>
                            <p className="text-white text-center ml-[6%] mr-[6%] mt-5  text-lg">
                                Our Digital Transformation Services for Environmental Software are designed to empower environmental organizations and agencies with cutting-edge technology solutions. We understand that the environmental sector faces unique challenges, and our services are tailored to help you modernize your operations while staying environmentally conscious.
                            </p>
                             <ul className='m-[7%] list-disc text-white flex flex-row flex-wrap justify-center items-center gap-8 mt-2'>
                                    <li>
                                          <h2 className='text-xl font-semibold transition-transform transform hover:scale-110 '>Legacy System Migration</h2>
                                    </li>
                                    <li >
                                          <h2 className='text-xl font-semibold transition-transform transform hover:scale-110'>Comply with E-reporting requirements</h2>
                                    </li>
                                    <li>
                                          <h2 className='text-xl font-semibold transition-transform transform hover:scale-110'>Digitize their files and processes</h2>
                                    </li>
                              </ul>

                            <Getstartedbutton scrollToRef={keypointsRef} />
                      </div>
                </div>
          </div>
            {/* <div className='m-[7%]'>
            <div className=' bg-gradient-to-r from-white 40% to-emerald-300 p-[2%] m-[2%]  rounded-none w-1/2 text-center transition-transform transform hover:scale-105'>
            <h2 className='text-xl font-semibold'>Legacy System Migration </h2>
            </div>
            <div className=' bg-gradient-to-r from-white 40% to-blue-500 p-[2%] m-[2%] ml-[25%] rounded-none w-1/2 text-center transition-transform transform hover:scale-105'>
            <h2 className='text-xl font-semibold'>Comply with E-reporting requirements </h2>
            </div>
            <div className=' bg-gradient-to-r from-white 40% to-blue-500 p-[2%] m-[2%] ml-[50%] rounded-none w-1/2 text-center transition-transform transform hover:scale-105'>
            <h2 className='text-xl font-semibold'>Digitize their files and processes </h2>
            </div>
            </div> */}
            <div ref={keypointsRef} className='mt-[5%]'>
                <Keypoints />
          </div>
    </div>
    </div>
  )
}
export default servicepage1
