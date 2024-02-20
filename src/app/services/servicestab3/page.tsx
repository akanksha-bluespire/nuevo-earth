
'use client';
import React from 'react'
import Getstartedbutton from '@/app/components/getstartedbutton'
import { useRef } from 'react';
import Assessmentinfo from '@/app/components/assessment';


const Servicepage3 = () => {
      const assessmentRef = useRef<HTMLDivElement>(null);
      return (
            <div>
                   <div className="flex justify-center items-center flex-col">
                              <div className="w-full h-1/2 bg-[url('/design/12.png')] bg-cover bg-center">
                                    <div className="w-full h-full backdrop-brightness-50  pt-[17%] pl-[7%] pb-[4%]">
                                          <h1 className="text-white text-6xl font-bold font-Lora" >Environmental software Assessments</h1>
                                         

                                          {/* <Getstartedbutton scrollToRef={keypointsRef} /> */}
                                    </div>
                                    
                              </div>
                              <p className=" text-center  text-xl font-semibold mt-[5%] mr-[7%] ml-[7%] font-poppins ">
                              Our Environmental Software Assessments provide a comprehensive evaluation of your current environmental software systems and processes. These assessments offer valuable insights into improving efficiency, compliance, and environmental performance through software solutions.
                              </p>
                                         
                        </div>
                  <div className='w-full h-full bg-cover' >
                        <div ref={assessmentRef} className='mt-[5%]'>
                              <Assessmentinfo />
                        </div>
                  </div>
            </div>
      )
}
export default Servicepage3
