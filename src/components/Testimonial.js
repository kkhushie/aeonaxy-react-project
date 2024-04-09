import React from 'react'
import Profile from './Profile'
import ActionBtn from './ActionBtn'

const Testimonial = () => {
    return (
        <div className=' h-screen pt-10'>
            <h1 className=' text-3xl text-center'>Why  I'm a Medium Member...</h1>
            <div className='md:px-[19rem] py-2  border-b border-black'>
                <Profile />
            </div>
            <div className=' w-fit flex content-center'>
             <div className=' flex flex-col gap-5 bg-[#BCDEFF] items-center justify-center pt-20 pb-24 border-b border-black'>
                    <h1 className=' text-7xl text-center md:px-[450px]'>Take Your mind in new directions.</h1>
                    <ActionBtn bgcolor="bg-black" txtcolor="text-white" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial