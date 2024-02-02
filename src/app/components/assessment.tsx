
import Image from 'next/image'
import React from 'react'
const assessmentinfo = () => {
  return (
    <div>
        <h2 className="font-bold text-3xl text-black ml-[8%]">Types of Assessments</h2>
        {/* Division 1 */}
        <div className="flex flex-row flex-wrap-revers m-[5%] ">
            <div className="m-[5%] flex-1 text-justify justify-center items-center">
            
                  <h2 className="font-bold text-black mt-4 mb-4 text-xl">Environmental Software Health Check</h2><p>We evaluate the health and effectiveness of your existing environmental software, identifying areas for improvement and optimization.</p>
            <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Environmental Compliance Audits</h2><p>Our team conducts thorough assessments to ensure your environmental software aligns with and supports compliance with environmental regulations, safeguarding your organization from non-compliance risks. </p>
           </div>
           <Image src="/1.jpeg" alt="keypointsimage" width={500} height={500} className='flex-1 p-10' layout='responsive'></Image>
        </div>
        
        {/* Division 2 */}
        <div className="flex flex-row-reverse flex-wrap-reverse m-[5%] mt-[10%]">
            <div className="m-[5%] flex-1 text-justify justify-center items-center">
            <h2 className="font-bold text-black mt-4 mb-4 text-xl">Digital Maturity for Environmental Software</h2><p>We assess your organization's digital maturity concerning environmental data management, helping you understand where you stand and what steps are needed to enhance your capabilities. </p>
            <h2 className="font-bold text-black mt-[15%] mb-4 text-xl">Sustainability Software Assessment</h2><p>These assessments focus on the integration of sustainability metrics and environmental impact tracking within your software systems, helping you reduce your carbon footprint and improve sustainability efforts. </p>
           </div>
           <Image src="/2.jpeg" alt="keypointsimage" width={500} height={500} className='flex-1 p-10' layout='responsive'></Image>
        </div>

        {/* Division 3 */}
        <div className="flex flex-row flex-wrap-reverse m-[5%] mt-[10%]">
            <div className="m-[5%] flex-1 text-justify justify-center items-center">
            <h2 className="font-bold text-black mt-4 mb-4 text-xl">Process and Workflow Enhancements</h2><p>We analyze your existing processes and workflows within your environmental software, identifying bottlenecks, inefficiencies, and areas for software-driven improvements. </p>
             </div>
           <Image src="/3.jpg" alt="keypointsimage" width={500} height={500} className='flex-1 p-10' layout='responsive'></Image>
        </div>
    </div>
  )
}
export default assessmentinfo
