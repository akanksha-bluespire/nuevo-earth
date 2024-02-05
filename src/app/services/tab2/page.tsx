import React from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import "../../styles/tab2.css";




const tab2 = () => {
  return (
    <div className="background">
      <div className="planeshape">
      <h1 className='digital'>Environmental Software Consulting Services</h1>
      </div>
      <div className="image">
                  <Image src={"/digital.jpg"} alt="image2" className="image2"  width={400} height={500}></Image>
                  <Image src={"/digital transformation.webp"} alt="image1" className="image1"  width={600} height={500}></Image>
          </div>
           <div className="info">

                <p>Our Environmental Software Consulting Services offer expert guidance 
                    and strategic insights to environmental organizations seeking to enhance 
                    their software systems, streamline environmental data management, and address 
                    regulatory requirements. We leverage our deep understanding of both environmental 
                    science and technology to help you make informed decisions. </p>
            </div>
            <div className="keycomponents">
            <h2 className="key">Key Areas of Consulting :</h2>

            <h2 className="points">1. Environmental Data Management :</h2><p>We assist in optimizing your environmental data management processes, recommending software solutions that enhance data accuracy, accessibility, and reporting capabilities.</p>
            <h2 className="points">2. Environmental Compliance Expertise :</h2><p>Our team of former environmental regulators offers invaluable insights into navigating complex environmental regulations through software solutions, ensuring your organization remains compliant while minimizing risks. </p>
            <h2 className="points">3. Technology Alignment :</h2><p>We help align your software investments with your environmental goals, ensuring that your software infrastructure supports your environmental monitoring, reporting, and sustainability objectives.  </p>
            <h2 className="points">4. Sustainability Software Integration :</h2><p>Our consulting services extend to sustainability software integration, where we assist in incorporating sustainability metrics, carbon tracking, and environmental performance indicators into your software systems. 

</p>

            </div>
            <div className="flowerimage">
            <Image src={"/whiteflowers.jpg"} alt="flowerimage" width={400} height={500}></Image>
            </div>
      </div>
  
  )
    }
export default tab2
