import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

const Login = ()=>{
    let [userName , setUsername] = useState("");
    let [userPassword , setUserPassword] = useState("");

    let {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName, userPassword});
    }


    return(
        <div>
            <input type="text" placeholder="enter user name" value={userName} onChange={(e)=> setUsername(e.target.value)} />
            &nbsp;&nbsp;
            <input type="password" placeholder="enter password" value={userPassword}  onChange={(e)=> setUserPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;