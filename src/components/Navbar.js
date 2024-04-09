import React from 'react'
import logo from '../assets/logo.png'
import ActionBtn from './ActionBtn'


const Navbar = () => {
  return (
       <div className=' flex flex-row justify-between p-5 bg-[#4479FF] text-white border-b border-white' alt="ls">
        
        <img src={logo} alt="logo" className=' h-10'></img>

        <div className='right flex gap-4'>
          <ul className=' flex gap-5 items-center'>
            <li>Our Story</li>
            <li className=' underline'>Membership</li>
            <li>Write</li>
            <li>Sign in</li>
          </ul>
          <ActionBtn bgcolor="bg-black" txtcolor="text-white" />        </div>
      </div>
  )
}

export default Navbar