import React from 'react'

  
  const EditToDoForm = ({task, index, handleEdit}) =>{
  return (
    <li>
      {task}
      <img src='/editBtn.png' alt='EditButton' onClick={() => handleEdit (index)}  
      style={{ width: '20px', cursor: 'pointer', marginLeft: '10px' }}>
      </img>

    </li>
  )
}

export default EditToDoForm
