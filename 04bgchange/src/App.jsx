import { useState } from 'react'
 

function App() {
  const [color, setColor] = useState("olive")

  // let updRed = ()=>{
  //   setColor("red")
  // }

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}} >
        <div className=" fixed flex  flex-wrap bg-red-500 justify-center bottom-12 inset-x-0 px-2"> 
          <div className="flex flex-wrap justify-center gap-x-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} className="px-4 py-1 outline-none  rounded-full shadow-lx " style={{backgroundColor:"red"}}>red</button>
             <button onClick={()=>setColor("green")} className="px-4 py-1 outline-none  rounded-full shadow-lx " style={{backgroundColor:"green"}}>green</button>
              <button onClick={()=>setColor("blue")} className="px-4 py-1 outline-none  rounded-full shadow-lx " style={{backgroundColor:"blue"}}>blue</button>
                <button onClick={()=>setColor("yellow")} className="px-4 py-1 outline-none  rounded-full shadow-lx " style={{backgroundColor:"yellow"}}>yellow</button>
                   <button onClick={()=>setColor("purple")} className="px-4 py-1 outline-none  rounded-full shadow-lx " style={{backgroundColor:"purple"}}>purple</button>
                      <button onClick={()=>setColor("orange")} className="px-4 py-1 outline-none  rounded-full shadow-lx " style={{backgroundColor:"orange"}}>orange</button>
                         <button onClick={()=>setColor("pink")} className="px-4 py-1 outline-none  rounded-full shadow-lx " style={{backgroundColor:"pink"}}>yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

//onClick -> expect karta hai ek functio
