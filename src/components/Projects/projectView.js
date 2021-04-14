import React from "react"
import {FaRegWindowClose} from "react-icons/fa"
import {FaExternalLinkAlt} from "react-icons/all"

function ProjectView({DTImg, TImg, MImg, title, desc, show, closeProject, Link}){
       return(
              <div className={`view ${show? "displayProject" : ""}`}>
                     <div className="closeBtn" onClick={closeProject}>
                            <FaRegWindowClose />
                     </div>
                     <div className="link">
                            <a href={Link}><FaExternalLinkAlt /></a>
                     </div>
                     <div className="views">
                            <div className='desktop-view'>
                                   <img src={DTImg} alt="" />
                            </div>
                            <div className="tablet-view">
                                   <img src={TImg} alt="" />
                            </div>
                            <div className='mobile-view'>
                                   <img src={MImg} alt="" />
                            </div>
                     </div>
                     <div className="view-text">
                            <h2>{title}</h2>
                            <br/>
                            <p>Description: {desc}</p>
                     </div>
              </div>
       )
}

export default ProjectView