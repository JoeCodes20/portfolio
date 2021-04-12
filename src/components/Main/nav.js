import React from "react"
import { BiMenuAltRight } from "react-icons/bi"


function Nav(){
       return(
              <div className="nav">
                     <div className="nav-list">
                            <ul>
                                   <a href="">Home</a>
                                   <a href="">Projects</a>
                                   <a href="">Contact</a>
                            </ul>
                     </div>
                     <div>
                            <BiMenuAltRight className={`nav-mobile hidden`}/>
                     </div>
              </div>
       )
}

export default Nav