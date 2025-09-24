import githubLogoWhite from "./images/githubLogoWhite.png"
import githubLogoBlack from "./images/githubLogoBlack.png"

function Projects({isDark}) {
  const githubLogo = isDark ? githubLogoWhite : githubLogoBlack
  
  return(
    <section id="Projects">
      <h3>Projects</h3><br/>
      <p className="paragraph" id="p1">
        <b>Yarka Market</b>
        <a className="nav-item2" href="https://github.com/oneelabed/YarkaMarket">
          <img className="logo" src={githubLogo} alt="github"></img>
        </a><br/><br/>
          A full-stack marketplace platform where users can sign up, create product listings, and connect with others.<br/><br/>

          <b>🚀 Features</b><br/>
          <b>User Authentication</b>: Secure login & signup with JWT.<br/>
          <b>Create & Manage Listings</b>: Post, edit, and delete product listings with images.<br/>
          <b>Real-Time Messaging</b>: WebSocket-based chat between buyers and sellers.<br/>
          <b>Responsive UI</b>: Optimized for desktop and mobile.<br/>
          <b>Email Notifications</b>: Automatic email alerts when users receive new messages, and a Forgot password flow with secure email reset links.<br/>
          <b>Deployment Ready</b>: Dockerized with separate frontend & backend hosting.<br/><br/>
          <b>🛠️ Tech Stack</b><br/>
          <b>Frontend</b>: React, CSS, Vercel<br/>
          <b>Backend</b>: Spring Boot, REST APIs, WebSocket, Render<br/>
          <b>Database</b>: PostgreSQL<br/>
          <b>Authentication</b>: JWT<br/><br/>

          <b>🔒 Authentication</b><br/>
          JWT tokens are issued on login and required for protected routes.<br/><br/>

          <b>🌐 Deployment</b><br/>
          Frontend → Vercel<br/>
          Backend → Render<br/>
          Database → PostgreSQL (Neon)<br/>
          Configured with a custom domain + SSL.<br/><br/>

          <b>Link</b><br/>
          <a id="link" href="https://yarkamarket.org">Yarka Market</a>
      </p><br/><br/>
      <p className="paragraph" id="p2">
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
      <p className="paragraph" id="p3">
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