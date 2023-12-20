import React from 'react'
import Car from './Car';

export default function Garrage() {
  const carInfo = {name:'ford', model:'Mustang'};
  return (
    <>
    <div>Garrage</div>
    <Car brand= {carInfo}/>
    </>
  )
}
