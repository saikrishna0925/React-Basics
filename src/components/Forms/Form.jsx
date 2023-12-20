import React, { useState } from 'react'

const Form = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] =  useState("")
  const [id, setId] = useState("")

  const handleUsername = (event) =>{
    setUserName(event.target.value)
  }
  const handlePassword = (event) =>{
    setPassword(event.target.value)
  }
  const handleId= (event) =>{
    setId(event.target.value)
  }

  return (
    <>
    <form action="">
      <input type="text" placeholder='Enter username'value={userName} onChange={handleUsername} />
      <input type="text" placeholder='Enter Password' value={password} onChange={handlePassword}/>
      <input type="text" placeholder='Enter Id' value={id} onChange={handleId} />
    </form>
    <ul style={{listStyleType:"none"}}>
      <li>
      <h5>UserName: {userName}</h5>
      </li>
      <li>
      <h5>Password: {password}</h5>
      </li>
      <li>
      <h5>ID: {id}</h5>
      </li>

    </ul>
    </>
  )
}

export default Form