import {useLocation, Navigate} from "react-router-dom";


function Profile(data){
    const {state} = useLocation();
    if(!state.user){
        return<Navigate to="/login" replace/>
    }
    const {user} = state;

    return (
        <>
        <div>
            <h1>welcome {user.username}</h1>
            <p>Email:{user.email} </p>
        </div>
        </>
    )
}
export default Profile