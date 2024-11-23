import React, { useState } from "react"
import DeleteToDo from "./DeleteToDo";
import EditToDoForm from "./EditToDoForm";

function ToDoForm() {
  const [task, setTask] = useState ('');
  const [list, setList] = useState ([]);
  const [editTask, setEditTask] = useState (null);
  const [updateNewTask, setUpdateNewTask]= useState ('')


  const handleInputChange = (e) => {
    setTask (e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault ();
    task.trim()? (setList ([...list , task]), setTask ('')) : null;
  };
  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index); 
    setList(newList);
  };
  const handleEdit = (index) => {
    setEditTask (index);
    setUpdateNewTask (list[index]);
  };
  const handleUpdateTask = () => {
    const updatedList = [...list];
    updatedList [editTask] = updateNewTask
    setList(updatedList);
    setEditTask (null);
    setUpdateNewTask('');
  };
  

  return (
    <form className='ToDoForm'>
        <input type="text" className='ToDo-Input' value = {task} placeholder='What is the Task Today?' onChange={handleInputChange}/>
        <button onClick={handleAddTask} type='submit' className='ToD0-btn'>Add Task</button>
        <ul>
        {list.map((task, index) => (
         <DeleteToDo key={index} task={task} index={index} handleDelete={handleDelete}/>
        ))}
      </ul>
    </form>
  )
}

export default ToDoForm
