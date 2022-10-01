import React from 'react'

import Img from '../assets/Rectangle 11.png';
import Img2 from '../assets/Rectangle 16.png';

const About = () => {
  return (
    <>
    <div id='about'>
        <div className='w-[100%] h-[500px] flex items-center justify-center relative'>
            <div className='w-[80%] h-[80%] flex'>
                <div className='w-[50%] h-[50%] flex flex-col gap-4'>
                    <div className='bg-[#FA5E01] border-2 border-[#FA5E01] w-[150px] h-0'></div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[#25201D] font-bold text-5xl'>About School</p>
                        <p className='font-normal text-lg'>
                            iNiLabs School is an independent, non-governmental
                            organisation, established to provide high-quality 
                            education to local and expatriate communities in 
                            Bangladesh and United State of America.
                        </p>
                        <p className='w-[150px] h-[40px] flex items-center justify-center border border-[#FA5E01] text-[#FA5E01] hover:bg-[#FA5E01] hover:text-[#fff]'>Lern More</p>
                    </div>
                </div>
                <div className='w-[50%] h-[100%]'>
                    <img src={Img} alt='img' />
                </div>
            </div>

            <div className='bg-[#FFF9F5] w-[550px] h-[150px] absolute top-[50%] right-[15%] flex items-center justify-center gap-[60px]'>
                <div className='w-[20%] h-[60%] flex flex-col items-center justify-center'>
                    <p className='font-semibold text-4xl text-[#25201D]'>34</p>
                    <p className='font-semibold text-lg text-[#25201D]'>Teachers</p>
                </div>
                <div className='w-[20%] h-[60%] flex flex-col items-center justify-center'>
                    <p className='font-semibold text-4xl text-[#25201D]'>2500+</p>
                    <p className='font-semibold text-lg text-[#25201D]'>Students</p>
                </div>
                <div className='w-[20%] h-[60%] flex flex-col items-center justify-center'>
                    <p className='font-semibold text-4xl text-[#25201D]'>1500+</p>
                    <p className='font-semibold text-lg text-[#25201D]'>Graduates</p>
                </div>
            </div>
        </div>

        <div className='w-[100%] h-[300px] flex items-center justify-center relative'>
            <div className='bg-[#FA5E01] w-[60%] h-[80%] flex justify-center items-center'>
                <div className='w-[90%] h-[80%] flex flex-col gap-5'>
                    <p className='font-bold text-2xl text-[#fff]'>Apply for Fall 2022</p>
                    <p className='font-normal text-lg text-[#fff]'>Now open for Fall 2022 applications. The closing date for this year is Friday 19 August, 2022.</p>
                    <p className='bg-[#fff] w-[150px] h-[39px] text-[#FA5E01] text-lg font-semibold  flex items-center justify-center'>Apply Now</p>
                </div>
            </div>
        </div>

        <div className='w-[100%] h-[550px] relative'>
            <div className='w-[80%] h-[100%] m-auto flex justify-end items-center'>
                <div className='absolute left-[100px] top-0'>
                    <img src={Img2} alt='img' className='w-[400px]'/>
                </div>
                <div className='w-[50%] h-[400px]'>
                    <div className='bg-[#FA5E01] border-2 border-[#FA5E01] w-[150px] h-0'></div>
                    <div className='mt-[5px]'>
                        <p className='font-bold text-2xl text-[#25201D]'>Wise Words From Principle</p>
                    </div>
                    <div className='mt-[30px] mb-[30px]'>
                        <p className='text-[#25201D] font-normal text-base italic'>
                            “iNiLabs School is a welcoming Catholic community renowned 
                            for its integrity and creative learning approaches that bring out 
                            the best in boys. Our rich Salesian charism underpinned by the 
                            educational principles of founder, St John Bosco, provides the 
                            foundation of a future focused pedagogical vision.”
                        </p>
                    </div>
                    <div>
                        <div>
                            <p className='text-[#25201D] font-semibold text-lg'>Jonathon Doe</p>
                            <p className='text-[#FA5E01] font-semibold text-sm'>Principle, iNiLabs School</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About