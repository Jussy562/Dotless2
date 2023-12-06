import React from 'react';
import {SiFacebook, SiLinkedin} from 'react-icons/si';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';

function SocialIconsMobile() {
  return (
    <div className='flex flex-row md:hidden  mt-6 md:mt-8 mb-8 md:mb-10 w-full justify-center items-center'>
        <a href='/' className='pr-4 pl-4'>
          <SiFacebook className='text-2xl text-dark hover:text-[#3b5998]' />
        </a>
        <a href='/' className='pr-4 pl-4'>
          <AiFillTwitterCircle className='text-2xl text-dark hover:text-[#00aced]' />
        </a>
        <a href='/' className='pr-4 pl-4'>
          <RiInstagramFill className='text-2xl text-dark hover:text-[#e4405f]' />
        </a>
        <a href='/' className='pr-4 pl-4'>
          <SiLinkedin className='text-2xl text-dark hover:text-[#0fabf3]' />
        </a>
    </div>
  )
}

export default SocialIconsMobile