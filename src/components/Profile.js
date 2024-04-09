import React from 'react';
import profileImg from '../assets/profile.png';

const Profile = () => {
  return (
    <div className='flex gap-5 flex-row items-center justify-center content-center py-5 px-40'>
      <img src={profileImg} className='h-[14rem]' alt="Profile"></img>
      <div className=' '>
        <q className=' font-normal'>I love Medium's membership-- it gives me access to the stories I love by the writers I love, and it allows me to help support those writers financially.</q>
        <h3 className='my-3 font-semibold'>Kayt Molina</h3>
      </div>
    </div>
  );
}

export default Profile;
