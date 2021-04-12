import React from "react"
import personal from "../../images/personal-1.png"

function Heroimg(){
       return(
              <div className="hero-img">
                     <div className="whiteBg"></div>
                     <div className="blackBg"></div>    
                     <img src={personal} alt=""/>              
              </div>
       )
}

export default Heroimg