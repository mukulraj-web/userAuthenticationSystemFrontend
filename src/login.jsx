import { useState } from "react";
// import "./App.css"
import { FaEye } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import Register from "./register";
import Profile from "./profile.jsx";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";

const notify = () => toast.success("sending user data")
// const notify1 = (msg) => toast.success("user name is : ", msg);
function notify1(msg){
        toast.success(`user is successfully logged in.`)
        toast.success(`username: ${msg}`)
}
// const success = (user) => {
//         toast.custom(<h1>${user} is successfully logged in</h1>)
// }
function Login(){
        const navigate = useNavigate();
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
// console.log("formData",formData)
        
        const res = await axios.post("/login", formData);

        // console.log("Response is : ",res.data.user.username)
        notify1(res.data.user.username)
        // success("res.data");
        // navigate("dashboard/profile", 
                //{
        //         state: {
        //                 user: res.data.user
        //         }
        // }
// )
navigate("/dashboard/profile", {
        state: {
                user : res.data.user
        }
});

        toast.success("data sent succcessfully to profile route")

} catch(error){
        console.error("Error", error.response?.message || error.response);
}
}

    return (
        
        <>
        <Toaster/>        
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
                <button type="submit" className="loginBtn bg-[#EBD5AB] p-2 rounded-md mt-2 italic font-extrabold " onClick={notify}>login</button>

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