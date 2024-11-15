
import './App.css'
import Astros from './components/Astros/Astros'
import Navbar from './components/Navbar/Navbar'
import Apod from './components/apod/apod'
import About from './components/about/about'

import { Routes, Route } from 'react-router-dom'

function App() {
  const links = [
    { href: "/app", text: "Home" },
    { href: "/astros", text: "Astronautas" },
    { href: "/apod", text: "Apod" },
    { href: "/about", text: "About" }
  ]

  return (
    <>
      <Navbar links={links} />

      <Routes>
        <Route element={App} path='app'/>
        <Route element={<Astros />} path="/astros" />
        <Route element={<Apod />} path="/apod"/>
        <Route element={<About />} path="/about"/>
      </Routes>

    </>
  )
}

export default App
