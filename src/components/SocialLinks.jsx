import React from 'react'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/jaylenperez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn Profile" />
      </a>
      <a
        href="https://github.com/Jaylenperez/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="Project Repository" />
      </a>
    </div>
  )
}

export default SocialLinks
