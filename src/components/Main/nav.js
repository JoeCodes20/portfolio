import React from "react"
import { BiMenuAltRight } from "react-icons/bi"
import {Link} from "react-router-dom"


function Nav({navigate, home, NavBtn, toggle}){
       return(
              <div className="nav">
                     <div className={`nav-list ${NavBtn? "show-mobile-nav" : ""}`}>
                            <ul>
                                   <Link to="./" onClick={ ()=> {home(); toggle();}} className="nav-home"> <i className="fas fa-home"></i> Home</Link>
                                   <Link to="./projects" onClick={ ()=>{navigate(); toggle();}} className="nav-projects"> <i className="fas fa-folder-open"></i> Projects</Link>
                                   <Link to="./contact" onClick={ ()=>{navigate(); toggle();}} className="nav-contact"> <i className="fas fa-address-book"></i> Contact</Link>
                            </ul>
                     </div>
                     <div>
                            <BiMenuAltRight className={`nav-mobile`} onClick={ ()=> {toggle(); navigate();}}/>
                     </div>
              </div>
       )
}

export default Nav