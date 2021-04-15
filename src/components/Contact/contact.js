import React from "react"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
import {motion} from "framer-motion"
import {pageAnimation} from "../../animation"

function Contact(){
       return(
              <motion.div variants={pageAnimation} initial="hidden" animate="show" className="contact">
                     <div className="contact-container">
                            <div className="contact-title">
                                   <h2><span>C</span>ontact</h2>
                                   <hr/>
                            </div>
                            <div className="contact-section">
                                   <div className="section-title">
                                          <h2>Let's Work Together</h2>
                                   </div>
                                   <div className="section-text">
                                          <div className="information text">
                                                 <h2>Personal Information</h2>
                                                 <hr/>
                                                 <br/>
                                                 <p>I prefer communication to handled through email rather than over the phone, simply because I might me besy working or due to the time difference. Below is my contact information and thank you in advance.</p>
                                                 <h4>Email: <span>TransparentVfx@gmail.com</span></h4>
                                                 <h4>Phone: <span>+1 317-480-2920</span></h4>
                                          </div>
                                          <div className="connect text">
                                                 <h2>Connect</h2>                                      
                                                 <hr/>
                                                 <br/>
                                                 <div className="social">
                                                 <a href="https://github.com/JoeCodes20"><FaGithub /></a>
                                                 <a href="https://www.linkedin.com/in/joseph-adeyanju-669942200/"><FaLinkedin /></a>
                                                 <a href="https://twitter.com/JosephCoding"><FaTwitter /></a>
                                                 <a href=""><FaFacebookSquare /></a>
                                                 </div>
                                          </div>
                                          <div className="skills text">
                                                 <h2>Skills</h2>
                                                 <hr/>
                                                 <br/>
                                                 <ul>
                                                        <li>JavaScript</li>
                                                        <li>React</li>
                                                        <li>Scss</li>
                                                        <li>Html</li>
                                                        <li>MySql</li>
                                                        <li>Git-Verson Control</li>
                                                        <li>Problem Solving</li>
                                                 </ul>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </motion.div>
       )
}

export default Contact