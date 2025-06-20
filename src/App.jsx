import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import About from './pages/About'
import VideoLine from './pages/VideoLine'
import Contact from './pages/Contact'
import Education from './pages/Education'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <Education/>
      <VideoLine />
      <Contact />
    </div>
  )
}

export default App