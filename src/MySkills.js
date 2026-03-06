import pythonLogo from "./images/pythonLogo.png"
import javaLogo from "./images/javaLogo.png"
import JSLogo from "./images/JSLogo.png"
import CLogo from "./images/CLogo.png"
import goLogo from "./images/goLogo.png"
import sqlLogoBlack from "./images/sqlLogoBlack.png"
import sqlLogoWhite from "./images/sqlLogoWhite.png"
import reactLogo from "./images/reactLogo.png"
import gitLogo from "./images/gitLogo.png"
import VSCodeLogo from "./images/VSCodeLogo.png"
import VSLogo from "./images/VSLogo.png"
import SpringBootLogo from "./images/SpringBootLogo.png"
import nextjsLogoBlack from "./images/nextjsLogoBlack.png"
import nextjsLogoWhite from "./images/nextjsLogoWhite.png"

function MySkills({isDark}) {
  const sqlLogo = isDark ? sqlLogoWhite : sqlLogoBlack
  const nextjsLogo = isDark ? nextjsLogoWhite : nextjsLogoBlack

  return(
    <section id="MySkills">
      <h3>My Skills</h3><br/>
      <p className="paragraph">Technical languages</p><br/>
      <div className="skill-set">
        <img className="skill-logo" src={pythonLogo} alt="python"></img>
        <img className="skill-logo" src={javaLogo} alt="java"></img>
        <img className="skill-logo" src={JSLogo} alt="JS"></img>
        <img className="skill-logo" src={CLogo} alt="C"></img>
        <img className="skill-logo" src={goLogo} alt="go"></img>
        <img className="skill-logo" src={sqlLogo} alt="sql"></img>
      </div><br/>
      <p className="paragraph">Frameworks and technologies</p><br/>
      <div className="skill-set">
        <img className="skill-logo" src={reactLogo} alt="react"></img>
        <img className="skill-logo" src={gitLogo} alt="git"></img>
        <img className="skill-logo" src={VSCodeLogo} alt="VSCode"></img>
        <img className="skill-logo" src={VSLogo} alt="VS"></img>
        <img className="skill-logo" src={SpringBootLogo} alt="SpringBoot"></img>
        <img className="skill-logo" src={nextjsLogo} alt="nextjs"></img>
      </div>
    </section>
  )
}

export default MySkills