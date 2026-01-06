import { useState } from 'react'
import './App.css'
import axios from "axios"
import { Link } from "react-router-dom"
import {FaEye} from "react-icons/fa";
// import Home from './home';
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
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

    const data = new FormData();
    data.append("username", formData.username)
    data.append("email", formData.email)
    data.append("password", formData.password)
    data.append("coverImage", coverImage)



    try{
      const res = await axios.post("/register", data);
      console.log("server response",res.data);

    } catch(error){
      console.log("Error", error.response?.message || error.response  )
    }
  }

  return (
    <>
      
    {/* Registeration Form */}
    <div className="flex justify-end   h-full w-full text-center">
       <form /*action="/register"*/ onSubmit= {handleSubmit} className="form justify-center w-100  curosr-pointer"
      >
        <div className="text-center">
     <div className=" bg-[#E9762B] inline-block align-center p-3 font-bold italic  rounded-md">Register form </div>

        </div>
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
       <div className='file-upload'>
        {/* <label for="file-upload">Choose a file: </label> */}
        <input type='file'
         name='file-upload'
          accept='.jpg,.jpeg,.png,.pdf'
          onChange={(e) => setCoverImage(e.target.files[0])}
          required></input>
       </div>
       </div>        

       <div className="flex justify-center">
        <button type="submit" className='register p-2 m-1 rounded-md w-30 bg-[#1581BF]' >register</button>

       </div>
        {/* <div className="login"> already registered?  <button >Login</button></div> */}
        <p className="pt-2 ">
          Already registered?  <Link to="/login" className="text-red-200 p-2 ">Login</Link>
        </p>
      </form>
    </div>
    </>
  )
}

export default Register
