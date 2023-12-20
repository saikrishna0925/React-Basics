import React,{useState} from "react";

const FormsManageInSingleState = () =>{

  const [userInputs, setUserInputs] = useState({})

  const [displayData, SetDisplayData] = useState([])

  const handleUserInputs = (event) =>{
    const {name,value}= event.target
    setUserInputs({...userInputs, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    SetDisplayData({userInputs})
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" value={userInputs} onChange={handleUserInputs} />
        <input type="text" placeholder="Password" name="password" value={userInputs} onChange={handleUserInputs}/>
        <input type="text" placeholder="Id" name="id" value={userInputs} onChange={handleUserInputs}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormsManageInSingleState