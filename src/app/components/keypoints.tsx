import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const keypoints = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-black ml-[8%] pt-[6%]">Principle Features</h2>

      {/* Division 1 */}
      <div className="flex flex-col-reverse md:flex-row md:flex-wrap-reverse m-[5%]">
        <div className='flex-1'>
          <Image src="/1.jpeg" alt="keypointsimage" width={500} height={500} className='flex-1 p-10' layout='responsive' />
        </div>
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
          <h2 className="font-bold text-black mt-4 mb-4 text-xl">Environmental Technology Strategy</h2>
          <p>We work closely with your team to develop a customized digital transformation strategy that integrates environmental data management, compliance tracking, and sustainability analytics into your software ecosystem. </p>
          <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Environmental Data Integration</h2>
          <p>Our experts assess your existing data management processes and recommend and implement digital solutions that streamline data collection, analysis, and reporting. This includes leveraging cloud computing, data analytics, and IoT technologies specific to environmental data.</p>
        </div>
      </div>

      {/* Division 2 */}
      <div className="flex flex-col-reverse md:flex-row-reverse md:flex-wrap-reverse m-[5%]">
        <div className='flex-1'>
          <Image src="/key.jpg" alt="keypointsimage" width={300} height={300} className='flex-1 p-10' layout='responsive' />
        </div>
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
          <h2 className="font-bold text-black mt-4 mb-4 text-xl">Environmental Compliance Solutions</h2>
          <p>We provide specialized software solutions that facilitate compliance with complex environmental regulations. These tools help you track, manage, and report on your environmental compliance efforts efficiently. </p>
          <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Sustainability Integration</h2>
          <p>Our services extend to sustainability initiatives, where we assist in integrating sustainability metrics and reporting into your software systems, helping you reduce your environmental impact and promote eco-friendly practices. </p>
        </div>
      </div>

      {/* Division 3 */}
      <div className="flex flex-col-reverse md:flex-row md:flex-wrap-reverse m-[5%]">
        <div className='flex-1'>
          <Image src="/3.jpg" alt="keypointsimage" width={500} height={500} className='flex-1 p-10' layout='responsive' />
        </div>
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
          <h2 className="font-bold text-black mt-4 mb-4 text-xl">Continuous Improvement for Environmental Software</h2>
          <p>We monitor the performance of your environmental software solutions and provide ongoing support and updates to ensure they remain effective and aligned with your environmental goals. </p>
        </div>
      </div>

      <div>
      <Link href="/services">
    <button className="btn btn-primary ml-[7%] pl-[3%] pr-[3%] mb-[6%]">
      Back </button>
      </Link>
  </div>

    </div>
  );
};

export default keypoints;
