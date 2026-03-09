function AboutMe() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="AboutMe">
      <h3>About Me</h3><br/>
      <p style={isMobile ? {font: "0.6em sans-serif"} : {font: "0.6em sans-serif" , marginLeft: "50px"}}>Third-year Software Engineering student specializing in full-stack architecture and backend systems.</p><br/>
      <ul className="about-me-li">
        <li><b>Enterprise-Level Java Development: </b>Architected and troubleshot a marketplace platform, Yarka Market,
           with JWT authentication, real-time messaging (WebSockets), using Java Spring Boot,
           managing complex JDBC driver configurations and database connection pools for reliable deployment on Render.</li> <br/>
        <li><b>High-Performance Web Applications: </b>Engineered a production-grade event hub using Next.js 16 and React 19,
           optimizing for speed through the use cache API and regional server alignment</li><br/>
        <li><b>Distributed Backend Systems: </b>Developed an automated RSS Aggregator in Go,
           implementing concurrent scrapers and a robust PostgreSQL integration for real-time data processing.</li><br/>
        <li><b>Database & Data Modeling: </b>Proficient in both NoSQL and Relational environments,
           with extensive experience designing schemas for MongoDB Atlas and PostgreSQL to ensure data integrity and query efficiency.</li><br/> 
        <li>Strong foundation in OOP, Data Structures, OS, and REST API design</li><br/>
        <li>Growing focus on AI engineering and scalable microservices</li>
      </ul>
    </section>
  )   
}

export default AboutMe