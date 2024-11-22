import React, { useState } from "react"

function ToDoForm() {
  const [task, setTask] = useState ('');
  const [list, setList] = useState ([]);

  const handleInputChange = (e) => {
    setTask (e.target.value);
  };
  const handleAddTask = (e) => {
    setList (e.target.value);
  };
  const addTask = (e) =>{
    e.preventDefault ();
  };
  return (
    <form className='ToDoForm'>
        <input type="text" className='ToDo-Input' placeholder='What is the Task Today?' onChange={handleInputChange}/>
        <button onClick={handleAddTask} type='submit' className='ToD0-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm
