import React from 'react'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to={"/"}>Student Management</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
  
        <Link style={{marginLeft:1030}} className='btn btn-outline-light' to="/addstudent">Add Student</Link>
       </nav>
    </div>
  )
}
