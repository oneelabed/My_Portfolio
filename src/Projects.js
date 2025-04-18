import githubLogoWhite from "./images/githubLogoWhite.png"
import githubLogoBlack from "./images/githubLogoBlack.png"

function Projects({isDark}) {
  const githubLogo = isDark ? githubLogoWhite : githubLogoBlack
  
  return(
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
  )
}

export default Projects