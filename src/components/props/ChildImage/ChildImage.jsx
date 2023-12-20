import React from "react";

const ChildImage = (props) =>{
  const {person , size} =props
  return(
    <div>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt={person.Name}
      width={size}
      height={size}
      />
      <br />
      {person.imageId} {person.Name}
    </div>
  )
}
export default ChildImage;