import React from 'react';

import Img from '../assets/Rectangle 6.png';
import Img2 from '../assets/log.png';

const Logo = () => {
  return (
    <div className='absolute top-0 right-[10%]'>
        <div className='relative'>
            <img src={Img} alt='img' />
        </div>
        <div className='absolute top-[50%] right-[20%] text-[#fff]'>
            
            <p className='text-[#fff] text-2xl'>Log In</p>
        </div>
        <img src={Img2} alt='img' className='absolute top-[20px] right-8 w-[50px] h-[50px]' />
    </div>
  );
}

export default Logo;