import React from "react";

const SubChild = (props) =>{

  const {parentName, childNo, name} = props
  return(
    <div>
      SubChild
      <h5>Parent is {parentName} and ChildNo is {childNo} and name is {name}</h5>
    </div>
  )
}

export default SubChild