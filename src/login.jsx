import { useState } from "react";
// import "./App.css"
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Register from "./register";
import axios from "axios";

function Login(){
  const [showPassword, setShowPassword] = useState(false);
const [formData, setFormData] = useState(
        {
                email:"",password:""
        }
)
 const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                })


                
        }
const handleSubmit = async(e) => {
e.preventDefault();
// console.log("email",formData.email)
try{
console.log("formData",formData)
        
        const res = await axios.post("/login", formData);
        console.log("Response is : ",res)
} catch(error){
        console.error("Error", error.response?.message || error.response);
}
}

    return (
        
        <>
        <form onSubmit={handleSubmit} className="form">
                <div>Login</div>
                <div className="input">
                <input type="email" 
                name="email"
                placeholder="enter email" 
                value={formData.email} 
                onChange={handleChange}>
                </input>
                <div className="password">
                        <input type={showPassword ? "text" : "password"}
                         placeholder="enter password"
                         name="password" 
                         value={formData.password} 
                         onChange={handleChange}></input>
                <FaEye onClick={()=>setShowPassword(!showPassword)} className="eye-icon"/></div>
                <button type="submit" className="loginBtn">login</button>

        </div>
<p>
SignUp ?  <Link to="/">Register</Link>
        </p>
        </form>
        
        </>
    )
    
}

export default Login