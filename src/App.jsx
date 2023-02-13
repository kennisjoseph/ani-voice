import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Character from './pages/Character'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/character' element={<Character />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
