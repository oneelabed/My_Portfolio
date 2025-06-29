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
import SpringBootLogo from "./images/SpringBootLogo.png"

function MySkills() {
  return(
    <section id="MySkills">
      <h3>My Skills</h3><br/>
      <p className="paragraph">Technical languages</p><br/>
      <div className="skill-set">
        <img className="skill-logo" src={pythonLogo} alt="python"></img>
        <img className="skill-logo" src={javaLogo} alt="java"></img>
        <img className="skill-logo" src={JSLogo} alt="JS"></img>
        <img className="skill-logo" src={CLogo} alt="C"></img>
        <img className="skill-logo" src={CSLogo} alt="CS"></img>
        <img className="skill-logo" src={htmlLogo} alt="html"></img>
        <img className="skill-logo" src={CSSLogo} alt="CSS"></img>
      </div><br/>
      <p className="paragraph">Frameworks and technologies</p><br/>
      <div className="skill-set">
        <img className="skill-logo" src={reactLogo} alt="react"></img>
        <img className="skill-logo" src={gitLogo} alt="git"></img>
        <img className="skill-logo" src={VSCodeLogo} alt="VSCode"></img>
        <img className="skill-logo" src={VSLogo} alt="VS"></img>
        <img className="skill-logo" src={SpringBootLogo} alt="SpringBoot"></img>
      </div>
    </section>
  )
}

export default MySkills