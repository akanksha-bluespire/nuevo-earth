import Image from 'next/image'
import React from 'react';
import Link from 'next/link'

const consultinfo = () => {
  return (
    <div>
      <h2 className="font-Lora font-bold text-3xl text-black ml-[6%] pt-[8%]">Fundamental Consultancy Aspects</h2>

      {/* Division 1 */}
      <div className="flex flex-col-reverse md:flex-row md:flex-wrap-reverse m-[5%]">
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
          <h2 className="font-Lora font-bold text-black mt-4 mb-4 text-xl">Environmental Data Management</h2>
          <p className=' font-poppins'>We assist in optimizing your environmental data management processes, recommending software solutions that enhance data accuracy, accessibility, and reporting capabilities.</p>
          <h2 className="font-Lora font-bold text-black mt-[15%] mb-4 text-xl">Environmental Compliance Expertise</h2>
          <p className='font-poppins'>Our team of former environmental regulators offers invaluable insights into navigating complex environmental regulations through software solutions, ensuring your organization remains compliant while minimizing risks. </p>
        </div>
        <div className='flex-1'>
          <Image src="/consult1.jpeg" alt="keypointsimage" width={200} height={200} className='flex-1 p-10 w-full' layout='responsive' />
        </div>
      </div>

      {/* Division 2 */}
      <div className="flex flex-col-reverse md:flex-row-reverse md:flex-wrap-reverse m-[5%] mt-[10%]">
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
          <h2 className="font-Lora font-bold text-black mt-4 mb-4 text-xl">Technology Alignment</h2>
          <p className='font-poppins'>We help align your software investments with your environmental goals, ensuring that your software infrastructure supports your environmental monitoring, reporting, and sustainability objectives.</p>
          <h2 className="font-Lora font-bold text-black mt-[15%] mb-4 text-xl">Sustainability Integration</h2>
          <p className=' font-poppins'>Our consulting services extend to sustainability software integration, where we assist in incorporating sustainability metrics, carbon tracking, and environmental performance indicators into your software systems.</p>
        </div>
        <div className='flex-1'>
          <Image src="/consult2.jpg" alt="keypointsimage" width={200} height={200} className='flex-1 p-10 w-full' layout='responsive' />
        </div>
      </div>

      <div>
        <Link href="/services">
          <button className="bg-green-700 mb-[6%] px-8 py-3 ml-[8%] text-white">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default consultinfo;
