 
import './App.css'
import { useCallback, useRef, useState } from 'react';

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtijklmnopqrstuvwxyz"; 
  }, [length, numberAllowed, characterAllowed])
  return (
    <>
    <div className='bg-red-600'>
      hello 
    </div>
    </>
  )
}

export default App
