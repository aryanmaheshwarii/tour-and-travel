import React from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Services from './Routes/Services'
import Contact from './Routes/Contact'
import SignUp from './Routes/SignUp'

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App