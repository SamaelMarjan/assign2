import React from 'react';

import {VscLocation} from 'react-icons/vsc';
import {BiPhoneCall} from 'react-icons/bi';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
        <div className='bg-[#FA5E01] w-full h-[300px] flex items-center'>
            <div className='w-[80%] h-[80%] m-auto flex'>
                <div className='w-[40%] h-full flex flex-col gap-3'>
                    <div>
                        <p className='font-normal text-[#fff] text-base w-[90%]'>
                            iNiLabs School is an independent, non-governmental
                            organisation, established to provide high-quality 
                            education to local and expatriate communities in
                            Bangladesh and United State of America.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center text-[#fff] gap-2'>
                            <VscLocation size={20} />
                            <p className='font-senibold text-base w-[50%]'>
                                Plot:25, Road:05, Block:A, Mirpur-2 Dhaka, Bangladesh
                            </p>
                        </div>
                        <div className='flex items-center text-[#fff] gap-2'>
                            <BiPhoneCall size={20} />
                            <p className='font-senibold text-base'>01236547892</p>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] h-full flex justify-center font-semibold text-[#fff]'>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <a href='a'>Apply Now</a>
                        </li>
                        <li>
                            <a href='b'>Get Result</a>
                        </li>
                        <li>
                            <a href='c'>Events</a>
                        </li>
                        <li>
                            <a href='d'>Gallery</a>
                        </li>
                        <li>
                            <a href='e'>About School</a>
                        </li>
                        <li>
                            <a href='f'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='w-[30%] h-full flex flex-col ml-[100px] gap-4 text-[#fff]'>
                    <div>
                        <p className='font-bold text-2xl'>Follow Us</p>
                    </div>
                    <div className='flex gap-5'>
                        <FaFacebookSquare size={30} />
                        <AiFillTwitterCircle size={30} />
                        <BsInstagram size={30} />
                        <BsLinkedin size={30} />
                        <BsYoutube size={30} />
                    </div>
                    <div>
                        <p className='text-lg font-semibold '>© 2022 iNiLabs School</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;