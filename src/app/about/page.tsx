import Image from 'next/image'

import "../styles/about.css"
import { ourMission, partnersAndOrganizations, teamList, whoWeAre } from '../../../utils/constants'
export default function Home() {
  return (
    <div className="background">
      {/* who we are about it */}

      <div className="flexContainerWho">
        <div className="whoWeAreContent">
          <h2 className="whoWeAreHeading"> Who We Are</h2>
          <p>{whoWeAre}</p>
        </div>
        <div className="whoimage">
          <Image
            src={"/hills"}
            alt="Hills"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
      </div>

      {/* our mission */}
      <div className="flexContainer2">
        <div className="ourimage">
          <Image
            src="/lightobjects.jpg"
            alt="Description of the image"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>

        <div className="ourMissionContent">
          <h2>Our mission</h2>
          <p>{ourMission}</p>
        </div>
      </div>



      {/* Partners & Organizations */}
      <div className="partners">
        <div className="partnersHeading"><h2>Partners & Organizations we belong to</h2></div>
        <div className="partnersContainer">
          {partnersAndOrganizations.map((partner, index) => (
            <p key={index}>{partner}</p>
          ))}
        </div>
      </div>
      {/* our team */}
      <div className="partners">
        <div className="partnersHeading"><h2>Meet the Team</h2></div>
        <div className="partnersContainer">
          {teamList.map((teamMember, index) => (
            <div key={index}>
              <p>{`Name: ${teamMember[0]}`}</p>
              <p>{`Role: ${teamMember[1]}`}</p>
              <img style={{ width: '300px', borderRadius: '80%', height: '300px' }} src={`/${teamMember[2]}`} alt={`${teamMember[0]}`} />
            </div>
          ))}
        </div>
      </div>


      {/* final words */}
      <div className="quote">
        <h3>Partner with Nuevo Earth today and take the first step towards a brighter environmental future.</h3>
      </div>
    </div>
  )
}

