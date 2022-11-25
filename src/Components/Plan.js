import React from 'react'
import Free from '../images/Free.svg'
import check from '../images/check.svg'
import Network from './Network'
// import freeplan from '../images/freeplans.jfif'
export default function () {
    return (
        <>
            <div className='heading-plan'>
                <h1>Choose your Plan</h1>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>

            <div className="columns">
                <div className='freeplan'>
                    <div style={{ textAlign: "center", marginTop: "100px" }}>
                        <img width="150px" src={Free} alt="" />
                        <h2>Free plan</h2>
                    </div>
                    <ul style={{ textAlign: "center", lineHeight: "40px" }}>
                        <li><img src={check} /> Unlimited Bandwitch</li>
                        <li><img src={check} /> Encrypted Connection</li>
                        <li><img src={check} /> No Traffic Logs here</li>
                        <li><img src={check} /> Works on All Devices</li>
                        {/* <li><img src={check} /> Unlimited Bandwitch</li>
                        <li><img src={check} /> Unlimited Bandwitch</li> */}

                    </ul>
                    <div style={{ textAlign: "center" }}>
                        <h2>Free</h2>
                        <button className='select-btn'>select</button>
                    </div>
                </div>
                <div className='freeplan'>
                    <div style={{ textAlign: "center", marginTop: "100px" }}>
                        <img width="150px" src={Free} alt="" />
                        <h2>Standard Plan</h2>
                    </div>
                    <ul style={{ textAlign: "center", lineHeight: "40px" }}>
                        <li><img src={check} /> Unlimited Bandwitch</li>
                        <li><img src={check} /> Encrypted Connection</li>
                        <li><img src={check} /> Yes Traffic Logs here</li>
                        <li><img src={check} /> Works on All Devices</li>
                        <li><img src={check} /> Unlimited Bandwitch</li>
                        <li><img src={check} /> Connect Anyware</li>

                    </ul>
                    <div style={{ textAlign: "center" }}>
                        <h2>$9 / mo</h2>
                        <button className='select-btn'>select</button>
                    </div>
                </div>
                <div className='freeplan'>
                    <div style={{ textAlign: "center", marginTop: "100px" }}>
                        <img width="150px" src={Free} alt="" />
                        <h2>Free plan</h2>
                    </div>
                    <ul style={{ textAlign: "center", lineHeight: "40px" }}>
                        <li><img src={check} /> Unlimited Bandwitch</li>
                        <li><img src={check} /> Encrypted Connection</li>
                        <li><img src={check} /> Yes Traffic Logs here</li>
                        <li><img src={check} /> Works on All Devices</li>
                        <li><img src={check} /> Connect Anyware</li>
                        <li><img src={check} /> Get New Features</li>

                    </ul>
                    <div style={{ textAlign: "center" }}>
                        <h2>$12 / mo</h2>
                        <button className='select-btn'>select</button>
                    </div>
                </div>
            </div>
        <Network/>
        </>
    )
}
