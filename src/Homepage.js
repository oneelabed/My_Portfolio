import { Link } from "react-router-dom"
import AboutMe from "./AboutMe"
import MySkills from "./MySkills"
import Projects from "./Projects"

function Homepage({isDark}) {
  return(
    <div className="Homepage">
      <h1 id="home">Hi, I am<br></br>Oneel.</h1><br/>
      <Link to="/Resume" id="resume-block">My Resume</Link>
      <AboutMe/>
      <MySkills/>
      <Projects isDark={isDark}/>
    </div>
  )
}

export default Homepage