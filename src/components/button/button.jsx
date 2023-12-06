import React from 'react'
import { Link } from 'react-router-dom';

function Button({title, path}) {
    
  return (
    <Link to={path}>
      <a  className='w-full md:w-auto bg-blue-400 hover:bg-blue-300
      py-3 px-6 rounded-lg text-white text-center text-s md:text-xl font-bold transition:ease-in'>
          {title}
      </a>
    </Link>
  )
}

export default Button;