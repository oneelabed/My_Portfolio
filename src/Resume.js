import './Resume.css'

function Resume() {
  const resumeUrl = process.env.PUBLIC_URL + '/documents/Oneel_Abed_Resume.pdf'

  return (
    <div className="resume-container">
      <div className="pdf-viewer">
        <iframe 
          title="Oneel Abed Resume"
          src={resumeUrl}
          width="100%"
          height="800px"
        >
        </iframe>
      </div>
      <a 
        href={resumeUrl} 
        download="Oneel_Abed_Resume.pdf"
        className="download-btn"
      >
        Download PDF
      </a>
    </div>
  )
}

export default Resume