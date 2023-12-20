import React from "react";
import ChildImage from "../ChildImage/ChildImage";

const ParentProfile =() =>{
  return(
    <div className="container-fluid">
      <hr />
      <h2>Profile</h2>
      <ChildImage person={{Name :"Genny" ,imageId : "12"}}
        size={100}/>
      <ChildImage person={{Name: "Bruno", imageId : "34" }}
        size={80}/>
      <ChildImage person={{Name: "Smith", imageId : "5" }}
        size={50}/>
    </div>
  )
}
export default ParentProfile