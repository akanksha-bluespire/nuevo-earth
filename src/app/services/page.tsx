import Image from 'next/image'
import React from 'react'
import "../styles/mainService.css";
import mainheader from "../../../public/mainheader.jpg"
import insect from "../../../public/insect.png"
import tech1 from "../../../public/tech1.jpg"
import tech2 from "../../../public/tech2.jpg"
import { OurservicesFooter,OurservicesHeader,getintouch } from '../../../utils/info'
const MainServicePage = () => {
  return (
    <div className="background">
      <div className="background-image">
      {/* <Image src={mainheader} alt="Background Image" layout="fill" objectFit="cover" /> */}
      </div>
        <div className='top'>
        <div className="ServicesHeader">
        <h1 className='title'>Services We Provide</h1>
            <p>{OurservicesHeader}</p>
        </div>
        <div className="Header">
          <Image src={tech2} alt="image1 " width={500} className='tech2'></Image>
        </div>
        </div>
        <div className="cards">

        </div>
        <div className="ServicesFooter px-10">
            <p>{OurservicesFooter}</p>
        </div>
        <p className='getintouchinfo'>{getintouch}</p>

        <button type='button' className='getintouch'>Get in touch</button>
    </div>
  )
}
export default MainServicePage
