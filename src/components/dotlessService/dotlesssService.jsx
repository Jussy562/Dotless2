import React from 'react'
import Button from '../button/button'

function DotlesssService({item}) {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between  w-full gap-2 shadow px-4 py-8'>
        <div className='w-full md:w-1/2 flex flex-col  '>
            <div className='flex flex-col w-full '>
                <h4 className='text-gray-900 text-xl md:text-2xl font-bold mb-4'>{item.name}</h4>
                <p className='text-sm md:text-lg text-gray-900'>{item.desc}</p>
            </div>
            <div className='w-auto mt-8'>
                <Button title="Book Now"  />
            </div>
        </div>
        <div className='w-full md:w-1/2 flex md:justify-end'>
            <img src={item.image} alt={item.name} className="h-80 w-auto" />
        </div>
    </div>
  )
}

export default DotlesssService