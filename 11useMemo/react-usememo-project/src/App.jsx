import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [inpt, setInpt] = useState(0);

  function expensiveTask(num){
    console.log("inside expensive Task");
    for(let i = 1; i<1000000000; i++){}
    return num*2;
  }

  // let doubleVal = expensiveTask(inpt);

  // useMemo

  let doubleVal = useMemo(()=> expensiveTask(inpt), [inpt]);

  return (
   <div>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <div>
        count: {count}
     </div>
       <div>
      <input type='number' value={inpt} onChange={(e)=>setInpt(e.target.value)} />
     </div>
     <div>
      Double: {doubleVal}
     </div>
   </div>
  )
}

export default App
