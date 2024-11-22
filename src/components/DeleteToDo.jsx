import React from 'react'

  
  const DeleteToDo = ({task, index, handleDelete}) =>{
  return (
    <li>
      {task}
      <img src='/deleteBtn.png' alt='Delete Button' onClick={() => handleDelete (index)}  
      style={{ width: '20px', cursor: 'pointer', marginLeft: '10px' }}>
      </img>

    </li>
  )
}

export default DeleteToDo
