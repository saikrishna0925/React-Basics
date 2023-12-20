import React from 'react'
import Form from '../Forms/Form'
// import FormsManageInSingleState from '../Forms/FormsManageInSingleState'
import FormsWithMultipleData from '../Forms/FormsWithMultipleData'

const Forms = () => {
  return (
    <div>
      <Form/>
      {/* <FormsManageInSingleState/> */}
      <FormsWithMultipleData/>
    </div>
  )
}

export default Forms