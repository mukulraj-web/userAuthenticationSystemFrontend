import { useState } from 'react'
import './App.css'
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import Register from './register.jsx'
import Login from "./login"
import Home from "./home";
import LandingPage from './landingPage.jsx'
// import profile from "./profile.jsx"
import Profile from './profile.jsx'
function App() {
  
  return (
    
    
    <Routes>
      <Route path="/dashboard" element={<Home/>}>
      <Route path="landingPage" element={<LandingPage/>}/>
      <Route path="register" element={<Register/>}/>

      {/* <Route path="/register" element={<Register/>}/> */}
      <Route path="login" element={<Login/>}>
      <Route path="profile" element={<Profile/>}></Route>
      </Route>
      

     
       </Route>
      
    </Routes>
    
  )
}

export default App
