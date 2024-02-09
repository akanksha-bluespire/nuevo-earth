import Image from "next/image"
import { ourMission } from "../../../utils/constants"
import "../styles/about.css"
export default function OurMission() {
    return (
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
                <h2 className="mb-4 text-3xl font-semibold">Our mission</h2>
                <p>{ourMission}</p>
            </div>
        </div>
    )
}