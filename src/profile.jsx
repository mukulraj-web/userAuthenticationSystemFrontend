import {useLocation, Navigate} from "react-router-dom";


function Profile(){
   const location = useLocation()
// url of data :- 
console.log(location.state.user)

    return (
        <>
        {/* <div>
            <h1>welcome {data.username}</h1>
            <p>Email:{data.email} </p>
        </div> */}

        <div>
            <div className="userProfile flex justify-center flex-col p-10 m-10  rounded-md bg-red-300 hover:pointer">
                <h1 className="text-center bg-red-600 rounded-full ">User Profile</h1>
               <div className="flex p-4 m-4 bg-yellow-400 rounded-md ">
                <div>
                     <h1>Username: {location.state.user.username}  </h1>
                <h1>  Email: {location.state.user.email}  </h1>
                <h1> CreatedAt:  {location.state.user.createdAt}  </h1>       
                </div>
                <div>
                <img src={location.state.user.coverImage} className="userCoverImage object-contain"></img>
                </div>
               </div>
               <button  className="bg-green-600  "> Logout</button>
            </div>

        </div>
        </>
    )
}

export default Profile