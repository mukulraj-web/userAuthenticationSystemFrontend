import { useState } from "react";
// import "./App.css"
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Register from "./register";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

const notify = toast.success("sending user data")
// const success = (user) => {
//         toast.custom(<h1>${user} is successfully logged in</h1>)
// }
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
        // console.log("Response is : ",res)
        // success("res.data");
        

} catch(error){
        console.error("Error", error.response?.message || error.response);
}
}

    return (
        
        <>
        
        <div className="flex justify-end text-center  w-full h-full ">
                <form onSubmit={handleSubmit} className="form cursor-pointer">
                <div className=" text-center "><p className="inline-block italic rounded-md  font-bold p-3 text-[#005461] bg-[#00B7B5]">Login form </p></div>
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
                <button   type="submit" className="loginBtn bg-[#EBD5AB] p-2 rounded-md mt-2 italic font-extrabold ">login</button>
<Toaster/>
        </div>
<p>
SignUp?  <Link className="text-red-600 p-2 " to="/register">Register</Link>
        </p>
        </form>
        
        </div>
        </>
    )
    
}

export default Login