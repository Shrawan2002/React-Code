import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    return setTodos((prev)=> [{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? todo: prevTodo))
  }

  const toggleCompleted = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : {prevTodo}))
  }

  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,toggleCompleted,deleteTodo}}>

    </TodoProvider>
  )
}

export default App
