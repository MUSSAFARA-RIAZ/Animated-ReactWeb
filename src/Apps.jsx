import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

import Services from './Components/Services'
import './index.css'

export default function Apps() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/services" exact element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}
