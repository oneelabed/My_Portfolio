import githubLogoWhite from "./images/githubLogoWhite.png"
import githubLogoBlack from "./images/githubLogoBlack.png"

function Projects({isDark}) {
  const githubLogo = isDark ? githubLogoWhite : githubLogoBlack
  
  return(
    <section id="Projects" className="section-container">
      <h3>Projects</h3><br/>
      
      <div className="projects-grid">        
        <div className="project-card">
          <div className="card-header">
            <b>Yarka Market</b>
            <a className="icon-link" href="https://github.com/oneelabed/YarkaMarket">
              <img className="logo" src={githubLogo} alt="github"></img>
            </a>
          </div>
          <div className="card-body">
            <p>A full-stack marketplace platform where users can sign up, create product listings, and connect with others.</p>
            
            <div className="card-section">
              <b>🚀 Features</b>
              <ul>
                <li><b>User Authentication</b>: Secure login & signup with JWT.</li>
                <li><b>Create & Manage Listings</b>: Post, edit, and delete product listings with images.</li>
                <li><b>Real-Time Messaging</b>: WebSocket-based chat between buyers and sellers.</li>
                <li><b>Responsive UI</b>: Optimized for desktop and mobile.</li>
                <li><b>Email Notifications</b>: Automatic email alerts when users receive new messages, and a Forgot password flow with secure email reset links.</li>
                <li><b>Deployment Ready</b>: Dockerized with separate frontend & backend hosting.</li>
              </ul>
            </div>

            <div className="card-section">
              <b>🛠️ Tech Stack</b>
              <p>
                <b>Frontend</b>: React, CSS, Vercel<br/>
                <b>Backend</b>: Spring Boot, REST APIs, WebSocket, Render<br/>
                <b>Database</b>: PostgreSQL<br/>
                <b>Authentication</b>: JWT
              </p>
            </div>

            <div className="card-section">
              <b>🔒 Authentication</b>
              <p>JWT tokens are issued on login and required for protected routes.</p>
            </div>

            <div className="card-section">
              <b>🌐 Deployment</b>
              <p>Frontend → Vercel<br/>
              Backend → Render<br/>
              Database → PostgreSQL (Neon)<br/>
              Configured with a custom domain + SSL.</p>
            </div>

            <div className="card-footer">
              <b>Link: </b>
              <a className="highlight-link" href="https://yarkamarket.org">Yarka Market</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-header">
            <b>Rhino's import and marketing of doors</b>
            <a className="icon-link" href="https://github.com/oneelabed/project_Archi">
              <img id="archi_github" className="logo" src={githubLogo} alt="github"></img>
            </a>
          </div>
          <div className="card-body">
            <p>Developed an interactive web app for selecting, customizing, and ordering doors using <b>HTML/CSS</b>, and <b>JavaScript</b>.</p>
            
            <div className="card-section">
              <b>Key features:-</b>
              <ul>
                <li>Integrated interactive forms for capturing user details and order preferences,
                including real-time updates for door models, sizes, colors, and quantities.</li>
                <li>Built modular and reusable scripts for handling client data and enhancing
                page responsiveness.</li>
                <li>Added visualization features using external JavaScript libraries.</li>
                <li>Created a feedback mechanism.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-header">
             <b>My Portfolio</b>
            <a className="icon-link" href="https://github.com/oneelabed/My_Portfolio">
              <img id="portfolio_github" className="logo" src={githubLogo} alt="github"></img>
            </a>
          </div>
          <div className="card-body">
            <p>Developed a responsive, themeable showcase of my work built using <b>React</b>, <b>JavaScript</b> and <b>CSS</b>.</p>
            
            <div className="card-section">
              <b>Key features:-</b>
              <ul>
                <li>Interactive Elements - Includes: Rotating skill icons with CSS animations, Project cards with GitHub links.</li>
                <li>Dark/Light Mode Toggle - Custom CSS switch with smooth transitions.</li>
                <li>Dynamic Navigation Bar - Includes: Page links, and Social media icons</li>
                <li>Multi-Page Routing - Uses React Router for seamless navigation.</li>
                <li>Modern UI - Clean, minimalist design with smooth scrolling.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects