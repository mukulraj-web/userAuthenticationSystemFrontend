import { useState } from 'react'
import './App.css'
import axios from "axios"
import { Link } from "react-router-dom"
import {FaEye} from "react-icons/fa";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(
    {
      username:"",
      email:"",
      password:""
    }
  )
  const handleChange = (e) => {
    setFormData({
      ...formData,
        [e.target.name]: e.target.value
      
    })
  }
  const handleSubmit =async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("/register", formData);
      console.log("server response",res.data);

    } catch(error){
      console.log("Error", error.response?.message || error.response  )
    }
  }

  return (
    <>

    {/* Registeration Form */}
     <form /*action="/register"*/ onSubmit= {handleSubmit} className='form'
     background="white" >
     <div>Register form </div>
       <div className="input">
         <input  
         type="text"
         name="email"
          placeholder="Email"
          value= {formData.email}
          onChange={handleChange} />  
        <input  type="text"
         name="username" 
         placeholder="Username"
         value={formData.username}
         onChange={handleChange} />
      <div className="password">
         <input  
       type={showPassword ? "text": "password"}
       name="password"
      placeholder="Password"
      value= {formData.password}
      onChange={handleChange}
       />
       <FaEye onClick={()=> setShowPassword(!showPassword)}  className="eye-icon"/>
      </div>
       </div>        

        <button type="submit" className='register' >register</button>
        {/* <div className="login"> already registered?  <button >Login</button></div> */}
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  )
}

export default Register
