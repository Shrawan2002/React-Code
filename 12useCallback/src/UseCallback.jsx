import { memo, useCallback, useState } from "react"


   const Button = memo(({onClick, children})=>{
        console.log(`Rendering button: ${children}`);
        return(
            <div>
               <button onClick={onClick} style={{backgroundColor:`${children==="increment" ? "blue" : "red"}` }}>{children}</button>
            </div>
        )
    })
    
export default function UseCallback(){
    let [count, setCount] = useState(0);

    // const increment = ()=>{
    //     console.log("increment inside...")
    //     setCount((prev)=>prev+1)
    // }

    const increment = useCallback(()=>{
        console.log("inside increment..");
        setCount((prev)=> prev+1);
    },[])

    // const decrement = ()=>{
    //     console.log("inside decrement..")
    //     setCount((prev)=> prev-1);
    // }

    const decrement = useCallback(()=>{
        setCount((prev)=> prev-1);
    },[])


    return(
        <div>
            <h1>Use Callback!</h1>
            <p>Count: {count}</p>
           <Button onClick= {increment} children="increment"></Button>
           <br/> <br/>
            <Button onClick= {decrement} children="decrement"></Button>
        </div>
    )
}