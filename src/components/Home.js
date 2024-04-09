import React from 'react';
import Navbar from './Navbar';
import ActionBtn from './ActionBtn';
import Element from './Element';
import '../styles.css'

const Home = () => {
  return (
    <div className='h-screen bg-[#4479FF] '>
      <Navbar />

      <div className='h-[23rem] text-white border-b border-white flex gap-5 flex-col items-center justify-center'>
        <h1 className=' font-["gt-super"] text-7xl text-center'>Fuel great thinking.</h1>
        {/* Removed unnecessary brackets around 'font-[sohne]' */}
        <p className='md:px-10 text-center sm:px-4'>Become a Medium member to enjoy unlimited access and directly support the writers you read most.</p>
        {/* Updated padding values */}
        <ActionBtn bgcolor="bg-white" txtcolor="text-black" /> {/* Change the colors here */}
      </div>
      <div className='flex flex-row items-center justify-center'>
        <Element />
        <Element />
      </div>
    </div>
  );
};

export default Home;
