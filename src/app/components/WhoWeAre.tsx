import { whoWeAre } from "../../../utils/constants"
import "../styles/about.css"
export default function WhoWeAre() {
    return (

        <div className="flexContainerWho">
            <div className="whoimage">
                <h1 className="text-5xl text-white">About Us</h1>
            </div>
            <div className="whoWeAreContent">
                <p className="text-3xl mb-4">At Nuevo Earth Solutions, we stand out from the crowd. </p>
                <p>{whoWeAre}</p>
            </div>
        </div>
    )
}