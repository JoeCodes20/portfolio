import React from "react"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

function Contact(){
       return(
              <div className="contact">
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
                                                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero perferendis accusamus quisquam non eum, hic dolores nesciunt consectetur consequatur repellat in, quibusdam totam labore architecto nihil quaerat laborum odit illo.</p>
                                                 <h4>Email: <span>TransparentVfx@gmail.com</span></h4>
                                                 <h4>Phone: <span>+1 317-480-2920</span></h4>
                                          </div>
                                          <div className="connect text">
                                                 <h2>Connect</h2>
                                                 <hr/>
                                                 <div className="social">
                                                 <FaGithub className='icon'/>
                                                 <FaLinkedin className='icon'/>
                                                 <FaTwitter className='icon'/>
                                                 <FaFacebookSquare className='icon'/>
                                                 </div>
                                          </div>
                                          <div className="skills text">
                                                 <h2>Skills</h2>
                                                 <hr/>
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
              </div>
       )
}

export default Contact