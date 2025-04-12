import "./Resume.css"
import resume from "./images/resume.png"

function Resume() {
  return(
    <div className="resume">
      <img src={resume} alt="resume"/>
    </div>   
  );
}

export default Resume;