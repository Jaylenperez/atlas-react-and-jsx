import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import OpenLink from './components/OpenLink'
import CopyLink from './components/CopyLink'
import HelpfulResource from './components/HelpfulResource'

function App() {
  return (
    <div className="app">
      <Header />

      <Section title="What is React?">
        <p>
          React is a JavaScript library for building user interfaces. It lets you
          compose complex UIs from small, isolated pieces of code called components,
          and it manages rendering efficiently via its virtual DOM.
        </p>
      </Section>

      <Section title="Benefits of React">
        <ul>
          <li>Declarative syntax makes UI code predictable and easier to debug.</li>
          <li>Component-based architecture promotes reusability and modularity.</li>
          <li>Virtual DOM offers high-performance updates and rendering.</li>
          <li>Large ecosystem and community support with many third‑party libraries.</li>
          <li>Strong integration with modern toolchains and frameworks.</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource
          label="Official React Documentation"
          link="https://reactjs.org/docs/getting-started.html"
        />
        <HelpfulResource
          label="freeCodeCamp React Tutorial"
          link="https://www.freecodecamp.org/learn/front-end-libraries/react/"
        />
        <HelpfulResource
          label="React Hooks Crash Course (YouTube)"
          link="https://www.youtube.com/watch?v=f687hBjwFcM"
        />
      </Section>
    </div>
  )
}

export default App
