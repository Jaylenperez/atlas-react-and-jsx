import React from 'react'
import professionalPhoto from '../assets/me.png'

function AboutMe() {
  return (
    <div className="about-me">
      <img src={professionalPhoto} alt="Professional portrait" />
      <p>
        Hi, I’m Jaylen Perez, a full-stack web development student at Atlas School currently in my 5th trimester. I specialize in building back-end APIs with Node.js and Python, and I love working with React and Express. After graduation, I plan to pursue a career as a software engineer, focusing on scalable web applications. Outside of coding, I enjoy playing basketball, hiking, fishing, and experimenting with new cooking recipes.
      </p>
    </div>
  )
}

export default AboutMe
