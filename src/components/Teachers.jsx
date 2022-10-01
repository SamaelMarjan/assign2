import React from 'react';

import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';

import Data from '../data/data';

const Teachers = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <div className='w-[100%] h-[500px]'>
                <div className='w-[80%] h-[15%] m-auto flex justify-between items-center'>
                    <div className='w-[30%] h-[100%] flex flex-col gap-2 justify-center'>
                        <div className='bg-[#FA5E01] w-[100px] h-0 border-2 border-[#FA5E01]'></div>
                        <div>
                            <p className='text-[#25201D] font-bold text-4xl'>Our Teachers</p>
                        </div>
                    </div>
                    <div className='w-[10%] h-[60%] flex items-center cursor-pointer'>
                        <BsArrowLeft onClick={slideLeft} className='w-[45%] h-[90%] border border-[#E3E2E1] text-[#929292]' />
                        <BsArrowRight onClick={slideRight} className='w-[45%] h-[90%] border border-[#E3E2E1] text-[#FA5E01] hover:text-[#929292]' />
                    </div>
                </div>
                <div className=''>
                    <ul className='flex w-full overflow-x-scroll'>
                        {
                            Data.map((data) => {
                                return (
                                    <>
                                            <img src={data.image} alt='img' className='w-[300px]' />
                                            <p>{data.name}</p>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='w-[100%] h-[15%] flex justify-center'>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-3xl text-[#FA5E01]'>See all teachers</p>
                        <BsArrowRight className='w-[20px] h-[20px] text-[#FA5E01] cursor-pointer'/>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Teachers;