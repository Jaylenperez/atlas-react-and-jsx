import React from 'react'
import dayIcon from '../assets/day.svg'
import eveningIcon from '../assets/evening.svg'
import nightIcon from '../assets/night.svg'

function Greeting() {
  const hour = new Date().getHours()
  let icon, message

  if (hour >= 6 && hour < 12) {
    icon = dayIcon
    message = 'Good Morning!'
  } else if (hour >= 12 && hour < 17) {
    icon = dayIcon
    message = 'Good Afternoon!'
  } else if (hour >= 17 && hour < 21) {
    icon = eveningIcon
    message = 'Good Evening!'
  } else {
    icon = nightIcon
    message = 'Good Night!'
  }

  return (
    <h1 className="greeting">
      <img src={icon} alt="" /> {message}
    </h1>
  )
}

export default Greeting
