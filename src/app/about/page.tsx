import "../styles/about.css"
import OurMission from '../components/OurMission'
import PartnersAndOrganizations from '../components/PartnersAndOrganizations'
import Quote from '../components/Quote'
import WhoWeAre from '../components/WhoWeAre'
import OurTeam from "../components/OurTeam"

export default function Home() {
  return (
    <div className="background">

        <title>
         About-NUEVO EARTH
        </title>
        <div className="flex justify-center items-center flex-col">
                              <div className="w-full h-1/2 bg-[url('/design/3.png')] bg-cover bg-center">
                                    <div className="w-full h-full backdrop-brightness-50  pt-[17%] pl-[7%] pb-[4%]">
                                          <h1 className="text-white text-6xl font-bold font-Lora" >About Us</h1>
                                          {/* <p className="text-white text-center ml-[7%] mr-[7%] mt-5 mb-5 text-lg font-poppins">
                                                Nuevo Earth Solutions aim to empower environmental organizations and agencies to embrace digital innovation, enhance environmental data management, ensure regulatory compliance, and advance sustainability efforts through tailored software solutions and expert guidance.                            </p>
                                          <Getstartedbutton scrollToRef={cards} /> */}
                                    </div>
                              </div>
                        </div>

      {/* <WhoWeAre /> */}
      <div className='mt-[3%]'>
      <OurMission />
      </div>
      <PartnersAndOrganizations />
      <OurTeam/>
      <Quote />
    </div>
  )
}

