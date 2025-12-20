import { useState } from "react";
import { AiFillAmazonCircle } from "react-icons/ai";
import { Link, Outlet} from "react-router-dom";
import './App.css'
function Home() {
    // const [active, setActive] = useState(false)
    return(
       <> 
     <div className=" w-full cursor-pointer  rounded-md ">
        <div className="nav">
               <div className=" w-full flex justify-between bg-[#FDB5CE] p-2 rounded-md mb-10 hover: hover:bg-[#005461] ">
            <AiFillAmazonCircle />
            <p className="hover:bg-[#DE1A58] hover:p-2  rounded-sm">About</p>
                        <p className="hover:bg-[#DE1A58] hover:p-2  rounded-sm"><Link to="/dashboard/landingPage">Home</Link> </p>
            <p className="hover:bg-[#DE1A58] hover:p-2  rounded-sm"><Link to="/dashboard/login">Login</Link> </p>
            <p className="hover:bg-[#DE1A58] hover:p-2  rounded-sm">         
                <Link to="/dashboard/register">Register</Link>
                 </p>
        </div>
        
        </div>
        {/* <div className="h-1/2 p-11">
            <h1>Body</h1>
        </div> */}
        <Outlet/>
          

     </div>
      </> 
    )
}

export default Home;