import React from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import "../../styles/tab3.css";

const tab3 = () => {
  return (
    <div className="background">
      <div className="planeshape">
      <h1 className='digital'>Environmental Software Assessments</h1>
      </div>
      <div className="image">
                  <Image src={"/digital.jpg"} alt="image2" className="image2"  width={400} height={500}></Image>
                  <Image src={"/digital transformation.webp"} alt="image1" className="image1"  width={600} height={500}></Image>
          </div>
           <div className="info">

                <p>Our Environmental Software Assessments provide a comprehensive evaluation of your current environmental software systems and processes. These assessments offer valuable insights into improving efficiency, compliance, and environmental performance through software solutions. </p>
            </div>
            <div className="keycomponents">
            <h2 className="key">Types of Assessments :</h2>

            <h2 className="points">1. Environmental Software Health Check :</h2><p> We evaluate the health and effectiveness of your existing environmental software, identifying areas for improvement and optimization. </p>
            <h2 className="points">2. Environmental Compliance Audits :</h2><p>Our team conducts thorough assessments to ensure your environmental software aligns with and supports compliance with environmental regulations, safeguarding your organization from non-compliance risks. </p>
            <h2 className="points">3. Digital Maturity for Environmental Software :</h2><p> We assess your organization's digital maturity concerning environmental data management, helping you understand where you stand and what steps are needed to enhance your capabilities.  </p>
            <h2 className="points">4. Sustainability Software Assessment :</h2><p>These assessments focus on the integration of sustainability metrics and environmental impact tracking within your software systems, helping you reduce your carbon footprint and improve sustainability efforts. </p> 
            <h2 className="points">4. Process and Workflow Enhancements :</h2><p>We analyze your existing processes and workflows within your environmental software, identifying bottlenecks, inefficiencies, and areas for software-driven improvements. </p>

            </div>
            <div className="flowerimage">
            <Image src={"/whiteflowers.jpg"} alt="flowerimage" width={400} height={500}></Image>
            </div>
      </div>
  
  )
    }
export default tab3
