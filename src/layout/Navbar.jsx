import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' '>
      <nav className="navbar navbar-expand-lg nav1 p-3">
  <div className="container-fluid">
    <a className="navbar-brand fs-3 cblue" href="#" style={{    fontWeight:" bold", fontFamily:" Pacifico"}}>Task-Whiz</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarText">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5 " >
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#" to='/Dashboard'>DashBoard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#" to='/About'>About</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" href="#" to='/Contact'>Contact</NavLink>
        </li>
      </ul>
      </div>
      <span className="navbar-text d-flex gap-2">
       <NavLink to='/Login'> <button className='btn btn-success bg-transparent  text-dark' >Login</button></NavLink>
       <NavLink to='/Signin'> <button className='btn btn-success bg-transparent text-dark'>Signup</button></NavLink>
      </span>
    </div>
  
</nav>
    </div>
  )
}

export default Navbar
