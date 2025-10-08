import { useContext } from "react"
import UserContext from "../context/UserContext"


const Profile = ()=>{
    let {user} = useContext(UserContext);

    if(!user) return <h1>Please Login first!</h1>

    return(
        <p>user name: {user.userName}</p>
    )
}

export default Profile;