import React from 'react'
import map from '../images/map.svg'
export default function Network() {
  return (
    <>
       <div className='heading-plan'>
                <h1>Huge Global Network  of Fast VPN</h1>
                <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        </div> 
        <img className='map-img'  src={map} alt=""/>
    </>
  )
}
