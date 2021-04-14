import React, {useState} from "react"
import Component from "../../images/com-mobile.png"
import Trailers from "../../images/main-mobile.png"
import shop from "../../images/shop-mobile.png"
import ProjectView from "./projectView"
import axios from "axios"
import {motion} from "framer-motion"
import {pageAnimation} from "../../animation"
import {first} from "../../animation"
import {second} from "../../animation"
import {third} from "../../animation"

function Projects(){
       const [projectInfo, setprojectInfo] = useState({})
       const [show, setshow] = useState(false)
       function viewProject(project){    
              axios.get("./projects.json")
              .then(res => {
                     let data = res.data[project]
                     setprojectInfo(data)
              })
              .catch(err => console.log(err))
              setshow(!show)
       }
       function closeProject(){
              setshow(!show)
       }
       return(
              <motion.div variants={pageAnimation} initial="hidden" animate="show" className="projects">
                     <div className="project-title">
                            <h2> <span>P</span>rojects</h2>
                            <br/>
                            <hr/>
                     </div>
                     <div className="section-effect">
                            <h1>DEVELOPER</h1>
                     </div>
                     <div className="projects-container">
                     <motion.article data-id={`null`} onClick={()=>{viewProject("component-builder")}} variants={first}>
                            <img src={Component} alt=""/>
                            <div className="project-info">
                                   <h2><span>C</span>omponents <span>B</span>uilder</h2>
                                   <p>A web project built to make the components selection faster for self built PCs, by presenting you with 3 different paths to choose from, while understanding how your path will perform with games.  Built with the latest Javascript features such object oriented programming classes, async, and structured with reusable code.</p>
                            </div>
                     </motion.article>
                     <motion.article data-id={`null`} onClick={()=>{viewProject("main-stream")}} variants={second}>
                            <img src={Trailers} alt=""/>                           
                            <div className="project-info">
                                   <h2><span>M</span>ain <span>S</span>tream</h2>
                                   <p>A web app built with pure Javascript, html, and Scss. This web app allows you to watch the live trailers from a few of the top anime series. Made with less than 180 lines of code and styled with responsiveness in mind.</p>
                            </div>
                     </motion.article>
                     <motion.article data-id={`null`} onClick={()=>{viewProject("e-commerce")}} variants={third}>                           
                            <img src={shop} alt=""/>                           
                            <div className="project-info">
                                   <h2><span>E</span>-commerce</h2>
                                   <p>An ecommerce site where you can choose the part of a computer you would like and add it to the virtual cart. Built with Javascript, Html, Scss</p>
                            </div>
                     </motion.article>
                     </div>
                     <ProjectView  DTImg={projectInfo.DTImg} TImg={projectInfo.TImg} MImg={projectInfo.MImg} title={projectInfo.title} desc={projectInfo.desc} show={show} closeProject={closeProject} Link={projectInfo.Link}/>
                     <div className={`viewOverlayBg ${show? "overlayBg" : ""}`}></div>
              </motion.div>
       )
}

export default Projects