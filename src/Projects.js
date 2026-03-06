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
            <p>A full-stack marketplace platform where users can sign up, create product listings, and connect with others.</p><br/>
            
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
            </div> <br/>

            <div className="card-section">
              <b>🛠️ Tech Stack</b>
              <ul>
                <li><b>Frontend</b>: React, CSS, Vercel</li>
                <li><b>Backend</b>: Spring Boot, REST APIs, WebSocket, Render</li>
                <li><b>Database</b>: PostgreSQL</li>
                <li><b>Authentication</b>: JWT</li>
              </ul>
            </div> <br/>

            <div className="card-section">
              <b>🔒 Authentication</b>
              <ul>
                <li>JWT tokens are issued on login and required for protected routes.</li>
              </ul>
            </div> <br/>

            <div className="card-section">
              <b>🌐 Deployment</b>
              <ul>
                <li>Frontend → Vercel</li>
                <li>Backend → Render</li>
                <li>Database → PostgreSQL (Neon)</li>
                <li>Configured with a custom domain + SSL</li>
              </ul>
            </div> <br/>

            <div className="card-footer">
              <b>Link: </b>
              <a className="highlight-link" href="https://yarkamarket.org">Yarka Market</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-header">
            <b>RSS Aggregator</b>
            <a className="icon-link" href="https://github.com/oneelabed/RSSAggregator">
              <img className="logo" src={githubLogo} alt="github"></img>
            </a>
          </div>
          <div className="card-body">
            <p>A high-performance, concurrent backend service built in Go that allows users to register,
               add RSS feeds, and automatically scrape posts into a searchable database.</p> <br/>
            
            <div className="card-section">
              <b>🚀 Features</b>
              <ul>
                <li><b>User Authentication</b>: Secure identification using unique API Keys for all protected routes.</li>
                <li><b>Concurrent Scraper</b>: Background worker pool using goroutines and WaitGroups to fetch multiple feeds simultaneously.</li>
                <li><b>Full-Text Search</b>: Optimized data discovery with PostgreSQL GIN indexes, enabling fast, case-insensitive keyword filtering.</li>
                <li><b>Automated Fetching</b>: Background worker that dynamically prioritizes feeds based on their last fetched timestamp.</li>
                <li><b>Type-Safe Database</b>: Automated query generation with SQLC and managed schema evolution via Goose migrations.</li>
              </ul>
            </div> <br/>

            <div className="card-section">
              <b>🛠️ Tech Stack</b>
              <ul>
                {/* <b>Frontend</b>: React, CSS, Vercel<br/> */}
                <li><b>Backend</b>: Go (Golang), Chi Router, SQLC, Goose</li>
                <li><b>Database</b>: PostgreSQL</li>
                <li><b>Authentication</b>: API Key</li>
              </ul>
            </div> <br/>

            <div className="card-section">
              <b>🔒 Authentication</b>
              <ul>
                <li>Unique API Keys are generated upon user registration and required in the Authorization header
                  to verify identity for all protected routes.
                </li>
              </ul>
            </div> <br/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects