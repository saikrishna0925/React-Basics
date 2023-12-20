import React,{useState} from "react";
import './style.css';

const CountStateComponent =()=>{

  const [count, setCount] = useState(0)
  
  const handleIncrement =() =>{
    setCount(count+1)
  }

  const handleDecrement =()=>{
    setCount(count-1)
  }

  const handleReset =()=>{
    setCount(0)
  }

  return(
    <div className="container-fluid" id="main">
      <h2>Count: {count}</h2>
      <div>
      <button onClick={handleIncrement} className="btn btn-outline-success ms-3">Increment</button>
      <button onClick={handleDecrement} className="btn btn-outline-danger ms-3">Decrement</button>
      <button onClick={handleReset} className="btn btn-outline-primary ms-3">Reset</button>
      </div>
    </div>
  )
}

export default CountStateComponent