
import Image from "next/image"
import { whoWeAre } from "../../../utils/constants"
import "../styles/about.css"
export default function WhoWeAre() {
    return (
     
<div className="flexContainerWho">

    <div className="whoimage">
        <h1 className="whoWeAreHeading">About Us</h1>
    </div>
    <div className="whoWeAreContent">
      <p style={{fontSize: "30px", marginBottom: "2%"}}> 
      At Nuevo Earth Solutions, we stand out from the crowd. </p>
        <p>{whoWeAre}</p>
    </div>
</div>




    )
}