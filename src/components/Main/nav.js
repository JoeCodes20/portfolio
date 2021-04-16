import React, {useState} from "react"
import { BiMenuAltRight } from "react-icons/bi"
import {Link} from "react-router-dom"


function Nav({navigate, home, NavBtn, toggle}){
       return(
              <div className="nav">
                     <div className={`nav-list ${NavBtn? "show-mobile-nav" : ""}`}>
                            <ul>
                                   <Link to="./" onClick={ ()=> {home(); toggle();}}>Home</Link>
                                   <Link to="./projects" onClick={ ()=>{navigate(); toggle();}}>Projects</Link>
                                   <Link to="./contact" onClick={ ()=>{navigate(); toggle();}}>Contact</Link>
                            </ul>
                     </div>
                     <div>
                            <BiMenuAltRight className={`nav-mobile`} onClick={ ()=> {toggle(); navigate();}}/>
                     </div>
              </div>
       )
}

export default Nav