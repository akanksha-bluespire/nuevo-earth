import React from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import "../styles/tab1.css";
import earth from "../../../public/earth.png"
import image1 from "../../../public/digital transformation.webp"
import image2 from "../../../public/digital.jpg";
import flower from "../../../public/whiteflowers.jpg"




const tab1 = () => {
  return (
    <div className="background">
      <div className="planeshape">
      <h1 className='digital'>Digital Transformation</h1>
      </div>
          <div className="image">
                  <Image src={image2} alt="image2" className="image2"  width={400}></Image>
                  <Image src={image1} alt="image1" className="image1"  width={600}></Image>
          </div>
           <div className="info">
            <div className="legacy">
                <h2 >Legacy System Migration </h2>
                <h2 >Comply with e-reporting requirements </h2>
                <h2>Digitize their files and processes </h2>
            </div>
                <p>Our Digital Transformation Services for Environmental Software are designed to empower environmental organizations and agencies with cutting-edge technology solutions.
                   We understand that the environmental sector faces unique challenges, and our services are tailored to help you modernize your operations while staying environmentally conscious.</p>
            </div>
            <div className="keycomponents">
            <h2 className="key">Key Components: </h2>

            <h2 className="points">1. Environmental Technology Strategy :</h2><p>We work closely with your team to develop a customized digital transformation strategy that integrates environmental data management, compliance tracking, and sustainability analytics into your software ecosystem. </p>
            <h2 className="points">2. Environmental Data Integration :</h2><p>Our experts assess your existing data management processes and recommend and implement digital solutions that streamline data collection, analysis, and reporting. This includes leveraging cloud computing, data analytics, and IoT technologies specific to environmental data.</p>
            <h2 className="points">3. Environmental Compliance Solutions :</h2><p>We provide specialized software solutions that facilitate compliance with complex environmental regulations. These tools help you track, manage, and report on your environmental compliance efforts efficiently. </p>
            <h2 className="points">4. Sustainability Integration :</h2><p>Our services extend to sustainability initiatives, where we assist in integrating sustainability metrics and reporting into your software systems, helping you reduce your environmental impact and promote eco-friendly practices. </p>
            <h2 className="points">5. Continuous Improvement for Environmental Software :</h2><p>We monitor the performance of your environmental software solutions and provide ongoing support and updates to ensure they remain effective and aligned with your environmental goals. </p>

            </div>
            <div className="flowerimage">
              <Image src={flower} alt="flowerimage" width={400}></Image>
            </div>
      </div>
  
  )
    }
export default tab1
