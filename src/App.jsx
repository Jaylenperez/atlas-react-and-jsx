// src/App.jsx
import React from 'react'
import Greeting from './components/Greeting'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="app">
      <Greeting />
      {/* other content */}
      <SocialLinks />
    </div>
  )
}

export default App
