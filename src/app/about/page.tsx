import "../styles/about.css"
import OurMission from '../components/OurMission'
import PartnersAndOrganizations from '../components/PartnersAndOrganizations'
import Quote from '../components/Quote'
import WhoWeAre from '../components/WhoWeAre'
import OurTeam from "../components/OurTeam"

export default function Home() {
  return (
    <div className="background">
      <WhoWeAre />
      <OurMission />
      <PartnersAndOrganizations />
      <OurTeam/>
      <Quote />
    </div>
  )
}

