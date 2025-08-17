import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
