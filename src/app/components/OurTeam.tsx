import "../styles/about.css"
import { teamList } from "../../../utils/constants"
export default function OurTeam() {
    return (
        <div className="partners">
        <div className="partnersHeading"><h2>Meet the Team</h2></div>
        <div className="partnersContainer">
          {teamList.map((teamMember, index) => (
            <div key={index} className="partners-list">
              <img style={{ width: '300px', borderRadius: '80%', height: '300px' }} src={`/${teamMember[2]}`} alt={`${teamMember[0]}`} />
              <div style={{  marginTop: "10%"}}>
              <p>{`${teamMember[0]}`}</p>
              <p>{`${teamMember[1]}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}