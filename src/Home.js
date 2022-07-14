import React from 'react'
import code from './IMAGES/image-qr-code.png'

const Home = () => {
  return (
    <div>
        <div className='main'>
            <img className='code' src={code} alt="" />
            <h2>Improve your front-end <br /> skills by building prrojects</h2>
            <p>Scan the QR code to visit Frontend <br /> mentor and take your coding skilss to <br /> another level</p>
        </div>
    </div>
  )
}

export default Home