import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Architecture from './pages/Architecture'
import Build from './pages/Build'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path="/services/architecture" element={<Architecture />} />
          <Route path="/services/build" element={<Build />} />
          <Route path='/testimonials' element={<Testimonials/>} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
