import React from 'react'

function LogIn(props) {
    
  return (
    props.isLoggedIn? <h2>What would you like to accomplish today {props.username}</h2> :
      <h2>Please log in to continue</h2>
  );
}

export default LogIn
