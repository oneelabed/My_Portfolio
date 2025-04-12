import { Link } from "react-router-dom";

function Homepage() {
  return(
    
    <div className="Homepage">
      <h1 id="name">Hi, I am<br></br>Oneel.</h1><br/>
      <Link to="/Resume" id="link">My Resume</Link>
      <section id="AboutMe">
        <h3>About Me</h3><br/>
        <p className="paragraph">Hi, i'm a second year student at Braude Academic College majoring in Software Engineering, 
          and i am looking for an internship to apply my technical skills on, and grow more as a Software Engineer.
        </p>
      </section>
      
      <section id="Projects">
        <h3>Projects</h3><br/>
        <p className="paragraph" id="p1">
          <b>Rhino's import and marketing of doors</b><br/><br/>
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
          <b>My Portfolio</b><br/><br/>
          Developed a responsive, themeable showcase of my work built using <b>React</b>, <b>JavaScript</b> and <b>CSS</b>.<br/>
          Key features:-<br/><br/>

          Responsive Design - Works smoothly on desktop and mobile devices.<br/><br/>
          Dark/Light Mode Toggle - Custom CSS switch with smooth transitions.<br/><br/>
          Dynamic Navigation Bar - Includes: Page links, and Social media icons<br/><br/>
          Multi-Page Routing - Uses React Router for seamless navigation.<br/><br/>
          Modern UI - Clean, minimalist design with smooth scrolling.<br/><br/>
        </p>
      </section>
    </div>
  );
}

export default Homepage;