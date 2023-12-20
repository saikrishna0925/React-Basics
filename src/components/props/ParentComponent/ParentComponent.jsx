import React from "react";
import ChildComponent from "../ChildComponent/ChildComponent";

const ParentComponent = () =>{
  
  return(
    <div>
      Parent Component
      <ChildComponent name="sai" age="24" lastName="krishna"/>
      {/* <ChildComponent name="Child" age="24" lastName="krishna"/> */}
    </div>
  )
}

export default ParentComponent