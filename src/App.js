import React, { useState } from "react"
import Logo from "./components/Main/logo"
import Nav from "./components/Main/nav"
import Main from "./components/Main/main"
import Projects from "./components/Projects/projects"
import Contact from "./components/Contact/contact"
import {Switch, Route} from "react-router-dom"


function App() {
  const[active, setActive] = useState(false)
  function navigate(){
    setActive(true)
  }
  function home(){
    setActive(false)
  }
  return (
    <div className="App">
      <div className={`navBg ${!active? "home" : ""}`}></div>
      <div className={`header ${active? "shift" : ""}`}>
        <Logo home={home}/>
        <Nav navigate={navigate} home={home}/>
      </div>
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
    </div>
  );
}

export default App;
