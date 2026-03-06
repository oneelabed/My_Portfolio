import { Link } from "react-router-dom"
import AboutMe from "./AboutMe"
import MySkills from "./MySkills"
import Projects from "./Projects"
import Hero3D from "./3D"

function Homepage({isDark}) {
  return(
    <div className="Homepage">
      <h1 id="home">Hi, I am<br></br>Oneel.</h1><br/>
      <Hero3D />
      <Link to="/Resume" id="resume-block">My Resume</Link>
      <AboutMe/>
      <MySkills isDark={isDark}/>
      <Projects isDark={isDark}/>
    </div>
  )
}

export default Homepage