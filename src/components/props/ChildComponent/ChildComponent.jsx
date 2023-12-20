import React from "react";
import SubChild from "../SubChild/SubChild";


// export default function ChildComponent(name, age, lastName){

//   return(
//     <div>
//       {name} {age}{lastName}
//       <SubChild/>
//     </div>
//   )
// }

const ChildComponent = (props) =>{
  const{name, age }=props
  return(
    <div className="container-fluid">
      <hr />
      <h2>ChildComponent</h2>
      <h4>Rendaring data from parent Component using props</h4>
      <h4>My name is {name} and I'm {age} Years old</h4>
      <hr />
      <SubChild parentName="ParentComponent" childNo="1" name={name}/>
    </div>
  )
}

export default ChildComponent