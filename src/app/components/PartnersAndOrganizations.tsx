import { partnersAndOrganizations } from "../../../utils/constants"
import "../styles/about.css"
import React from 'react'

export default function PartnersAndOrganizations() {

  return (
    <>
      <div className="partners">
        <div className="text-center mb-10"><h2 className="mb-4 text-3xl font-semibold  ">Partners & Organizations we belong to</h2></div>
        <div className="partnersContainer">
          {partnersAndOrganizations.map((partner, index) => (
            <div key={index}>
              <div style={{
                width: "200px", height: "200px",
                backgroundSize: "cover", backgroundImage: `url(/${partner[1]})`
              }}>
              </div>
              <div style={{ marginTop: "20%", width: "200px" }}>{`${partner[0]}`}</div>

            </div>
          ))}
        </div>
      </div>
    </>

  )
}
