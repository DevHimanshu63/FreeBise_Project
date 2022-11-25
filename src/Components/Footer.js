import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/Facebook.svg'
import insta from '../images/insta.svg'
import twitter from '../images/Twitter.svg'
export default function Footer() {
  return (
    <>
        <div className='main-footer'>
            <div style={{marginTop:"30px"}}> 
                <img src={logo} alt=""/>
                <div style={{width:"250px"}}>
                <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                    <img src={facebook} alt=""/>
                    <img src={insta} alt=""/>
                    <img src={twitter} alt=""/>
                </div>
                <p>©2020LaslesVPN</p>
            </div>
            <div>
                <ul className='listing'>
                    <li><b>Product</b></li>
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Location</li>
                    <li>Server</li>
                    <li>Contries</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <ul className='listing'>
                    <li><b>Engage</b></li>
                    <li>LaslesVPN ? </li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div>
                <ul className='listing'>
                    <li><b>Earn Money</b></li>
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                    
                </ul>
            </div>
        </div>
    </>
  )
}
