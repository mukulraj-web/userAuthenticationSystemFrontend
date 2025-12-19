import { useState } from 'react'
import './App.css'
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import Register from './register.jsx'
import Login from "./login"
function App() {
  
  return (
    
    
    <Routes>
      <Route path="/" element={<Register/>}/>

      {/* <Route path="/register" element={<Register/>}/> */}
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    
  )
}

export default App
