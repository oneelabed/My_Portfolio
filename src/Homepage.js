import { Link } from "react-router-dom"
import githubLogoWhite from "./images/githubLogoWhite.png"
import githubLogoBlack from "./images/githubLogoBlack.png"
import pythonLogo from "./images/pythonLogo.png"
import javaLogo from "./images/javaLogo.png"
import JSLogo from "./images/JSLogo.png"
import CLogo from "./images/CLogo.png"
import CSLogo from "./images/CSLogo.png"
import htmlLogo from "./images/htmlLogo.png"
import CSSLogo from "./images/CSSLogo.png"
import reactLogo from "./images/reactLogo.png"
import gitLogo from "./images/gitLogo.png"
import VSCodeLogo from "./images/VSCodeLogo.png"
import VSLogo from "./images/VSLogo.png"

function Homepage({isDark}) {
  const githubLogo = isDark ? githubLogoWhite : githubLogoBlack

  return(
    <div className="Homepage">
      <h1 id="home">Hi, I am<br></br>Oneel.</h1><br/>
      <Link to="/Resume" id="link">My Resume</Link>
      <section id="AboutMe">
        <h3>About Me</h3><br/>
        <p className="paragraph">Hi, i'm a second year student at Braude Academic College majoring in Software Engineering, 
          and i am looking for an internship to apply my technical skills on, and grow more as a Software Engineer.
        </p>
      </section>
      
      <section id="MySkills">
        <h3>My Skills</h3><br/>
        <p className="paragraph">Technical languages</p><br/>
        <div className="tech">
          <img className="skill-logo" src={pythonLogo} alt="python"></img>
          <img className="skill-logo" src={javaLogo} alt="java"></img>
          <img className="skill-logo" src={JSLogo} alt="JS"></img>
          <img className="skill-logo" src={CLogo} alt="C"></img>
          <img className="skill-logo" src={CSLogo} alt="CS"></img>
          <img className="skill-logo" src={htmlLogo} alt="html"></img>
          <img className="skill-logo" src={CSSLogo} alt="CSS"></img>
        </div><br/>
        <p className="paragraph">Frameworks and technologies</p><br/>
        <div className="frameworks">
          <img className="skill-logo" src={reactLogo} alt="react"></img>
          <img className="skill-logo" src={gitLogo} alt="git"></img>
          <img className="skill-logo" src={VSCodeLogo} alt="VSCode"></img>
          <img className="skill-logo" src={VSLogo} alt="VS"></img>
        </div>
      </section>

      <section id="Projects">
        <h3>Projects</h3><br/>
        <p className="paragraph" id="p1">
          <b>Rhino's import and marketing of doors</b>
          <a className="nav-item2" href="https://github.com/oneelabed/project_Archi">
            <img id="archi_github" className="logo" src={githubLogo} alt="github"></img>
          </a><br/><br/>
          Developed an interactive web app for selecting, customizing, and ordering doors using <b>HTML/CSS</b>, and <b>JavaScript</b>.<br/>
          Key features:-<br/><br/>
          Integrated interactive forms for capturing user details and order preferences,
          including real-time updates for door models, sizes, colors, and quantities.<br/><br/>
          Built modular and reusable scripts for handling client data and enhancing
          page responsiveness.<br/><br/>
          Added visualization features using external JavaScript libraries.<br/><br/>
          Created a feedback mechanism. 
        </p><br/><br/>
        <p className="paragraph" id="p2">
          <b>My Portfolio</b>
          <a className="nav-item2" href="https://github.com/oneelabed/My_Portfolio">
            <img id="portfolio_github" className="logo" src={githubLogo} alt="github"></img>
          </a><br/><br/>
          Developed a responsive, themeable showcase of my work built using <b>React</b>, <b>JavaScript</b> and <b>CSS</b>.<br/>
          Key features:-<br/><br/>
          Interactive Elements - Includes: Rotating skill icons with CSS animations, Project cards with GitHub links.<br/><br/>
          Dark/Light Mode Toggle - Custom CSS switch with smooth transitions.<br/><br/>
          Dynamic Navigation Bar - Includes: Page links, and Social media icons<br/><br/>
          Multi-Page Routing - Uses React Router for seamless navigation.<br/><br/>
          Modern UI - Clean, minimalist design with smooth scrolling.<br/><br/>
          
        </p>
      </section>
    </div>
  )
}

export default Homepage