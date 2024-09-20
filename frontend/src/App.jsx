import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Convert from './server/convert'
import Login from './client/login'


function App() {
  return (

<Router>
  <Routes>
    <Route path="/" element={ <Convert />} />
    <Route path="/login" element={ <Login />} />
    <Route path="conversion" element={ <Convert /> } />
   
  </Routes>
  </Router>
  
  )
}

export default App
