import React from 'react'
import copyIcon from '../assets/copy.svg'

function CopyLink({ link }) {
  const handleClick = () => {
    navigator.clipboard.writeText(link)
  }

  return (
    <img
      className="copy"
      src={copyIcon}
      alt="Copy Link"
      onClick={handleClick}
    />
  )
}

export default CopyLink
