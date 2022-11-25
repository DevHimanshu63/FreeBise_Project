import React from 'react'
import Navbar from './Navbar'
export default function Header() {
  return (
    <>
    <div id="main">
        <Navbar/>
        <div className='name'>
          <h1><span>Want anything to</span> be easy with <b>LaslesVPN.</b></h1>
          <p className='details'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        <a href='#' className='cv-btn'>Get Started</a>
        </div>
    </div>
    
    </>

  )
}
