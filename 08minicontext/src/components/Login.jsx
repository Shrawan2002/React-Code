import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

export function Login(props) {
    const [username,setUsername] = useState("");
    let [password,setPassword] = useState("");

    const {setUser} = useContext(UserContext)
    
    let handleSubmit = (e)=>{
         e.preventDefault();
         setUser({username,password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(event)=> setUsername(event.target.value)} type="text" placeholder='userName' />
            <input value={password} onChange={(event)=> setPassword(event.target.value)} type="password" name="" placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
