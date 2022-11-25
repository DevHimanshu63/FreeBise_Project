import React from 'react'
import logo from '../images/logo.svg'
export default function Navbar() {
  return (
    <nav className="">
    <a href='#' className='logo'>
        <img src={logo} alt=""/>    
    </a>  
    <input type='checkbox' className='menu-btn' id='menu-btn'/>
    <label className='menu-icon' for='menu-btn'>
    <span className='nav-icon'></span>  
    </label>  
    <ul className='menu'>
    <li><a href="">about</a></li>
    <li><a href="">Features</a></li>
    <li><a href="">Pricing</a></li>
    <li><a href="">Testinomials</a></li>
    <li><a href="">Help</a></li>
    </ul>
    <div className='login-system'>
    <button ><b>Sign In</b></button>
    <button style={{width:"100px",background:"red",height:"40px", borderRadius:"10px"}}>LogIn</button>
    </div>
    </nav>
  )
}
