import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h3 className='text-3xl bg-blue-400'>hello</h3>
     <InputBox/>
    </>
  )
}

export default App
