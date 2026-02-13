import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <About setActiveSection={setActiveSection} />
        <Portfolio setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
    </div>
  )
}

export default App
