
import { useReducer } from 'react'
import './App.css'

function App() {
  
const reducer = (state, action)=>{
  if(action.type === 'INCREMENT'){
     return state + 1;
  }else{
    return state - 1;
  }
}

  const [count, dispatch] = useReducer(reducer, 0);
  console.log(count)

  return (
    <div>
      <p style={{padding: "10px" , backgroundColor: "bisque"}}>{count}</p>
      <button onClick={()=> dispatch({type: "INCREMENT"})} style={{padding: "8px", marginRight: "8px", backgroundColor: "blue", color: "white"}}>Increment</button>

      <button onClick={()=> dispatch({type: "DECREMENT"})} style={{padding: "8px", backgroundColor: "red", color: "white"}}>decrement</button>
    </div>

  )
}

export default App
