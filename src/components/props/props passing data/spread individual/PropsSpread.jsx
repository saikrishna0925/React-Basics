import React from 'react'

export default function PropsSpread() {
  const data ={
    title: "Title",
    description: "Description",
    button: "See More"
  }
  return (
    <div>
      <Mycomponent {...data}/>
    </div>
  )
}

function Mycomponent({title,description,button}){
  return(
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button className='btn btn-outline-danger'>{button}</button>
    </div>
  )
}
