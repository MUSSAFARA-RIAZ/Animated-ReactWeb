import React from 'react'
import { NavLink } from 'react-router-dom';




export default function Navbar() {
  return (
    <div className='container-fluid nav_bg '>
        <div className='row'>
            <div className='col-12 mx-auto '>

          
        <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand text-danger" to='/'>M-CODER</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <NavLink className='my_class' to='/'>Home</NavLink>   
      </li>
      <li className="nav-item">
       
  <NavLink className='my_class' to='/about'>About</NavLink>        
      </li>
      <li className="nav-item">
      <NavLink className='my_class' to='/contact'>Contact</NavLink>   
    
      </li>
      <li className="nav-item">
        
      <NavLink className='my_class' to='/services'>Search</NavLink>
      </li>
     
    </ul>
   
  </div>
</nav>
      
    </div>
    </div>
        </div>
  )
}
