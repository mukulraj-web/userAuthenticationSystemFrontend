import { useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
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
     <form /*action="/register"*/ onSubmit= {handleSubmit} className='form' >
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
       <input  
       type="text"
       name="password"
      placeholder="Password"
      value= {formData.password}
      onChange={handleChange}
       /></div>        

        <button type="submit" >register</button>
      </form>
    </>
  )
}

export default App
