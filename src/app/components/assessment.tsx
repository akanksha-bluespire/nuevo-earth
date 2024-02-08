
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const assessmentinfo = () => {
  return (
    <div>
        <h2 className="font-bold text-3xl text-black ml-[8%] pt-[6%]">Types of Assessments</h2>
        {/* Division 1 */}
        <div className="flex flex-col-reverse md:flex-row md:flex-wrap-reverse m-[5%]">
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
                  <h2 className="font-bold text-black mt-4 mb-4 text-xl">Environmental Software Health Check</h2><p>We evaluate the health and effectiveness of your existing environmental software, identifying areas for improvement and optimization.</p>
            <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Environmental Compliance Audits</h2><p>Our team conducts thorough assessments to ensure your environmental software aligns with and supports compliance with environmental regulations, safeguarding your organization from non-compliance risks. </p>
        </div>
        <div className=' flex-1'>
           <Image src="/assessment1.jpg" alt="assessment image 1" width={200} height={200} className='flex-1 p-10' layout='responsive'></Image>
        </div>
        </div>
        
        {/* Division 2 */}
        <div className="flex flex-col-reverse md:flex-row-reverse md:flex-wrap-reverse m-[5%]">
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
           <h2 className="font-bold text-black mt-4 mb-4 text-xl">Digital Maturity for Environmental Software</h2><p>We assess your organization's digital maturity concerning environmental data management, helping you understand where you stand and what steps are needed to enhance your capabilities. </p>
            <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Sustainability Software Assessment</h2><p>These assessments focus on the integration of sustainability metrics and environmental impact tracking within your software systems, helping you reduce your carbon footprint and improve sustainability efforts. </p>
           </div>
           <div className=' flex-1'>
           <Image src="/assessment2.jpg" alt="assessment image 1" width={200} height={200} className='flex-1 p-10' layout='responsive'></Image>
        </div>        
        </div>

        {/* Division 3 */}
        <div className="flex flex-col-reverse md:flex-row md:flex-wrap-reverse m-[5%]">
        <div className="m-[5%] flex-1 text-justify justify-center items-center md:w-1/2">
                <h2 className="font-bold text-black mt-4 mb-4 text-xl">Process and Workflow Enhancements</h2><p>We analyze your existing processes and workflows within your environmental software, identifying bottlenecks, inefficiencies, and areas for software-driven improvements. </p>
             </div>
             <div className=' flex-1'>
           <Image src="/assessment3.jpg" alt="assessment image 1" width={200} height={200} className='flex-1 p-10' layout='responsive'></Image>
        </div>

        </div>
        <div>
      <Link href="/services">
    <button className="btn btn-primary ml-[7%] pl-[3%] pr-[3%] mb-[6%]">
      Back </button>
      </Link>
  </div>
    </div>
  )
}
export default assessmentinfo
