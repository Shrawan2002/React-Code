import { useState,useCallback, useEffect} from 'react'

import './App.css'
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const copyPasswordToClipboad = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password)
  },[password])
    
  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*_++[]~`";
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length) +1;
      pass += str.charAt(char);

    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
   return (
    <>
      {/* <div  className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-orange-700 bg-gray-500'>
        <h1 className='text-white text-center' >Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-10">
          <input type="text" value={password} name="" id=""
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
        </div>
      </div> */}

      <div className="flex items-center justify-center min-h-screen bg-black-800">
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 pb-3 text-orange-700 bg-gray-700">
    <h1 className="text-white text-center text-xl my-3 ">Password Generator</h1>
    
    <div className="flex shadow rounded-lg overflow-hidden mb-5">
      <input
        type="text"
        value={password}
        className="outline-none w-full  px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}
      />
      <button 
      className='outline-none bg-blue-700 text-white
       px-2 py-1 shrink-0 '
       onClick={copyPasswordToClipboad}
       >copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
     <div className="flex items-center gap-x-1">
      <input type="range" 
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>setLength(e.target.value)}
      />
      <label>Length:{length}</label>
     </div>
     <div className="flex items-center gap-x-1">
      <input type="checkbox"  id="numberInput" 
      defaultChecked={numberAllowed}
      onChange={()=>setNumberAllowed((prev) => !prev)}
      />
      <label htmlFor='numberInput'>Number</label>
     </div>
     <div className="flex items-center gap-x-1">
      <input type="checkbox" 
      defaultChecked={charAllowed} 
      id="characterInput" 
      onChange={()=>setCharAllowed((prev)=>!prev)}
      />
      <label htmlFor='characterInput'>Characters</label>
     </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
