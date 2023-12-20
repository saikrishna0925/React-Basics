import React from 'react'
import ParentComponent from '../props/ParentComponent/ParentComponent'
import ParentProfile from '../props/ParentProfile/ParentProfile'
import PropsSpread from '../props/props passing data/spread individual/PropsSpread'


const Props = () => {
  return (
    <div>
      <ParentComponent/>
      <ParentProfile/>
      <PropsSpread/>
    </div>
  )
}

export default Props