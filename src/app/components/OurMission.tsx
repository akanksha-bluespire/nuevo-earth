import Image from "next/image"
import { ourMission } from "../../../utils/constants"
import "../styles/about.css"
import React from 'react'
export default function OurMission() {
    return (
        <div className="flexContainer2">
            <div className="ourimage mt-7">
                <Image
                    src="/design/5.png"
                    alt="Our Image"
                    width={400}
                    height={400}
                    layout="responsive"
                />
            </div>

            <div className="ourMissionContent">
                <h2 className="mb-4 text-3xl font-semibold  ">Our mission</h2>
                <p>{ourMission}</p>
            </div>
        </div>
    )
}