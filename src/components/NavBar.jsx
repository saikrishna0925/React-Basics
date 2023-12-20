import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
    <div className='container-fluid'>
      <NavLink to= '/'><button className='btn btn-secondary'>Home.</button></NavLink>     
      <NavLink to='/netflix'> <button className='btn btn-outline-danger'>Netflix</button> </NavLink>
      <NavLink to = '/apidata'><button className='btn btn-outline-info'>Api Data</button></NavLink>
      <NavLink to = '/props'><button className='btn btn-outline-dark'>Props</button></NavLink>
      <NavLink to = '/forms'><button className='btn btn-outline-success'>Forms</button></NavLink>
      <NavLink to = 'login'><button className='btn btn-primary'>Login</button></NavLink>
    </div>
    </nav>
  )
}

export default NavBar