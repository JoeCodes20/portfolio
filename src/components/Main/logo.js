import React from "react"
import LogoImg from "../../images/newlogo.png"

function Logo(){
       return(
              <div className="logo">
                     <div className="logo-img">
                            <img src={LogoImg} alt=""/>
                     </div>
                     <div className="logo-text">
                            <p>Joseph Adeyanju</p>
                            <h2>FrontEnd Developer</h2>
                     </div>
              </div>
       )
}

export default Logo