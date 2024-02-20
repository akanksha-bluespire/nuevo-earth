
'use client';
import React from 'react'
import Image from 'next/image'
import Keypoints from '@/app/components/keypoints'
import Link from 'next/link'
import Getstartedbutton from '@/app/components/getstartedbutton'
import { useRef } from 'react';
const Servicepage1 = () => {
      const keypointsRef = useRef<HTMLDivElement>(null);
      return (
            <div>
                  <div className='w-full h-full bg-cover' >
                  <div className="flex justify-center items-center flex-col">
                              <div className="w-full h-1/2 bg-[url('/design/9.png')] bg-cover bg-bottom">
                                    <div className="w-full h-full backdrop-brightness-50  pt-[17%] pl-[7%] pb-[4%]">
                                          <h1 className="text-white text-6xl font-bold font-Lora" >Digital Transformation</h1>
                                         

                                          {/* <Getstartedbutton scrollToRef={keypointsRef} /> */}
                                    </div>
                                    
                              </div>
                              <p className=" text-center  text-2xl font-semibold mt-[5%] mr-[7%] ml-[7%] mb-[2%] font-poppins ">
                                                Our Digital Transformation Services for Environmental Software are designed to empower environmental organizations and agencies with cutting-edge technology solutions. We understand that the environmental sector faces unique challenges, and our services are tailored to help you modernize your operations while staying environmentally conscious.
                                          </p>
                                          <ul className=' list-disc font-poppins  text-2xl flex flex-row flex-wrap justify-center items-center gap-8'>
                                                <li>
                                                      <h2 className='font-semibold font-poppins'>Legacy System Migration</h2>
                                                </li>
                                                <li >
                                                      <h2 className='font-semibold font-poppins'>Comply with E-reporting requirements</h2>
                                                </li>
                                                <li>
                                                      <h2 className='font-semibold font-poppins'>Digitize their files and processes</h2>
                                                </li>
                                          </ul>
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
                        <div ref={keypointsRef}>
                              <Keypoints />
                        </div>
                  </div>
            </div>
      )
}
export default Servicepage1
