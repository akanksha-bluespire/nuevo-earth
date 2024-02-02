
import Image from 'next/image'
import React from 'react'
const consultinfo = () => {
  return (
    <div>
        <h2 className="font-bold text-3xl text-black ml-[8%]">Fundamental Consultancy Aspects</h2>
        {/* Division 1 */}
        <div className="flex flex-row flex-wrap-reverse m-[5%] ">
            <div className="m-[5%] flex-1 text-justify justify-center items-center">
            
                  <h2 className="font-bold text-black mt-4 mb-4 text-xl">Environmental Data Management</h2><p>We assist in optimizing your environmental data management processes, recommending software solutions that enhance data accuracy, accessibility, and reporting capabilities.</p>
            <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Environmental Compliance Expertise</h2><p>Our team of former environmental regulators offers invaluable insights into navigating complex environmental regulations through software solutions, ensuring your organization remains compliant while minimizing risks. </p>
           </div>
           <Image src="/1.jpeg" alt="keypointsimage" width={500} height={500} className='flex-1 p-10' layout='responsive'></Image>
        </div>
        
        {/* Division 2 */}
        <div className="flex flex-row-reverse flex-wrap-reverse m-[5%] mt-[10%]">
            <div className="m-[5%] flex-1 text-justify justify-center items-center">
            <h2 className="font-bold text-black mt-4 mb-4 text-xl">Technology Alignment</h2><p>We help align your software investments with your environmental goals, ensuring that your software infrastructure supports your environmental monitoring, reporting, and sustainability objectives.</p>
            <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Sustainability Integration</h2><p>Our consulting services extend to sustainability software integration, where we assist in incorporating sustainability metrics, carbon tracking, and environmental performance indicators into your software systems.</p>
           </div>
           <Image src="/2.jpeg" alt="keypointsimage" width={500} height={500} className='flex-1 p-10' layout='responsive'></Image>
        </div>

    </div>
  )
}
export default consultinfo
