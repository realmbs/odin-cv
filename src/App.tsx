import { useState } from 'react'
import './App.css'
import Name from './components/Name'
import Experience from './components/Experience'
import Education from './components/Education'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Name />
      <Education />
      <Experience />
    </>
  )
}

export default App
