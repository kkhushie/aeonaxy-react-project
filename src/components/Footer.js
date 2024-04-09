import React from 'react'
import logo from '../assets/Medium-Logo.png'
const Footer = () => {
  return (
    <div className=' flex justify-around items-center overflow-hidden'>
        <img src={logo} className=' h-20'></img>
        <p>Every idea needs a Medium</p>
        <ul className=' flex flex-row gap-5'>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Terms</a></li>
            <li><a href='#'>Privacy</a></li>
            <li><a href='#'>Help</a></li>
        </ul>
    </div>
  )
}

export default Footer