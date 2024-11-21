import React from 'react'

function ToDoForm() {
  return (
    <form className='ToDoForm'>
        <input type="text" className='ToDo-Input' placeholder='What is the Task Today?'/>
        <button type='submit' className='ToD0-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm
