import React, { useState } from "react"

function ToDoForm() {
  const [task, setTask] = useState ('');
  const [list, setList] = useState ([]);

  const handleInputChange = (e) => {
    setTask (e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault ();
    task.trim()? (setList ([...list , task]), setTask ('')) : null;
  };

  return (
    <form className='ToDoForm'>
        <input type="text" className='ToDo-Input' value = {task} placeholder='What is the Task Today?' onChange={handleInputChange}/>
        <button onClick={handleAddTask} type='submit' className='ToD0-btn'>Add Task</button>
        <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </form>
  )
}

export default ToDoForm
