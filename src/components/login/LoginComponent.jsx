import React from "react";
import './Logincomponent.css'

export default function LoginComponent(){
  return(
    <div id="login_form" className="container-fluid">
      <form action="">
        <h2><span className="bi bi-person-fill"></span>User Login</h2>
        <div className="mb-2">
          <label className="form-label">User Name</label>
          <div>
            <input type="text" className="form-control"/>
          </div>
          <div className="mb-2">
            <label htmlFor="" className="form-label">Password</label>
            <div>
              <input type="password" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <button className="btn btn-primary W-100">Login</button>
        </div>
      </form>
    </div>
  )
}