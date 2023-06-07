import React from 'react'
import './Landing.css';
import heroText from '../../assests/heroText.png'
const Landing = () => {
  return (
    <>
    <div className="hero">
      <div className="heroText">
        <img src={heroText} />
      </div>
      <input type="checkbox" className="rounded text-pink-500" />
      <input type="checkbox"/>

    </div>
   </>
  )
}

export default Landing