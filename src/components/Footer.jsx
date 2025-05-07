import React from 'react'
import links from '../assets/links.json'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <ul>
        {links.map(({ label, link }, idx) => (
          <li key={idx}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div>© {currentYear} Atlas School</div>
    </footer>
  )
}

export default Footer
