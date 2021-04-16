import React from "react"
import HeroText from "./heroText"
import HeroImg from "./heroImg"
import "../../style/style.css"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import {pageAnimation} from "../../animation"
import {first} from "../../animation"

function Main({navigate}){
       return(
              <motion.div variants={pageAnimation} initial="hidden" animate="show" className="main">
                     <div className="main-container">
                            <div className="hero-body">
                                   {/* <div>
                                          <HeroImg />
                                   </div> */}
                                   <div>
                                          <HeroText />
                                   </div>
                                   <div>
                                          <HeroImg />
                                   </div>
                            </div>
                            <Link to="./projects"><motion.button className="main-btn" onClick={navigate} variants={first}>Explore</motion.button></Link>
                            <div>
                            </div>
                     </div>
              </motion.div>
              
       )
}

export default Main