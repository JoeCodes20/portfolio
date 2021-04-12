import React from "react"
import Logo from "./logo"
import Nav from "./nav"
import HeroText from "./heroText"
import HeroImg from "./heroImg"
import "../../style/style.css"
import {RiArrowDropDownLine} from "react-icons/ri"

function Main(){
       return(
              <div className="main">
                     <div className="main-container">
                            <div className="header">
                                   <Logo />
                                   <Nav />
                            </div>
                            <div className="hero-body">
                                   <div>
                                          <HeroText />
                                   </div>
                                   <div>
                                          <HeroImg />
                                   </div>
                            </div>
                            <button className="main-btn">Explore</button>
                            <div>
                                   <RiArrowDropDownLine className="scroll"/>
                            </div>
                     </div>
              </div>
              
       )
}

export default Main