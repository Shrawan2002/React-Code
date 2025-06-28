
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-10'>Tailwind test</h1>
     <Card/>
    </>
  )
}

export default App
