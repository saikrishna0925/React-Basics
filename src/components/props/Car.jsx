import React from 'react'

export default function Car(props) {
  return (
    <div>Car{props.brand.name +  props.brand.model}</div>
  )
}
