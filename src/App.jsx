import { useState } from 'react'
import './App.css'
// import ToDoWrapper from './components/ToDoWrapper'
import LogIn from './components/LogIn'
import ToDoForm from './components/ToDoForm'

function App() {
 
  return (
    <div>
      <LogIn isLoggedIn={false} username = "Guest"/>
   <ToDoForm/>
   </div>
  )
}

export default App
