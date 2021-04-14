import React from "react"
import LogoImg from "../../images/newlogo.png"
import {Link} from "react-router-dom"


function Logo({home}){
       return(
              <div className="logo">
                     <div className="logo-img">
                            <Link to="./">
                            <img src={LogoImg} alt="" onClick={home}/>
                            </Link>
                     </div>
                     <div className="logo-text">
                            <p>Joseph Adeyanju</p>
                            <h2>FrontEnd Developer</h2>
                     </div>
              </div>
       )
}

export default Logo