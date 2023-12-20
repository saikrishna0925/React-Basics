import React, { useState } from "react";

const UserInput = ( ) => {

  const [input, inputData] = useState()
  const [displayData ,setData] = useState()

  const  handleChange = (event)=> {
    inputData(event.target.value)
  }

  const handleButton = () =>{
    setData(input)
    inputData("")
  }

  return(
  <div>
    <h1>User Data: {input}</h1>
    <input type="text" placeholder="enter data" onChange={handleChange} value={input}/>
    <button onClick={handleButton}>enter</button>
    <ol>
      <li>{displayData}</li>
    </ol>
  </div>

  )
  
}

export default UserInput