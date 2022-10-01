import React from 'react';

import Img from '../assets/Rectangle 6.png';
import Img2 from '../assets/logo1-removebg-preview.png'

const Logo = () => {
  return (
    <div className='absolute top-0 right-[10%]'>
        <div className='relative'>
            <img src={Img} alt='img' />
        </div>
        <div className='absolute top-[50%] right-[20%] text-[#fff]'>
          <img src={Img2} alt='img' />
            <p className='text-[#fff] text-2xl'>Log In</p>
        </div>
    </div>
  );
}

export default Logo;