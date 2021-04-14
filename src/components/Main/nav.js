import React from "react"
import { BiMenuAltRight } from "react-icons/bi"
import {Link} from "react-router-dom"


function Nav({navigate, home}){
       return(
              <div className="nav">
                     <div className="nav-list">
                            <ul>
                                   <Link to="./" onClick={home}>Home</Link>
                                   <Link to="./projects" onClick={navigate}>Projects</Link>
                                   <Link to="./contact" onClick={navigate}>Contact</Link>
                            </ul>
                     </div>
                     <div>
                            <BiMenuAltRight className={`nav-mobile hidden`}/>
                     </div>
              </div>
       )
}

export default Nav