import "./Nav.css"
import { useState } from "react"
import githubLogoWhite from "./images/githubLogoWhite.png"
import linkedinLogoWhite from "./images/linkedinLogoWhite.png"
import githubLogoBlack from "./images/githubLogoBlack.png"
import linkedinLogoBlack from "./images/linkedinLogoBlack.png"
import Toggle from "./Toggle";

function Nav({isDark, setDark}) {

  const [linkedinLogo, setLinkedin] = useState(linkedinLogoBlack)
  const [githubLogo, setGithub] = useState(githubLogoBlack)

  const handleChange = () => {
    setDark(!isDark)
    
    if (githubLogo === githubLogoBlack)
      setGithub(githubLogoWhite)
    else
      setGithub(githubLogoBlack)

    if (linkedinLogo === linkedinLogoBlack)
      setLinkedin(linkedinLogoWhite)
    else
      setLinkedin(linkedinLogoBlack)  
  }
  
  return(
    <div>
      <nav className="nav"> 
        <Toggle handleChange={handleChange} isChecked={isDark} />
        <div className="logos">
          <a className="nav-item2" href="https://github.com/oneelabed">
            <img className="logo" src={githubLogo} alt="github"></img>
          </a>
          <a className="nav-item2" href="https://www.linkedin.com/in/oneel-abed-582339343/">
            <img className="logo" src={linkedinLogo} alt="linkedin"></img>
          </a>
        </div>
        <div className="pages">
          <a href="/#" className="nav-item1">Homepage</a>
          <a href="/#AboutMe " className="nav-item1">About Me</a>
          <a href="/#MySkills" className="nav-item1">My Skills</a>     
          <a href="/#Projects" className="nav-item1">Projects</a>     
        </div>
      </nav>
    </div>
  )
}

export default Nav