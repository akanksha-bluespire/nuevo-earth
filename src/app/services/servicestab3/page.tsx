
'use client';
import React from 'react'
import Getstartedbutton from '@/app/components/getstartedbutton'
import { useRef } from 'react';
import Assessmentinfo from '@/app/components/assessment';


const Servicepage3 = () => {
  const assessmentRef = useRef<HTMLDivElement>(null);
  return (
      <div>
    <div className='w-full h-full bg-cover' >
          <div className="flex justify-center items-center flex-col">
                <div className="w-full h-screen bg-[url('https://cdn.careeronestop.org/OccVids/OccupationVideos/15-1199.01.jpg')] bg-cover bg-center">
                      <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 ">
                            <p className="text-white text-6xl text-center font-bold ml-[25%] mr-[25%] pt-5" >Environmental software Assessments</p>
                            <p className="text-white text-center ml-[6%] mr-[6%] mt-5 mb-10  text-lg">
                            Our Environmental Software Assessments provide a comprehensive evaluation of your current environmental software systems and processes. These assessments offer valuable insights into improving efficiency, compliance, and environmental performance through software solutions. 
                            </p>
                            <Getstartedbutton scrollToRef={assessmentRef} />
                      </div>
                </div>
          </div>
            <div ref={assessmentRef} className='mt-[5%]'>
                <Assessmentinfo />
          </div>
    </div>
    </div>
  )
}
export default Servicepage3
