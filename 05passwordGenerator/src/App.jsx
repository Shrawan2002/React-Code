 
import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtijklmnopqrstuvwxyz"; 
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="@#$%^&*()+"; 
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed,setPassword  ])

  // passwordGenerator()

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed, characterAllowed]);

  // useRef hook
  const passwordRef = useRef();

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-700 bg-gray-800'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password}
        placeholder='password'
        readOnly 
        ref={passwordRef}
        className='outline-none w-full py-1 px-3'/>
        <button onClick={copyPasswordToClipboard} className='outline-none  px-2 py-0.5 shrink-0 bg-blue-700 text-white'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 '>
          <input type='range' onChange={(e)=> setLength(e.target.value)} min={8} max={100} value={length} className='cursor-pointer' />
          <label>Length: {length}</label>
        </div>
          <div className='flex items-center gap-x-1 '>
            <input type='checkbox'  checked={numberAllowed} onChange={(e)=>setNumberAllowed(e.target.checked)} id='numberInput'   />
            <label htmlFor='numberInput'>Number</label>
          </div>
           <div className='flex items-center gap-x-1 '>
            <input type='checkbox'defaultChecked= {characterAllowed} onChange={()=>setCharacterAllowed((prev)=> !prev)} id='characterInput' />
            <label htmlFor='characterInput'>Character</label>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
