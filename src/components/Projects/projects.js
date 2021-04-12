import React from "react"
import Component from "../../screenshot/5.png"
import Trailers from "../../screenshot/1.jpg"
import shop from "../../screenshot/7.png"

function Projects(){
       return(
              <div className="projects">
                     <div className="project-title">
                            <h2> <span>P</span>rojects</h2>
                            <br/>
                            <hr/>
                     </div>
                     <div className="section-effect">
                            <h1>PROJECTS</h1>
                     </div>
                     <div className="projects-container">
                     <article data-id={`null`}>
                            <img src={Component} alt=""/>
                            <div className="project-info">
                                   <h2><span>C</span>omponents <span>B</span>uilder</h2>
                                   <p>A web project built to make the components selection faster for self built PCs, by presenting you with 3 different paths to choose from, while understanding how your path will perform with games.  Built with the latest Javascript features such object oriented programming classes, async, and structured with reusable code.</p>
                            </div>
                     </article>
                     <article data-id={`null`}>
                            <img src={Trailers} alt=""/>                           
                            <div className="project-info">
                                   <h2><span>M</span>ain <span>S</span>tream</h2>
                                   <p>A web app built with pure Javascript, html, and Scss. This web app allows you to watch the live trailers from a few of the top anime series. Made with less than 180 lines of code and styled with responsiveness in mind.</p>
                            </div>
                     </article>
                     <article data-id={`null`}>                           
                            <img src={shop} alt=""/>                           
                            <div className="project-info">
                                   <h2><span>E</span>-commerce</h2>
                                   <p>An ecommerce site where you can choose the part of a computer you would like and add it to the virtual cart. Built with Javascript, Html, Scss</p>
                            </div>
                     </article>
                     </div>
              </div>
       )
}

export default Projects