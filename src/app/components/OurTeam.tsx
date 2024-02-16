import "../styles/about.css"
import React from 'react'
import { teamList } from "../../../utils/constants"
export default function OurTeam() {
  return (
    <div className="partners">
      <div className="text-center mb-10"><h2 className="mb-4 text-3xl font-semibold ">Meet the Team</h2></div>
      <div className="partnersContainer">
        {teamList.map((teamMember, index) => (
          <div key={index} className="partners-list">
            <img style={{ width: '300px', borderRadius: '80%', height: '300px', padding:'10px', backgroundColor:'#4d7c0f' }} src={`/${teamMember[2]}`} alt={`${teamMember[0]}`} />
            <div style={{ marginTop: "10%" }}>
              <p>{`${teamMember[0]}`}</p>
              <p>{`${teamMember[1]}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}