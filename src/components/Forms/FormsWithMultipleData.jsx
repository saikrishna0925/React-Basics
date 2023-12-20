import React,{useState} from 'react'

const FormsWithMultipleData = () => {

  const [userName, setUerName] = useState("")
  const [Password, setPassword] = useState("")
  const [Id, setId] = useState("")

  const [displayData, setDisplayData] = useState([])

  const handleUserName = (event) =>{
    setUerName(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleId = (event) => {
    setId(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // setDisplayData({userName,Password,Id})
    setDisplayData([...displayData,{userName,Password,Id}])
    setUerName("")
    setPassword("")
    setId("")

  }


  
  return (
    <div>
      <h1> FormsWithMultipleData</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter username' value={userName} onChange={handleUserName}/>
        <input type="text" placeholder='Password' value={Password} onChange={handlePassword}/>
        <input type="text" placeholder='Id'value={Id} onChange={handleId}/> <br />
        <button type='submit'>Submit</button>
      </form>
      <div>
        <h5>{displayData.userName}</h5>
        <h5>{displayData.Password}</h5>
        <h5>{displayData.Id}</h5>
      </div>
      <ul>
        {displayData.map(each => (
          <li key={each.Id}>
            <h5>UserName: {each.userName}</h5>
            <h5>Password:{each.Password}</h5>
            <h5>Id: {each.Id}</h5>
          </li>
          
        ))}
      </ul>
      
    </div>
  )
}

export default FormsWithMultipleData