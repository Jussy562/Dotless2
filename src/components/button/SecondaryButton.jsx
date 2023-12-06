import React from 'react'

function SecondaryButton({title}) {
  return (
    <button type='submit'  className='w-full md:w-auto bg-blue-400 hover:bg-blue-300
      py-3 px-6 rounded-lg text-white text-center text-s md:text-xl font-bold transition:ease-in'>
          {title}
    </button>
  )
}

export default SecondaryButton