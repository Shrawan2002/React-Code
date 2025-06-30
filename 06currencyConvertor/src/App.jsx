import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount,setAmount] = useState(0)
  return (
    <>
    <h1 className='text-3xl bg-yellow-600'>Currency app with chai </h1>
    </>
  )
}

export default App
