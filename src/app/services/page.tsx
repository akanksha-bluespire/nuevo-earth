
import Image from 'next/image'
import React from 'react'
import "../styles/mainService.css";
import { OurservicesFooter,OurservicesHeader,getintouch } from '../../../utils/info'
import App from '../cards/page';
import Getintouch from "../components/getintouch"


const MainServicePage = () => {
  return (
    <div className="background">
      <div className="background-image">
      {/* <Image src={mainheader} alt="Background Image" layout="fill" objectFit="cover" /> */}
      </div >
        <div className='top flex flex-wrap gap-5'>
        <div className="ServicesHeader">
        <h1 className='title'>Services We Provide</h1>
            <p>{OurservicesHeader}</p>
        </div>
        <div className="Header">
          <Image src={"/tech2.jpg"} alt="image1 " width={500} height={700} className='tech2'></Image>
        </div>
        </div>
        <div className="cards">
          <App/>
        </div>
        <div className="ServicesFooter">
            <p>{OurservicesFooter}</p>
        </div>
        <p className='getintouchinfo'>{getintouch}</p>
        <Getintouch />
    </div>
  )
}
export default MainServicePage
