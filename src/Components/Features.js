import React from 'react'
import Illustration2  from "../images/Illustration2.png"
import check from "../images/check.svg"
export default function Features() {
  return (
    <>
      <div className='ftures'>
        <img className='Illustration2' src={Illustration2} />
        <div className='provided-features'>
            <h1>We Provide Many Features You Can Use</h1>
            <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <div>
                <img src={check} /><span>Powerfull online protection.</span>
            </div>
            <div>
                <img src={check} /><span>Powerfull online protection.</span>
            </div>
            <div>
                <img src={check} /><span>Powerfull online protection.</span>
            </div>
            <div>
                <img src={check} /><span>Powerfull online protection.</span>
            </div>
            <div>
                <img src={check} /><span>Powerfull online protection.</span>
            </div>
            <div>
                <img src={check} /><span>Powerfull online protection.</span>
            </div>
        </div>
      </div>  
    </>
  )
}
