import React from 'react';

import Img from '../assets/Rectangle 1.png';
import Img2 from '../assets/Vector.png';
import Img3 from '../assets/_Compound Path_.png';
import Img4 from '../assets/Vector 2.png';
import Img5 from '../assets/Vector 3.png';
import Img6 from '../assets/Vector 4.png';

const Home = () => {
  return (
    <>
    <div id='home'>

        <div className='relative w-[100%] h-[650px]'>
            <img src={Img} alt='img' className='w-[100%] h-[100%] object-cover'/>
        </div>

        <div className='w-[100%] h-[270px] flex'>
            <div className='w-[25%] h-[100%] flex flex-col items-center justify-center'>
                <div className='w-[90%] h-[90%] flex flex-col gap-7'>
                    <div className='w-[90px] h-[70px] flex items-center'>
                        <img src={Img3} alt='img' className='w-[30px]' />
                    </div>
                    <div className='w-[70%] h-[50%]'>
                        <p className='text-[#25201D] font-normal text-base w-[100%] h-[100%]'>
                            Education in English:
                            Cambridge International
                            Programme and qualified
                            native english speaking
                            teachers.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='bg-[#FA5E01] w-[25%] h-[100%] flex flex-col items-center justify-center'>
                <div className='w-[90%] h-[90%] flex flex-col gap-7'>
                    <div className='w-[90px] h-[70px] flex items-center'>
                        <img src={Img4} alt='img' className='w-[30px]' />
                    </div>
                    <div className='w-[70%] h-[50%]'>
                        <p className='text-[#fff] font-normal text-base w-[100%] h-[100%]'>
                            Education in English:
                            Cambridge International
                            Programme and qualified
                            native english speaking
                            teachers.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-[25%] h-[100%] flex flex-col items-center justify-center'>
                <div className='w-[90%] h-[90%] flex flex-col gap-7'>
                    <div className='w-[90px] h-[70px] flex items-center'>
                        <img src={Img5} alt='img' className='w-[30px]' />
                    </div>
                    <div className='w-[70%] h-[50%]'>
                        <p className='text-[#25201D] font-normal text-base w-[100%] h-[100%]'>
                            Education in English:
                            Cambridge International
                            Programme and qualified
                            native english speaking
                            teachers.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#FA5E01] w-[25%] h-[100%] flex flex-col items-center justify-center'>
                <div className='w-[90%] h-[90%] flex flex-col gap-7'>
                    <div className='w-[90px] h-[70px] flex items-center'>
                        <img src={Img6} alt='img' className='w-[30px]' />
                    </div>
                    <div className='w-[70%] h-[50%]'>
                        <p className='text-[#fff] font-normal text-base w-[100%] h-[100%]'>
                            Education in English:
                            Cambridge International
                            Programme and qualified
                            native english speaking
                            teachers.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='absolute top-[150px] left-[10%] w-[80%] h-[70%] flex flex-col gap-8'>
            <div className='flex flex-col w-[40%] h-[50px] gap-2'>
                <div className='bg-[#fff] w-[40px] h-0 border-2'></div>
                <p className='text-sm font-bold text-[#fff]'>A TRADITION SINCE 2002</p>
            </div>

            <div className='flex'>

                <div className='w-[60%] h-[100%] flex flex-col gap-10'>
                    <p className='text-7xl text-[#fff] font-bold'>Offering Bright Futures</p>
                    <p className='text-2xl text-[#fff] font-semibold'>iNiLabs School gradutes are styding in the world’s most prestigious universities.</p>
                    <p className='bg-[#FA5E01] w-[200px] h-[50px] flex items-center justify-center text-[#fff] hover:bg-transparent hover:border hover:border-[#FA5E01]'>Apply Now</p>
                </div>
                
                <div className='w-[40%] flex justify-center'>
                    <div className='flex gap-4'>
                        <div className='w-[60px] h-[60px] bg-[#FA5E01] rounded-full flex items-center justify-center'>
                            <img src={Img2} alt='img' className='w-[20px] h-[20px]' />
                        </div>
                        <div>
                            <p className='font-semibold text-white text-2xl'>iNiLabs School</p>
                            <p className='text-[#fff] font-bold text-4xl w-[70%]'>CAMPUS TOUR</p>
                            <p className='font-bold text-sm text-[#fff]'>Watch Video (6 Min)</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
  );
}

export default Home;