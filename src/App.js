import React, { useState } from "react"
import Logo from "./components/Main/logo"
import Nav from "./components/Main/nav"
import Main from "./components/Main/main"
import Projects from "./components/Projects/projects"
import Contact from "./components/Contact/contact"
import {Switch, Route} from "react-router-dom"
import {AnimatePresence} from "framer-motion"


function App() {
  const[active, setActive] = useState(false)
  function navigate(){
    setActive(true)
  }
  function home(){
    setActive(false)
  }
  const [NavBtn, setNavBtn] = useState(false);
  function toggle(){
    setNavBtn(!NavBtn)
  }
  return (
    <div className="App">
    <div className="border">
      <div className={`navBg ${!active? "home" : ""}`}></div>
      <div className={`header ${active? "shift" : ""}`}>
        <Logo home={home} toggle={toggle} NavBtn={NavBtn}/>
        <Nav navigate={navigate} home={home} NavBtn={NavBtn} toggle={toggle}/>
      </div>
      <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/" exact>
          <Main navigate={navigate} />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
