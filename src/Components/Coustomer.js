import React from 'react'
import userimg from '../images/Ellipse.png'
import star from '../images/Vector.png'
export default function () {
  return (
    <>
        <div className='heading-plan'>
                <h1>Trusted by Thousands of Happy Customer</h1>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        </div>
        <div className='testimonials'>
            <div className='user-rating'>

                        <div className='userimg'>
                            <img src={userimg} alt=""/>
                            <div style={{lineHeight:"5px",marginLeft:"15px",marginTop:"5px"}}>
                                <b>Vivez Robert</b>
                                <p>Warsaw</p>
                            </div>
                            <div style={{display:"flex",marginLeft:"150px"}}>
                                <p>4.5</p>
                                <img width="13px" height="13px" style={{marginTop:"18px"}} src={star} alt=""/>
                            </div>
                           
                        </div>
                        <div style={{lineHeight:"35px",padding:"10px"}}>
                                <p>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. 
                                </p>
                        </div>
            </div>
            
            <div className='user-rating'>

                        <div className='userimg'>
                            <img src={userimg} alt=""/>
                            <div style={{lineHeight:"5px",marginLeft:"15px",marginTop:"5px"}}>
                                <b>Vivez Robert</b>
                                <p>Warsaw,</p>
                            </div>
                            <div style={{display:"flex",marginLeft:"150px"}}>
                                <p>4.5</p>
                                <img width="13px" height="13px" style={{marginTop:"18px"}} src={star} alt=""/>
                            </div>
                           
                        </div>
                        <div style={{lineHeight:"35px",padding:"10px"}}>
                                <p>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. 
                                </p>
                        </div>
            </div>
            <div className='user-rating'>

                        <div className='userimg'>
                            <img src={userimg} alt=""/>
                            <div style={{lineHeight:"5px",marginLeft:"15px",marginTop:"5px"}}>
                                <b>Vivez Robert</b>
                                <p>Warsaw</p>
                            </div>
                            <div style={{display:"flex",marginLeft:"150px"}}>
                                <p>4.5</p>
                                <img width="13px" height="13px" style={{marginTop:"18px"}} src={star} alt=""/>
                            </div>
                           
                        </div>
                        <div style={{lineHeight:"35px",padding:"10px"}}>
                                <p>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.
                                </p>
                        </div>
            </div>
            
        </div>
    </>
  )
}
