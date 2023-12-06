import React from 'react';
import {SiFacebook, SiLinkedin} from 'react-icons/si';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';

function SocialIcons({handle}) {
  return (
    <ul className='handle flex flex-row justify-center w-full gap-8'>
        
      <li className='handle-li'>
          <a href='/' className='handle-a p-2'>
              <SiFacebook className='handle-icon' />
              <span className='handle-name'>Facebook</span>
          </a>
      </li>

      <li className='handle-li'>
          <a href='/' className='handle-a p-2'>
              <AiFillTwitterCircle className='handle-icon' />
              <span className='handle-name'>Twitter</span>
          </a>
      </li>

      <li className='handle-li'>
          <a href='/' className='handle-a p-2'>
              <RiInstagramFill className='handle-icon' />
              <span className='handle-name'>Instagram</span>
          </a>
      </li>

      <li className='handle-li'>
          <a href='/' className='handle-a p-2'>
              <SiLinkedin className='handle-icon' />
              <span className='handle-name'>Linkedin</span>
          </a>
      </li>
        
    </ul>
  )
}

export default SocialIcons