import React, { useEffect, useState } from 'react'

export default function Github() {
    let [data,setData] = useState([])
    useEffect( async ()=>{
        let resp = await fetch("https://api.github.com/users/Shrawan2002");
        let respdata = await resp.json();
         setData(respdata);
    },[])

    return (
        <>
          <div>
            GitHub followers: {data.followers}
            <img src={data.avatar_url} alt='git picture' width={300}/> 
          </div>
        </>
    )
}
